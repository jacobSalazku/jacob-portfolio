import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <div className="flex h-[450px] w-full min-w-[250px] max-w-sm flex-col justify-between overflow-hidden rounded-sm border bg-beige-1 shadow-md shadow-beige-1 transition-all duration-300 hover:shadow-2xl md:min-w-[300px] lg:min-w-[400px]">
      <div className="w-full">
        <Image
          alt="Project Thumbnail"
          height={500}
          src="/skills-1.png"
          width={500}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">Project Title</h3>
          <p className="line-clamp-2 text-gray-500 dark:text-gray-400">
            A brief description of the project goes here. It should be concise
            and informative.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <div>React</div>
            <div>Tailwind CSS</div>
            <div>Node.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
