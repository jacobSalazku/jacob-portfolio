import NextLink from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import { Link } from './link';

const Footer: React.FC = () => {
  return (
    <div className="w-screen bg-purple-1 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between px-4 py-6 lg:flex-row">
        <div className="flex w-full flex-col justify-start gap-8 px-4 py-6 text-white sm:px-12 lg:w-1/3">
          <p className="justofy-start flex w-full text-2xl text-white sm:justify-center lg:justify-start">
            Jacob Salazaku
          </p>
          <div className="flex flex-col justify-center gap-8 sm:flex-row lg:flex-col">
            <div className="flex flex-row items-center gap-3">
              <div>
                <IconMail color="#ffffff" height={16} width={16} />
              </div>
              <p>jacob.ssalazaku@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-start gap-3 px-4 py-6 text-white sm:flex-row sm:justify-center sm:px-12 lg:w-1/3 lg:flex-col">
          <div className="flex flex-row items-center gap-3 text-center">
            <NextLink href="/" aria-label="Home">
              Home
            </NextLink>
          </div>
          <div className="flex flex-row items-center gap-3">
            <NextLink href="/#projects" aria-label="Projects">
              Projects
            </NextLink>
          </div>
          <div className="flex flex-row items-center gap-3">
            <NextLink href="/#experience" aria-label="Work Experience">
              Work Experience
            </NextLink>
          </div>
          <div className="flex flex-row items-center gap-3">
            <NextLink
              href="mailto:jacob.salazaku@student.kdg.be"
              target="_blank"
              aria-label="Contact Me"
            >
              Contact Me
            </NextLink>
          </div>
        </div>
        <div className="flex h-full justify-center gap-3 px-6 py-6 sm:w-full lg:w-1/4">
          <div className="flex w-full flex-row justify-center gap-5 sm:gap-4 lg:flex-col">
            <div className="flex flex-row gap-3 text-center">
              <Link
                label="Linked In"
                variant="linkedin"
                href="https://www.linkedin.com/in/jacob-salazaku-8a20142b5/"
                target="_blank"
              >
                <IconBrandLinkedin color="#fff0db" height={40} width={40} />
              </Link>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                label="Github"
                variant="github"
                href="https://github.com/jacobSalazku"
                target="_blank"
              >
                <IconBrandGithub color="#fff0db" height={40} width={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Footer };
