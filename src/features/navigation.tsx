'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuLink from '@/components/Link/menu-link';
import { useActiveLink } from '@/hooks/use-active-link';
import { cn } from '@/utils/utils';
import {
  IconAddressBook,
  IconBriefcase,
  IconCode,
  IconCompassFilled,
} from '@tabler/icons-react';
import { MenuButton } from './menu-button';

const Navigation = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <div
        className={`${isOpen ? 'z-0' : ''} absolute flex h-20 w-full items-center justify-between px-6 md:hidden`}
      >
        <div className={`${isOpen ? 'opacity-0' : 'opacity-100'} text-white`}>
          <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
        </div>
        <MenuButton onClick={toggleMenu} isActive={isOpen} />
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={cn(
          isOpen
            ? 'translate-x-0 transition-transform duration-150'
            : '-translate-x-full',
          `fixed left-0 top-0 z-40 h-screen w-full bg-transparent bg-opacity-85 px-8 py-12 text-white shadow-lg ease-out sm:sticky sm:w-2/12 sm:translate-x-0 sm:px-4 lg:w-3/12 lg:max-w-96 lg:px-4 lg:py-12`,
        )}
      >
        <div className="absolute right-6 top-7">
          <MenuButton onClick={toggleMenu} isActive={isOpen} />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-12 md:items-start">
          <div className="flex w-full items-center gap-2">
            <div className="min-w-16 sm:flex sm:w-full sm:justify-center lg:w-auto">
              <Image
                src="/profile.png"
                alt="Jacob Salazaku"
                className="rounded-full"
                width={75}
                height={75}
              />
            </div>
            <div className="sm:hidden lg:block">
              <h3 className="text-base font-bold xl:text-lg">Jacob Salazaku</h3>
              <p className="text-xs font-thin xl:text-sm">FRONTEND DEVELOPER</p>
            </div>
          </div>
          <ul className="gap flex w-full flex-col items-center">
            <li className="w-full">
              <MenuLink
                href="/home"
                label="Home"
                className={useActiveLink('/home', locale)}
              >
                <IconCompassFilled size={24} stroke={1} />
              </MenuLink>
            </li>
            <li className="w-full">
              <MenuLink
                href="/experience"
                label="Experience"
                className={useActiveLink('/experience', locale)}
              >
                <IconBriefcase size={24} stroke={1} />
              </MenuLink>
            </li>
            <li className="w-full">
              <MenuLink
                href="/projects"
                label="Projects"
                className={useActiveLink('/projects', locale)}
              >
                <IconCode size={24} stroke={1} />
              </MenuLink>
            </li>
            <li className="w-full">
              <MenuLink
                href="/resume.pdf"
                label="Contact"
                className={useActiveLink('/resume.pdf', locale)}
              >
                <IconAddressBook size={24} stroke={1} />
              </MenuLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay to close menu on click */}
      {isOpen && (
        <div
          className="bg-black fixed inset-0 z-30 bg-opacity-50 sm:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export { Navigation };
