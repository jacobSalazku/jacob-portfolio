import type { FC } from 'react';
import { PillList } from '@/components/content/pill-list';
import { buttonVariants } from '@/components/Link/button-variants';
import { localize } from '@/graphql/localize';
import type { ProjectView } from '@/graphql/types';
import { IconArrowUpRight, IconCode } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

const BUTTON_SIZE = 'h-14 min-w-[170px] px-6 text-base';

type ProjectHeaderProps = {
  project: ProjectView;
  locale: string;
};

const ProjectHeader: FC<ProjectHeaderProps> = async ({ project, locale }) => {
  const t = await getTranslations('Projects');
  const { title, liveUrl, sourceUrl } = project;
  const pills = [
    localize(project.projectType, locale),
    localize(project.role, locale),
  ].filter((pill): pill is string => Boolean(pill));
  // No excerpt fallback here: the full text follows right below the header
  const lede = localize(project.lede, locale);

  return (
    <header className="flex flex-col items-start gap-5">
      <PillList items={pills} />
      <h1 className="text-[clamp(40px,6vw,64px)] font-light leading-[1.05] tracking-[-0.03em] text-white">
        {title}
      </h1>
      {lede && (
        <p className="max-w-[60ch] text-xl font-light leading-relaxed text-white/75">
          {lede}
        </p>
      )}
      {(liveUrl || sourceUrl) && (
        <div className="flex flex-wrap gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'primary',
                className: BUTTON_SIZE,
              })}
            >
              {t('liveSite')}
              <IconArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'ghost',
                className: BUTTON_SIZE,
              })}
            >
              {t('sourceCode')}
              <IconCode size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export { ProjectHeader };
