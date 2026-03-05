import { BookOpen, FileText, ExternalLink, Code2, Star } from 'lucide-react';
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

function getBadgeClass(type: string) {
  switch (type) {
    case 'conference':
      return 'badge-conference';
    case 'journal':
      return 'badge-journal';
    case 'arxiv':
      return 'badge-arxiv';
    default:
      return 'badge-conference';
  }
}

function highlightAuthor(authors: string) {
  const parts = authors.split(/(Yuhang Han|Y Han|Yuhang Han\*|Y Han\*)/);
  return parts.map((part, i) => {
    if (part === 'Yuhang Han' || part === 'Y Han' || part === 'Yuhang Han*' || part === 'Y Han*') {
      return <span key={i} className="text-cyan-400 font-medium">{part}</span>;
    }
    return <span key={i} className="text-gray-400">{part}</span>;
  });
}

function PaperItem({ paper }: { paper: Paper }) {
  return (
    <li className="group relative py-4 px-4 -mx-4 rounded-xl border border-transparent hover:border-cyan-500/25 hover:bg-gradient-to-r hover:from-cyan-500/[0.04] hover:to-transparent transition-all duration-300">
      {/* Badge + Title + Authors + Venue */}
      <div className="flex items-baseline gap-2.5 flex-wrap text-[14px] leading-relaxed">
        {/* Badge */}
        <span className={getBadgeClass(paper.badgeType)}>
          {paper.badge}
        </span>
        
        {/* Title */}
        <span className="text-gray-100 font-semibold group-hover:text-cyan-300 transition-colors">{paper.title}</span>
        
        {/* Authors */}
        <span className="text-gray-400">
          {highlightAuthor(paper.authors)}.
        </span>
        
        {/* Venue */}
        <span className="text-gray-500 italic">{paper.venue}</span>
        
        {/* Note */}
        {paper.note && (
          <span className="text-cyan-500/70 text-xs">({paper.note})</span>
        )}
      </div>
      
      {/* Links row with text labels */}
      <div className="flex items-center gap-2 mt-3">
        {paper.paperUrl && (
          <a
            href={paper.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>paper</span>
          </a>
        )}
        {paper.pageUrl && (
          <a
            href={paper.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/25 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>page</span>
          </a>
        )}
        {paper.codeUrl && (
          <a
            href={paper.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/25 hover:bg-green-500/20 hover:border-green-500/40 transition-all"
          >
            <Code2 className="w-4 h-4" />
            <span>code</span>
          </a>
        )}
        {paper.stars && (
          <a
            href={`https://github.com/${paper.stars}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all"
          >
            <Star className="w-4 h-4 fill-current" />
            <img 
              src={`https://img.shields.io/github/stars/${paper.stars}?style=flat-square&color=f59e0b&labelColor=0a0a0f`}
              alt=""
              className="h-4"
            />
          </a>
        )}
      </div>
    </li>
  );
}

function PaperSection({ title, papers, count }: { title: string; papers: Paper[]; count: number }) {
  if (papers.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
        {title}
        <span className="text-gray-600 font-mono">({count})</span>
      </h3>
      <ul className="space-y-1">
        {papers.map((paper, index) => (
          <PaperItem key={index} paper={paper} />
        ))}
      </ul>
    </div>
  );
}

export function Publications() {
  const totalPapers = conferencePapers.length + journalPapers.length + preprints.length;
  
  return (
    <section id="publications" className="mb-8">
      {/* Section header with decorative line */}
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span>Publications</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent" />
        <span className="text-sm text-gray-500 font-mono">{totalPapers} papers</span>
      </div>
      
      <p className="text-sm text-gray-400 mb-5">
        Full list on{' '}
        <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="link-cyan">
          Google Scholar
        </a>
        . *: Equal contribution.
      </p>
      
      <PaperSection title="Conference Papers" papers={conferencePapers} count={conferencePapers.length} />
      <PaperSection title="Journal Papers" papers={journalPapers} count={journalPapers.length} />
      <PaperSection title="Preprints & Under Submission" papers={preprints} count={preprints.length} />
    </section>
  );
}
