import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

const navItems = [
  { label: 'About', id: 'about-me' },
  { label: 'Publications', id: 'publications' },
  { label: 'News', id: 'news' },
  { label: 'Experience', id: 'experience' },
  { label: 'Services', id: 'services' },
  { label: 'Misc', id: 'misc' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about-me');

  useEffect(() => {
    const masthead = document.getElementById('masthead');
    const sections = navItems.map(({ id }) => document.getElementById(id)).reverse();

    function updateActiveSection() {
      const top = (masthead?.offsetHeight ?? 0) + 28;
      const hash = window.location.hash.slice(1);
      const anchored = sections.find((section) => section?.id === hash);
      const atBottom = window.scrollY > 0 &&
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;

      if (atBottom) {
        const bounds = anchored?.getBoundingClientRect();
        const visibleAnchor = bounds && bounds.bottom > top && bounds.top < window.innerHeight;
        setActiveSection(visibleAnchor ? hash : sections[0]?.id ?? 'about-me');
        return;
      }

      const current = sections.find((section) => section && section.getBoundingClientRect().top <= top);
      setActiveSection(current?.id ?? 'about-me');
    }

    const initialHash = window.location.hash;
    const initialAnchor = document.getElementById(initialHash.slice(1));
    if (initialAnchor) {
      void document.fonts.ready.then(() => {
        if (initialAnchor.isConnected && window.location.hash === initialHash) {
          initialAnchor.scrollIntoView({ block: 'start', behavior: 'instant' });
        }
      });
    }
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="masthead" id="masthead">
      <div className="page-width masthead-layout">
        <a className="site-name" href="#about-me">{profile.name}</a>
        <nav className="masthead-nav" aria-label="Main navigation">
          <ul>
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a href={'#' + id} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="cv-link" href={import.meta.env.BASE_URL + 'hanyh.pdf'} target="_blank" rel="noopener noreferrer" aria-label="CV (PDF)">CV <span>PDF</span></a>
      </div>
    </header>
  );
}
