import Image from 'next/image';
import { ProjectFeatures } from '@/components/projects/project-features';
import { TechnologiesUsed } from '@/components/projects/technologies-used';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { getTranslations } from 'next-intl/server';
import { PortableText } from 'next-sanity';
import { Project } from '../../../../../sanity.types';
import { PROJECT_QUERY } from './_query';

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({
  params,
}: {
  params: { slug: string; locale: number };
}) {
  const { slug, locale } = await params;

  const t = await getTranslations('Projects');
  const project = await client.fetch<Project>(
    PROJECT_QUERY,
    { slug: slug },
    options,
  );

  const projectText = project.text?.[locale];
  const featureText = project.features?.[locale];

  return (
    <>
      <section className="mt-20 flex flex-col items-start">
        <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-10 px-4 py-12 md:py-16 lg:flex-row lg:gap-0 lg:px-0 lg:py-20 lg:pr-12">
            <div className="flex justify-center md:w-full lg:hidden">
              {project.mainImage && (
                <Image
                  alt={project.mainImage?.alt || 'Project image'}
                  src={urlFor(project.mainImage).url()}
                  width={600}
                  height={600}
                  className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
                />
              )}
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 px-4 lg:w-1/2 lg:px-12">
              <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
                {project.title}
              </h1>
              {projectText && <PortableText value={projectText} />}
            </div>
            <div className="hidden justify-center md:w-2/4 lg:flex">
              {project.mainImage && (
                <Image
                  alt={project.mainImage?.alt || 'Project image'}
                  src={urlFor(project.mainImage).url()}
                  width={600}
                  height={600}
                  className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
                />
              )}
            </div>
          </div>
          <div className="flex w-screen flex-row justify-center bg-purple-2 py-12 md:py-16 lg:py-12">
            <div className="flex w-full max-w-screen-2xl flex-col justify-start space-y-6 px-12">
              <h2 className="text-2xl font-bold text-beige-1 md:text-3xl lg:text-4xl">
                Frontend
              </h2>
              <p className="text-white">{t('technologies')}</p>

              {project.tags && (
                <TechnologiesUsed
                  techStack={
                    project.tags.map((tag) => ({
                      _id: tag._ref,
                      title: tag._type,
                    })) as { _id: string; title: string }[]
                  }
                />
              )}
            </div>
          </div>
          <ProjectFeatures>
            {featureText && <PortableText value={featureText} />}
          </ProjectFeatures>
        </div>
      </section>
    </>
  );
}
