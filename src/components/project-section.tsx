import { ProjectCard } from './project-card';

const ProjectSection = () => {
  return (
    <section className="flex h-full w-screen flex-col items-center gap-8 bg-purple-2 py-24 lg:px-12">
      <h2
        id="projects"
        className="pb-12 text-3xl font-light text-white transition-transform lg:text-5xl"
      >
        Featured Projects
      </h2>
      <div className="transform-all flex max-w-[1440px] flex-col flex-wrap justify-center gap-12 px-4 transition-all duration-150 ease-in-out sm:flex-row lg:flex-row">
        <ProjectCard
          title="ResQControl"
          route="resqcontrol"
          description="Resqcontrol is een bedrijf dat diverse diensten aanbiedt, zoals
              een dispatchplatform voor eerste hulp bij festivals. Daarnaast
              bieden ze ook diensten aan op het gebied van human resource
              management en Pcare"
          imageSrc="/detail-resq.png"
          imageAlt="Resqcontrol website"
        >
          <div>
            <p>
              Resqcontrol is een bedrijf dat diverse diensten aanbiedt, zoals
              een dispatchplatform voor eerste hulp bij festivals. Daarnaast
              bieden ze ook diensten aan op het gebied van human resource
              management en Pcare"
            </p>
            <br />
            <p>
              Ze hadden nog één ding nodig: een website. Hier heb ik aan de
              frontend gewerkt.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="KDG Stage site"
          route="/kdg-stage"
          description="Momenteel ervaren studenten veel moeilijkheden bij het verkrijgen van een overzicht van alle bedrijven die op zoek zijn naar stagiairs. 
          Ons project richt zich op het oplossen van dit probleem door het ontwikkelen van een eenvoudig maar overzichtelijk platform waar bedrijven zich kunnen registreren. Tijdens de registratie kunnen bedrijven duidelijk aangeven in welke sector zij actief zijn en welke vaardigheden zij zoeken in stagiairs."
          imageSrc="/detail-stage.png"
          imageAlt="Karel de Grote stage website"
        >
          <div>
            <p>
              Een overzichtelijk stageplatform waar bedrijven zich kunnen
              registreren en gedetailleerd kunnen aangeven in welke sectoren ze
              actief zijn en welke vaardigheden
            </p>
            <br />
            <p>
              Dit platform biedt bedrijven de mogelijkheid om hun stageplaatsen
              op een gestructureerde manier te presenteren, waardoor potentiële
              stagiaires gemakkelijk kunnen zien welke bedrijven stages
              aanbieden die aansluiten bij hun studie en vaardigheden.
            </p>
            <p> hier heb ik vooral aan de ui gewerkt van de site</p>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
};

export { ProjectSection };
