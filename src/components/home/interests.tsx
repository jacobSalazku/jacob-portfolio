import type { FC } from 'react';
import { IconTextCard } from '@/components/project/icon-text-card';
import { IconBallBasketball, IconCode, IconVideo } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from './section-heading';

const Interests: FC = async () => {
  const t = await getTranslations('Home');

  return (
    <section>
      <SectionHeading title={t('intrests')} subtitle={t('intrestsSub')} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <IconTextCard
          icon={<IconCode size={24} stroke={1.5} />}
          title={t('technology.title')}
        >
          <p>{t('technology.text')}</p>
        </IconTextCard>
        <IconTextCard
          icon={<IconBallBasketball size={24} stroke={1.5} />}
          title={t('basketball.title')}
        >
          <p>{t('basketball.text')}</p>
        </IconTextCard>
        <IconTextCard
          icon={<IconVideo size={24} stroke={1.5} />}
          title={t('creative.title')}
        >
          <p>{t('creative.text')}</p>
        </IconTextCard>
      </div>
    </section>
  );
};

export { Interests };
