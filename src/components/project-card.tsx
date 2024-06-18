import React from 'react';
import NextLink from 'next/link';
import { Cardprops } from '../types/types';
import { Link } from './link';

const ProjectCard: React.FC<Cardprops> = ({
  image,
  children,
  description,
  mobileImage,
  title,
  route,
}) => {
  const truncateDescription = (text: string) => {
    if (!text) return ''; // Guard clause to handle undefined or null
    return text.length > 100 ? `${text.substring(0, 100)}..` : text;
  };
  return (
    <>
      <div className="flex h-[450px] w-full min-w-[250px] max-w-sm flex-col justify-between overflow-hidden rounded-sm border bg-beige-1 shadow-md shadow-beige-1 transition-all duration-300 hover:shadow-2xl md:min-w-[300px] lg:hidden lg:min-w-[400px]">
        <div className="w-full">
          {mobileImage}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <NextLink
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Details
            </NextLink>
          </div>
        </div>
        <div className="space-y-4 p-6">
          <div>
            <h2 className="pb-2 text-3xl font-bold">{title}</h2>
            <p>{truncateDescription(description)}</p>
          </div>
        </div>
      </div>
      <div className="hidden w-full flex-row justify-between border-t border-beige-1 py-20 lg:flex">
        <div className="text-whites flex w-1/2 flex-row items-center justify-center py-20">
          {image}
        </div>
        <div className="flex w-1/2 flex-col gap-10 p-6 py-16 text-white">
          <h2 className="flex w-72 justify-center rounded-lg border border-beige-1 px-4 py-4 text-3xl font-bold text-beige-1">
            {title}
          </h2>
          {children}
          <Link
            label="Lees meer over dit project"
            variant="outline"
            size="xl"
            className="mt-2 h-14"
            href={`/projects/${route || ''}`}
          />
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
