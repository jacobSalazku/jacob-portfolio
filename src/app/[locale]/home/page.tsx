import { Header } from '@/components/header-banner';
import { IconTextCard } from '@/components/project/icon-text-card';
import { Stack } from '@/components/stack';
import { IconBallBasketball, IconCode, IconVideo } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

export default async function Home(params: { params: { locale: string } }) {
  const { locale } = params.params;
  const t = await getTranslations('Home');
  return (
    <>
      <main className="mb-10 flex w-full flex-col items-start px-4 py-4 text-white md:px-10 xl:max-w-screen-lg">
        <Header locale={locale} />
        <section className="mb-8">
          <h2 className="mb-6 py-6 pl-1 text-2xl font-semibold">
            {t('intrests')}
          </h2>
          <div className="grid grid-cols-1 content-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
            <IconTextCard
              icon={<IconCode size={32} stroke={1.5} />}
              title={t('technology.title')}
              className="rounded"
            >
              <p>{t('technology.text')}</p>
            </IconTextCard>
            <IconTextCard
              icon={<IconBallBasketball size={32} stroke={1.5} />}
              title={t('basketball.title')}
            >
              <p>{t('basketball.text')}</p>
            </IconTextCard>
            <IconTextCard
              icon={<IconVideo size={32} stroke={1.5} />}
              title={t('creative.title')}
            >
              <p>{t('creative.text')}</p>
            </IconTextCard>
          </div>
        </section>
        <Stack />
      </main>
    </>
  );
}
