'use client'

import AboutMe from './components/aboutMe'
import MySkills from './components/mySkills'
import ExperienceTimeline from './components/experienceTimeline';
import ContactMe from './components/contactMe';

export default function Home() {
  return (
    <main className="text-slate-300"
    style={{
      backgroundImage: 'url(/bg2.jpg)'
    }}>
        <section className="bg-cover"
        style={{
          backgroundImage: 'url(/bg1.jpg)'
        }}>
        <AboutMe></AboutMe>
      </section>

      <section>
        <MySkills></MySkills>
      </section>

      <section>
        <ExperienceTimeline></ExperienceTimeline>
      </section>

      <section>
        <ContactMe></ContactMe>
      </section>
    </main>
  );
}
