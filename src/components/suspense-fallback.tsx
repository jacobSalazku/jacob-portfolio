const SuspensePulse = () => {
  return (
    <article className="flex w-full animate-pulse flex-col gap-4 border-opacity-50 bg-transparent p-6 py-10 sm:px-8 sm:py-8 md:flex-row md:gap-12 lg:flex-row lg:gap-20 lg:px-12 lg:py-24">
      <div className="flex items-center gap-8 sm:items-center md:w-1/4 md:flex-col">
        <span className="hidden w-full rounded-lg border border-gray-700 bg-gray-700 p-4 text-sm sm:text-lg md:flex md:justify-center">
          {' '}
        </span>
        <div className="h-32 w-32 rounded-2xl bg-gray-700 shadow-lg md:h-44 md:w-44"></div>
        <div className="flex flex-col justify-center md:hidden">
          <div className="h-5 w-32 rounded bg-gray-700"></div>
          <div className="mt-2 h-4 w-24 rounded bg-gray-600"></div>
        </div>
      </div>

      <div className="flex flex-col justify-start md:w-3/4">
        <div className="flex flex-col lg:gap-4">
          <div className="hidden flex-col md:flex lg:gap-1">
            <div className="h-6 w-48 rounded bg-gray-700"></div>
          </div>
          <div className="mt-2 h-4 w-full rounded bg-gray-600"></div>
          <div className="mt-2 h-4 w-5/6 rounded bg-gray-600"></div>
          <div className="mt-2 h-4 w-3/4 rounded bg-gray-600"></div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <div className="h-6 w-16 rounded bg-gray-700"></div>
          <div className="h-6 w-20 rounded bg-gray-700"></div>
          <div className="h-6 w-12 rounded bg-gray-700"></div>
        </div>
      </div>
    </article>
  );
};

export { SuspensePulse };
