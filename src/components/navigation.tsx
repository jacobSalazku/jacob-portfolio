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
          'fixed z-20 h-20 w-full items-center justify-between border-b border-blue-100 border-opacity-50 bg-black-400 px-6 lg:absolute lg:hidden',
        )}
      >
        <div className="text-white lg:hidden">
          <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
        </div>
        <MenuButton onClick={toggleMenu} isActive={isOpen} />
      </header>

      <nav
        className={cn(
          isOpen
            ? 'w-full translate-x-0 duration-300 lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0 ',
          `fixed left-0 top-0 z-40 h-screen bg-black-400 bg-opacity-70 px-2 py-12 text-white backdrop-blur-md ease-out sm:px-4 lg:sticky lg:-left-3 lg:z-0 lg:w-full lg:max-w-96 lg:px-4 lg:py-12 lg:opacity-100`,
        )}
      >
        {isOpen && (
          <div className="absolute right-6 top-7 lg:hidden">
            <MenuButton onClick={toggleMenu} isActive={isOpen} />
          </div>
        )}
        <div className="flex h-full w-full flex-col items-center gap-12 md:items-start">
          <div className="flex w-full items-center gap-2">
            <div className="flex min-w-16 sm:flex sm:w-full sm:justify-start lg:hidden lg:w-auto">
              <h3 className="text-base font-bold xl:text-lg">
                {t('portfolio')}
              </h3>
            </div>
            <div className="hidden px-4 lg:block">
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
