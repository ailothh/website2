'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Terminal({ lines = [], title = 'breach-analysis', startDelay = 1000 }) {
  const [typedText, setTypedText] = useState('');
  const [showOutputs, setShowOutputs] = useState([]);
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [started, setStarted] = useState(false);
  const rafRef = useRef(null);

  const firstPrompt = lines[0] || { type: 'prompt', content: '' };
  const outputLines = lines.slice(1);

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delay);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let charIdx = 0;
    const target = firstPrompt.content;
    const CHAR_DELAY = 55;

    function typeNext() {
      charIdx++;
      setTypedText(target.slice(0, charIdx));
      if (charIdx < target.length) {
        rafRef.current = setTimeout(typeNext, CHAR_DELAY);
      } else {
        setTimeout(() => {
          outputLines.forEach((_, i) => {
            setTimeout(() => {
              setShowOutputs(prev => [...prev, i]);
              if (i === outputLines.length - 1) {
                setTimeout(() => setShowFinalCursor(true), 200);
              }
            }, 200 + i * 80);
          });
          if (outputLines.length === 0) {
            setTimeout(() => setShowFinalCursor(true), 200);
          }
        }, 200);
      }
    }

    rafRef.current = setTimeout(typeNext, CHAR_DELAY);
    return () => clearTimeout(rafRef.current);
  }, [started]);

  function lineColor(type) {
    if (type === 'prompt') return 'terminal-line-prompt';
    if (type === 'success') return 'terminal-line-success';
    if (type === 'muted') return 'terminal-line-muted';
    return 'terminal-line-output';
  }

  return (
    <motion.div
      className="terminal-window"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: startDelay / 1000, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="terminal-chrome">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt-symbol">$</span>
          <span className="terminal-line-prompt">
            {typedText}
            {started && typedText.length < firstPrompt.content.length && (
              <span className="terminal-cursor" />
            )}
          </span>
        </div>
        {outputLines.map((line, i) =>
          showOutputs.includes(i) ? (
            <motion.div
              key={i}
              className="terminal-line"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className={lineColor(line.type)}>{line.content}</span>
            </motion.div>
          ) : null
        )}
        {showFinalCursor && (
          <div className="terminal-line">
            <span className="terminal-prompt-symbol">$</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
