import { Fragment, Suspense } from 'react';
import { Breadcrumbs } from '@/components/breadcrums';
import { ExperienceCard } from '@/components/experience/experience-card';
import { SuspensePulse } from '@/components/suspense-fallback';
import { client } from '@/sanity/lib/client';
import { Experience } from '@root/sanity.types';
import { EXPERIENCE_QUERY } from './_query';

export default async function ExperienceOverview(params: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params.params;

  const data = await client.fetch<Experience[]>(
    EXPERIENCE_QUERY,
    {},
    { next: { revalidate: 30 } },
  );
  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs items={[{ label: 'Experience', href: `/${slug}` }]} />
      <main className="flex w-full flex-col items-start lg:max-w-screen-lg lg:px-10">
        {data &&
          data.map((experience, index) => (
            <Suspense fallback={<SuspensePulse />}>
              <Fragment key={experience._id}>
                <ExperienceCard
                  experience={experience}
                  locale={locale}
                  tags={experience.tags as Experience['tags']}
                />
                {index < data.length - 1 && (
                  <div className="w-full border-t border-blue-50 border-opacity-50 md:hidden"></div>
                )}
              </Fragment>
            </Suspense>
          ))}
      </main>
    </Suspense>
  );
}
