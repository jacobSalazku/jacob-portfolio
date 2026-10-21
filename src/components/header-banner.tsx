import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import '../app/typewriter.css';
import { Link } from './Link/link';

const Header = async ({ locale }: { locale: string }) => {
  const resumeNl = process.env.NEXT_PUBLIC_RESUME_NL;
  const resumeEN = process.env.NEXT_PUBLIC_RESUME_EN;
  const t = await getTranslations('Home');
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col items-center lg:min-h-[560px] lg:max-w-screen-lg">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-full" />
      <div className="flex w-full flex-1 flex-col items-center md:pb-4 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col items-center px-2 py-8 xxxs:justify-start xxxs:gap-4 xxs:justify-center xxs:gap-6 lg:items-start lg:gap-7 lg:py-16">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-beige-1/25 bg-beige-1/5 px-4 py-1.5 text-xs font-light uppercase tracking-widest text-beige-1/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-beige-2" />
            Portfolio
          </span>
          <h1
            id="typewriter"
            className="text-gradient min-h-[1.2em] text-3xl font-light transition-all duration-150 ease-in-out md:text-6xl"
          ></h1>
          <h2 className="delay-1 animate-fade-up text-center text-lg font-light tracking-tight text-white transition-all duration-150 ease-in-out md:text-3xl">
            {t('position')}
          </h2>
          <p className="delay-2 flex w-full max-w-2xl animate-fade-up items-center text-balance pb-10 text-center text-sm font-light leading-relaxed text-white/70 transition-all duration-150 ease-in-out sm:text-base md:text-xl lg:text-left">
            {t('text')}
          </p>
          <Image
            src="/header-phone-2.png"
            alt="Mijn Portfolio"
            width={600}
            height={400}
            className="delay-2 animate-fade-up lg:hidden"
          />
          <div className="delay-3 flex w-full animate-fade-up flex-col gap-4 md:justify-center lg:flex-row lg:justify-start">
            <Link
              variant="ghost"
              label="Linkedin"
              href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
              className="lg:w-48"
              target="_blank"
            />
            <Link
              variant="primary"
              label={t('cv')}
              href={locale === 'nl' ? resumeNl : resumeEN}
              className="lg:w-48"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
