import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiSend, FiCheck, FiAlertCircle, FiMail } from 'react-icons/fi';
import { profile } from '../data/content';
import { EMAILJS, isEmailjsConfigured } from '../config/emailjs';
import Reveal from './Reveal';

const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [message, setMessage] = useState('');
  const configured = isEmailjsConfigured();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!configured) {
      window.location.href = `mailto:${profile.email}`;
      return;
    }

    setStatus(STATUS.SENDING);
    setMessage('');

    emailjs
      .sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey)
      .then(() => {
        setStatus(STATUS.SUCCESS);
        setMessage("Thanks! Your message has been sent — I'll reply soon.");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus(STATUS.ERROR);
        setMessage('Something went wrong. Please try again or email me directly.');
      });
  };

  return (
    <section id="contact" className="border-t border-ink/5 py-24 dark:border-white/5">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-3">05 — Contact</p>
            <h2 className="section-title mb-5">Let&apos;s build something.</h2>
            <p className="mb-8 leading-relaxed text-ink/70 dark:text-white/70">
              Have a project in mind or just want to say hello? Drop a message and I&apos;ll get
              back to you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 font-medium text-accent transition hover:gap-3"
            >
              <FiMail /> {profile.email}
            </a>
          </Reveal>
        </div>

        <Reveal className="md:col-span-7" delay={0.05}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="user_name" type="text" placeholder="Your name" required />
              <Field
                label="Email"
                name="user_email"
                type="email"
                placeholder="you@email.com"
                required
              />
            </div>
            <Field label="Message" name="message" textarea placeholder="Tell me about your project" required />

            <button
              type="submit"
              disabled={status === STATUS.SENDING}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === STATUS.SENDING ? (
                'Sending…'
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>

            {status === STATUS.SUCCESS && (
              <p className="flex items-center gap-2 text-sm text-accent">
                <FiCheck /> {message}
              </p>
            )}
            {status === STATUS.ERROR && (
              <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <FiAlertCircle /> {message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', textarea, placeholder, required }) {
  const cls =
    'w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-white/15 dark:bg-white/5';
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/60 dark:text-white/60">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} placeholder={placeholder} required={required} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={cls} />
      )}
    </label>
  );
}
