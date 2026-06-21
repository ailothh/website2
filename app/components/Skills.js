'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const groups = [
  { label: 'Languages', cls: '', badges: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { label: 'Security', cls: 'group-security', badges: ['OSINT', 'Pen Testing', 'Breach Analysis', 'Data Scraping'] },
  { label: 'Frameworks', cls: 'group-frameworks', badges: ['Next.js', 'FastAPI', 'React', 'PySpark', 'Databricks'] },
  { label: 'Infra', cls: 'group-infra', badges: ['AWS RDS', 'SQLite', 'BeautifulSoup', 'Vercel'] },
];

const ring1Nodes = ['SQL', 'Bash'];
const ring2Nodes = ['OSINT', 'FastAPI', 'React', 'AWS'];
const ring3Nodes = ['Next.js', 'Databricks', 'PySpark', 'SQLite', 'Python', 'JS'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

function OrbitNodes({ nodes, positions }) {
  return nodes.map((label, i) => (
    <div key={label} className={`orbit-node orbit-node-${positions[i]}`} title={label}>
      {label.length > 4 ? label.slice(0, 4) : label}
    </div>
  ));
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-inner">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>// SKILLS</motion.p>
          <motion.h2 className="section-heading" variants={fadeUp} style={{ marginBottom: '2rem' }}>
            Tech I work with.
          </motion.h2>
          <motion.div className="skills-groups" variants={stagger}>
            {groups.map(g => (
              <motion.div key={g.label} className={`skills-group ${g.cls}`} variants={fadeUp}>
                <div className="skills-group-label">{g.label}</div>
                <div className="skills-badges">
                  {g.badges.map(b => (
                    <span key={b} className="skill-badge">{b}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="orbit-wrapper">
            <div className="orbit-center">AW</div>

            <div className="orbit-ring orbit-ring-1">
              <div className="orbit-node orbit-node-top" title={ring1Nodes[0]}>{ring1Nodes[0]}</div>
              <div className="orbit-node orbit-node-bottom" title={ring1Nodes[1]}>{ring1Nodes[1]}</div>
            </div>

            <div className="orbit-ring orbit-ring-2">
              <div className="orbit-node orbit-node-top" title={ring2Nodes[0]}>{ring2Nodes[0]}</div>
              <div className="orbit-node orbit-node-right" title={ring2Nodes[1]}>{ring2Nodes[1].slice(0,4)}</div>
              <div className="orbit-node orbit-node-bottom" title={ring2Nodes[2]}>{ring2Nodes[2]}</div>
              <div className="orbit-node orbit-node-left" title={ring2Nodes[3]}>{ring2Nodes[3]}</div>
            </div>

            <div className="orbit-ring orbit-ring-3">
              <div className="orbit-node orbit-node-top" title={ring3Nodes[0]}>{ring3Nodes[0].slice(0,4)}</div>
              <div className="orbit-node orbit-node-right" title={ring3Nodes[1]}>{ring3Nodes[1].slice(0,4)}</div>
              <div className="orbit-node orbit-node-bottom" title={ring3Nodes[2]}>{ring3Nodes[2].slice(0,4)}</div>
              <div className="orbit-node orbit-node-left" title={ring3Nodes[3]}>{ring3Nodes[3].slice(0,4)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
