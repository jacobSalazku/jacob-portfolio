import { Suspense } from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrums';
import { PageHeader } from '@/components/page-header';
import { ProjectRow } from '@/components/project/project-row';
import { SuspensePulse } from '@/components/suspense-fallback';
import { getProjects } from '@/graphql/queries';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: `${t('projects')}`,
    description: `${t('description-projects')}`,
    openGraph: {
      title: `${t('projects')} | Jacob Salazaku`,
      description: `${t('description-projects')}`,
    },
  };
}

export default async function ProjectOverview(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  const projects = await getProjects();

  const t = await getTranslations('Projects');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[{ label: `${t('slug')}`, href: `/projects` }]}
      />
      <main className="w-full px-6 pb-16 md:px-8">
        <PageHeader title={t('slug')} subtitle={t('projectsSub')} />
        <div className="flex flex-col divide-y divide-white/10">
          {projects.map((project) => (
            <div key={project._id} className="py-14 first:pt-4">
              <ProjectRow
                project={project}
                locale={locale}
                cta={t('viewProject')}
                flip
              />
            </div>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
