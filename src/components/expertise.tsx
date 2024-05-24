import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="flex h-fit w-screen flex-col items-center gap-6 bg-gradient-to-b px-12 py-24 transition-all duration-75 ease-in-out md:gap-6 lg:justify-center">
      <div className="flex w-full flex-row items-center justify-center">
        <Image
          src="/skills-1.png"
          alt="coding skills"
          height={300}
          width={200}
          className="hidden md:block"
        />
        <h2 className="text-3xl font-light text-purple-1 transition-transform lg:text-5xl">
          My Expertise
        </h2>
      </div>
      <div className="flex w-screen justify-center md:px-12 md:py-12">
        <div className="flex w-full max-w-7xl flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <Image
            src="/javascript.png"
            alt="javascript"
            height={100}
            width={200}
            className="h-12 cursor-pointer rounded-lg border border-beige-1 p-1"
          />
          <Image
            src="/typescript.png"
            alt="Typescript"
            height={50}
            width={200}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/mysql.png"
            alt="Mysql"
            height={25}
            width={150}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/laravel.png"
            alt="Laravel"
            height={25}
            width={200}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/sass.png"
            alt="Sass"
            height={25}
            width={150}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/nextjs.png"
            alt="NextJ"
            height={25}
            width={150}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/vuejs.png"
            alt="Vue"
            height={50}
            width={150}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/react.png"
            alt="React"
            height={50}
            width={150}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
          <Image
            src="/tailwind.png"
            alt="Tailwind"
            height={50}
            width={200}
            className="h-12 cursor-pointer rounded-lg border border-gray-300 p-1"
          />
        </div>
      </div>
    </section>
  );
};

export { Expertise };
