'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LibraryTag } from '@/components/library-tag';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { urlFor } from '@/sanity/lib/image';
import { Experience, LocalizedTitle } from '@root/sanity.types';

type ExperienceCardProps = {
  experience: Experience;
  locale: string;
  tags: Experience['tags'];
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  locale,
  experience,
  tags,
}) => {
  const { slug, mainImage, timespan, title, description } = experience;

  return (
    <Link href={`/experience/${slug?.current}`} prefetch>
      <article className="flex w-full flex-col gap-4 border-opacity-50 bg-transparent px-4 py-12 font-thin text-white transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:bg-opacity-20 md:flex-row md:gap-12 md:px-10 xl:flex-row xl:gap-20 xl:px-2 xl:py-24">
        <div className="flex items-center gap-8 sm:items-center md:w-1/4 md:flex-col">
          {timespan && timespan[locale as keyof LocalizedTitle] && (
            <span className="hidden w-full rounded-lg border border-beige-1 p-4 text-sm sm:text-lg md:flex md:justify-center">
              {timespan[locale as keyof typeof timespan]}
            </span>
          )}

          {mainImage && (
            <Image
              alt={mainImage?.alt || 'Project image'}
              src={urlFor(mainImage).width(1080).url()}
              width={1080}
              height={1080}
              className="max-w-32 rounded-2xl shadow-lg md:w-full md:min-w-44 md:max-w-72"
              fetchPriority="high"
              loading="eager"
            />
          )}
          <div className="flex flex-col justify-center md:hidden">
            <h2 className="text-xl font-light text-white">{title}</h2>
            {timespan && timespan[locale as keyof LocalizedTitle] && (
              <span className="text-sm text-gray-400">
                {' '}
                {timespan[locale as keyof typeof timespan]}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start md:w-3/4">
          <div className="flex flex-col xl:gap-4">
            <div className="hidden flex-col md:flex xl:gap-1">
              <p className="text-xl font-thin text-white sm:text-3xl">
                {title}
              </p>
            </div>
            {description?.[locale] && (
              <PortableTextRenderer value={description?.[locale]} />
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags &&
              tags.map((tag) => (
                <LibraryTag
                  key={`{${tag._id}-${tag.title}}`}
                  id={tag._id!}
                  title={tag.title}
                />
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export { ExperienceCard };
