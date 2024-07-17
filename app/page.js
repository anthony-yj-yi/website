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
          backgroundImage: 'url(/bg2.jpg)'
        }}>
        <div className="flex flex-col">
          <AboutMe></AboutMe>
          <MySkills></MySkills>
          <ExperienceTimeline></ExperienceTimeline>
          <ContactMe></ContactMe>
        </div>
      </section>
    </main>
  );
}
