import type { FC } from 'react';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { UpNext } from '@/components/up-next';
import { localize } from '@/graphql/localize';
import type { ProjectView } from '@/graphql/types';
import { cn } from '@/utils/utils';
import { getTranslations } from 'next-intl/server';
import { ProjectHeader } from './project-header';
import { ProjectHero } from './project-hero';
import { ProjectMeta } from './project-meta';
import { ProjectSection } from './project-section';
import { TableOfContents } from './table-of-contents';

type ProjectBodyProps = {
  project: ProjectView;
  locale: string;
  next?: ProjectView;
};

const ProjectBody: FC<ProjectBodyProps> = async ({ project, locale, next }) => {
  const t = await getTranslations('Projects');
  const intro = localize(project.text, locale);
  const tableOfContents = project.sections.map((section) => ({
    anchor: section.anchor,
    label: localize(section.title, locale) ?? '',
  }));
  const hasTableOfContents = tableOfContents.length > 1;

  return (
    <main className="flex w-full flex-col items-start px-6 pb-10 md:px-8">
      <div className="grid w-full items-center gap-10 pb-9 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,42%)] lg:gap-14">
        <ProjectHeader project={project} locale={locale} />
        <ProjectHero project={project} />
      </div>
      <div className="w-full">
        <ProjectMeta project={project} locale={locale} />
      </div>
      <div
        className={cn(
          'mt-16 grid w-full gap-16',
          hasTableOfContents && 'md:grid-cols-[200px_minmax(0,1fr)]',
        )}
      >
        {hasTableOfContents && (
          <TableOfContents title={t('onThisPage')} items={tableOfContents} />
        )}
        <div className="min-w-0">
          {intro && (
            <div className="mb-16 max-w-[66ch] font-light text-white/75">
              <PortableTextRenderer value={intro} />
            </div>
          )}
          {project.sections.map((section) => (
            <ProjectSection
              key={section.anchor}
              section={section}
              locale={locale}
            />
          ))}
        </div>
      </div>
      {next?.slug && next.title && (
        <div className="w-full">
          <UpNext
            label={t('upNext')}
            title={next.title}
            href={`/projects/${next.slug.current}`}
            cta={t('viewProject')}
          />
        </div>
      )}
    </main>
  );
};

export { ProjectBody };
