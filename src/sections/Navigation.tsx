import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <ul className="visible-links">
            <li className="masthead__menu-item masthead__menu-item--lg masthead__menu-home-item">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
