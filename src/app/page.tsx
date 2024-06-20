'use client';

import {
  Expertise,
  Header,
  ProjectSection,
  TechnologiesUsed,
  WorkExperience,
} from '@/components';
import { SpotWorkshopStack } from '@/data';

function page() {
  return (
    <>
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
export default page;
