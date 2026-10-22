import type { FC } from 'react';
import { LibraryTag } from '@/components/library-tag';
import type { TagView } from '@/graphql/types';
import { IconCode } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

export type ExperienceFact = { label: string; value: string };

type ExperienceStackCardProps = {
  tags?: TagView[];
  facts: ExperienceFact[];
};

const ExperienceStackCard: FC<ExperienceStackCardProps> = async ({
  tags = [],
  facts,
}) => {
  const t = await getTranslations('Projects');
  if (tags.length === 0 && facts.length === 0) return null;

  return (
    <aside className="flex w-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
      {tags.length > 0 && (
        <>
          <p className="flex items-center gap-2 text-[0.8125rem] text-white/75">
            <IconCode size={16} stroke={1.8} className="text-beige-1" />
            {t('techStack')}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <LibraryTag key={tag._id} id={tag._id} title={tag.title} />
            ))}
          </div>
        </>
      )}
      {facts.length > 0 && (
        <dl className="mt-auto flex flex-col">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between gap-4 border-t border-white/10 py-3 text-sm"
            >
              <dt className="text-white/55">{fact.label}</dt>
              <dd className="text-right text-white/75">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </aside>
  );
};

export { ExperienceStackCard };
