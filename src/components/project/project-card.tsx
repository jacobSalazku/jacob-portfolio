'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { IconChevronRight } from '@tabler/icons-react';
import { Project } from '../../../sanity.types';
import { LibraryTag } from '../library-tag';

type ProjectCardProps = {
  project: Project;
  locale: string;
  tags: Project['tags'];
};

const ProjectCard: FC<ProjectCardProps> = ({ locale, project, tags }) => {
  const { slug, title, mainImage } = project;

  return (
    <Link href={`/projects/${slug?.current}`} className="block w-full" prefetch>
      <article className="flex flex-col items-start gap-6 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-10 text-white shadow-lg transition-all duration-300 hover:bg-neutral-800 sm:flex-row sm:items-center md:px-8 md:py-12">
        {/* Image Section */}
        {mainImage && (
          <div className="w-full rounded border border-sky-100 border-opacity-20 sm:w-5/12">
            <Image
              alt={mainImage?.alt || 'Project image'}
              src={urlFor(mainImage).width(600).height(400).url()}
              width={600}
              height={400}
              className="w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        )}
        <div className="flex w-full flex-col gap-2 sm:w-7/12">
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium text-white transition-colors duration-200 group-hover:text-sky-100 sm:text-xl md:text-2xl">
              {title}
            </p>
            <IconChevronRight
              className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1"
              size={24}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags &&
              tags.map((tag) => (
                <LibraryTag
                  key={`${tag._id}-${tag.title}`}
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

export { ProjectCard };
