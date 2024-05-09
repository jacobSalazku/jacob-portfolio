'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useToggle } from 'react-use';

const Homepage: React.FC = () => {
  const [isOpen, toggleMenu] = useToggle(false);
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu(!isOpen);
  };
  return (
    <main className="flex min-h-screen max-w-[1240px] my-0 mx-auto flex-col items-center gap-20 lg:px-0">
      <header className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          <div className="fixed flex w-full items-center justify-between lg:justify-evenly border-gray-300 p-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-full  lg:rounded-xl lg:border-none lg:p-4">
            <a>Jacob Salazaku</a>
            <nav className="hidden transition-all lg:flex flex-row w-1/2 justify-around ease-in-out">
              <Link href="/" className="py-5 flex flex-col items-center">
                Home
              </Link>
              <Link href="/about" className="py-5 flex flex-col items-center">
                About
              </Link>
              <Link
                href="/projects"
                className="py-5 flex flex-col items-center"
              >
                Projects
              </Link>
            </nav>
            <button
              onClick={handleToggleMenu}
              className="lg:hidden flex flex-col gap-1 transition-all ease-in-out"
            >
              {isActive ? (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform"></span>
                </>
              ) : (
                <>
                  <span className="absolute block h-1 w-8 bg-gray-600 transform rotate-45 transition-transform"></span>
                  <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
                  <span className="absoluteb lock h-1 w-8 bg-gray-600 transform -rotate-45 transition-transform"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`no-scroll absolute mt-20 transition-all ease-in-out  w-screen h-screen bg-white lg:hidden ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
      >
        <ul className="flex flex-col items-center border-t-2">
          <Link
            href="/"
            className="w-screen py-5 flex flex-col items-center border-b hover:bg-slate-50 hover:text-blue hover:ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-screen py-5 flex flex-col items-center border-b hover:bg-slate-50 hover:text-blue hover:ease-in-out"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="w-screen py-5 flex flex-col items-center border-b hover:bg-slate-50 hover:text-blue hover:ease-in-out"
          >
            Projects
          </Link>
        </ul>
      </nav>
    </main>
  );
};
export { Homepage };
