'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from './link';

const Header = () => {
  const t = useTranslations('Homepage');

  return (
    <section className="lg:bg-blue-1 mt-20 flex h-screen w-screen flex-row items-center overflow-hidden bg-gradient-to-b from-purple-1 to-purple-2 transition-all md:h-full lg:flex-col lg:px-12 lg:py-16">
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center pb-4 lg:flex-row lg:justify-between">
        <div className="flex h-[730px] w-full flex-col items-center justify-center gap-3 px-12 py-28 lg:w-1/2 lg:items-start">
          <div className="absolute top-32 z-0 h-full w-full flex-col items-center overflow-hidden lg:hidden">
            <Image
              className="absolute h-full w-full object-cover"
              src="/smoke.png"
              alt="Mijn Portfolio"
              width={4000}
              height={4080}
            />
          </div>
          <h1 className="text-4xl font-medium text-beige-1 transition-transform lg:text-5xl">
            Jacob Salazaku
          </h1>
          <h2 className="mb-4 text-lg font-light text-white transition-transform lg:text-2xl">
            {t('position')}
          </h2>
          <Image
            src="/header-phone-2.png"
            alt="Mijn Portfolio"
            width={600}
            height={400}
            className="block transition-transform lg:hidden"
          />
          <p className="pb-4 text-center text-white lg:text-left">
            {t('text')}
          </p>
          <div className="z-10 flex flex-col gap-6 sm:flex-row">
            <Link
              variant="ghost"
              label="Linkedin"
              href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
              size="md"
              target="_blank"
            />
            <Link
              variant="primary"
              label="My Resume"
              href="/resume.pdf"
              size="md"
              target="_blank"
            />
          </div>
        </div>
        <div className="top-100 absolute left-48 hidden h-full w-full flex-col items-center lg:flex">
          <Image
            src="/header.png"
            alt="Mijn Portfolio"
            width={1000}
            height={1080}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
