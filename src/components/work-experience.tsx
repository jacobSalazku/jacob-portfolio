import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Sectionprops } from '@/types/types';

const WorkExperience: React.FC<Sectionprops> = ({ title, children }) => {
  return (
    <div id="experience" className="flex w-screen justify-center bg-purple-3">
      <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center border-t border-beige-1 px-8 py-20 md:px-12 lg:flex-row lg:justify-between lg:gap-8">
        <div className="flex flex-row items-center justify-center py-20 lg:w-1/2">
          <div className="flex w-full justify-center">
            <Link
              href="https://spotworkshops.be/nl-be"
              className="h-2/3 w-full rounded-3xl border-8 border-beige-1 bg-white py-20 shadow-2xl"
            >
              <Image
                alt="Resqcontrol website"
                src="/logo-spot.png"
                width={600}
                height={600}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 text-purple-2 lg:w-1/2 lg:justify-start lg:p-6 lg:py-28">
          <div className="flex w-full justify-start">
            <h2 className="hidden w-80 justify-center rounded-lg border border-purple-2 px-4 py-4 text-3xl font-bold text-purple-2 lg:flex">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export { WorkExperience };
