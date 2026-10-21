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
          'fixed z-20 h-20 w-full items-center justify-between border-b border-white/10 bg-black-400/80 px-4 backdrop-blur-md md:px-10 xl:absolute xl:hidden',
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
          `fixed left-0 top-0 z-40 h-screen bg-black-400/90 px-4 py-12 text-white backdrop-blur-xl ease-out sm:px-4 md:px-6 xl:sticky xl:-left-3 xl:z-0 xl:w-4/12 xl:max-w-96 xl:px-4 xl:py-12 xl:opacity-100`,
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
            <div className="hidden items-center gap-3 px-4 xl:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-beige-1 text-sm font-semibold text-purple-1">
                JS
              </div>
              <div>
                <h3 className="text-base font-normal xl:text-lg">
                  Jacob Salazaku
                </h3>
                <p className="text-xs font-light text-white/50 xl:text-sm">
                  {t('position')}
                </p>
              </div>
            </div>
          </div>
          <ul className="flex w-full flex-col items-center gap-1">
            <NavItems locale={locale} toggleMenu={toggleMenu} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navigation };
