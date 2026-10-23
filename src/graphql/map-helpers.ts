import type { TypedObject } from 'sanity';
import type { LocalizedBlocks, LocalizedString, SlugView } from './types';

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

export type GqlSlug = { current?: string | null } | null;

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
