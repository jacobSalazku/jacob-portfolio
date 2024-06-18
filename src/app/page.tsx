import {
  Expertise,
  Header,
  ProjectSection,
  TechnologiesUsed,
  WorkExperience,
} from '@/components';
import { SpotWorkshopStack } from '@/data';

export function Page() {
  return (
    <>
      {/* <header className="fixed z-20 flex w-screen flex-col items-center justify-between bg-white text-sm shadow-beige-1 drop-shadow-lg">
        <div className="flex w-full max-w-[1440px] flex-col justify-center">
          <div className="fixed mt-20 flex w-screen items-center justify-between bg-white p-8 px-8 lg:static lg:mt-0 lg:w-full lg:rounded-xl lg:border-none lg:p-4 lg:px-12">
            <a className="w-1/2 text-lg font-bold">Jacob Salazaku</a>
            <nav className="hidden h-16 max-w-[1440px] flex-row items-center justify-between bg-white text-purple-1 transition-all ease-in-out lg:flex lg:w-1/2">
              <NextLink
                href="/"
                className="flex flex-col items-center py-5 text-lg font-bold"
              >
                Home
              </NextLink>
              <NextLink
                href="#about"
                className="flex flex-col items-center py-5 text-lg font-bold"
              >
                About
              </NextLink>
              <NextLink
                href="#projects"
                className="flex flex-col items-center py-5 text-lg font-bold"
              >
                Projects
              </NextLink>
            </nav>

            <button
              onClick={handleToggleMenu}
              className="flex flex-col gap-1 transition-all duration-200 ease-in-out lg:hidden"
            >
              {isActive ? (
                <>
                  <span className="absolute block h-1 w-8 rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
                  <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
                  <span className="absoluteb lock h-1 w-8 -rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
                </>
              ) : (
                <>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all duration-200"></span>
                  <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`no-scroll fixed z-20 mt-20 h-screen w-screen bg-white transition-all duration-75 ease-in-out lg:hidden ${!isOpen ? 'translate-x-0' : '-translate-x-full overflow-hidden'}`}
      >
        <ul className="flex w-full flex-col items-center border-t-2">
          <NextLink
            href="/"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            Home
          </NextLink>
          <NextLink
            href="/about"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            About
          </NextLink>
          <NextLink
            href="#projects"
            className="hover:text-blue flex w-screen flex-col items-center border-b py-5 duration-75 hover:bg-slate-50 hover:ease-in-out"
          >
            Projects
          </NextLink>
        </ul>
      </nav> */}
      <Header />
      <Expertise />
      <ProjectSection />
      <WorkExperience title="Work Experience">
        <div className="flex flex-col gap-8">
          <p>
            Momenteel werk ik als student bij Spotworkshops als frontend
            developer, een platform dat mensen helpt bij het vinden en boeken
            van unieke en inspirerende workshops. Hier draag ik bij aan de
            ontwikkeling van gebruiksvriendelijke en aantrekkelijke interfaces.
          </p>
          <p>
            Met deze studentenjob krijg ik de kans om veel bij te leren en
            tegelijkertijd extra geld te verdienen, wat ideaal is als student.
          </p>
          <p>De technologieen die hier worden gerbuikt zijn:</p>

          <TechnologiesUsed techStack={SpotWorkshopStack} />
        </div>
      </WorkExperience>
    </>
  );
}
export default Page;
