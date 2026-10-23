import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/breadcrums';
import { SuspensePulse } from '@/components/layout/suspense-fallback';
import { ProjectBody } from '@/components/project/project-body';
import { getProject, getProjects } from '@/graphql/queries';
import { getNextItem } from '@/utils/next-item';
import { OG_IMAGE } from '@/utils/site-url';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations('Metadata');

  const data = await getProject(slug);

  if (!data) {
    return {
      title: `${t('404.title')}`,
      description: `${t('404.description')}`,
    };
  }

  const title = data.title ?? 'Jacob Salazaku';

  return {
    title: `${title}`,
    description: `${t('description')} ${title}`,
    openGraph: {
      title: `${title} | Jacob Salazaku`,
      description: `${t('description')} ${title}`,
      images: [{ ...OG_IMAGE, alt: title }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const [project, projects] = await Promise.all([
    getProject(slug),
    getProjects(),
  ]);

  if (!project) notFound();

  const next = getNextItem(projects, slug);

  const t = await getTranslations('Projects');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[
          { label: `${t('slug')}`, href: `/projects` },
          { label: project.title, href: `/projects/${project.slug?.current}` },
        ]}
      />
      <ProjectBody project={project} locale={locale} next={next} />
    </Suspense>
  );
}
