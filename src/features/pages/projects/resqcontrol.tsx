import Image from 'next/image';
import { TechnologiesUsed } from '@/components';
import { resqcontrolStack } from '@/data';

const Resqcontrol: React.FC = () => {
  return (
    <section className="pt-20">
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col justify-between gap-10 px-6 py-12 md:px-6 md:py-16 lg:flex-row lg:px-8 lg:py-20">
          <div className="flex w-full flex-col items-start justify-center space-y-6 px-12 lg:w-1/2">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
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
          <div className="flex justify-center md:w-2/3">
            <Image
              alt="Resqcontrol website"
              src="/detail-resq.png"
              width={600}
              height={600}
              className="rounded-3xl border-4 border-beige-1 shadow-xl lg:w-full"
            />
          </div>
        </div>
        <div className="bg-purple-2 py-12 md:py-16 lg:px-12 lg:py-12">
          <div className="max-w-[1440px] space-y-6 px-8">
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
        <div className="rounded-3xl border border-black px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Project Features
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Demo Request</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Om vragen te stellen of een demo aan te vragen, moest er een
                  manier zijn om contact op te nemen met Resqcontrol. Daarvoor
                  moest er een functie zijn die alle informatie opslaat en
                  verstuurt naar het Resqcontrol e-mailadres. Om spam te
                  voorkomen, heb ik ook gebruikgemaakt van Google Captcha.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Blogpost</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Voor de Blog pagina worden alle blogpages vanuit de backend
                  opgehaald en weergeven in de frontend en daarnaast ook een
                  detailpage
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Internationalization and localization
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Elke pagina is beschikbaar in het Nederlands en Engels, Frans
                  duits. Daarbij word gedetecteerd welke taal de gebruiker
                  spreekt en word de website automatisch in die taal weergegeven
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Resqcontrol };
