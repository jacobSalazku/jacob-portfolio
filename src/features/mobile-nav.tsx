'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useToggle } from 'react-use';
import { useActiveLink } from './hooks';

const MobileNavBar: React.FC = () => {
  const [isOpen, toggleMenu] = useToggle(false);
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
    toggleMenu();
  };

  return (
    <div className="flex w-full max-w-[1400px] flex-col items-center lg:hidden">
      <div
        className={`no-scroll absolute mt-28 flex h-screen w-full max-w-[1240px] flex-col items-center bg-white px-8 transition-all duration-200 ease-in-out md:px-12 ${
          !isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <ul className="w-full flex flex-col items-center py-20 gap-5">
          <Link
            aria-description="Go to Homepage"
            aria-label="Homepage"
            className={`flex w-screen justify-start py-5 border-2 border-black hover:bg-slate-50 hover:text-blue hover:ease-in-out ${useActiveLink(
              '/',
            )}`}
            href="/"
            onClick={handleToggleMenu}
          >
            Home
          </Link>
        </ul>
      </div>
    </div>
  );
};

export { MobileNavBar };
