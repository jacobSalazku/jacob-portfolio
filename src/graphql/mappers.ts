import type { TypedObject } from 'sanity';
import type {
  ExperienceView,
  FeatureView,
  ImageView,
  LocalizedBlocks,
  LocalizedString,
  ProjectView,
  SlugView,
  TagView,
} from './types';

type RawLocalized = {
  nlRaw?: unknown;
  enRaw?: unknown;
  frRaw?: unknown;
} | null;

type PlainLocalized = {
  nl?: string | null;
  en?: string | null;
  fr?: string | null;
} | null;

type GqlImage = {
  asset?: { _id?: string | null; altText?: string | null } | null;
  hotspot?: {
    x?: number | null;
    y?: number | null;
    width?: number | null;
    height?: number | null;
  } | null;
  crop?: {
    top?: number | null;
    bottom?: number | null;
    left?: number | null;
    right?: number | null;
  } | null;
} | null;

type GqlTag = { _id?: string | null; title?: string | null };
type GqlSlug = { current?: string | null } | null;

type GqlProject = {
  _id?: string | null;
  title?: string | null;
  slug?: GqlSlug;
  publishedAt?: string | null;
  mainImage?: GqlImage;
  tags?: (GqlTag | null)[] | null;
  text?: RawLocalized;
  features?:
    | ({ title?: PlainLocalized; content?: RawLocalized } | null)[]
    | null;
};

type GqlExperience = Omit<GqlProject, 'text' | 'features'> & {
  timespan?: PlainLocalized;
  description?: RawLocalized;
  text?: RawLocalized;
  tasks?: RawLocalized;
  project?: { title?: string | null; slug?: GqlSlug } | null;
};

const optionalNumbers = <T extends Record<string, number | null | undefined>>(
  value: T,
) => {
  const entries = Object.entries(value).flatMap(([key, v]) =>
    typeof v === 'number' ? [[key, v] as const] : [],
  );
  return Object.fromEntries(entries) as { [K in keyof T]?: number };
};

// Portable Text arrives as JSON (unknown). Only keep real arrays so a
// malformed field becomes "no content" instead of a render crash.
const toBlocks = (value: unknown) => {
  if (Array.isArray(value)) return value as TypedObject[];
  if (value != null) {
    console.warn('Ignoring malformed Portable Text field from GraphQL');
  }
  return undefined;
};

// { nlRaw, enRaw, frRaw } -> { nl, en, fr }, the shape components read via [locale]
export const mapRawLocalized = (
  raw: RawLocalized | undefined,
): LocalizedBlocks | undefined => {
  if (!raw) return undefined;
  const entries = [
    ['nl', toBlocks(raw.nlRaw)],
    ['en', toBlocks(raw.enRaw)],
    ['fr', toBlocks(raw.frRaw)],
  ] as const;
  return Object.fromEntries(
    entries.filter(([, blocks]) => blocks !== undefined),
  );
};

const mapPlainLocalized = (
  value: PlainLocalized | undefined,
): LocalizedString | undefined => {
  if (!value) return undefined;
  const entries = [
    ['nl', value.nl],
    ['en', value.en],
    ['fr', value.fr],
  ] as const;
  return Object.fromEntries(
    entries.flatMap(([language, text]) =>
      typeof text === 'string' ? [[language, text] as const] : [],
    ),
  );
};

// asset._id -> asset._ref so urlFor() keeps working unchanged
export const mapImage = (
  image: GqlImage | undefined,
  fallbackAlt?: string | null,
): ImageView | undefined =>
  image?.asset?._id
    ? {
        alt: image.asset.altText ?? fallbackAlt ?? undefined,
        asset: { _type: 'reference', _ref: image.asset._id },
        hotspot: image.hotspot
          ? { _type: 'sanity.imageHotspot', ...optionalNumbers(image.hotspot) }
          : undefined,
        crop: image.crop
          ? { _type: 'sanity.imageCrop', ...optionalNumbers(image.crop) }
          : undefined,
      }
    : undefined;

const mapTags = (tags: GqlProject['tags']): TagView[] | undefined =>
  tags?.flatMap((tag) =>
    tag?._id ? [{ _id: tag._id, title: tag.title ?? undefined }] : [],
  );

const mapSlug = (slug: GqlSlug | undefined): SlugView | undefined =>
  slug?.current ? { current: slug.current } : undefined;

const mapFeatures = (
  features: GqlProject['features'],
): FeatureView[] | undefined =>
  features?.flatMap((feature) =>
    feature
      ? [
          {
            title: mapPlainLocalized(feature.title),
            content: mapRawLocalized(feature.content),
          },
        ]
      : [],
  );

export const mapProject = (item: GqlProject): ProjectView => ({
  _id: item._id ?? '',
  title: item.title ?? undefined,
  slug: mapSlug(item.slug),
  publishedAt: item.publishedAt ?? undefined,
  mainImage: mapImage(item.mainImage, item.title),
  tags: mapTags(item.tags),
  text: mapRawLocalized(item.text),
  features: mapFeatures(item.features),
});

export const mapExperience = (item: GqlExperience): ExperienceView => ({
  _id: item._id ?? '',
  title: item.title ?? undefined,
  slug: mapSlug(item.slug),
  publishedAt: item.publishedAt ?? undefined,
  mainImage: mapImage(item.mainImage, item.title),
  tags: mapTags(item.tags),
  timespan: mapPlainLocalized(item.timespan),
  description: mapRawLocalized(item.description),
  text: mapRawLocalized(item.text),
  tasks: mapRawLocalized(item.tasks),
  project: item.project
    ? {
        title: item.project.title ?? undefined,
        slug: mapSlug(item.project.slug),
      }
    : undefined,
});
