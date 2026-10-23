import { Metadata } from 'next';
import { SITE_URL } from '@/utils/site-url';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    metadataBase: new URL(`${SITE_URL}/not-found`),
    title: t('404.title'),
    description: t('404.description'),
  };
}

export default async function NotFound() {
  const t = await getTranslations('Metadata');

  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center md:px-8">
      <h1 className="text-[clamp(32px,5vw,56px)] font-light tracking-tight text-white">
        {t('404.title')}
      </h1>
      <p className="max-w-[50ch] text-base font-light text-white/70">
        {t('404.description')}
      </p>
    </section>
  );
}
