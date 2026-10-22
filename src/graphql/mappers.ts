import type {
  BlockContent,
  Experience,
  FeatureBlock,
  LocalizedTitle,
  Project,
  SanityImageCrop,
  SanityImageHotspot,
  Slug,
  TechStack,
} from '@root/sanity.types';

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

// GraphQL does not return Sanity system metadata (_createdAt, _updatedAt, _rev).
// Mappers build a fully typed object without those fields; the single
// assertion to the full type is safe because no component reads them.
type SystemFields = '_createdAt' | '_updatedAt' | '_rev';
type Shallow<T> = Omit<T, SystemFields>;
type Image = NonNullable<Project['mainImage']>;
type Localized = Project['text'];

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
// The typegen type for localized block content is Record<string, BlockContent>,
// hence the assertion on the array.
const toBlocks = (value: unknown) => {
  if (Array.isArray(value)) return value as unknown as BlockContent;
  if (value != null) {
    console.warn('Ignoring malformed Portable Text field from GraphQL');
  }
  return undefined;
};

// { nlRaw, enRaw, frRaw } -> { nl, en, fr }, the shape components read via [locale]
export const mapRawLocalized = (raw: RawLocalized | undefined): Localized => {
  if (!raw) return undefined;
  const entries = [
    ['nl', toBlocks(raw.nlRaw)],
    ['en', toBlocks(raw.enRaw)],
    ['fr', toBlocks(raw.frRaw)],
  ] as const;
  return Object.fromEntries(
    entries.filter(([, blocks]) => blocks !== undefined),
  ) as Record<string, BlockContent>;
};

const mapPlainLocalized = (
  value: PlainLocalized | undefined,
): LocalizedTitle | undefined =>
  value
    ? {
        _type: 'localizedTitle',
        nl: value.nl ?? undefined,
        en: value.en ?? undefined,
        fr: value.fr ?? undefined,
      }
    : undefined;

// asset._id -> asset._ref so urlFor() keeps working unchanged
export const mapImage = (
  image: GqlImage | undefined,
  fallbackAlt?: string | null,
): Image | undefined =>
  image?.asset?._id
    ? {
        _type: 'image',
        alt: image.asset.altText ?? fallbackAlt ?? undefined,
        asset: { _type: 'reference', _ref: image.asset._id },
        hotspot: image.hotspot
          ? ({
              _type: 'sanity.imageHotspot',
              ...optionalNumbers(image.hotspot),
            } satisfies SanityImageHotspot)
          : undefined,
        crop: image.crop
          ? ({
              _type: 'sanity.imageCrop',
              ...optionalNumbers(image.crop),
            } satisfies SanityImageCrop)
          : undefined,
      }
    : undefined;

const mapTags = (tags: GqlProject['tags']): Shallow<TechStack>[] | undefined =>
  tags?.flatMap((tag) =>
    tag?._id
      ? [
          {
            _id: tag._id,
            _type: 'techStack' as const,
            title: tag.title ?? undefined,
          },
        ]
      : [],
  );

const mapSlug = (slug: GqlSlug | undefined): Slug | undefined =>
  slug?.current ? { _type: 'slug', current: slug.current } : undefined;

const mapFeatures = (
  features: GqlProject['features'],
): FeatureBlock[] | undefined =>
  features?.flatMap((feature) =>
    feature
      ? [
          {
            _type: 'featureBlock' as const,
            title: mapPlainLocalized(feature.title) ?? {
              _type: 'localizedTitle' as const,
            },
            content: mapRawLocalized(feature.content) ?? {},
          },
        ]
      : [],
  );

export const mapProject = (item: GqlProject): Project => {
  const project: Omit<Shallow<Project>, 'tags'> & {
    tags?: Shallow<TechStack>[];
  } = {
    _id: item._id ?? '',
    _type: 'project',
    title: item.title ?? undefined,
    slug: mapSlug(item.slug),
    publishedAt: item.publishedAt ?? undefined,
    mainImage: mapImage(item.mainImage, item.title),
    tags: mapTags(item.tags),
    text: mapRawLocalized(item.text),
    features: mapFeatures(item.features),
  };
  return project as Project;
};

export const mapExperience = (
  item: GqlExperience,
): Experience & { project?: Project } => {
  const experience: Omit<Shallow<Experience>, 'tags' | 'project'> & {
    tags?: Shallow<TechStack>[];
    project?: { title?: string; slug?: Slug };
  } = {
    _id: item._id ?? '',
    _type: 'experience',
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
  };
  return experience as Experience & { project?: Project };
};
