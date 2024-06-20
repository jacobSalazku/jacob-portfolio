'use clinet';

import Image from 'next/image';
import { Link, ProjectFeatures, TechnologiesUsed } from '@/components';
import { kdgStageStack } from '@/data';
import { Navigation } from '@/features/navigation';
import { IconBrandGithub } from '@tabler/icons-react';

const Stage: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="mt-20 flex flex-col items-start">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-10 px-4 py-12 md:py-16 lg:flex-row lg:gap-0 lg:px-0 lg:py-20">
            <div className="flex justify-center md:w-2/3 lg:hidden">
              <Image
                alt="Karel de Grote stage website"
                src="/detail-stage.png"
                width={600}
                height={600}
                className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 px-4 lg:w-1/2 lg:px-12">
              <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
                KDG Stage Site
              </h1>
              <p className="text-md">
                Currently, we students are experiencing many difficulties in
                obtaining a list of all the companies that are looking for
                interns. Therefore, in this project we focus on solving this
                problem by developing a simple but clear platform where
                companies can register.
              </p>
              <p className="text-md">
                During registration, companies can clearly indicate in which
                sector they operate and what skills they are looking for in
                trainees. This platform allows us, students, to filter by our
                skills (such as Front-end, Back-end, UX/UI, and so on) and then
                displays the available internships that meet our criteria
              </p>
              <Link
                label="Github"
                rel="stylesheet"
                variant="github"
                href="https://github.com/jacobSalazku/kdg-stage"
              >
                <IconBrandGithub color="#fff0db" />
              </Link>
            </div>
            <div className="hidden justify-center md:w-2/3 lg:flex">
              <Image
                alt="Karel de Grote stage website"
                src="/detail-stage.png"
                width={600}
                height={600}
                className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
              />
            </div>
          </div>
          <div className="flex w-screen flex-row justify-center bg-purple-2 py-12 md:py-16 lg:py-12">
            <div className="flex w-full max-w-[1440px] flex-col justify-start space-y-6  px-12">
              <h2 className="text-2xl font-bold text-beige-1 md:text-3xl lg:text-4xl">
                Frontend
              </h2>
              <p className="text-white">
                In this project, I developed the frontend of the website. and
                used the following technologies:
              </p>
              <TechnologiesUsed techStack={kdgStageStack} />
            </div>
          </div>
          <ProjectFeatures>
            <div className="flex w-full flex-col gap-4 space-y-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  Registration
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Companies can register and clearly specify what sector and
                  skills they are looking for.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  Filtering systeem
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  As a student, you will be able to filter between the profiles
                  UX/UI , Front-end, Back-end, 3D, Audio Video and will be
                  displayed as a badge
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  Language toggle switch
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The website is available in several languages
                </p>
              </div>
            </div>
          </ProjectFeatures>
        </div>
      </section>
    </>
  );
};
export { Stage };
