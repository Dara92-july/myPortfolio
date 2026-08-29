import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';
import { navItems, socialLinks } from '../data/content';
import SocialIcon from './SocialIcon';
import Logo from './Logo';

export default function Navbar() {
  const { darkMode, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-ink/10 dark:bg-ink/80 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 sm:h-20">
        <button
          onClick={() => go('home')}
          aria-label="Back to top"
          className="text-accent transition-opacity hover:opacity-80 dark:text-accent-glow"
        >
          <Logo />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`relative text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-ink dark:text-white'
                    : 'text-ink/60 hover:text-ink dark:text-white/60 dark:hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 transition hover:border-ink/40 dark:border-white/20 dark:hover:border-white/50"
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 md:hidden dark:border-white/20"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 pb-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  active === item.id
                    ? 'bg-accent/10 text-accent'
                    : 'text-ink/70 hover:bg-ink/5 dark:text-white/70 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="flex gap-3 px-3 pt-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                className="text-ink/70 hover:text-accent dark:text-white/70"
              >
                <SocialIcon name={s.icon} size={20} />
              </motion.a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
}
