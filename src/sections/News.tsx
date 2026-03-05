import { newsItems } from '@/data/profile';
import { Newspaper, Code2 } from 'lucide-react';

export function News() {
  return (
    <section id="news" className="mb-8">
      {/* Section header with decorative line */}
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-cyan-400" />
          <span>News</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent" />
      </div>
      
      <ul className="space-y-1">
        {newsItems.map((item, index) => (
          <li key={index} className="group text-[14px] text-gray-300 flex items-start gap-3 py-3 px-4 -mx-4 rounded-xl border border-transparent hover:border-cyan-500/15 hover:bg-cyan-500/[0.02] transition-all duration-200">
            <span className="text-cyan-500/70 font-mono text-xs whitespace-nowrap mt-0.5">[{item.date}]</span>
            <span className="flex-shrink-0 text-lg leading-none mt-0">{item.emoji}</span>
            <span className="leading-relaxed flex-1">
              {item.content}
              {item.link && (
                <a 
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cyan mx-1"
                >
                  {item.link.text}
                </a>
              )}
              {item.highlight && (
                <span className="text-cyan-400 font-medium mx-1">{item.highlight}</span>
              )}
              {item.extra}
            </span>
            {item.codeUrl && (
              <a 
                href={item.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/25 hover:bg-green-500/20 hover:border-green-500/40 transition-all flex-shrink-0"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>code</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
