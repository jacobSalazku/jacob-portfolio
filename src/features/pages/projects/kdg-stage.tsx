import Image from 'next/image';
import { Link, ProjectFeatures, TechnologiesUsed } from '@/components';
import { kdgStageStack } from '@/data';
import { IconBrandGithub } from '@tabler/icons-react';

const Stage: React.FC = () => {
  return (
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
              Momenteel ervaren wij als studenten veel moeilijkheden bij het
              verkrijgen van een overzicht van alle bedrijven die op zoek zijn
              naar stagiairs. Daarom we bij deze project zich op het oplossen
              van dit probleem door het ontwikkelen van een eenvoudig maar
              overzichtelijk platform waar bedrijven zich kunnen registreren.
            </p>
            <p className="text-md">
              Tijdens de registratie kunnen bedrijven duidelijk aangeven in
              welke sector zij actief zijn en welke vaardigheden zij zoeken in
              stagiairs. Dit platform biedt ons, studenten, de mogelijkheid om
              te filteren op onze vaardigheden (zoals Front-end, Back-end,
              UX/UI, enzovoort) en toont vervolgens de beschikbare stageplaatsen
              die aan onze criteria voldoen
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
              In dit project heb ik de frontend van de website ontwikkeld. en
              gerbuitk gemaakt van de volgende technologieën:
            </p>
            <TechnologiesUsed techStack={kdgStageStack} />
          </div>
        </div>
        <ProjectFeatures>
          <div className="flex w-full flex-col gap-4 space-y-4">
            <div className="flex flex-col gap-3">
              <h3 className="font-extrobold text-2xl text-black">
                Registratie
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bedrijven kunnen zich registreren en duidelijk specificeren naar
                welke sector en vaardigheden ze op zoek zijn.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-extrobold text-2xl text-black">
                Filter systeem
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Als student zal je kunnen filter tussen de profielen UX/UI ,
                Front-end, Back-end, 3D, Audio Video
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-extrobold text-2xl text-black">
                Language toggle switch
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                De website is beschikbaar in verschillende talen
              </p>
            </div>
          </div>
        </ProjectFeatures>
      </div>
    </section>
  );
};
export { Stage };
