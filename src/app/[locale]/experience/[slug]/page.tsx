import ExperienceDetailPage from '@/components/experience';
import { client } from '@/sanity/lib/client';
import { Experience } from '@root/sanity.types';
import { EXPERIENCE_DETAIL_PAGE } from './_query';

export default async function ExperiencePage({
  params,
}: {
  params: { slug: string; locale: number };
}) {
  const { slug } = params;

  const data = await client.fetch<Experience>(
    EXPERIENCE_DETAIL_PAGE,
    {
      slug: slug,
    },
    { next: { revalidate: 30 } },
  );

  return <ExperienceDetailPage data={data} params={params} />;
}
