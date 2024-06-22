'use client';

import Image from 'next/image';
import { ProjectFeatures, TechnologiesUsed } from '@/components';
import { resqcontrolStack } from '@/data';
import { Navigation } from '@/features/navigation';

const Resqcontrol: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="mt-20 flex flex-col items-start">
        <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-10 px-4 py-12 md:py-16 lg:flex-row lg:gap-0 lg:px-0 lg:py-20">
            <div className="flex justify-center md:w-2/3 lg:hidden">
              <Image
                alt="Resqcontrol website"
                src="/detail-resq.png"
                width={600}
                height={600}
                className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 px-4 lg:w-1/2 lg:px-12">
              <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
                Website ResQControl
              </h1>
              <p className="text-md">
                Resqcontrol is a company that offers various services, including
                a dispatch platform for first aid at festivals. In addition they
                also offer services in human resource management and Pcare
              </p>
              <p className="text-md">
                They needed one more thing: a website. This is where I worked on
                the frontend.
              </p>
            </div>
            <div className="hidden justify-center md:w-2/3 lg:flex">
              <Image
                alt="Resqcontrol website"
                src="/detail-resq.png"
                width={600}
                height={600}
                className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
              />
            </div>
          </div>
          <div className="flex w-screen flex-row justify-center bg-purple-2 py-12 md:py-16 lg:py-12">
            <div className="flex w-full max-w-screen-2xl flex-col justify-start space-y-6  px-12">
              <h2 className="text-2xl font-bold text-beige-1 md:text-3xl lg:text-4xl">
                Frontend
              </h2>
              <p className="text-white">
                In this project, I developed the frontend of the website. and
                used the following technologies:
              </p>
              <TechnologiesUsed techStack={resqcontrolStack} />
            </div>
          </div>
          <ProjectFeatures>
            <div className="flex flex-col gap-4 space-y-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  Demo Request
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  To ask questions or request a demo, there had to be a way to
                  contact Resqcontrol. For that there had to be a function that
                  stores and sends to the Resqcontrol email address. To prevent
                  spam prevent spam, I also used Google Captcha.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">Blogpost</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  For the Blog , all blogpages were retrieved from the backend
                  and displayed in the frontend as well as a detailpage
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  Internationalization and localization
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Each page was available in Dutch and English, French German.
                  It detects which language the user and the website is
                  automatically displayed in that language.
                </p>
              </div>
            </div>
          </ProjectFeatures>
        </div>
      </section>
    </>
  );
};
export { Resqcontrol };
