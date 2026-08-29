import { motion } from 'framer-motion';
import { socialLinks, profile } from '../data/content';
import SocialIcon from './SocialIcon';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink py-12 text-white dark:border-white/10">
      <div className="container-x flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Logo className="h-8 w-auto text-white" />

        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="text-white/70 transition hover:text-accent"
            >
              <SocialIcon name={s.icon} size={20} />
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
