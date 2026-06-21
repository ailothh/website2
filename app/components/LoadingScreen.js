'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const TERMINAL_LINES = [
  { delay: 0, text: '$ ssh root@awinkler.dev', color: '#00ff41' },
  { delay: 300, text: 'Connecting to 192.168.1.337...', color: '#666' },
  { delay: 600, text: 'Connection established.', color: '#00ff41' },
  { delay: 900, text: '$ sudo ./portfolio_init --deploy', color: '#00ff41' },
  { delay: 1100, text: '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100% — modules loaded', color: '#00ff41' },
  { delay: 1400, text: '[OK] Decrypting project payloads...', color: '#0f0' },
  { delay: 1600, text: '[OK] Injecting interface...', color: '#0f0' },
  { delay: 1800, text: '', color: '' },
  { delay: 1900, text: '  ACCESS GRANTED', color: '#00ff41', bold: true },
];

function MatrixRain({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const chars = '01';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff4130';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.3 + 0.05})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);

  return null;
}

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [lines, setLines] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, line.delay);
    });

    const fadeTimer = setTimeout(() => setFading(true), 2400);
    const removeTimer = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`hacker-loading-screen${fading ? ' hacker-fade-out' : ''}`}>
      <canvas ref={canvasRef} className="matrix-canvas" />
      <MatrixRain canvasRef={canvasRef} />
      <div className="hacker-terminal">
        <div className="hacker-terminal-chrome">
          <span className="ht-dot ht-dot-red" />
          <span className="ht-dot ht-dot-yellow" />
          <span className="ht-dot ht-dot-green" />
          <span className="ht-title">root@awinkler:~</span>
        </div>
        <div className="hacker-terminal-body">
          {lines.map((line, i) => (
            <div
              key={i}
              className="ht-line"
              style={{
                color: line.color,
                fontWeight: line.bold ? '700' : '400',
                fontSize: line.bold ? '1.1rem' : '0.82rem',
                letterSpacing: line.bold ? '0.3em' : '0.02em',
                textAlign: line.bold ? 'center' : 'left',
                marginTop: line.bold ? '0.5rem' : '0',
              }}
            >
              {line.text}
            </div>
          ))}
          <span className="ht-cursor">█</span>
        </div>
      </div>
    </div>
  );
}
