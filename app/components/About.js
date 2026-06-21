'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Terminal from './Terminal';

const aboutLines = [
  { type: 'prompt', content: 'whoami --verbose' },
  { type: 'output', content: '  alexander winkler' },
  { type: 'output', content: '  security researcher & software engineer' },
  { type: 'success', content: '✓ speciality: breach analysis, distributed systems' },
  { type: 'muted', content: '  open to: research roles + collaboration' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const terminalRef = useRef(null);
  const [terminalDelay, setTerminalDelay] = useState(99999);

  useEffect(() => {
    if (!terminalRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTerminalDelay(300);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(terminalRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>// ABOUT</motion.p>
          <motion.h2 className="section-heading" variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            The person<br />behind the code.
          </motion.h2>
          <motion.p className="about-bio" variants={fadeUp}>
            I&apos;m a security researcher and software engineer focused on breach analysis,
            distributed data systems, and full-stack engineering. I find the gaps others miss
            — then build the infrastructure to close them.
          </motion.p>
          <motion.div className="about-rows" variants={fadeUp}>
            <div className="about-row">
              <span className="about-row-label">Location</span>
              <span className="about-row-value">United States</span>
            </div>
            <div className="about-row">
              <span className="about-row-label">Education</span>
              <span className="about-row-value">Computer Science</span>
            </div>
            <div className="about-row">
              <span className="about-row-label">Specialty</span>
              <span className="about-row-value">Breach Analysis · Distributed Systems</span>
            </div>
            <div className="about-row">
              <span className="about-row-label">Open to</span>
              <span className="about-row-value">Research roles · Collaboration</span>
            </div>
          </motion.div>
        </motion.div>

        <div ref={terminalRef}>
          <Terminal lines={aboutLines} title="profile.sh" startDelay={terminalDelay} />
        </div>
      </div>
    </section>
  );
}
