'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const papers = [
  {
    title: 'Zillow Algorithm Exploitation: Ranking Fraud, Synthetic Engagement, and Defensive Architecture',
    abstract: 'A technical analysis of engagement-based ranking vulnerabilities in real estate listing platforms. Demonstrates how synthetic interactions can manipulate visibility by 22,000% and proposes defensive mitigations against engagement fraud at scale.',
    link: `${base}/assets/documents/ZillowAlgorithmExploitation.pdf`,
    placeholder: false,
  },
  {
    title: 'Breach Dataset Analysis: Executive Exposure in Enterprise Environments',
    abstract: 'An ongoing study examining patterns of executive personnel exposure in large-scale breach datasets. Covers risk scoring methodology, AWS infrastructure design for real-time assessment, and responsible disclosure frameworks.',
    link: null,
    placeholder: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="research" className="research-section" ref={ref}>
      <div className="research-inner">
        <motion.p className="section-eyebrow" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}>// RESEARCH</motion.p>
        <motion.h2 className="section-heading" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.55, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}>
          Published work.
        </motion.h2>
        <motion.div
          className="research-grid"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {papers.map((paper, i) => (
            <motion.div key={i} className={`research-card${paper.placeholder ? ' research-card-placeholder' : ''}`} variants={fadeUp}>
              <div style={{ flex: 1 }}>
                <div className="research-title">{paper.title}</div>
                <p className="research-abstract">{paper.abstract}</p>
              </div>
              {paper.link ? (
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="research-download">
                  ↓ PDF
                </a>
              ) : (
                <span className="research-download" style={{ background: 'var(--border)', color: 'var(--text-very-muted)', cursor: 'default' }}>
                  Forthcoming
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
