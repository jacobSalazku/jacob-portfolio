import { Suspense } from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrums';
import { ExperienceTimeline } from '@/components/experience/experience-timeline';
import { PageHeader } from '@/components/page-header';
import { SuspensePulse } from '@/components/suspense-fallback';
import { getExperiences } from '@/graphql/queries';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: `${t('experience')}`,
    description: `${t('description-experience')}`,
    openGraph: {
      title: `${t('experience')} | Jacob Salazaku`,
      description: `${t('description-experience')}`,
    },
  };
}

export default async function ExperienceOverview(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  const experiences = await getExperiences();

  const t = await getTranslations('Experience');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[{ label: `${t('slug')}`, href: `/experience` }]}
      />
      <main className="w-full px-6 pb-16 md:px-8">
        <PageHeader title={t('slug')} subtitle={t('sub')} />
        <ExperienceTimeline
          experiences={experiences}
          locale={locale}
          cta={t('viewDetails')}
        />
      </main>
    </Suspense>
  );
}
