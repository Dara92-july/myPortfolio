import { projects } from '../data/content';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="bg-ink py-24 text-white">
      <div className="container-x">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-eyebrow text-accent">
            03 — Projects
          </p>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Selected work.</h2>
          <p className="mt-4 max-w-xl text-white/60">
            A handful of products I&apos;ve designed and built end-to-end.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
