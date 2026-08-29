import { skills } from '../data/content';
import Reveal, { Stagger, StaggerItem } from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink/5 py-24 dark:border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-3">02 — Skills</p>
          <h2 className="section-title mb-14">Toolkit &amp; expertise.</h2>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white/60 p-7 transition hover:border-accent/40 dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-5 font-display text-xl font-semibold">{group.category}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-ink/5 px-3.5 py-1.5 text-sm text-ink/80 transition group-hover:bg-accent/10 dark:bg-white/10 dark:text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
