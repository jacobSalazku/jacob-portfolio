'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Link } from '@/components/link';
import { useToggle } from 'react-use';

const Navigation: React.FC = () => {
  const [isOpen, toggleMenu] = useToggle(true);
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu(!isOpen);
  };
  return (
    <>
      <header className="fixed z-20 flex w-screen flex-col items-center justify-between bg-white text-sm drop-shadow-md">
        <div className="flex w-full max-w-screen-2xl flex-col justify-center">
          <div className="fixed mt-20 flex w-screen items-center justify-between bg-white p-8 px-8 lg:static lg:mt-0 lg:w-full lg:rounded-xl lg:border-none lg:p-4 lg:px-12">
            <NextLink className="w-1/2 text-lg" href="/">
              Jacob Salazaku
            </NextLink>
            <nav className="hidden h-16 max-w-screen-2xl flex-row items-center justify-between transition-all ease-in-out lg:flex lg:w-1/2">
              <Link
                href="/"
                onClick={handleToggleMenu}
                aria-label="Home"
                label="Home"
                variant="menuItem"
              />
              <Link
                href="/#projects"
                onClick={handleToggleMenu}
                aria-label="Projects"
                label="Projects"
                variant="menuItem"
              />
              <Link
                href="/#experience"
                onClick={handleToggleMenu}
                aria-label="Work Experience"
                label="Work Experience"
                variant="menuItem"
              />
              <Link
                label="Contact"
                href="mailto:jacob.salazaku@student.kdg.be"
                variant="github"
                aria-label="Contact me"
                size="lg"
              />
            </nav>
            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1 transition-all duration-200 ease-in-out lg:hidden"
              aria-label="Menu button"
            >
              {isActive ? (
                <>
                  <span className="absolute block h-1 w-8 rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
                  <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
                  <span className="absoluteb lock h-1 w-8 -rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
                </>
              ) : (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`no-scroll fixed z-20 mt-20 h-screen w-screen bg-white transition-all duration-75 ease-in-out lg:hidden ${!isOpen ? 'translate-x-0' : '-translate-x-full overflow-hidden'}`}
      >
        <ul>
          <li className="flex w-full flex-col items-center border-t-2">
            <Link
              href="/"
              onClick={handleToggleMenu}
              aria-label="Home"
              label="Home"
              variant="menuItem"
            />
            <Link
              href="/#projects"
              onClick={handleToggleMenu}
              aria-label="Projects"
              label="Projects"
              variant="menuItem"
            />
            <Link
              href="/#experience"
              onClick={handleToggleMenu}
              aria-label="Experience"
              label="Experience"
              variant="menuItem"
            />
            <Link
              label="Contact"
              href="mailto:jacob.salazaku@student.kdg.be"
              variant="github"
              aria-label="Contect me"
              target="_blank"
              size="lg"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navigation };
