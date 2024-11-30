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
      <section id="about-me" className="bg-cover"
        style={{
          backgroundImage: 'url(/bg1.jpg)'
        }}>
        <AboutMe></AboutMe>
      </section>

      <section id="my-skills">
        <MySkills></MySkills>
      </section>

      <section id="my-experience">
        <ExperienceTimeline></ExperienceTimeline>
      </section>

      <section id="contact-me">
        <ContactMe></ContactMe>
      </section>
    </main>
  );
}
