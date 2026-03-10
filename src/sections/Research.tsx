import { profile } from '@/data/profile';

export function Research() {
  return (
    <section id="research">
      <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[var(--accent)] rounded-full"></span>
        Research Interests
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {profile.researchInterests.map((interest, index) => (
          <div 
            key={index} 
            className="group p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)]/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                <span className="text-lg">{interest.icon}</span>
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-[var(--text-primary)] mb-1">
                  {interest.title}
                </h3>
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
