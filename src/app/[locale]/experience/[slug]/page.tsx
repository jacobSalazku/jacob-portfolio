import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrums';
import { LibraryUsed } from '@/components/experience/library-used';
import { Link } from '@/components/Link/link';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { KeyFeatures } from '@/components/project/key-features';
import { SuspensePulse } from '@/components/suspense-fallback';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Experience, Project } from '@root/sanity.types';
import { getTranslations } from 'next-intl/server';
import { EXPERIENCE_DETAIL_PAGE } from './_query';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const t = await getTranslations('Metadata');

  const data = await client.fetch<Experience>(
    EXPERIENCE_DETAIL_PAGE,
    {
      slug: slug,
    },
    { next: { revalidate: 30 } },
  );
  const { title, mainImage } = data;

  if (!data) {
    return {
      title: `${t('404.title')}`,
      description: `${t('404.description')}`,
    };
  }

  return {
    title: `${title}`,
    description: `${t('description')} ${title}`,
    openGraph: {
      title: `${title} | Jacob Salazaku`,
      description: `${t('description')} ${title}`,
      images: [
        {
          url: mainImage ? urlFor(mainImage).width(800).url() : '',
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: { slug: string; locale: number };
}) {
  const { slug, locale } = params;

  const data = await client.fetch<Experience>(
    EXPERIENCE_DETAIL_PAGE,
    {
      slug: slug,
    },
    { next: { revalidate: 30 } },
  );

  if (!data) return null;

  const { mainImage, title, text, tags, tasks, project } =
    data as Experience & { project: Project };

  const t = await getTranslations('Experience');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[
          {
            label: `${t('slug')}`,
            href: '/experience/',
          },
          { label: title, href: `/experience/${slug}` },
        ]}
      />
      <main className="flex w-full flex-col items-start px-4 pb-10 md:px-10 xl:max-w-screen-lg xl:px-8">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-4 py-12 xs:flex-row md:py-16 xl:gap-0 xl:py-20 xl:pr-10">
            <div className="lg:1/2 flex w-full flex-col items-start justify-center gap-4 text-white lg:w-2/3 xl:px-12">
              <h1 className="mb-4 text-3xl font-light text-white">{title}</h1>
              <div className="font-thin ">
                {text?.[locale] && (
                  <PortableTextRenderer value={text?.[locale]} />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2 xl:w-1/3">
              <div className="flex w-full items-center justify-center">
                <Image
                  alt={mainImage?.alt || 'Project image'}
                  src={mainImage ? urlFor(mainImage).width(250).url() : ''}
                  width={250}
                  height={250}
                  className="max-h-80 max-w-80 rounded-3xl p-1 shadow-xl xl:w-full"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row justify-center border-y border-white border-opacity-30 py-12 md:py-16 xl:px-12 xl:py-12">
            <LibraryUsed tags={tags} />
          </div>
          <KeyFeatures title={t('feature-title')}>
            {tasks?.[locale] && (
              <PortableTextRenderer value={tasks?.[locale]} />
            )}
            {(project as Project) && project.slug && (
              <div className="pt-10">
                <Link
                  href={`/projects/${project.slug.current}`}
                  variant="ghost"
                  className="w-3/4 sm:w-1/2"
                >
                  {`${t('button')} ${project.title}`}
                </Link>
              </div>
            )}
          </KeyFeatures>
        </div>
      </main>
    </Suspense>
  );
}
