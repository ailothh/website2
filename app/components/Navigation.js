'use client';

export default function Navigation() {
  function scrollTo(id) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="site-nav">
      <a href="#" className="nav-logo">AW_</a>
      <ul className="nav-links">
        <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('#about'); }}>About</a></li>
        <li><a href="#work" onClick={e => { e.preventDefault(); scrollTo('#work'); }}>Work</a></li>
        <li><a href="#research" onClick={e => { e.preventDefault(); scrollTo('#research'); }}>Research</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
}
