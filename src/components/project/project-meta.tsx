import type { FC } from 'react';
import { LibraryTag } from '@/components/content/library-tag';
import { localize } from '@/graphql/localize';
import type { ProjectView } from '@/graphql/types';
import { getTranslations } from 'next-intl/server';

type ProjectMetaProps = {
  project: ProjectView;
  locale: string;
};

const ProjectMeta: FC<ProjectMetaProps> = async ({ project, locale }) => {
  const t = await getTranslations('Projects');
  const languages = project.languages.map((language) =>
    t(`language.${language}`),
  );
  const facts = [
    { label: t('role'), value: localize(project.role, locale) },
    { label: t('timeline'), value: localize(project.timeline, locale) },
    { label: t('type'), value: localize(project.projectType, locale) },
    {
      label: t('languages'),
      value: languages.length > 0 ? languages.join(', ') : undefined,
    },
  ].filter((fact) => Boolean(fact.value));
  const tags = project.tags ?? [];

  if (facts.length === 0 && tags.length === 0) return null;

  return (
    <dl className="mt-7 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="min-w-0 py-5 pr-5 md:border-l md:border-white/10 md:pl-5 md:first:border-l-0 md:first:pl-0"
        >
          <dt className="mb-2 text-xs uppercase tracking-[0.14em] text-white/55">
            {fact.label}
          </dt>
          <dd className="text-[0.9375rem] text-white/75">{fact.value}</dd>
        </div>
      ))}
      {tags.length > 0 && (
        <div className="col-span-full flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 py-5">
          <dt className="text-xs uppercase tracking-[0.14em] text-white/55">
            {t('techStack')}
          </dt>
          <dd className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <LibraryTag key={tag._id} id={tag._id} title={tag.title} />
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
};

export { ProjectMeta };
