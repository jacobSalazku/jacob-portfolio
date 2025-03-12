import { Header } from '@/components/header-banner';
import { FeatureItem } from '@/components/project/feature-item';
import { Stack } from '@/components/stack';
import { IconBallBasketball, IconCode, IconVideo } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <>
      <main className="mb-10 flex w-full flex-col items-start px-6 py-4 text-white md:px-10 lg:max-w-screen-lg">
        <Header />
        <section className="mb-8">
          <h2 className="mb-6 py-6 text-2xl font-semibold">{t('intrests')}</h2>
          <div className="grid grid-cols-1 content-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
            <FeatureItem
              icon={<IconCode size={32} stroke={1.5} />}
              title={t('technology.title')}
              className="rounded"
            >
              <p>{t('technology.text')}</p>
            </FeatureItem>
            <FeatureItem
              icon={<IconBallBasketball size={32} stroke={1.5} />}
              title={t('basketball.title')}
            >
              <p>{t('basketball.text')}</p>
            </FeatureItem>
            <FeatureItem
              icon={<IconVideo size={32} stroke={1.5} />}
              title={t('creative.title')}
            >
              <p>{t('creative.text')}</p>
            </FeatureItem>
          </div>
        </section>
        <Stack />
      </main>
    </>
  );
}
