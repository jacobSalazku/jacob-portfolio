import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_BASE_URL}/not-found`),
  title: 'Page not found',
};
function page() {
  return (
    <>
      <section className="mt-20 flex h-[700px] w-screen flex-col items-start gap-6 bg-gradient-to-b px-12 py-24 transition-all duration-75 ease-in-out md:gap-6 lg:justify-center">
        <div className="flex w-full flex-row items-center justify-center">
          <h2 className="text-3xl font-light text-purple-1 transition-transform lg:text-5xl">
            DEZE PAGINA BESTAAT NIET
          </h2>
        </div>
      </section>
    </>
  );
}
export default page;
