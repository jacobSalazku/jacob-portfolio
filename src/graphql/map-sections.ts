import { FEATURE_ICONS } from './feature-icons';
import {
  mapHttpsUrl,
  mapPlainLocalized,
  mapRawLocalized,
  type GqlSlug,
  type PlainLocalized,
  type RawLocalized,
} from './map-helpers';
import type {
  FeatureView,
  GalleryImageView,
  LocalizedString,
  SectionType,
  SectionView,
} from './types';

export type GqlFeature = {
  icon?: string | null;
  category?: {
    _id?: string | null;
    title?: PlainLocalized;
    icon?: string | null;
  } | null;
  title?: PlainLocalized;
  content?: RawLocalized;
  points?: (PlainLocalized | null)[] | null;
  url?: string | null;
};

type GqlTitleAndText = { title?: PlainLocalized; text?: PlainLocalized } | null;

export type GqlSection = {
  type?: string | null;
  anchor?: GqlSlug;
  title?: PlainLocalized;
  body?: RawLocalized;
  points?: (PlainLocalized | null)[] | null;
  steps?: GqlTitleAndText[] | null;
  features?: (GqlFeature | null)[] | null;
  decisions?: GqlTitleAndText[] | null;
  images?: ({ caption?: PlainLocalized; url?: string | null } | null)[] | null;
};

const SECTION_TYPES: readonly SectionType[] = [
  'text',
  'steps',
  'features',
  'decisions',
  'gallery',
];
const ANCHOR_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const isEmpty = (value: object | undefined) =>
  !value || Object.keys(value).length === 0;

const mapLocalizedList = (list: (PlainLocalized | null)[] | null | undefined) =>
  (list ?? []).flatMap((item) => {
    const mapped = mapPlainLocalized(item);
    return mapped && !isEmpty(mapped) ? [mapped] : [];
  });

export const mapFeature = (feature: GqlFeature): FeatureView => {
  const title = mapPlainLocalized(feature.title);
  const points = mapLocalizedList(feature.points);
  return {
    icon: FEATURE_ICONS.find((icon) => icon === feature.icon),
    category: feature.category?._id
      ? {
          id: feature.category._id,
          title: mapPlainLocalized(feature.category.title) ?? {},
          icon: FEATURE_ICONS.find((icon) => icon === feature.category?.icon),
        }
      : undefined,
    title,
    content: mapRawLocalized(feature.content),
    points: points.length > 0 ? points : undefined,
    url: feature.url || undefined,
  };
};

const mapTitleAndText = (items: GqlTitleAndText[] | null | undefined) =>
  (items ?? []).flatMap((item) => {
    const title = mapPlainLocalized(item?.title);
    const text = mapPlainLocalized(item?.text);
    return title && !isEmpty(title) ? [{ title, text: text ?? {} }] : [];
  });

const mapGalleryImages = (images: GqlSection['images']): GalleryImageView[] =>
  (images ?? []).flatMap((item) => {
    const caption = mapPlainLocalized(item?.caption);
    return caption && !isEmpty(caption)
      ? [{ caption, url: item?.url || undefined }]
      : [];
  });

// Maps only the fields that belong to the section type. A section without
// content is dropped, so the page never renders an empty heading.
const mapSectionContent = (section: GqlSection, type: SectionType) => {
  switch (type) {
    case 'text': {
      const body = mapRawLocalized(section.body);
      const points = mapLocalizedList(section.points);
      return isEmpty(body) && points.length === 0
        ? undefined
        : ({ type, body, points } as const);
    }
    case 'steps': {
      const steps = mapTitleAndText(section.steps);
      return steps.length > 0 ? ({ type, steps } as const) : undefined;
    }
    case 'features': {
      const features = (section.features ?? []).flatMap((feature) =>
        feature ? [mapFeature(feature)] : [],
      );
      return features.length > 0 ? ({ type, features } as const) : undefined;
    }
    case 'decisions': {
      const decisions = mapTitleAndText(section.decisions);
      return decisions.length > 0 ? ({ type, decisions } as const) : undefined;
    }
    case 'gallery': {
      const images = mapGalleryImages(section.images);
      return images.length > 0 ? ({ type, images } as const) : undefined;
    }
  }
};

// Valid, unique, URL-safe anchors: invalid or duplicate ones get a stable
// fallback (section-2, anchor-2) so links and the table of contents never clash.
const toUniqueAnchor = (
  candidate: string | null | undefined,
  position: number,
  used: Set<string>,
) => {
  const base =
    candidate && ANCHOR_PATTERN.test(candidate)
      ? candidate
      : `section-${position}`;
  let anchor = base;
  for (let suffix = 2; used.has(anchor); suffix += 1) {
    anchor = `${base}-${suffix}`;
  }
  used.add(anchor);
  return anchor;
};

export const mapSections = (
  sections: (GqlSection | null)[] | null | undefined,
): SectionView[] => {
  const usedAnchors = new Set<string>();
  return (sections ?? []).flatMap((section, index) => {
    const type = SECTION_TYPES.find((value) => value === section?.type);
    const title = mapPlainLocalized(section?.title);
    if (!section || !type || !title || isEmpty(title)) return [];

    const content = mapSectionContent(section, type);
    if (!content) return [];

    return [
      {
        anchor: toUniqueAnchor(section.anchor?.current, index + 1, usedAnchors),
        title,
        ...content,
      },
    ];
  });
};
