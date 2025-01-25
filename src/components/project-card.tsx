import React from 'react';
import Image from 'next/image';
import { AppPathnames } from '@/navigation';
import { Link } from './link';

export type Cardprops = {
  imageSrc: string;
  title: string;
  children: React.ReactNode;
  description: string;
  route: AppPathnames;
  imageAlt: string;
};

const ProjectCard: React.FC<Cardprops> = ({
  imageSrc,
  children,
  description,
  title,
  imageAlt,
  route,
}) => {
  const truncateDescription = (text: string) => {
    if (!text) return ''; // Guard clause to handle undefined or null
    return text.length > 100 ? `${text.substring(0, 100)}..` : text;
  };
  return (
    <>
      <div className="flex h-fit w-fit min-w-[250px] max-w-sm flex-col overflow-hidden rounded-3xl border bg-beige-1 shadow-md shadow-beige-1 transition-all duration-300 hover:shadow-2xl md:min-w-[300px] lg:hidden lg:min-w-[400px]">
        <div className="w-full">
          <Image
            src={imageSrc || ''}
            alt={imageAlt}
            width={600}
            height={800}
            className="w-full rounded-3xl border-2 border-beige-1"
          />
        </div>
        <div className="space-y-4 p-6">
          <div>
            <h2 className="pb-2 text-3xl font-bold">{title}</h2>
            <p>{truncateDescription(description)}</p>
          </div>
          <Link
            label="Lees meer over dit project"
            href={route}
            variant="github"
            className="mb-8 rounded-lg"
          />
        </div>
      </div>
      <div className="hidden w-full flex-row justify-between border-t border-beige-1 py-20 lg:flex">
        <div className="flex w-1/2 flex-row items-center justify-center rounded-lg py-20 text-white">
          <Image
            src={imageSrc || ''}
            alt={imageAlt}
            width={600}
            height={800}
            className="rounded-xl border-4 border-beige-1"
          />
        </div>
        <div className="flex w-1/2 flex-col gap-10 p-6 py-24 text-white">
          <h2 className="flex w-72 justify-center rounded-lg border border-beige-1 px-4 py-4 text-3xl font-bold text-beige-1">
            {title}
          </h2>
          {children}
          <Link
            label="Lees meer over dit project"
            variant="outline"
            size="xl"
            className="mt-2 h-14"
            href={route}
          />
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
