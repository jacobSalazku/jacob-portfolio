'use client';

import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@/components';
import { useToggle } from 'react-use';

export function page() {
  const [isOpen, toggleMenu] = useToggle(true);
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu(!isOpen);
  };
  return (
    <main className="mx-auto my-0 flex min-h-screen max-w-[1240px] flex-col items-center overflow-hidden">
      <header className="fixed z-20 flex w-screen flex-col items-center justify-between bg-white text-sm drop-shadow-md">
        <div className="flex w-full max-w-[1240px] flex-col justify-center">
          <div className="fixed mt-20 flex w-screen items-center justify-between bg-white p-8 px-8 lg:static lg:mt-0 lg:w-full lg:rounded-xl lg:border-none lg:p-4 lg:px-12">
            <a className="w-auto text-lg">Jacob Salazaku</a>
            <nav className="hidden h-20 max-w-[1240px] flex-row items-center justify-between transition-all duration-75 ease-in-out lg:flex lg:w-1/2">
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

            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1 transition-all duration-75 ease-in-out lg:hidden"
            >
              {isActive ? (
                <>
                  <span className="absolute block h-1 w-8 rotate-45 transform bg-gray-600 transition-transform duration-75"></span>
                  <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
                  <span className="absoluteb lock h-1 w-8 -rotate-45 transform bg-gray-600 transition-transform duration-75"></span>
                </>
              ) : (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-75"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all duration-75"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-75"></span>
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

      <section className="lg:bg-blue-1 flex h-full w-screen flex-row items-center bg-gradient-to-b from-purple-1 to-purple-2 lg:flex-col lg:px-12 lg:py-24">
        <div className="relative flex w-full max-w-[1240px] flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex h-[730px] w-full flex-col items-center justify-center gap-3 px-12 py-24 lg:w-1/2 lg:items-start">
            <div className="absolute top-32 z-0 h-full w-full flex-col items-center lg:hidden">
              <Image
                className="absolute h-full w-full object-cover"
                src="/smoke.png"
                alt="Mijn Portfolio"
                width={4000}
                height={4080}
              />
            </div>
            <h1 className="text-beige-1 text-4xl font-medium transition-transform lg:text-5xl">
              Jacob Salazaku
            </h1>
            <h2 className="mb-4 text-lg font-light text-white transition-transform lg:text-2xl">
              Front-end Webdeveloper
            </h2>
            <p className="pb-4 text-center text-white lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="z-20 flex flex-col gap-6 lg:flex-row">
              <Link
                variant="ghost"
                label="Linkedin"
                href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
                size="md"
              />
              <Link
                variant="ghost"
                label="Github"
                href="https://github.com/jacobSalazku"
                size="md"
              />
            </div>
            {/* <p>
            Hi, I'm Jacob, a Front-end Webdeveloper from Antwerp who has been
            fascinated by technology and computers since forever. I am currently
            attending Karel de Grote Hogeschool, studying Multimedia and
            Creative Technology.
    </p>*/}
          </div>
          <div className="top-100 absolute left-32 hidden h-full w-full flex-col items-center lg:flex">
            <Image
              src="/headerpicture.png"
              alt="Mijn Portfolio"
              width={2000}
              height={1080}
            />
          </div>
        </div>
      </section>
      <section className="flex h-full w-screen flex-col items-center gap-6 bg-gradient-to-b px-12 py-12 transition-all duration-75 ease-in-out md:gap-20 md:py-24 lg:justify-center">
        <div className="flex w-full flex-row items-center justify-center">
          <Image
            src="/skills-1.png"
            alt="coding skills"
            height={300}
            width={200}
            className="hidden md:block"
          />
          <h2 className="text-3xl font-light text-purple-1 transition-transform lg:text-5xl">
            My Expertise
          </h2>
        </div>
        <div className="to-purple-3 flex w-screen justify-center md:py-12">
          <div className="flex w-full max-w-7xl flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <Image
              src="/javascript.png"
              alt="javascript"
              height={100}
              width={200}
              className="border-beige-1 h-12 cursor-pointer rounded-lg border p-1"
            />
            <Image
              src="/typescript.png"
              alt="Typescript"
              height={50}
              width={200}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/mysql.png"
              alt="Mysql"
              height={25}
              width={150}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/laravel.png"
              alt="Laravel"
              height={25}
              width={200}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/sass.png"
              alt="Sass"
              height={25}
              width={150}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/nextjs.png"
              alt="NextJ"
              height={25}
              width={150}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/vuejs.png"
              alt="Vue"
              height={50}
              width={150}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/react.png"
              alt="React"
              height={50}
              width={150}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
            <Image
              src="/tailwind.png"
              alt="Tailwind"
              height={50}
              width={200}
              className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
            />
          </div>
        </div>
        <div className="justify-center py-24"></div>
      </section>

      <section className=" flex h-full w-screen flex-row items-center lg:flex-col lg:px-12 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
          Featured Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
            <img
              alt="Project 1"
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 p-6 transition-all duration-500 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-gray-50">Project 1</h3>
              <p className="mt-2 text-sm text-gray-300">
                A brief description of the project.
              </p>
              <div className="absolute bottom-6 left-6 flex space-x-4">
                <NextLink
                  className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                  href="#"
                >
                  View
                </NextLink>
                <NextLink
                  className="inline-flex items-center rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300"
                  href="#"
                >
                  Code
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default page;
