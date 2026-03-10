import { Briefcase, User, Lightbulb, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience">
      <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[var(--accent)] rounded-full shadow-[0_0_8px_currentColor]"></span>
        <Briefcase className="w-4 h-4 text-[var(--accent)]" />
        Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="group/exp relative pl-4 border-l-2 border-[var(--border-color)] hover:border-[var(--accent)]/50 transition-colors">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[var(--border-color)] group-hover/exp:bg-[var(--accent)] transition-colors shadow-[0_0_4px_currentColor]" />
            
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="font-semibold text-[var(--text-primary)] text-[14px] group-hover/exp:text-[var(--accent)] transition-colors">{exp.role}</span>
              <span className="text-[var(--text-muted)]">@</span>
              <span className="font-semibold text-[var(--text-primary)] text-[14px]">{exp.institution}</span>
              <span className="text-[var(--accent)] text-[11px] font-mono ml-auto opacity-70">{exp.period}</span>
            </div>
            <div className="text-[12px] text-[var(--text-secondary)] space-y-0.5">
              <p className="flex items-center gap-1">
                <User className="w-3 h-3 text-[var(--text-muted)]" />
                <span className="text-[var(--text-muted)]">Advisor:</span> {exp.advisor}
              </p>
              <p className="flex items-center gap-1">
                <Lightbulb className="w-3 h-3 text-[var(--text-muted)]" />
                <span className="text-[var(--text-muted)]">Topic:</span> {exp.topic}
              </p>
            </div>
            {exp.outputs && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[var(--text-muted)] text-[11px]">Output:</span>
                {exp.outputs.map((o, i) => (
                  <a key={i} href={o.url} target="_blank" rel="noopener noreferrer" 
                     className="text-[var(--accent)] hover:underline text-[12px] font-semibold flex items-center gap-0.5 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">
                    [{o.text}]
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
