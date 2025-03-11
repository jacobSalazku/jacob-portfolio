'use client';

import { useState } from 'react';
import { MenuLink } from '@/components/link/menu-link';
import { MENUITEMS } from '@/utils/nav-items';
import { cn } from '@/utils/utils';
import { MenuButton } from './menu-button';

const Navigation = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <header
        className={cn(
          isOpen ? 'hidden' : 'flex',
          'fixed z-20 h-20 w-full items-center justify-between border-b border-blue-100 border-opacity-50 bg-black-900 px-6 lg:absolute lg:hidden',
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
            ? 'translate-x-0 transition-transform duration-150 lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0',
          `fixed left-0 top-0 z-40 h-screen w-full bg-black-900 bg-opacity-85 px-8 py-12 text-white shadow-lg backdrop-blur-md ease-out sm:px-4 lg:sticky lg:w-3/12 lg:max-w-96 lg:bg-opacity-50 lg:px-4 lg:py-12`,
        )}
      >
        <div className="absolute right-6 top-7 lg:hidden">
          <MenuButton onClick={toggleMenu} isActive={isOpen} />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-12 md:items-start">
          <div className="flex w-full items-center gap-2">
            <div className="flex min-w-16 sm:flex sm:w-full sm:justify-start lg:hidden lg:w-auto">
              <h3 className="text-base font-bold xl:text-lg">
                Portfolio Frontend developer
              </h3>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
              <p className="text-xs font-thin xl:text-sm">FRONTEND DEVELOPER</p>
            </div>
          </div>
          <ul className="gap flex w-full flex-col items-center">
            {MENUITEMS.map((item) => (
              <li key={item.href} className="w-full">
                <MenuLink
                  href={item.href}
                  label={item.label}
                  {...{ locale }}
                  onClick={toggleMenu}
                >
                  {item.icon}
                </MenuLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navigation };
