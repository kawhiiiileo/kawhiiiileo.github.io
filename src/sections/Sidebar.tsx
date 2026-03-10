import { MapPin, Building2, GraduationCap, Github, BookOpen, Quote, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Sidebar() {
  return (
    <aside className="w-[260px] flex-shrink-0">
      <div className="sticky top-14">
        {/* Main Card */}
        <div className="relative bg-[var(--bg-sidebar)] rounded-xl border border-[var(--border-color)] overflow-hidden group neon-pulse">
          {/* Animated gradient top line */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-1 left-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-px h-6 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-50" />
            <div className="absolute top-0 left-0 h-px w-6 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-50" />
          </div>
          <div className="absolute top-1 right-0 w-8 h-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-50" />
            <div className="absolute top-0 right-0 h-px w-6 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-50" />
          </div>
          
          <div className="p-5">
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="relative group/avatar">
                {/* Outer glow ring - animated */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent)] via-purple-500 to-[var(--accent)] rounded-full opacity-40 dark:opacity-70 blur-md transition-all group-hover/avatar:opacity-70 animate-[neonPulse_2s_ease-in-out_infinite]" />
                {/* Inner ring */}
                <div className="absolute -inset-0.5 bg-[var(--bg-sidebar)] rounded-full" />
                {/* Avatar container */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-[var(--border-color)] dark:ring-cyan-500/40 transition-all group-hover/avatar:ring-cyan-400/60">
                  <img 
                    src="/avatar.png" 
                    alt={profile.name} 
                    className="w-full h-full object-cover group-hover/avatar:scale-105 transition-transform duration-300" 
                  />
                  {/* Holographic overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                </div>
                {/* Status dot with pulse */}
                <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-[var(--bg-sidebar)] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full status-dot" />
                </div>
              </div>
            </div>
            
            {/* Name with glitch effect */}
            <div className="text-center mb-3">
              <h1 className="text-base font-bold text-[var(--text-primary)] tracking-tight glitch-text cursor-default">{profile.name}</h1>
              <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">{profile.nameCN}</p>
            </div>
            
            {/* Title Badge with glow */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[var(--accent)]/10 to-purple-500/10 text-[var(--accent)] text-[10px] font-bold rounded-full border border-[var(--accent)]/20 dark:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all hover:shadow-[0_0_16px_rgba(0,245,255,0.3)]">
                <GraduationCap className="w-3 h-3" />
                {profile.title}
              </span>
            </div>
            
            {/* Info with enhanced icons */}
            <div className="space-y-2 mb-4 text-[12px] text-[var(--text-secondary)]">
              <div className="flex items-start gap-2 group/info">
                <Building2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0 group-hover/info:scale-110 transition-transform" />
                <span className="leading-snug">{profile.education.institution}</span>
              </div>
              <div className="flex items-center gap-2 group/info">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 group-hover/info:scale-110 transition-transform" />
                <span>Shanghai, China</span>
              </div>
            </div>
            
            {/* Links with enhanced hover effects */}
            <div className="space-y-1">
              <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <BookOpen className="w-3.5 h-3.5 group-hover:text-[var(--accent)] transition-colors relative z-10" />
                <span className="relative z-10">Google Scholar</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Github className="w-3.5 h-3.5 group-hover:text-[var(--accent)] transition-colors relative z-10" />
                <span className="relative z-10">GitHub</span>
              </a>
              <a href={profile.education.advisorUrl} target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <GraduationCap className="w-3.5 h-3.5 group-hover:text-[var(--accent)] transition-colors relative z-10" />
                <span className="relative z-10">Advisor</span>
              </a>
              <a href={`mailto:${profile.email}`}
                 className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Mail className="w-3.5 h-3.5 group-hover:text-[var(--accent)] transition-colors relative z-10" />
                <span className="relative z-10">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Quote Card with tech styling */}
        <div className="mt-3 relative bg-[var(--bg-sidebar)] rounded-xl border border-[var(--border-color)] p-4 overflow-hidden group hover:border-[var(--accent)]/30 transition-colors">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-px h-4 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-40" />
            <div className="absolute top-0 left-0 h-px w-4 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40" />
          </div>
          
          <Quote className="absolute top-2 right-2 w-5 h-5 text-[var(--accent)]/10 group-hover:text-[var(--accent)]/20 transition-colors" />
          <p className="text-[11px] text-[var(--text-secondary)] italic leading-relaxed relative z-10">
            "{profile.quote}"
          </p>
          <p className="text-[10px] text-[var(--text-muted)] mt-2 text-right">— {profile.quoteDate}</p>
        </div>
      </div>
    </aside>
  );
}
