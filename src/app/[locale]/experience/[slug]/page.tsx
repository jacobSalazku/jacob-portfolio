import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrums';
import { ExperienceBody } from '@/components/experience/experience-body';
import { SuspensePulse } from '@/components/suspense-fallback';
import { getExperience, getExperiences } from '@/graphql/queries';
import { OG_IMAGE } from '@/utils/site-url';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations('Metadata');

  const data = await getExperience(slug);

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

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const [experience, experiences] = await Promise.all([
    getExperience(slug),
    getExperiences(),
  ]);

  if (!experience) notFound();

  // The next experience in the list, wrapping around to the first one
  const position = experiences.findIndex((item) => item.slug?.current === slug);
  const next =
    experiences.length > 1
      ? experiences[(position + 1) % experiences.length]
      : undefined;

  const t = await getTranslations('Experience');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[
          { label: `${t('slug')}`, href: '/experience' },
          { label: experience.title, href: `/experience/${slug}` },
        ]}
      />
      <ExperienceBody experience={experience} locale={locale} next={next} />
    </Suspense>
  );
}
