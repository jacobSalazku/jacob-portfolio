import { Suspense } from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrums';
import { ExperienceCard } from '@/components/experience/experience-card';
import { SuspensePulse } from '@/components/suspense-fallback';
import { client } from '@/sanity/lib/client';
import { Experience } from '@root/sanity.types';
import { getTranslations } from 'next-intl/server';
import { EXPERIENCE_QUERY } from './_query';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: `${t('experience')}`,
    description: `${t('description-experience')} `,
    openGraph: {
      title: `${t('experience')} | Jacob Salazaku`,
      description: `${t('description-experience')}`,
    },
  };
}

export default async function ExperienceOverview(params: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params.params;

  const data = await client.fetch<Experience[]>(
    EXPERIENCE_QUERY,
    {},
    { next: { revalidate: 30 } },
  );

  const t = await getTranslations('Experience');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs items={[{ label: `${t('slug')}`, href: `/${slug}` }]} />
      <main className="flex w-full flex-col items-start lg:max-w-screen-lg lg:px-10">
        {data &&
          data.map((experience, index) => (
            <Suspense
              key={`${experience._id}-${experience.title}`}
              fallback={<SuspensePulse />}
            >
              <ExperienceCard
                experience={experience}
                locale={locale}
                tags={experience.tags as Experience['tags']}
              />
              {index < data.length - 1 && (
                <div className="w-full border-t border-blue-50 border-opacity-50 md:hidden"></div>
              )}
            </Suspense>
          ))}
      </main>
    </Suspense>
  );
}
