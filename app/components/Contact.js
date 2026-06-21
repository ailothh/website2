'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-inner">
        <motion.div variants={stagger} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          <motion.p className="section-eyebrow" variants={fadeUp}>// CONTACT</motion.p>
          <motion.h2 className="contact-heading" variants={fadeUp}>
            Let&apos;s Connect.
          </motion.h2>
          <motion.p className="contact-sub" variants={fadeUp}>
            Open to research roles, collaboration, and interesting problems.
            Reach out through any of the channels below.
          </motion.p>
          <motion.div className="contact-socials" variants={fadeUp}>
            <a
              href="https://www.linkedin.com/in/alexwinklerr/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <span className="contact-social-icon">in</span>
              linkedin.com/in/alexwinklerr
            </a>
            <a
              href="https://github.com/ailothh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <span className="contact-social-icon">gh</span>
              github.com/ailothh
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="contact-terminal">
            <div className="contact-terminal-chrome">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">secure-channel</span>
            </div>
            <div className="contact-bubbles">
              <div className="bubble bubble-you">
                <div className="bubble-label">YOU</div>
                Hey Alexander — interested in collaborating on a security research project.
              </div>
              <div className="bubble bubble-aw">
                <div className="bubble-label">AW</div>
                Sounds interesting. Drop me the details and I&apos;ll get back to you within 24h.
              </div>
              <div className="bubble bubble-you">
                <div className="bubble-label">YOU</div>
                Reach you on LinkedIn or GitHub?
              </div>
              <div className="bubble bubble-aw">
                <div className="bubble-label">AW</div>
                Either works — LinkedIn is faster. Link below.
              </div>
            </div>
            <div className="contact-input-bar">
              <span className="contact-input-placeholder">Type a message...</span>
              <span className="contact-input-cursor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
