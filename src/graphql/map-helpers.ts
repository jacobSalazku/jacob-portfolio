import type { TypedObject } from 'sanity';
import type {
  ImageView,
  LocalizedBlocks,
  LocalizedString,
  SlugView,
} from './types';

export type RawLocalized = {
  nlRaw?: unknown;
  enRaw?: unknown;
  frRaw?: unknown;
} | null;

export type PlainLocalized = {
  nl?: string | null;
  en?: string | null;
  fr?: string | null;
} | null;

export type GqlImage = {
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

export type GqlSlug = { current?: string | null } | null;

const isNumber = (value: unknown): value is number => typeof value === 'number';

// Hotspot and crop are only usable when every value is present; a partial
// object would make urlFor() compute with undefined values.
const mapHotspot = (
  hotspot: NonNullable<GqlImage>['hotspot'],
): ImageView['hotspot'] =>
  hotspot &&
  isNumber(hotspot.x) &&
  isNumber(hotspot.y) &&
  isNumber(hotspot.width) &&
  isNumber(hotspot.height)
    ? {
        _type: 'sanity.imageHotspot',
        x: hotspot.x,
        y: hotspot.y,
        width: hotspot.width,
        height: hotspot.height,
      }
    : undefined;

const mapCrop = (crop: NonNullable<GqlImage>['crop']): ImageView['crop'] =>
  crop &&
  isNumber(crop.top) &&
  isNumber(crop.bottom) &&
  isNumber(crop.left) &&
  isNumber(crop.right)
    ? {
        _type: 'sanity.imageCrop',
        top: crop.top,
        bottom: crop.bottom,
        left: crop.left,
        right: crop.right,
      }
    : undefined;

// Portable Text arrives as JSON (unknown). Only keep real arrays so a
// malformed field becomes "no content" instead of a render crash.
const toBlocks = (value: unknown) => {
  // An emptied field comes back as [], which counts as no content
  if (Array.isArray(value)) {
    return value.length > 0 ? (value as TypedObject[]) : undefined;
  }
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

export const mapPlainLocalized = (
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
        alt: image.asset.altText || fallbackAlt || undefined,
        asset: { _type: 'reference', _ref: image.asset._id },
        hotspot: mapHotspot(image.hotspot),
        crop: mapCrop(image.crop),
      }
    : undefined;

export const mapSlug = (slug: GqlSlug | undefined): SlugView | undefined =>
  slug?.current ? { current: slug.current } : undefined;

// Only https links may end up in an href
export const mapHttpsUrl = (value: string | null | undefined) => {
  if (!value) return undefined;
  try {
    return new URL(value).protocol === 'https:' ? value : undefined;
  } catch {
    return undefined;
  }
};
