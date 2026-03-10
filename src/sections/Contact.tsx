import { Mail, Handshake, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact() {
  const email = profile.email || "yuhang.han@sjtu.edu.cn";
  
  return (
    <section id="contact">
      <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[var(--accent)] rounded-full shadow-[0_0_8px_currentColor]"></span>
        <Sparkles className="w-4 h-4 text-[var(--accent)]" />
        Open for Collaboration
      </h2>
      
      <div className="relative p-4 rounded-lg bg-gradient-to-r from-[var(--accent)]/5 to-purple-500/5 border border-[var(--accent)]/20 overflow-hidden group">
        {/* Animated background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-4 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-50" />
          <div className="absolute top-0 left-0 h-px w-4 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-50" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-px h-4 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 h-px w-4 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-50" />
        </div>
        
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(0,245,255,0.3)] transition-shadow">
            <Handshake className="w-5 h-5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex-1">
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-3">
              I am always open to research collaborations and discussions. 
              If you are interested in working together or have any questions about my research, 
              feel free to reach out!
            </p>
            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-white text-[13px] font-semibold hover:shadow-[0_0_16px_rgba(0,245,255,0.4)] transition-all relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
