import ProjectDetailPage from '@/components/projects';
import { client } from '@/sanity/lib/client';
import { Project } from '../../../../../sanity.types';
import { PROJECT_DETAIL_PAGE } from './_query';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;

  const project = await client.fetch<Project>(
    PROJECT_DETAIL_PAGE,
    { slug: slug },
    { next: { revalidate: 30 } },
  );

  return (
    <main className="flex w-full flex-col items-start px-8 md:px-10 lg:max-w-screen-lg">
      <ProjectDetailPage project={project} locale={locale} />
    </main>
  );
}
