'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Expertise } from '@/components/expertise';
import Header from '@/components/header-banner';
import { ProjectSection } from '@/components/project-section';
import { WorkExperience } from '@/components/work-experience';
import { useToggle } from 'react-use';
import { Slug } from '../../sanity.types';
import { Link } from '../components/link';

const Home = ({ slugs }: { slugs: Slug[] }) => {
  const [isOpen, toggleMenu] = useToggle(true);
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu(!isOpen);
  };
  console.log(slugs, 'slugs page');
  return (
    <>
      <header className="fixed top-0 z-20 flex w-screen items-center justify-between bg-white px-6 py-4 text-sm shadow-md lg:px-12 lg:py-6">
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
                label="Contact me"
                href="mailto:jacob.salazaku@student.kdg.be"
                variant="github"
                aria-label="Contact me"
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
              variant="menuItem"
              label="Home"
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
              className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
              onClick={handleToggleMenu}
              aria-label="Work Experience"
              label="Work Experience"
              variant="menuItem"
            />
            <div className="pt-10">
              <Link
                label="Contact me"
                href="mailto:jacob.salazaku@student.kdg.be"
                variant="github"
                aria-label="Contact me"
                target="_blank"
              />
            </div>
          </li>
        </ul>
      </nav>
      <Header />
      <Expertise />
      <ProjectSection slugs={slugs} />
      <WorkExperience title="Work Experience">
        <div className="flex flex-col gap-8">
          <p>
            Momenteel werk ik als student bij Spotworkshops als frontend
            developer, een platform dat mensen helpt bij het vinden en boeken
            van unieke en inspirerende workshops. Hier draag ik bij aan de
            ontwikkeling van gebruiksvriendelijke en aantrekkelijke interfaces.
          </p>
          <p>
            Met deze studentenjob krijg ik de kans om veel bij te leren en
            tegelijkertijd extra geld te verdienen, wat ideaal is als student.
          </p>
          <p>De technologieen die hier worden gerbuikt zijn:</p>
          {/* <TechnologiesUsed techStack={SpotWorkshopStack} /> */}
        </div>
      </WorkExperience>
    </>
  );
};
export default Home;
