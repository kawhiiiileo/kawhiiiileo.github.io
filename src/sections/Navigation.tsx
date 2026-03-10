import { useState, useEffect } from 'react';
import { Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const { isDark, toggleTheme } = useTheme();

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
    <nav className="sticky top-0 z-50 bg-[var(--bg-card)]/90 backdrop-blur-xl border-b border-[var(--border-color)]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo with tech styling */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
          >
            <Terminal className="w-4 h-4 text-[var(--accent)] group-hover:rotate-12 transition-transform" />
            <span className="font-mono">
              <span className="text-[var(--accent)]">&lt;</span>
              Yuhang
              <span className="text-[var(--accent)]">/&gt;</span>
            </span>
          </a>

          {/* Nav + Theme Toggle */}
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2.5 py-1.5 rounded text-[11px] font-semibold transition-all overflow-hidden group ${
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {/* Active indicator glow */}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute inset-0 bg-[var(--accent)]/10 rounded animate-[neonPulse_2s_ease-in-out_infinite]" />
                )}
                {/* Hover shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            
            {/* Divider */}
            <div className="w-px h-4 bg-[var(--border-color)] mx-2" />
            
            {/* Theme Toggle with glow */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all relative group"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              <span className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 rounded transition-colors" />
              {isDark ? (
                <Sun className="w-4 h-4 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
