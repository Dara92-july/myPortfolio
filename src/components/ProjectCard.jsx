import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.06]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-display text-sm text-accent/80">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mb-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-white/65">{project.description}</p>

      <ul className="mb-7 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-5 text-sm">
        <motion.a
          href={project.links.preview}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ gap: 10 }}
          className="inline-flex items-center gap-1.5 font-medium text-accent"
        >
          Live preview <FiExternalLink size={15} />
        </motion.a>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-white/70 transition hover:text-white"
          >
            <FiGithub size={15} /> Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
