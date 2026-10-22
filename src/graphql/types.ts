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
  title?: LocalizedString;
  content?: LocalizedBlocks;
};

export type ProjectView = {
  _id: string;
  title?: string;
  slug?: SlugView;
  publishedAt?: string;
  mainImage?: ImageView;
  tags?: TagView[];
  text?: LocalizedBlocks;
  features?: FeatureView[];
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
