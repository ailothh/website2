'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const researchPaper = `${base}/assets/documents/ZillowAlgorithmExploitation.pdf`;

const projects = [
  {
    num: 'PROJECT_01',
    title: 'Amazon Enterprise Security Analytics Engine',
    tech: ['AWS RDS', 'MySQL', 'FastAPI', 'Next.js', 'Python', 'SQLite'],
    description: 'Architected a search platform to analyze a 1.2M+ record breach dataset, uncovering data exposure risks for executive personnel and triggering an AWS Security response. Engineered a migration to Amazon RDS with sub-second retrieval times.',
    demo: 'https://employee-search-amazon-n4hjuem2g-ailothhs-projects.vercel.app/',
    graphic: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="project-mini-graphic">
        <rect x="4" y="28" width="8" height="16" rx="1" fill="currentColor"/>
        <rect x="14" y="20" width="8" height="24" rx="1" fill="currentColor"/>
        <rect x="24" y="12" width="8" height="32" rx="1" fill="currentColor"/>
        <rect x="34" y="6" width="8" height="38" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: 'PROJECT_02',
    title: 'Ranking Algorithm Integrity Framework',
    subtitle: 'Zillow Audit',
    tech: ['Python', 'Next.js', 'Git', 'OSINT'],
    description: 'Reverse-engineered engagement-based ranking systems to identify logic flaws. Built a simulation suite that increased property visibility by 22,000%. Published a 10-page technical research paper detailing vulnerabilities.',
    demo: 'https://github.com/ailothh/Zillow-Algorithm-Exploiter',
    researchPaper,
    graphic: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="project-mini-graphic">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
        <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: 'PROJECT_03',
    title: 'CrisisCompass',
    subtitle: 'UN × Databricks Challenge',
    tech: ['Databricks', 'PySpark', 'React', 'FastAPI', 'XGBoost', 'Mapbox GL JS'],
    description: 'Real-time humanitarian intelligence dashboard mapping disaster risk vs. humanitarian funding across 53 countries. Built in 36 hours using distributed PySpark ETL pipelines and XGBoost predictive risk models.',
    demo: 'https://github.com/NawafAlturayif/CrisisCompass',
    graphic: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="project-mini-graphic">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="4" y="22" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="28" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="20" y1="10" x2="28" y2="18" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="20" y1="28" x2="28" y2="22" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    num: 'PROJECT_04',
    title: 'Automated Intelligence Crawler & Resilient Pipeline',
    tech: ['Python', 'SQLite', 'BeautifulSoup'],
    description: 'High-speed ingestion engine processing 1,000+ pages at 50 pages/min with 95% extraction rate. Custom session-handling to bypass Cloudflare protections. Normalized 10,000+ records into a relational schema.',
    demo: 'https://github.com/ailothh/Forum-Scraper',
    graphic: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="project-mini-graphic">
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="40" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="8" cy="40" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="13" y1="8" x2="19" y2="22" stroke="currentColor" strokeWidth="1"/>
        <line x1="35" y1="8" x2="29" y2="22" stroke="currentColor" strokeWidth="1"/>
        <line x1="8" y1="13" x2="20" y2="26" stroke="currentColor" strokeWidth="1"/>
        <line x1="40" y1="13" x2="28" y2="26" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="work" className="projects-section" ref={ref}>
      <motion.p className="section-eyebrow" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}>// WORK</motion.p>
      <motion.h2 className="section-heading" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.55, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}>
        Featured projects.
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {projects.map((p, i) => (
          <motion.div key={i} className="project-card" variants={fadeUp} style={{ willChange: 'transform, opacity' }}>
            {p.graphic}
            <div className="project-num">{p.num}</div>
            <div className="project-title">
              {p.title}
              {p.subtitle && <span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginLeft: '0.5rem', fontWeight: 400 }}>— {p.subtitle}</span>}
            </div>
            <div className="project-tech">
              {p.tech.map(t => <span key={t} className="project-tech-badge">{t}</span>)}
            </div>
            <p className="project-desc">{p.description}</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
              {p.researchPaper && (
                <a href={p.researchPaper} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--text-muted)' }}>
                  Research Paper →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
