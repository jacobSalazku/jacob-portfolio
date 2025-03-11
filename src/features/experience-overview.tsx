import { Fragment } from 'react';
import { EXPERIENCE_QUERY } from '@/app/[locale]/experience/_query';
import Breadcrumbs from '@/components/breadcrums';
import ExperienceCard from '@/components/experience/experience-card';
import { client } from '@/sanity/lib/client';
import { Experience } from '../../sanity.types';

const ExperienceBlock = async ({
  locale,
  slug,
}: {
  locale: string;
  slug: string;
}) => {
  const data = await client.fetch<Experience[]>(
    EXPERIENCE_QUERY,
    {},
    { next: { revalidate: 30 } },
  );

  return (
    <main className="flex w-full flex-col items-start px-2 md:px-10 lg:max-w-screen-lg">
      <Breadcrumbs items={[{ label: 'Experience', href: `/${slug}` }]} />
      {data &&
        data.map((experience, index) => (
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
        ))}
    </main>
  );
};

export default ExperienceBlock;
