import Image from 'next/image';
import Breadcrumbs from '@/components/breadcrums';
import { LibraryTag } from '@/components/library-tag';
import PortableTextRenderer from '@/components/portable-text-render';
import { FeatureItem } from '@/components/project/feature-item';
import { KeyFeatures } from '@/components/project/key-features';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { IconCode } from '@tabler/icons-react';
import { Project } from '../../../../../sanity.types';
import { PROJECT_DETAIL_PAGE } from './_query';

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

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Projects', href: `/projects` },
          { label: title, href: `/projects/${project.slug?.current}` },
        ]}
      />
      <main className="items-startx flex w-full flex-col px-4 md:px-10 lg:max-w-screen-lg lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-12 font-thin text-white md:grid-cols-2 md:py-16 lg:gap-0 lg:py-20 lg:pr-10">
          <div>
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
                className="max-h-80 max-w-80 rounded-3xl p-1 shadow-xl lg:w-full"
                fetchPriority="high"
                loading="eager"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light">{title}</h2>
            {text?.[locale] && <PortableTextRenderer value={text?.[locale]} />}
            <div className="flex flex-col gap-4 border-y border-white border-opacity-30 px-2 py-5">
              <p className="font-semibold">
                Ik maakte gebruikt van deze technologieen
              </p>
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
        <KeyFeatures title="Key Features">
          <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features &&
              features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={<IconCode size={48} stroke={1.5} />}
                  title={feature.title?.[locale as keyof typeof feature.title]}
                >
                  <PortableTextRenderer value={feature.content[locale]} />
                </FeatureItem>
              ))}
          </div>
        </KeyFeatures>
      </main>
    </>
  );
}
