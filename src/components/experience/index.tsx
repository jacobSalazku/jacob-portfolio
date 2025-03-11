import { FC } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { getTranslations } from 'next-intl/server';
import { Experience, Project } from '../../../sanity.types';
import Breadcrumbs from '../breadcrums';
import { KeyFeatures } from '../key-features';
import { Link } from '../Link/link';
import PortableTextRenderer from '../portable-text-render';
import { LibraryUsed } from './library-used';

type ExperienceDetailPageProps = {
  data: Experience;
  params: { locale: number };
};

const ExperienceDetailPage: FC<ExperienceDetailPageProps> = async ({
  params,
  data,
}) => {
  const { locale } = params;

  if (!data) return null;

  const { mainImage, title, text, tags, tasks, project, slug } =
    data as Experience & { project: Project };

  const t = await getTranslations('Projects');

  return (
    <section className="flex w-full flex-col items-start px-8 md:px-10 lg:max-w-screen-lg">
      <Breadcrumbs
        items={[
          {
            label: 'Experience',
            href: '/experience/',
          },
          { label: title, href: `/experience/${slug?.current}` },
        ]}
      />
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-between gap-4 py-12 md:py-16 lg:flex-row lg:gap-0 lg:py-20 lg:pr-10">
          <div className="lg:1/2 flex w-full flex-col items-start justify-center gap-4 text-white xl:w-2/3 xl:px-12">
            <h1 className="mb-4 text-3xl font-light text-white">{title}</h1>
            <div className="font-thin ">
              {text?.[locale] && (
                <PortableTextRenderer value={text?.[locale]} />
              )}
            </div>
          </div>
          <div className="justify-center lg:flex lg:w-1/2 xl:w-1/3">
            <div className="flex w-full items-center justify-center">
              <Image
                alt={mainImage?.alt || 'Project image'}
                src={mainImage ? urlFor(mainImage).width(250).url() : ''}
                width={250}
                height={250}
                className="max-h-80 max-w-80 rounded-3xl p-1 shadow-xl lg:w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center border-y border-white border-opacity-30 py-12 md:py-16 lg:py-12">
          <LibraryUsed tags={tags} />
        </div>
        <KeyFeatures title={t('feature-title')}>
          {tasks?.[locale] && <PortableTextRenderer value={tasks?.[locale]} />}
          {(project as Project) && project.slug && (
            <Link
              href={`/projects/${project.slug.current}`}
              variant="ghost"
              className="w-1/3"
            >
              Lees meer over {project.slug.current}
            </Link>
          )}
        </KeyFeatures>
      </div>
    </section>
  );
};

export default ExperienceDetailPage;
