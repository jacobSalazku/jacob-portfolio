import {
  mapHttpsUrl,
  mapPlainLocalized,
  mapRawLocalized,
  mapSlug,
  type GqlSlug,
  type PlainLocalized,
  type RawLocalized,
} from './map-helpers';
import {
  mapFeature,
  mapSections,
  type GqlFeature,
  type GqlSection,
} from './map-sections';
import type {
  ExperienceView,
  FeatureView,
  ProjectLanguage,
  ProjectView,
  TagView,
} from './types';

type GqlTag = { _id?: string | null; title?: string | null };

type GqlProject = {
  _id?: string | null;
  title?: string | null;
  slug?: GqlSlug;
  publishedAt?: string | null;
  tags?: (GqlTag | null)[] | null;
  text?: RawLocalized;
  features?: (GqlFeature | null)[] | null;
  lede?: PlainLocalized;
  role?: PlainLocalized;
  timeline?: PlainLocalized;
  projectType?: PlainLocalized;
  languages?: (string | null)[] | null;
  liveUrl?: string | null;
  sourceUrl?: string | null;
  url?: string | null;
  sections?: (GqlSection | null)[] | null;
};

type GqlExperience = Pick<
  GqlProject,
  '_id' | 'title' | 'slug' | 'publishedAt' | 'tags'
> & {
  timespan?: PlainLocalized;
  lede?: PlainLocalized;
  role?: PlainLocalized;
  duration?: PlainLocalized;
  team?: PlainLocalized;
  focus?: PlainLocalized;
  initials?: string | null;
  url?: string | null;
  sections?: (GqlSection | null)[] | null;
  description?: RawLocalized;
  text?: RawLocalized;
  tasks?: RawLocalized;
  project?: { title?: string | null; slug?: GqlSlug } | null;
};

const PROJECT_LANGUAGES: readonly ProjectLanguage[] = ['nl', 'en', 'fr'];

const mapTags = (tags: GqlProject['tags']): TagView[] | undefined =>
  tags?.flatMap((tag) =>
    tag?._id ? [{ _id: tag._id, title: tag.title ?? undefined }] : [],
  );

const mapFeatures = (
  features: GqlProject['features'],
): FeatureView[] | undefined =>
  features?.flatMap((feature) => (feature ? [mapFeature(feature)] : []));

export const mapProject = (item: GqlProject): ProjectView => ({
  _id: item._id ?? '',
  title: item.title ?? undefined,
  slug: mapSlug(item.slug),
  publishedAt: item.publishedAt ?? undefined,
  tags: mapTags(item.tags),
  text: mapRawLocalized(item.text),
  features: mapFeatures(item.features),
  lede: mapPlainLocalized(item.lede),
  role: mapPlainLocalized(item.role),
  timeline: mapPlainLocalized(item.timeline),
  projectType: mapPlainLocalized(item.projectType),
  languages: PROJECT_LANGUAGES.filter((language) =>
    item.languages?.includes(language),
  ),
  liveUrl: mapHttpsUrl(item.liveUrl),
  sourceUrl: mapHttpsUrl(item.sourceUrl),
  url: item.url || undefined,
  sections: mapSections(item.sections),
});

export const mapExperience = (item: GqlExperience): ExperienceView => ({
  _id: item._id ?? '',
  title: item.title ?? undefined,
  slug: mapSlug(item.slug),
  publishedAt: item.publishedAt ?? undefined,
  tags: mapTags(item.tags),
  timespan: mapPlainLocalized(item.timespan),
  lede: mapPlainLocalized(item.lede),
  role: mapPlainLocalized(item.role),
  duration: mapPlainLocalized(item.duration),
  team: mapPlainLocalized(item.team),
  focus: mapPlainLocalized(item.focus),
  initials: item.initials || undefined,
  url: item.url || undefined,
  sections: mapSections(item.sections),
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
