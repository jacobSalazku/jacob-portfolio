import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrums';
import { LibraryUsed } from '@/components/experience/library-used';
import { Link } from '@/components/Link/link';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { KeyFeatures } from '@/components/project/key-features';
import { SuspensePulse } from '@/components/suspense-fallback';
import { getExperience } from '@/graphql/queries';
import { urlFor } from '@/sanity/lib/image';
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

  const { title, mainImage } = data;

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
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const data = await getExperience(slug);

  if (!data) return null;

  const { mainImage, title, text, tags, tasks, project } = data;

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
            {project?.slug && (
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
