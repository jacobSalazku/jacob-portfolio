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
      <article className="group my-3 flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-beige-1/40 hover:bg-white/[0.05] hover:shadow-glow sm:flex-row sm:items-center md:p-8">
        {mainImage && (
          <div className="w-full overflow-hidden rounded-xl border border-white/10 sm:w-5/12">
            <Image
              alt={mainImage?.alt || 'Project image'}
              src={urlFor(mainImage).width(1400).height(1400).url()}
              width={600}
              height={400}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        )}
        <div className="flex w-full flex-col gap-2 sm:w-7/12">
          <div className="flex items-center gap-2">
            <p className="text-lg font-light text-white transition-colors duration-200 group-hover:text-beige-1 sm:text-xl md:text-2xl">
              {title}
            </p>
            <IconChevronRight
              className="text-beige-1/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-beige-1"
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
