import { FC } from 'react';
import { LibraryTag } from '@/components/library-tag';
import { TechStack } from '@root/sanity.types';

type ExperienceTagsProps = {
  tags?: TechStack[];
};

const LibraryUsed: FC<ExperienceTagsProps> = ({ tags }) => {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-start justify-start space-y-6">
      <h2 className="text-2xl font-bold text-beige-1 transition-transform md:text-3xl lg:text-4xl">
        Frontend
      </h2>
      <p className="text-white"></p>
      <div className="flex flex-row flex-wrap gap-3 transition-transform">
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
  );
};

export { LibraryUsed };
