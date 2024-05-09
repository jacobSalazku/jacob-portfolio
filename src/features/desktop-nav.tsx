'use client';

import { Link } from '@components/link';
import { useActiveLink } from './hooks';

const NavBar = () => {
  return (
    <nav className="relative z-30 mx-auto hidden w-full max-w-[1240px] px-8 py-3 md:px-12 lg:block">
      <div className="bg-transparant flex w-auto items-center justify-between rounded-lg py-4 md:px-4 lg:bg-white">
        <Link className="px-0" href="/" label="" variant="navlink">
          <div className="flex h-[50px] w-[120px] flex-col justify-center transition-all md:w-[180px] "></div>
        </Link>
        <div className="flex h-full w-full max-w-[475px] flex-row justify-around">
          <ul className="hidden flex-row items-center gap-2 lg:flex">
            <Link
              className={useActiveLink('/')}
              href="/"
              label="Home"
              variant="navlink"
            />
            <Link
              className={useActiveLink('/about')}
              href="/about"
              label="About"
              variant="navlink"
            />
            <div className="relative"></div>
            <Link
              className={useActiveLink('/projects')}
              href="/projects"
              label="Projects"
              variant="navlink"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
