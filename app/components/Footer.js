'use client';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-copy">© {new Date().getFullYear()} Alexander Winkler</span>
      <span className="footer-mono">awinkler.dev</span>
    </footer>
  );
}
