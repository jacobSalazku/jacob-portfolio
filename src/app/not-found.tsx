import { Navigation } from '@/features';

function page() {
  return (
    <>
      <Navigation />
      <section className="mt-20 flex h-[700px] w-screen flex-col items-start gap-6 bg-gradient-to-b px-12 py-24 transition-all duration-75 ease-in-out md:gap-6 lg:justify-center">
        <div className="flex w-full flex-row items-center justify-center">
          <h2 className="text-3xl font-light text-purple-1 transition-transform lg:text-5xl">
            The Page you are looking for does not exist
          </h2>
        </div>
      </section>
    </>
  );
}
export default page;
