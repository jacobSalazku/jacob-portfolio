'use client';

import Image from 'next/image';
import { ProjectFeatures } from '@/components/projects/project-features';
import { TechnologiesUsed } from '@/components/projects/technologies-used';
import { resqcontrolStack } from '@/data';
import { Navigation } from '@/features/navigation';
import { useTranslations } from 'next-intl';
import { Project } from '../../../../sanity.types';

const Resqcontrol: React.FC<{ project: Project }> = ({ project }) => {
  const t = useTranslations('Resqcontrol');
  return (
    <>
      <Navigation />
      <section className="mt-20 flex flex-col items-start">
        <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-10 px-4 py-12 md:py-16 lg:flex-row lg:gap-0 lg:px-0 lg:py-20">
            <div className="flex justify-center md:w-2/3 lg:hidden">
              {/* <Image
                alt="Resqcontrol website"
                src="/detail-resq.png"
                width={600}
                height={600}
                className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
              /> */}
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 px-4 lg:w-1/2 lg:px-12">
              <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
                {t('title')}
              </h1>
              <p className="text-md">{t('description-1')}</p>
              <p className="text-md">{t('description-2')}</p>
            </div>
            <div className="hidden justify-center md:w-2/3 lg:flex">
              <Image
                alt={`${t('alt')}`}
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
              <p className="text-white">{t('technologies')}</p>
              <TechnologiesUsed techStack={resqcontrolStack} />
            </div>
          </div>
          <ProjectFeatures>
            <div className="flex flex-col gap-4 space-y-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  {t('ProjectFeatures.DemoRequest')}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {t('ProjectFeatures.DemoRequestDescription')}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  {t('ProjectFeatures.Blogpost')}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t('ProjectFeatures.BlogpostDescription')}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-extrobold text-2xl text-black">
                  {t('ProjectFeatures.Internationalization')}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t('ProjectFeatures.InternationalizationDescription')}
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
