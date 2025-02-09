import { Slug } from '../../sanity.types';
import { ProjectCard } from './project-card';

const ProjectSection = ({ slugs }: { slugs: Slug[] }) => {
  const projects = slugs.filter((slug) => slug.current?.includes('project'));
  console.log(projects);
  return (
    <section className="flex h-full w-screen flex-col items-center gap-8 bg-purple-2 py-24 lg:px-12">
      <h2 className="pb-12 text-3xl font-light text-white transition-transform lg:text-5xl">
        Featured Projects
      </h2>
      <div
        id="projects"
        className="transform-all flex max-w-screen-2xl flex-col flex-wrap justify-center gap-12 px-4 transition-all duration-150 ease-in-out sm:flex-row lg:flex-row"
      >
        <ProjectCard
          title="ResQControl"
          route={`/projects/resqcontrol`}
          description=" Resqcontrol is a company that offers various services, including a
							dispatch platform for first aid at festivals. In addition they
							also offer services in human resource management and Pcare"
          imageSrc="/detail-resq.png"
          imageAlt="Resqcontrol website"
        >
          <div>
            <p>
              Resqcontrol is a company that offers various services, including a
              dispatch platform for first aid at festivals. In addition they
              also offer services in human resource management and Pcare
            </p>
            <br />
            <p>
              They needed one more thing: a website. This is where I worked on
              the frontend.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="KDG Stage site"
          route={`/projects/kdg-stage`}
          description="  A clear internship platform where companies can register and
							detail the sectors in which they are active and what skills they
							have"
          imageSrc="/detail-stage.png"
          imageAlt="Karel de Grote stage website"
        >
          <div>
            <p>
              A clear internship platform where companies can register and
              detail the sectors in which they are active and what skills they
              have
            </p>
            <br />
            <p>
              This platform allows companies to present their internships
              presented in a structured way, allowing potential interns can
              easily see which companies offer internships offer that match
              their studies and skills.
            </p>
            <p> here I worked mainly on the user interface of the site</p>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
};

export { ProjectSection };
