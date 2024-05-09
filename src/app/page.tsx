'use client';

import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@/components';
import { useToggle } from 'react-use';

export function page() {
  const [isOpen, toggleMenu] = useToggle(false);
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu(!isOpen);
  };
  return (
    <main className="mx-auto my-0 flex min-h-screen max-w-[1440px] flex-col items-center">
      <header className="fixed z-20 flex w-screen flex-col items-center justify-between bg-white text-sm drop-shadow-md">
        <div className="flex w-full max-w-[1440px] flex-col justify-center">
          <div className="fixed mt-20 flex w-screen items-center justify-between bg-white p-8 px-6 lg:static lg:mt-0 lg:w-full lg:rounded-xl lg:border-none lg:p-4 lg:px-12">
            <a className="w-1/3 text-lg">Jacob Salazaku</a>
            <nav className="hidden h-20 max-w-[1440px] flex-row items-center justify-between transition-all duration-75 ease-in-out lg:flex lg:w-1/2">
              <NextLink
                href="/"
                className="flex flex-col items-center py-5 text-lg"
              >
                Home
              </NextLink>
              <NextLink
                href="/about"
                className="flex flex-col items-center py-5 text-lg"
              >
                About
              </NextLink>
              <NextLink
                href="/projects"
                className="flex flex-col items-center py-5 text-lg"
              >
                Projects
              </NextLink>
            </nav>
            <Link
              variant="ghost"
              label="Linkedin"
              href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
            />
            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1 transition-all duration-75 ease-in-out lg:hidden"
            >
              {isActive ? (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-75"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all duration-75"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-75"></span>
                </>
              ) : (
                <>
                  <span className="absolute block h-1 w-8 rotate-45 transform bg-gray-600 transition-transform duration-75"></span>
                  <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
                  <span className="absoluteb lock h-1 w-8 -rotate-45 transform bg-gray-600 transition-transform duration-75"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`no-scroll fixed z-20 mt-20 h-screen w-screen bg-white transition-all duration-75 ease-in-out lg:hidden ${isOpen ? '-translate-x-full overflow-hidden' : 'translate-x-0'}`}
      >
        <ul className="flex w-full flex-col items-center border-t-2">
          <NextLink
            href="/"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            Home
          </NextLink>
          <NextLink
            href="/about"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            About
          </NextLink>
          <NextLink
            href="/projects"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            Projects
          </NextLink>
        </ul>
      </nav>

      <section className="lg:bg-blue-1 from-purple-1 to-purple-2 flex h-full w-screen flex-col items-center bg-gradient-to-b px-12 py-24">
        <div className="relative flex w-full max-w-[1440px] flex-col items-center lg:flex-row lg:justify-between">
          {/* <div className="mx-auto my-0 w-1/2">
          <img
            alt="Jared Palmer"
            className="mx-auto w-full max-w-[300px] rounded-full border-2 shadow-md shadow-slate-700"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: '1000/1000',
              objectFit: 'cover',
            }}
            width={500}
          />
        </div> */}
          <div className="flex h-[730px] w-1/2 flex-col items-start justify-center gap-3 px-12 py-24">
            <h1 className="text-3xl font-medium text-white transition-transform lg:text-6xl">
              Jacob Salazaku
            </h1>
            <h2 className="mb-4 text-lg font-light text-white transition-transform lg:text-4xl">
              Front-end Webdeveloper
            </h2>
            {/* <p>
            Hi, I'm Jacob, a Front-end Webdeveloper from Antwerp who has been
            fascinated by technology and computers since forever. I am currently
            attending Karel de Grote Hogeschool, studying Multimedia and
            Creative Technology.
    </p>*/}
          </div>
          <div className="absolute left-72 top-0 hidden flex-col items-center md:flex">
            <Image
              src="/headerpicture.png"
              alt="Mijn Portfolio"
              width={2000}
              height={1080}
            />
          </div>
        </div>
      </section>
      <section className="flex h-full w-screen flex-col items-center bg-slate-200 bg-gradient-to-b px-12 py-24">
        Skills
      </section>
      <section>Project</section>
    </main>
  );
}
export default page;
