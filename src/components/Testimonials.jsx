import { useState } from 'react';
import { testimonials } from '../data/content';
import Reveal from './Reveal';

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.length / 2);

  return (
    <section className="border-t border-ink/5 py-24 dark:border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-3">04 — Testimonials</p>
          <h2 className="section-title mb-14">What clients say.</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.slice(page * 2, page * 2 + 2).map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-ink/10 bg-white/60 p-8 dark:border-white/10 dark:bg-white/5"
              >
                <blockquote className="font-display text-xl leading-relaxed text-ink/85 dark:text-white/85">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-accent">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? 'w-7 bg-accent' : 'w-2.5 bg-ink/20 hover:bg-ink/40 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
