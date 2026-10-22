import type { SanityImageCrop, SanityImageHotspot } from '@root/sanity.types';
import type { TypedObject } from 'sanity';

// View types: the shapes components read. The mappers in ./mappers.ts build
// them from GraphQL results. They are independent of the generated Sanity
// document types, which describe stored documents (references, _createdAt, ...).

// One value per language, read with `field[locale]`
export type LocalizedValue<T> = Record<string, T | undefined>;
export type LocalizedString = LocalizedValue<string>;
export type LocalizedBlocks = LocalizedValue<TypedObject[]>;

export type SlugView = { current: string };

export type ImageView = {
  alt?: string;
  asset: { _type: 'reference'; _ref: string };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
};

export type TagView = { _id: string; title?: string };

export type FeatureView = {
  label?: 'feature' | 'core' | 'tool';
  title?: LocalizedString;
  content?: LocalizedBlocks;
  points?: LocalizedString[];
  url?: string;
  image?: ImageView;
};

export type StepView = { title: LocalizedString; text: LocalizedString };
export type DecisionView = { title: LocalizedString; text: LocalizedString };
export type GalleryImageView = {
  caption: LocalizedString;
  url?: string;
  image: ImageView;
};

type SectionBase = {
  // Unique within the project, safe to use as an element id and URL fragment
  anchor: string;
  title: LocalizedString;
};

// One member per section type, so a section only carries the fields of its type
export type SectionView = SectionBase &
  (
    | { type: 'text'; body?: LocalizedBlocks; points: LocalizedString[] }
    | { type: 'steps'; steps: StepView[] }
    | { type: 'features'; features: FeatureView[] }
    | { type: 'decisions'; decisions: DecisionView[] }
    | { type: 'gallery'; images: GalleryImageView[] }
  );

export type SectionType = SectionView['type'];

export type ProjectLanguage = 'nl' | 'en' | 'fr';

export type ProjectView = {
  _id: string;
  title?: string;
  slug?: SlugView;
  publishedAt?: string;
  mainImage?: ImageView;
  tags?: TagView[];
  text?: LocalizedBlocks;
  features?: FeatureView[];
  // Case study header
  lede?: LocalizedString;
  role?: LocalizedString;
  timeline?: LocalizedString;
  projectType?: LocalizedString;
  languages: ProjectLanguage[];
  liveUrl?: string;
  sourceUrl?: string;
  url?: string;
  sections: SectionView[];
};

export type ExperienceView = {
  _id: string;
  title?: string;
  slug?: SlugView;
  publishedAt?: string;
  mainImage?: ImageView;
  tags?: TagView[];
  timespan?: LocalizedString;
  description?: LocalizedBlocks;
  text?: LocalizedBlocks;
  tasks?: LocalizedBlocks;
  project?: { title?: string; slug?: SlugView };
};
