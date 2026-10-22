import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import { buttonVariants } from '@/components/Link/button-variants';
import { ResumeButton } from '@/components/resume-button';
import { LINKEDIN_URL } from '@/utils/contact';
import { getTranslations } from 'next-intl/server';

const HERO_CODE = `const jacob = {
  role: 'Frontend Developer',
  city: 'Antwerp',
  likes: ['code', 'basketball', 'video'],
};`;

const BUTTON_SIZE = 'h-14 min-w-[150px] px-6 text-base';

const HomeHero: FC<{ locale: string }> = async ({ locale }) => {
  const t = await getTranslations('Home');

  return (
    <section className="grid items-center gap-8 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,42%)] lg:content-center lg:gap-x-14 lg:gap-y-6">
      <BrowserWindow
        title="Jacob Salazaku"
        url="jacob-salazaku.be"
        code={HERO_CODE}
        variant="wide"
        className="order-1 md:mx-auto lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0"
      />
      <div className="order-2 flex flex-wrap justify-center gap-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-start">
        <ResumeButton
          locale={locale}
          variant="primary"
          className={BUTTON_SIZE}
        />
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: 'ghost',
            className: BUTTON_SIZE,
          })}
        >
          Linkedin
        </a>
      </div>
      <div className="order-3 flex flex-col items-center gap-6 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:items-start lg:self-end lg:text-left">
        <h1 className="text-[clamp(24px,2.8vw,34px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
          {t.rich('heroTitle', {
            accent: (chunks) => <span className="text-gradient">{chunks}</span>,
          })}
        </h1>
        <p className="max-w-[48ch] text-[0.9375rem] font-light leading-relaxed text-white/70">
          {t('text')}
        </p>
      </div>
    </section>
  );
};

export { HomeHero };
