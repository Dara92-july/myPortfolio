import { motion } from 'framer-motion';
import { FiArrowDown, FiFileText } from 'react-icons/fi';
import { profile, socialLinks } from '../data/content';
import SocialIcon from './SocialIcon';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-x relative grid min-h-screen content-center gap-12 py-28 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Full-Stack JavaScript Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Salami
            <br />
            Gbemisola
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-white/70"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href={profile.resume} download className="btn-primary">
              <FiFileText /> Download CV
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-lg transition-colors hover:border-accent hover:text-accent dark:border-white/20"
                >
                  <SocialIcon name={s.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl border border-ink/10 dark:border-white/10" />
            <img
              src="https://res.cloudinary.com/dzo14hk18/image/upload/v1788949599/omodara_corporate_znpncw.png"
              alt="Salami Gbemisola"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 transition hover:text-accent dark:text-white/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
