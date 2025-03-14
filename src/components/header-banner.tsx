import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import '../app/typewriter.css';
import { Link } from './Link/link';

const Header = async ({ locale }: { locale: string }) => {
  const resumeNl = process.env.NEXT_PUBLIC_RESUME_NL;
  const resumeEN = process.env.NEXT_PUBLIC_RESUME_EN;
  const t = await getTranslations('Home');
  return (
    <section className="flex h-screen w-full flex-col items-center lg:h-[500px] lg:max-w-screen-lg">
      <div className="flex h-screen w-full flex-col items-center md:pb-4 lg:flex-row lg:justify-between">
        <div className="xxxs:justify-start  xxs:justify-center flex h-screen w-full flex-col items-center gap-2 px-2 lg:h-[500px] lg:items-start lg:gap-8">
          <h1
            id="typewriter"
            className="text-3xl font-light text-beige-1 transition-all duration-150 ease-in-out md:text-6xl"
          ></h1>
          <h2 className="text-center text-lg font-light text-white transition-all duration-150 ease-in-out md:text-3xl">
            {t('position')}
          </h2>
          <p className="flex w-full items-center pb-10 text-center text-sm font-thin text-white transition-all duration-150 ease-in-out sm:text-base md:text-2xl lg:text-left">
            {t('text')}
          </p>
          <Image
            src="/header-phone-2.png"
            alt="Mijn Portfolio"
            width={600}
            height={400}
            className="lg:hidden"
          />
          <div className="flex w-full flex-col gap-6 md:justify-center lg:flex-row lg:justify-start">
            <Link
              variant="ghost"
              label="Linkedin"
              href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
              className="lg:w-2/5"
              target="_blank"
            />
            <Link
              variant="primary"
              label={t('cv')}
              href={locale === 'nl' ? resumeNl : resumeEN}
              className="lg:w-2/5"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
