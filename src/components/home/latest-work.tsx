import type { FC } from 'react';
import { ProjectRow } from '@/components/project/project-row';
import { getProjects } from '@/graphql/queries';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from './section-heading';

const LatestWork: FC<{ locale: string }> = async ({ locale }) => {
  const t = await getTranslations('Home');
  const [latest] = await getProjects();
  if (!latest) return null;

  return (
    <section>
      <SectionHeading
        title={t('latestWork')}
        subtitle={t('latestWorkSub')}
        action={
          <Link
            href="/projects"
            className="border-b border-beige-1/60 pb-0.5 text-sm text-beige-1 hover:border-beige-1"
          >
            {t('allProjects')} →
          </Link>
        }
      />
      <ProjectRow project={latest} locale={locale} cta={t('readMore')} />
    </section>
  );
};

export { LatestWork };
