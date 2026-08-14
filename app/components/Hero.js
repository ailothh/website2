'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './Terminal';
import ParticlesComponent from './particles';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const heroLines = [
  { type: 'prompt', content: 'recon --target awinkler.dev --extract projects' },
  { type: 'output', content: '[*] Initializing deep scan...' },
  { type: 'success', content: '[+] Payload 1: Amazon Security Analytics Engine' },
  { type: 'success', content: '[+] Payload 2: Zillow Ranking Integrity Framework' },
  { type: 'success', content: '[+] Payload 3: CrisisCompass Intelligence Dashboard' },
  { type: 'success', content: '[+] Payload 4: Automated OSINT Crawler Pipeline' },
  { type: 'muted', content: '[✓] Extraction complete. 4 modules found below.' },
];

const projectsData = [
  {
    title: 'Enterprise Breach Directory & OSINT Map',
    tech: ['Python', 'FastAPI', 'DynamoDB', 'S3', 'Cognito'],
    description: 'Developed a serverless cloud security application to analyze the systemic, long-tail risks of third-party supply chain leaks within Tier-1 enterprise ecosystems. Architected an ingestion pipeline to process and index a legacy threat dataset of 1.2M+ exposed corporate profiles, mapping structural vulnerabilities against social engineering vectors. Engineered a high-throughput backend using Python and FastAPI to ingest raw unstructured data from AWS S3, routing records into DynamoDB with optimized Global Secondary Indexes (GSIs) for single-digit millisecond query resolution. Secured the analytical interface using Cognito with JWT authentication for zero-trust access controls. Executed continuous data lifecycle management following strict responsible disclosure frameworks, successfully decommissioning the production data store to prevent active exploitation. The frozen repository remains an archived blueprint for scalable NoSQL design and defensive cloud analytics.',
    demo: 'https://employee-search-amazon-n4hjuem2g-ailothhs-projects.vercel.app/',
  },
  {
    title: 'Ranking Algorithm Integrity Framework',
    subtitle: 'Zillow Audit',
    tech: ['Python', 'Next.js', 'Git'],
    description: '• Reverse-engineered engagement-based ranking systems to identify logic flaws in automated verification and rate-limiting controls.\n• Designed and executed a high-concurrency behavioral test that accelerated property visibility from 2 to 450+ views, analyzing synthetic interaction thresholds to audit "Hot Home" algorithmic triggers.\n• Published a 10-page technical research paper detailing system vulnerabilities and architecting defensive mitigations against engagement fraud.',
    demo: 'https://github.com/ailothh/Zillow-Algorithm-Exploiter',
    researchPaper: `${base}/assets/documents/ZillowAlgorithmExploitation.pdf`,
  },
  {
    title: 'CrisisCompass',
    subtitle: 'UN × Databricks Challenge',
    tech: ['Databricks', 'PySpark', 'React', 'FastAPI', 'Vite', 'Mapbox GL JS', 'XGBoost'],
    description: 'Built a real-time humanitarian intelligence dashboard in 36 hours that maps the mismatch between disaster risk and humanitarian funding across 53 countries. Utilized distributed PySpark ETL pipelines and XGBoost to aggregate 1,400+ disaster records into predictive risk models, flagging the crises most underfunded relative to severity. Integrated AI-generated briefings with historical pattern matching, risk scores, coping capacity analysis, and recommended next steps — powered by data from INFORM Risk Index, FTS (OCHA), CBPF, and EM-DAT with a Mapbox GL JS frontend for interactive geospatial visualization.',
    demo: 'https://github.com/NawafAlturayif/CrisisCompass',
  },
  {
    title: 'Automated Intelligence Crawler & Resilient Pipeline',
    tech: ['Python', 'SQLite', 'BeautifulSoup'],
    description: 'Engineered a high-speed ingestion engine processing 1,000+ pages at 50 pages/min, achieving a 95% extraction rate across unstructured web data. Implemented a custom session-handling system to bypass Cloudflare BIC protections via dynamic cookie rotation, ensuring 24/7 uptime for data collection. Normalized over 10,000 unstructured records into a relational schema, enabling efficient SQL-based behavioral analysis and threat intelligence.',
    demo: 'https://github.com/ailothh/Forum-Scraper',
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="hero-section" style={{ paddingBottom: 0 }}>
      <div className="grid-bg" />
      <ParticlesComponent id="particles" />

      <div className="hero-inner" style={{ alignItems: 'flex-start', paddingTop: '2rem' }}>
        <motion.div
          className="hero-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <div className="hero-name-alexander">ALEXANDER</div>
            <div className="hero-name-winkler">WINKLER</div>
          </motion.div>
          <motion.div className="hero-cta" variants={fadeUp}>
            <a
              href={`${base}/Alexander_Winkler_Resume_2026.pdf`}
              download="Alexander_Winkler_Resume_2026.pdf"
              className="btn-cv-sleek"
            >
              <span className="btn-cv-icon">↓</span>
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-right">
          <Terminal lines={heroLines} title="recon-scan" startDelay={1200} />
          
          <div className="hero-projects-grid">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="hero-project-box"
                onClick={() => setActiveProject(project)}
              >
                <div className="hpb-top">
                  <div className="hpb-num">0{index + 1}</div>
                  <span className="hpb-arrow">→</span>
                </div>
                <div className="hpb-title">{project.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal-container modal-container-single"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 className="modal-title">Project Details</h3>
                <button className="modal-close" onClick={() => setActiveProject(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="modal-scroll-container">
                  <div className="project-card-modal single-project-view">
                    <div className="project-title">
                      {activeProject.title}
                      {activeProject.subtitle && <span className="project-subtitle">— {activeProject.subtitle}</span>}
                    </div>
                    <div className="project-tech">
                      {activeProject.tech.map(t => <span key={t} className="project-tech-badge-modal">{t}</span>)}
                    </div>
                    <div className="project-desc-modal">
                      {activeProject.description.split('\n').filter(p => p.trim()).map((para, i) => {
                        const isBullet = para.trim().startsWith('•');
                        const text = isBullet ? para.replace('•', '').trim() : para;
                        return isBullet ? (
                          <li key={i} style={{ marginBottom: '0.6rem', listStyleType: 'disc', marginLeft: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                            {text}
                          </li>
                        ) : (
                          <p key={i} style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                            {text}
                          </p>
                        );
                      })}
                    </div>
                    <div className="project-actions">
                      <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project →
                      </a>
                      {activeProject.researchPaper && (
                        <a href={activeProject.researchPaper} target="_blank" rel="noopener noreferrer" className="project-link project-link-muted">
                          Research Paper →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
