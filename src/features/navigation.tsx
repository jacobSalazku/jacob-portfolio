'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useToggle } from 'react-use';
import { MenuButton } from './menu-button';

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
              <Link
                href="/"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Work Experience
              </Link>
            </nav>
            <MenuButton
              handleToggleMenu={handleToggleMenu}
              isActive={isActive}
            />
          </div>
        </div>
      </header>
      <nav
        className={`no-scroll fixed z-20 mt-20 h-screen w-screen bg-white transition-all duration-75 ease-in-out lg:hidden ${!isOpen ? 'translate-x-0' : '-translate-x-full overflow-hidden'}`}
      >
        <ul className="flex w-full flex-col items-center border-t-2">
          <Link
            href="/"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Work Experience
          </Link>
        </ul>
      </nav>
    </>
  );
};

export { Navigation };
