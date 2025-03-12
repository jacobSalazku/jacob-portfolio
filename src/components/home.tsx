import { Header } from '@/components/header-banner';
import { Stack } from '@/components/stack';
import { cn } from '@/utils/utils';
import { IconBallBasketball, IconCode, IconVideo } from '@tabler/icons-react';

export default async function Home() {
  return (
    <>
      <main className="mb-10 flex w-full flex-col items-start px-6 py-10 text-white md:px-10 lg:max-w-screen-lg">
        <Header />

        <section className="mb-8">
          <h2 className="mb-6 py-6 text-2xl font-semibold">My intrests </h2>
          <div className="grid grid-cols-1 content-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
            <div
              className={cn(
                'flex flex-col gap-6 border border-beige-1 bg-beige-1 bg-opacity-10 p-6 text-beige-1 shadow-lg transition-transform duration-300 hover:scale-x-105',
              )}
            >
              <div className="flex items-center justify-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 bg-opacity-20 p-2">
                  <IconCode size={32} stroke={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white">Technology</h3>
              </div>
              <div className="flex items-center justify-center text-lg font-light text-white">
                <p>
                  Being Creative and Building websites and applications with the
                  latest tech.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'flex flex-col gap-6 border border-beige-1 bg-beige-1 bg-opacity-10 p-6 text-beige-1 shadow-lg transition-transform duration-300 hover:scale-x-105',
              )}
            >
              <div className="flex items-center justify-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 bg-opacity-20 p-2">
                  <IconBallBasketball size={32} stroke={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white">Basketball</h3>
              </div>
              <div className="flex items-center justify-center text-lg font-light text-white">
                <p>
                  I've played organized basketball for over 10 years and enjoy
                  staying active and competitive.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'flex flex-col gap-6 border border-beige-1 bg-beige-1 bg-opacity-10 p-6 text-beige-1 shadow-lg transition-transform duration-300 hover:scale-x-105',
              )}
            >
              <div className="flex items-center justify-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 bg-opacity-20 p-2">
                  <IconVideo size={32} stroke={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white">Creative</h3>
              </div>
              <div className="flex items-center justify-center text-lg font-light text-white">
                <p>
                  I enjoy creating and editing videos. visual and motion
                  graphics effect.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Stack />
      </main>
    </>
  );
}
