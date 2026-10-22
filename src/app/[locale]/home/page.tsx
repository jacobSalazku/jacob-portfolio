import { ContactCta } from '@/components/home/contact-cta';
import { HomeHero } from '@/components/home/home-hero';
import { Interests } from '@/components/home/interests';
import { LatestWork } from '@/components/home/latest-work';
import { SectionDivider } from '@/components/home/section-divider';
import { Stack } from '@/components/stack';

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  return (
    <main className="flex w-full flex-col gap-16 px-6 pb-16 md:px-8">
      <HomeHero locale={locale} />
      <SectionDivider />
      <LatestWork locale={locale} />
      <Interests />
      <Stack />
      <SectionDivider />
      <ContactCta />
    </main>
  );
}
