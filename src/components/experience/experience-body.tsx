import type { FC } from 'react';
import { PillList } from '@/components/content/pill-list';
import { PortableTextRenderer } from '@/components/content/portable-text-render';
import { UpNext } from '@/components/layout/up-next';
import { Link } from '@/components/Link/link';
import { ProjectSection } from '@/components/project/project-section';
import { BrowserWindow } from '@/components/ui/browser-window';
import { localize } from '@/graphql/localize';
import type { ExperienceView } from '@/graphql/types';
import { getTranslations } from 'next-intl/server';
import { ExperienceStackCard } from './experience-stack-card';

type ExperienceBodyProps = {
  experience: ExperienceView;
  locale: string;
  next?: ExperienceView;
};

const ExperienceBody: FC<ExperienceBodyProps> = async ({
  experience,
  locale,
  next,
}) => {
  const t = await getTranslations('Experience');
  const { title, tags, project, sections } = experience;
  const role = localize(experience.role, locale);
  const duration = localize(experience.duration, locale);
  const text = localize(experience.text, locale);
  const tasks = localize(experience.tasks, locale);
  const facts = [
    { label: t('role'), value: role },
    { label: t('duration'), value: duration },
    { label: t('team'), value: localize(experience.team, locale) },
    { label: t('focus'), value: localize(experience.focus, locale) },
  ].flatMap(({ label, value }) => (value ? [{ label, value }] : []));
  const pills = [role, duration].filter((pill): pill is string => !!pill);

  return (
    <main className="flex w-full flex-col items-start gap-12 px-6 pb-16 md:gap-14 md:px-8">
      <header className="flex flex-col items-start gap-6 pt-6">
        <PillList items={pills} />
        <h1 className="text-[clamp(34px,5vw,48px)] font-light leading-[1.05] tracking-[-0.03em] text-white">
          {title}
        </h1>
      </header>

      <div className="my-4 grid w-full items-start gap-10 lg:grid-cols-[minmax(280px,520px)_minmax(0,1fr)] lg:gap-14">
        {title && (
          <BrowserWindow title={title} url={experience.url} variant="tall" />
        )}
        <ExperienceStackCard tags={tags} facts={facts} />
      </div>

      {text && (
        <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center font-light leading-relaxed text-white/75 md:p-10">
          <PortableTextRenderer value={text} />
        </div>
      )}

      {sections.length > 0 && (
        <div className="mt-10 w-full">
          <h2 className="text-3xl font-light tracking-tight text-white">
            {t('feature-title')}
          </h2>
          <p className="mb-8 mt-1 text-sm text-white/55">{t('feature-sub')}</p>
          {sections.map((section) => (
            <ProjectSection
              key={section.anchor}
              section={section}
              locale={locale}
              featuresVariant="cards"
              hideTitle={sections.length === 1}
            />
          ))}
        </div>
      )}

      {sections.length === 0 && tasks && (
        <section className="mt-10 w-full">
          <h2 className="mb-8 text-3xl font-light tracking-tight text-white">
            {t('feature-title')}
          </h2>
          <div className="max-w-[66ch] font-light text-white/75 [&>h2:not(:first-child)]:mt-12 [&>h3:not(:first-child)]:mt-12 [&>h4:not(:first-child)]:mt-12">
            <PortableTextRenderer value={tasks} />
          </div>
        </section>
      )}

      {project?.slug && (
        <Link
          href={`/projects/${project.slug.current}`}
          variant="ghost"
          className="h-14 w-3/4 text-base sm:w-1/2"
        >
          {`${t('button')} ${project.title}`}
        </Link>
      )}

      {next?.slug && next.title && (
        <div className="w-full">
          <UpNext
            label={t('upNext')}
            title={next.title}
            href={`/experience/${next.slug.current}`}
            cta={t('viewExperience')}
          />
        </div>
      )}
    </main>
  );
};

export { ExperienceBody };
