import { FileText, BookOpen, FlaskConical } from 'lucide-react';
import { conferencePapers, journalPapers, preprints, profile } from '@/data/profile';

interface Paper {
  badge: string;
  badgeType: 'conference' | 'journal' | 'arxiv';
  authors: string;
  title: string;
  venue: string;
  note?: string;
  paperUrl?: string;
  pageUrl?: string;
  codeUrl?: string;
  stars?: string;
}

function getBadgeClass(badge: string) {
  const upper = badge.toUpperCase();
  if (upper.includes('ICLR')) return 'badge-iclr';
  if (upper.includes('AAAI')) return 'badge-aaai';
  if (upper.includes('NEURIPS')) return 'badge-neurips';
  if (upper.includes('EMNLP')) return 'badge-emnlp';
  if (upper.includes('CVPR')) return 'badge-cvpr';
  if (upper.includes('ICML')) return 'badge-icml';
  if (upper.includes('ARXIV')) return 'badge-arxiv';
  return 'badge-journal';
}

function highlightAuthor(authors: string) {
  const parts = authors.split(/(Yuhang Han|Y Han|Yuhang Han\*|Y Han\*)/);
  return parts.map((part, i) => {
    if (part === 'Yuhang Han' || part === 'Y Han' || part === 'Yuhang Han*' || part === 'Y Han*') {
      return <span key={i} className="font-semibold text-[var(--text-primary)]">{part}</span>;
    }
    return <span key={i} className="text-[var(--text-secondary)]">{part}</span>;
  });
}

function PaperItem({ paper }: { paper: Paper }) {
  const badgeParts = paper.badge.split(' ');
  const conf = badgeParts[0];
  const year = badgeParts[1] || '';
  
  return (
    <li className="py-2.5 border-b border-[var(--border-color)] last:border-0 group/item hover:bg-[var(--accent)]/[0.02] -mx-2 px-2 rounded transition-colors">
      {/* Badges + content - natural wrap */}
      <div className="text-[13px] leading-relaxed">
        {/* Badges inline with glow on hover */}
        <span className={`badge-conf ${getBadgeClass(paper.badge)} mr-1 transition-all group-hover/item:shadow-[0_0_8px_currentColor]`}>{conf}</span>
        {year && <span className={`badge-conf ${getBadgeClass(paper.badge)} mr-1 transition-all group-hover/item:shadow-[0_0_8px_currentColor]`}>{year}</span>}
        
        {/* Content follows badges */}
        <span>{highlightAuthor(paper.authors)},</span>
        {' '}
        <span className="font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors">"{paper.title}"</span>
        {', '}
        <span className="italic text-[var(--text-muted)]">{paper.venue}</span>
        {paper.note && <span className="text-[var(--text-muted)] text-xs"> ({paper.note})</span>}
        
        {/* Links with enhanced hover */}
        <span className="ml-1">
          {paper.paperUrl && (
            <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" 
               className="text-[var(--accent)] hover:underline font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">[paper]</a>
          )}
          {paper.codeUrl && (
            <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer" 
               className="text-[var(--accent)] hover:underline font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">[code]</a>
          )}
          {paper.pageUrl && (
            <a href={paper.pageUrl} target="_blank" rel="noopener noreferrer" 
               className="text-[var(--accent)] hover:underline font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">[page]</a>
          )}
          {paper.stars && (
            <a href={`https://github.com/${paper.stars}`} target="_blank" rel="noopener noreferrer" className="ml-1 align-middle">
              <img src={`https://img.shields.io/github/stars/${paper.stars}?style=flat-square&color=f59e0b&labelColor=1e293b&logo=github&logoColor=fff`} 
                   alt="stars" className="h-4 dark:inline hidden" />
              <img src={`https://img.shields.io/github/stars/${paper.stars}?style=flat-square&color=f59e0b&labelColor=f8fafc&logo=github&logoColor=333`} 
                   alt="stars" className="h-4 dark:hidden" />
            </a>
          )}
        </span>
      </div>
    </li>
  );
}

function PaperSection({ title, papers, icon: Icon }: { title: string; papers: Paper[]; icon: React.ElementType }) {
  if (papers.length === 0) return null;
  return (
    <div className="mb-5">
      <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-[var(--accent)]" />
        {title}
      </h3>
      <ul>{papers.map((p, i) => <PaperItem key={i} paper={p} />)}</ul>
    </div>
  );
}

export function Publications() {
  return (
    <section id="publications">
      <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[var(--accent)] rounded-full shadow-[0_0_8px_currentColor]"></span>
        Publications
      </h2>
      
      <p className="text-[12px] text-[var(--text-secondary)] mb-3">
        Full list on <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline font-semibold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] after:transition-all hover:after:w-full">Google Scholar</a>
        {' '}·{}
        <img src="https://img.shields.io/badge/dynamic/json?label=citations&query=total_citations&url=https%3A%2F%2Fcse.bth.se%2F~fer%2Fgooglescholar-api%2Fgooglescholar.php%3Fuser%3DI0V2KAEAAAAJ&color=3b82f6&labelColor=1e293b&style=flat-square&logo=google-scholar" 
             alt="citations" className="inline h-4 ml-1 align-text-bottom dark:inline hidden" />
        <img src="https://img.shields.io/badge/dynamic/json?label=citations&query=total_citations&url=https%3A%2F%2Fcse.bth.se%2F~fer%2Fgooglescholar-api%2Fgooglescholar.php%3Fuser%3DI0V2KAEAAAAJ&color=3b82f6&labelColor=f8fafc&style=flat-square&logo=google-scholar" 
             alt="citations" className="inline h-4 ml-1 align-text-bottom dark:hidden" />
        {' '}· * Equal contribution
      </p>
      
      <PaperSection title="Conference Papers" papers={conferencePapers} icon={FileText} />
      <PaperSection title="Journal Papers" papers={journalPapers} icon={BookOpen} />
      <PaperSection title="Preprints" papers={preprints} icon={FlaskConical} />
    </section>
  );
}
