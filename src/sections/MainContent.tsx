import { News } from './News';
import { Publications } from './Publications';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { profile } from '@/data/profile';

export function MainContent() {
  return (
    <main className="flex-1 min-w-0">
      {/* About Card */}
      <section id="about" className="mb-3 scroll-mt-16">
        <div className="group relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-5 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)] neon-pulse overflow-hidden">
          {/* Scanline effect - dark mode only */}
          <div className="absolute inset-0 scanline opacity-0 dark:opacity-100 pointer-events-none" />
          
          {/* Corner accents - enhanced */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
            <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-xl">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Tech dots background */}
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none" />
          
          {/* Quote */}
          <blockquote className="relative text-[var(--text-secondary)] italic text-[13px] mb-3 pl-3 border-l-2 border-[var(--accent)] leading-relaxed">
            <span className="text-[var(--accent)] mr-1">&gt;</span>{profile.quote}
            <span className="text-[var(--text-muted)] not-italic block mt-1 text-[11px]">— {profile.quoteDate}</span>
          </blockquote>
          
          {/* Bio */}
          <p className="relative text-[var(--text-primary)] text-[14px] leading-relaxed">
            I am an <span className="font-semibold text-[var(--accent)] glitch-text cursor-default">Incoming PhD</span> student (Fall 2026) in the joint program between{' '}
            <span className="font-semibold">Shanghai Jiao Tong University</span> (EPIC Lab) and{' '}
            <span className="font-semibold">HKUST (Guangzhou)</span>, working under Prof.{' '}
            <a href={profile.education.advisorUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">Linfeng Zhang</a>.
            I also collaborate with Dr.{' '}
            <a href={profile.collaborators[0].url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">Siteng Huang</a> at <span className="font-semibold">DAMO Academy</span>.
          </p>
        </div>
      </section>
      
      {/* News Card */}
      <div id="news" className="scroll-mt-16">
        <div className="group relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-5 mb-3 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)] neon-pulse overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
            <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-xl">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Tech dots */}
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none" />
          
          <div className="relative">
            <News />
          </div>
        </div>
      </div>
      
      {/* Publications Card */}
      <div id="publications" className="scroll-mt-16">
        <div className="group relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-5 mb-3 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)] neon-pulse overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
            <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-xl">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Tech dots */}
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none" />
          
          <div className="relative">
            <Publications />
          </div>
        </div>
      </div>
      
      {/* Experience Card */}
      <div id="experience" className="scroll-mt-16">
        <div className="group relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-5 mb-3 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)] neon-pulse overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
            <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-xl">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Tech dots */}
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none" />
          
          <div className="relative">
            <Experience />
          </div>
        </div>
      </div>
      
      {/* Contact Card */}
      <div id="contact" className="scroll-mt-16">
        <div className="group relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] p-5 transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.08)] neon-pulse overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
            <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-xl">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Tech dots */}
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none" />
          
          <div className="relative">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
