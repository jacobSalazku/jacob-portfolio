import Image from 'next/image';
import { Link, TechnologiesUsed } from '@/components';
import { kdgStageStack } from '@/data';
import { IconBrandGithub } from '@tabler/icons-react';

const Stage: React.FC = () => {
  return (
    <section className="pt-20">
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col justify-between gap-10 px-6 py-12 md:px-6 md:py-16 lg:flex-row lg:px-8 lg:py-20">
          <div className="flex w-full flex-col items-start justify-center space-y-6 px-12 lg:w-1/2">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
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
          <div className="flex justify-center md:w-2/3">
            <Image
              alt="Karel de Grote stage website"
              src="/detail-stage.png"
              width={600}
              height={600}
              className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
            />
          </div>
        </div>
        <div className="bg-purple-2 py-12 md:py-16 lg:px-12 lg:py-12">
          <div className="max-w-3xl space-y-6 px-8">
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
        <div className="rounded-3xl border-4 border-black px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Project Features
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Registratie</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bedrijven kunnen zich registreren en duidelijk specificeren
                  naar welke sector en vaardigheden ze op zoek zijn.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Filter systeem
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Als student zal je kunnen filter tussen de profielen UX/UI ,
                  Front-end, Back-end, 3D, Audio Video
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Language toggle switcg
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  De website is beschikbaar in verschillende talen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Stage };
