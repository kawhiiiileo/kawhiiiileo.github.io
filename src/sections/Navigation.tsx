import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'About Me', href: '#about-me' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Misc', href: '#misc' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about-me');
  const footerSection = useRef('services');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(footerSection.current);
        return;
      }
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 90;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('about-me');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const section = href.slice(1);
    if (section === 'services' || section === 'misc') footerSection.current = section;
    setActiveSection(section);
    const element = document.querySelector(href);
    if (element) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="masthead" aria-label="Main navigation">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <ul className="visible-links">
            <li className="masthead__menu-item masthead__menu-item--lg masthead__menu-home-item">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}
              >
                Yuhang Han
              </a>
            </li>
            {navItems.map((item) => (
              <li className="masthead__menu-item" key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={activeSection === item.href.slice(1) ? 'is-active' : ''}
                  aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
