'use client';

import { useState } from 'react';
import { cn } from '@/utils/utils';
import { useTranslations } from 'next-intl';
import { MenuButton } from './menu-button';
import { NavItems } from './nav-items';

const Navigation = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const isMobileViewport = window.innerWidth < 1024;
    setIsOpen(!isOpen);
    if (isMobileViewport) {
      document.body.classList.toggle('overflow-hidden', !isOpen);
    }
  };

  const t = useTranslations('Navigation');

  return (
    <>
      <header
        className={cn(
          isOpen ? 'hidden' : 'flex',
          'fixed z-20 h-20 w-full items-center justify-between border-b border-blue-100 border-opacity-50 bg-black-400 px-4 md:px-10 xl:absolute xl:hidden',
        )}
      >
        <div className="text-white xl:hidden">
          <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
        </div>
        <MenuButton onClick={toggleMenu} isActive={isOpen} />
      </header>

      <nav
        className={cn(
          isOpen
            ? 'w-full translate-x-0 duration-300 xl:translate-x-0'
            : '-translate-x-full xl:translate-x-0 ',
          `fixed left-0 top-0 z-40 h-screen bg-black-400 bg-opacity-70 px-4 py-12 text-white backdrop-blur-md ease-out sm:px-4 md:px-6 xl:sticky xl:-left-3 xl:z-0 xl:w-4/12 xl:max-w-96 xl:px-4 xl:py-12 xl:opacity-100`,
        )}
      >
        {isOpen && (
          <div className="absolute right-6 top-7 xl:hidden">
            <MenuButton onClick={toggleMenu} isActive={isOpen} />
          </div>
        )}
        <div className="flex h-full w-full flex-col items-center gap-12 md:items-start">
          <div className="flex w-full items-center gap-2">
            <div className="flex min-w-16 sm:flex sm:w-full sm:justify-start xl:hidden xl:w-auto">
              <h3 className="text-base font-bold xl:text-lg">
                {t('portfolio')}
              </h3>
            </div>
            <div className="hidden px-4 xl:block">
              <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
              <p className="text-xs font-thin xl:text-sm">{t('position')}</p>
            </div>
          </div>
          <ul className="gap flex w-full flex-col items-center">
            <NavItems locale={locale} toggleMenu={toggleMenu} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navigation };
