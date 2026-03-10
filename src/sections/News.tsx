import { Bell } from 'lucide-react';
import { newsItems } from '@/data/profile';

export function News() {
  return (
    <section id="news">
      <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[var(--accent)] rounded-full shadow-[0_0_8px_currentColor]"></span>
        <Bell className="w-4 h-4 text-[var(--accent)]" />
        News
      </h2>
      <ul className="space-y-1.5">
        {newsItems.map((item, index) => (
          <li key={index} className="text-[13px] text-[var(--text-secondary)] flex items-start gap-2 group/item hover:bg-[var(--accent)]/[0.02] -mx-2 px-2 py-1 rounded transition-colors">
            <span className="text-[var(--accent)] font-mono text-[11px] whitespace-nowrap mt-0.5 opacity-70">&gt; {item.date}</span>
            <span className="group-hover/item:scale-110 transition-transform">{item.emoji}</span>
            <span className="flex-1 leading-snug">
              {item.content}
              {item.link && (
                <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">
                  {item.link.text}
                </a>
              )}
              {item.highlight && <span className="font-semibold text-[var(--text-primary)]">{item.highlight}</span>}
              {item.extra}
              {item.codeUrl && (
                <a href={item.codeUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold ml-1 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">
                  [code]
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
