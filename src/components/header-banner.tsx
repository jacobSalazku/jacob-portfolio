import Image from 'next/image';
import { Link } from './link';

const Header = () => {
  return (
    <section className="lg:bg-blue-1 transotion-all mt-20 flex h-screen w-screen flex-row items-center overflow-hidden bg-gradient-to-b from-purple-1 to-purple-2 md:h-full lg:flex-col lg:px-12 lg:py-24">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex h-[730px] w-full flex-col items-center justify-center gap-3 px-12 py-24 lg:w-1/2 lg:items-start">
          <div className="absolute top-32 z-0 h-full w-full flex-col items-center overflow-hidden lg:hidden">
            <Image
              className="absolute h-full w-full object-cover"
              src="/smoke.png"
              alt="Mijn Portfolio"
              width={4000}
              height={4080}
            />
          </div>
          <h1 className="text-4xl font-medium text-beige-1 transition-transform lg:text-5xl">
            Jacob Salazaku
          </h1>
          <h2 className="mb-4 text-lg font-light text-white transition-transform lg:text-2xl">
            Front-end Webdeveloper
          </h2>
          <Image
            src="/header-phone.png"
            alt="Mijn Portfolio"
            width={600}
            height={400}
            className="block transition-transform lg:hidden"
          />
          <p className="pb-4 text-center text-white lg:text-left">
            I'm a 22 year old Multimedia and Creative Technology student from
            Antwerp, Belgium. I have a passion for creating beautiful and
            functional websites.
          </p>
          <div className="z-10 flex flex-col gap-6 sm:flex-row">
            <Link
              variant="ghost"
              label="Linkedin"
              href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
              size="md"
            />
            <Link
              variant="ghost"
              label="Github"
              href="https://github.com/jacobSalazku"
              size="md"
            />
          </div>
          {/* 
            s<p>
                Hi, I'm Jacob, a Front-end Webdeveloper from Antwerp who has been
                fascinated by technology and computers since forever. I am currently
                attending Karel de Grote Hogeschool, studying Multimedia and
                Creative Technology.
            </p>
            */}
        </div>
        <div className="top-100 absolute left-32 hidden h-full w-full flex-col items-center lg:flex">
          <Image
            src="/headerpicture.png"
            alt="Mijn Portfolio"
            width={2000}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export { Header };
