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
      <header className="fixed top-0 z-20 flex w-screen items-center justify-center bg-white px-6 py-4 text-sm shadow-md lg:px-12 lg:py-6">
        <div className="w-full max-w-screen-2xl justify-between">
          <div className="flex w-full items-center justify-center bg-white p-4 lg:rounded-xl lg:border-none lg:px-12">
            {/* <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-white px-6 py-4 text-sm shadow-md lg:px-12 lg:py-6"> */}
            <NextLink href="/" passHref>
              <p className="text-lg">Jacob Salazaku</p>
            </NextLink>
            <nav className="hidden lg:flex lg:w-1/2 lg:flex-row lg:items-center">
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
              className="lg:hidden"
              aria-label="Menu button"
            >
              {isActive ? (
                <>
                  <span className="block h-1 w-8 rotate-45 transform bg-gray-600 transition duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-0 transition duration-200"></span>
                  <span className="block h-1 w-8 -rotate-45 transform bg-gray-600 transition duration-200"></span>
                </>
              ) : (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition duration-200"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`fixed top-20 z-20 h-screen w-full bg-white lg:hidden ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
        onClick={handleToggleMenu}
      >
        <ul className="flex h-full w-full flex-col items-center">
          <li className="w-full border-t-2">
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
              aria-label="Contact me"
              size="lg"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navigation };
