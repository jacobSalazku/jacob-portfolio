import { Fragment } from 'react';
import { Breadcrumbs } from '@/components/breadcrums';
import { ProjectCard } from '@/components/project/project-card';
import { client } from '@/sanity/lib/client';
import { Project } from '@root/sanity.types';
import { PROJECT_QUERY } from './_query';

export default async function ProjectOverview(params: {
  params: { locale: string };
}) {
  const { locale } = params.params;
  const data = await client.fetch<Project[]>(PROJECT_QUERY, {});
  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Projects', href: `/${locale}/projects` }]}
      />
      <main className="flex w-full flex-col items-start px-4 lg:max-w-screen-lg">
        {data &&
          data.map((project, index) => (
            <Fragment key={project._id}>
              <ProjectCard
                project={project}
                locale={locale}
                tags={project.tags as Project['tags']}
              />
              {index < data.length - 1 && (
                <div className="w-full border-t border-blue-50 border-opacity-50 md:hidden"></div>
              )}
            </Fragment>
          ))}
      </main>
    </>
  );
}
