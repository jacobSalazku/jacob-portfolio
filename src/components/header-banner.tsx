import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from './Link/link';

const Header = async () => {
  const resume = process.env.NEXT_PUBLIC_RESUME;
  const t = await getTranslations('Home');
  return (
    <section className="mt-4 flex w-full flex-col items-center lg:max-w-screen-lg">
      <div className="flex w-full flex-col items-center pb-4 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-2 lg:h-[500px] lg:items-start lg:gap-8">
          <h1 className="text-4xl font-light text-beige-1 lg:text-6xl">
            Jacob Salazaku
          </h1>
          <h2 className="text-2xl font-light text-white lg:text-3xl">
            {t('position')}
          </h2>
          <p className="flex w-full pb-10 text-center text-2xl font-thin text-white lg:text-left">
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
              className="lg:w-1/4"
              target="_blank"
            />
            <Link
              variant="primary"
              label={t('cv')}
              href={resume}
              className="lg:w-1/4"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
