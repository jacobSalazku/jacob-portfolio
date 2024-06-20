'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Link } from '@/components';
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
        <div className="flex w-full max-w-[1440px] flex-col justify-center">
          <div className="fixed mt-20 flex w-screen items-center justify-between bg-white p-8 px-8 lg:static lg:mt-0 lg:w-full lg:rounded-xl lg:border-none lg:p-4 lg:px-12">
            <a className="w-1/2 text-lg">Jacob Salazaku</a>
            <nav className="hidden h-16 max-w-[1440px] flex-row items-center justify-between transition-all ease-in-out lg:flex lg:w-1/2">
              <NextLink
                href="/"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Home
              </NextLink>
              <NextLink
                href="/#projects"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Projects
              </NextLink>
              <NextLink
                href="/#experience"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Work Experience
              </NextLink>
              <Link
                label="Contact me"
                href="mailto:jacob.salazaku@student.kdg.be"
                variant="github"
              />
            </nav>
            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1 transition-all duration-200 ease-in-out lg:hidden"
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
        <ul className="flex w-full flex-col items-center border-t-2">
          <NextLink
            href="/"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Home
          </NextLink>
          <NextLink
            href="/#projects"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Projects
          </NextLink>
          <NextLink
            href="/#experience"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Work Experience
          </NextLink>
          <Link
            label="Contact me"
            href="mailto:jacob.salazaku@student.kdg.be"
            variant="github"
          />
        </ul>
      </nav>
    </>
  );
};

export { Navigation };
