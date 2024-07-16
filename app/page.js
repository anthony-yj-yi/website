'use client'

import AboutMe from './components/aboutMe'
import MySkills from './components/mySkills'
import ExperienceTimeline from './components/experienceTimeline';
import ContactMe from './components/contactMe';

export default function Home() {
  return (
    <main>
      <section className="ml-[15%] mr-[15%] mt-[5%]">
        <AboutMe></AboutMe>
      </section>

      <section className="ml-[15%] mr-[15%] mt-[5%]">
        <MySkills></MySkills>
      </section>

      <section className="ml-[15%] mr-[15%] mt-[5%] w-1/2">
        <ExperienceTimeline></ExperienceTimeline>
      </section>

      <section className="ml-[15%] mr-[15%] mt-[5%]">
        <ContactMe></ContactMe>
      </section>
    </main>
  );
}
