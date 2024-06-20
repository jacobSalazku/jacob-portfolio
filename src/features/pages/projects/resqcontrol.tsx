import Image from 'next/image';
import { ProjectFeatures, TechnologiesUsed } from '@/components';
import { resqcontrolStack } from '@/data';

const Resqcontrol: React.FC = () => {
  return (
    <section className="mt-20 flex flex-col items-start">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-8">
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
              Resqcontrol is een bedrijf dat diverse diensten aanbiedt, zoals
              een dispatchplatform voor eerste hulp bij festivals. Daarnaast
              bieden ze ook diensten aan op het gebied van human resource
              management en Pcare
            </p>
            <p className="text-md">
              Ze hadden nog één ding nodig: een website. Hier heb ik aan de
              frontend gewerkt.
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
          <div className="flex w-full max-w-[1440px] flex-col justify-start space-y-6  px-12">
            <h2 className="text-2xl font-bold text-beige-1 md:text-3xl lg:text-4xl">
              Frontend
            </h2>
            <p className="text-white">
              In dit project heb ik de frontend van de website ontwikkeld. en
              gerbuitk gemaakt van de volgende technologieën:
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
                Om vragen te stellen of een demo aan te vragen, moest er een
                manier zijn om contact op te nemen met Resqcontrol. Daarvoor
                moest er een functie zijn die alle informatie opslaat en
                verstuurt naar het Resqcontrol e-mailadres. Om spam te
                voorkomen, heb ik ook gebruikgemaakt van Google Captcha.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-extrobold text-2xl text-black">Blogpost</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Voor de Blog pagina worden alle blogpages vanuit de backend
                opgehaald en weergeven in de frontend en daarnaast ook een
                detailpage
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-extrobold text-2xl text-black">
                Internationalization and localization
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elke pagina is beschikbaar in het Nederlands en Engels, Frans
                duits. Daarbij word gedetecteerd welke taal de gebruiker spreekt
                en word de website automatisch in die taal weergegeven
              </p>
            </div>
          </div>
        </ProjectFeatures>
      </div>
    </section>
  );
};
export { Resqcontrol };
