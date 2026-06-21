'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const certs = [
  {
    id: 'ccp',
    title: 'AWS Cloud Practitioner',
    official: 'AWS Certified Cloud Practitioner',
    badge: 'Certification in progress',
    status: 'IN PROGRESS',
    footer: 'On track · End of Summer 2026',
    active: true,
  },
  {
    id: 'saa',
    title: 'Solutions Architect',
    official: 'AWS Certified Solutions Architect – Associate',
    badge: 'Planned certification',
    status: 'PLANNED',
    footer: 'On track · End of Summer 2026',
    active: false,
  },
  {
    id: 'dva',
    title: 'Developer – Associate',
    official: 'AWS Certified Developer – Associate',
    badge: 'Planned certification',
    status: 'PLANNED',
    footer: 'On track · End of Summer 2026',
    active: false,
  },
];

const trainingBadges = [
  'AWS Partner: Cloud Economics Essentials',
  'AWS Knowledge: Networking Core',
  'AWS Partner: Technical Accredited',
];

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function AWSIcon({ active }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="56" height="56" rx="14" fill={active ? 'rgba(255,153,0,0.12)' : 'rgba(26,22,18,0.05)'} />
      <path
        d="M16 34l4-12 4 8 3-5 3 5 4-8 4 12"
        stroke={active ? '#FF9900' : '#9B9590'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 38c0 0 6-2 16-2s16 2 16 2"
        stroke={active ? '#FF9900' : '#9B9590'}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="28" cy="20" r="3" fill={active ? '#FF9900' : '#9B9590'} opacity={active ? 0.9 : 0.4} />
    </svg>
  );
}

function CertCard({ cert, index }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  function onMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.03) translateY(${-6 + Math.sin(Date.now() / 1500 + index * 2) * 4}px)`;
    if (shineRef.current) {
      shineRef.current.style.opacity = '1';
      shineRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
    }
  }

  function onMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    if (shineRef.current) shineRef.current.style.opacity = '0';
  }

  return (
    <motion.div
      variants={cardVariants}
      className={`cert-card-wrap ${cert.active ? 'cert-active' : 'cert-planned'}`}
      style={{ animationDelay: `${-index * 2}s` }}
    >
      <div
        ref={cardRef}
        className="cert-card"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div ref={shineRef} className="cert-shine" />
        <div className="cert-glow" />

        <div className="cert-status-row">
          <span className={`cert-status-badge ${cert.active ? 'cert-status-active' : 'cert-status-planned'}`}>
            {cert.status}
          </span>
          <span className="cert-aws-label">AWS</span>
        </div>

        <div className="cert-icon-wrap">
          <AWSIcon active={cert.active} />
        </div>

        <div className="cert-title">{cert.title}</div>
        <div className="cert-official">{cert.official}</div>
        <div className="cert-badge-text">{cert.badge}</div>

        <div className="cert-footer">
          <span className="cert-footer-dot" />
          {cert.footer}
        </div>
      </div>
    </motion.div>
  );
}

export default function AWSCerts() {
  return (
    <section className="aws-section" id="aws">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={cardVariants} className="section-eyebrow">// AWS ROADMAP</motion.div>
        <motion.h2 variants={cardVariants} className="section-title">
          AWS badges &amp; certification roadmap.
        </motion.h2>
        <motion.p variants={cardVariants} className="aws-section-desc">
          Currently building deeper AWS cloud architecture skills through hands-on projects, AWS training badges, and certification prep.
        </motion.p>

        <div className="cert-grid">
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <motion.div variants={cardVariants} className="training-badges-wrap">
          <div className="training-badges-label">
            <span className="training-check">✓</span>
            Completed AWS training badges
          </div>
          <div className="training-badges-row">
            {trainingBadges.map((badge, i) => (
              <motion.span
                key={i}
                className="training-badge"
                variants={cardVariants}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect width="12" height="12" rx="3" fill="rgba(255,153,0,0.15)" />
                  <path d="M3 6.5l2 2 4-4" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
