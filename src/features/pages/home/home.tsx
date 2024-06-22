'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Expertise,
  Header,
  ProjectSection,
  TechnologiesUsed,
  WorkExperience,
} from '@/components';
import { SpotWorkshopStack } from '@/data';
import { MenuButton } from '@/features/menu-button';
import { useToggle } from 'react-use';

const HomePage = () => {
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
            <a className="w-1/2 text-lg">Jacob Salazaku</a>
            <nav className="hidden h-16 max-w-screen-2xl flex-row items-center justify-between transition-all ease-in-out lg:flex lg:w-1/2">
              <Link
                href="/"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Home
              </Link>
              <Link
                href="projects"
                className="flex flex-col items-center py-5 text-lg"
                onClick={handleToggleMenu}
              >
                Projects
              </Link>
              <Link
                href="#experience"
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
            href="#experience"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Work Experience
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
            onClick={handleToggleMenu}
          >
            Projects
          </Link>
        </ul>
      </nav>
      <Header />
      <Expertise />
      <ProjectSection />
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

          <TechnologiesUsed techStack={SpotWorkshopStack} />
        </div>
      </WorkExperience>
    </>
  );
};
export { HomePage };
