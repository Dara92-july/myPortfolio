import { FiMail } from 'react-icons/fi';
import { profile } from '../data/content';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="border-t border-ink/5 py-24 dark:border-white/5">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-3">01 — About</p>
            <h2 className="section-title">A developer who ships.</h2>
          </Reveal>
        </div>

        <div className="space-y-6 md:col-span-8 md:pl-4">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-ink/75 dark:text-white/75">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink/70 dark:text-white/70">{profile.cta}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="leading-relaxed text-ink/70 dark:text-white/70">{profile.closing}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-2">
              <FiMail /> Get in touch
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
