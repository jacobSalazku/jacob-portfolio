import type { TypedObject } from 'sanity';
import type { FeatureIconName } from './feature-icons';

export type LocalizedValue<T> = Record<string, T | undefined>;
export type LocalizedString = LocalizedValue<string>;
export type LocalizedBlocks = LocalizedValue<TypedObject[]>;

export type SlugView = { current: string };

export type TagView = { _id: string; title?: string };

export type FeatureView = {
  icon?: FeatureIconName;
  // Features with the same category are shown together next to one icon
  category?: { id: string; title: LocalizedString; icon?: FeatureIconName };
  title?: LocalizedString;
  content?: LocalizedBlocks;
  points?: LocalizedString[];
  url?: string;
};

export type StepView = { title: LocalizedString; text: LocalizedString };
export type DecisionView = { title: LocalizedString; text: LocalizedString };
export type GalleryImageView = {
  caption: LocalizedString;
  url?: string;
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
  tags?: TagView[];
  timespan?: LocalizedString;
  lede?: LocalizedString;
  role?: LocalizedString;
  duration?: LocalizedString;
  team?: LocalizedString;
  focus?: LocalizedString;
  initials?: string;
  url?: string;
  sections: SectionView[];
  description?: LocalizedBlocks;
  text?: LocalizedBlocks;
  tasks?: LocalizedBlocks;
  project?: { title?: string; slug?: SlugView };
};
