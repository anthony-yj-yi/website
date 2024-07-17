'use client'

import AboutMe from './components/aboutMe'
import MySkills from './components/mySkills'
import ExperienceTimeline from './components/experienceTimeline';
import ContactMe from './components/contactMe';

export default function Home() {
  return (
    <main className="text-slate-300">
        <section className="bg-cover"
        style={{
          backgroundImage: 'url(/bg1.jpg)'
        }}>
        <AboutMe></AboutMe>
      </section>

      <section>
        <MySkills></MySkills>
      </section>

      <section className="pl-[15%] pr-[15%] pt-[5%]">
        <ExperienceTimeline></ExperienceTimeline>
      </section>

      <section>
        <ContactMe></ContactMe>
      </section>
    </main>
  );
}
