import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrums';
import { LibraryTag } from '@/components/library-tag';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { FeatureItem } from '@/components/project/feature-item';
import { KeyFeatures } from '@/components/project/key-features';
import { SuspensePulse } from '@/components/suspense-fallback';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { IconCode } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';
import { Project } from '../../../../../sanity.types';
import { PROJECT_DETAIL_PAGE } from './_query';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const t = await getTranslations('Metadata');

  const data = await client.fetch<Project>(
    PROJECT_DETAIL_PAGE,
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;

  const project = await client.fetch<Project>(
    PROJECT_DETAIL_PAGE,
    { slug: slug },
    { next: { revalidate: 30 } },
  );

  if (!project) return null;

  const { title, mainImage, text, tags, features } = project;

  const t = await getTranslations('Projects');

  return (
    <Suspense fallback={<SuspensePulse />}>
      <Breadcrumbs
        items={[
          { label: `${t('slug')}`, href: `/projects` },
          { label: title, href: `/projects/${project.slug?.current}` },
        ]}
      />
      <main className="flex w-full flex-col items-start px-4 pb-10 md:px-6 xl:max-w-screen-lg xl:px-8">
        <div className="grid w-full grid-cols-1 items-start gap-10 py-12 font-thin text-white transition-all duration-150 ease-in-out md:grid-cols-2 md:py-16 xl:py-20 xl:pr-10">
          <div className="flex w-full justify-center pt-8">
            {mainImage && (
              <Image
                alt={mainImage.alt || 'Project image'}
                src={
                  mainImage
                    ? urlFor(mainImage).width(1080).height(1080).url()
                    : ''
                }
                width={1080}
                height={1080}
                className="w-full max-w-96 rounded-3xl border-2 border-beige-1 border-opacity-50 shadow-xl md:max-w-[450px]"
                fetchPriority="high"
                loading="eager"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light">{title}</h2>
            {text?.[locale] && <PortableTextRenderer value={text?.[locale]} />}
            <div className="flex flex-col gap-4 border-y border-white border-opacity-30 py-8 md:px-4">
              <p className="font-semibold">{t('technology')}</p>
              <div className="flex flex-wrap items-center gap-4">
                {tags &&
                  tags.map((tag) => (
                    <LibraryTag
                      key={`${tag._id}-${tag.title}`}
                      id={tag._id}
                      title={tag.title}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <KeyFeatures title={t('keyFeatures')}>
          <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features &&
              features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={<IconCode size={48} stroke={1.5} />}
                  title={feature.title?.[locale as keyof typeof feature.title]}
                  className="rounded-lg"
                >
                  <PortableTextRenderer value={feature.content[locale]} />
                </FeatureItem>
              ))}
          </div>
        </KeyFeatures>
      </main>
    </Suspense>
  );
}
