import { useState } from 'react';
import { conferencePapers, journalPapers, preprints, profile, technicalReports } from '@/data/profile';
import type { Paper } from '@/data/profile';
import { CitationBadge } from '@/components/CitationBadge';

type PublicationKind = 'conference' | 'journal' | 'report' | 'preprint';

export function Publications() {
  const [viewMode, setViewMode] = useState<'all' | 'selected'>('all');

  return (
    <>
      <div className="section-header">
        <h2 className="section-heading">Publications</h2>
        <CitationBadge count={profile.citations} label="Total citations" />
      </div>
      <div className="publication-toolbar">
        <p className="publication-legend">* Equal contribution · † Project head · ✉ Corresponding author</p>
        <div className="pub-toggle" role="group" aria-label="Publications view">
          <button type="button" className={`pub-toggle-btn ${viewMode === 'all' ? 'is-active' : ''}`}
            onClick={() => setViewMode('all')} aria-pressed={viewMode === 'all'} aria-controls="pub-all">
            All papers
          </button>
          <button type="button" className={`pub-toggle-btn ${viewMode === 'selected' ? 'is-active' : ''}`}
            onClick={() => setViewMode('selected')} aria-pressed={viewMode === 'selected'} aria-controls="pub-selected">
            By topic
          </button>
        </div>
      </div>

      <div id="pub-all" className={`pub-panel ${viewMode === 'all' ? '' : 'is-hidden'}`}>
        <PaperSection title="Peer-reviewed Conference" papers={conferencePapers} kind="conference" />
        <PaperSection title="Peer-reviewed Journal" papers={journalPapers} kind="journal" />
        <PaperSection title="Technical Reports" papers={technicalReports} kind="report" />
        <PaperSection title="Preprints & Under Submission" papers={preprints} kind="preprint" />
      </div>

      <div id="pub-selected" className={`pub-panel ${viewMode === 'selected' ? '' : 'is-hidden'}`}>
        <PaperSection title="Multimodal Acceleration" papers={[conferencePapers[2], conferencePapers[3], preprints[0]]} />
        <PaperSection title="Multimodal Reinforcement Learning" papers={[conferencePapers[1]]} />
        <PaperSection title="Multi-Agent Prompt Optimization" papers={[journalPapers[0]]} />
        <PaperSection title="Agentic Systems & Routing" papers={[conferencePapers[0]]} />
        <PaperSection title="Other Works" papers={[journalPapers[1], ...technicalReports, preprints[1]]} />
      </div>
    </>
  );
}

function PaperSection({ title, papers, kind }: { title: string; papers: Paper[]; kind?: PublicationKind }) {
  if (papers.length === 0) return null;
  return (
    <div className={`pub-section${kind ? ` pub-section--${kind}` : ''}`}>
      <h3 className="pub-section-title">{title}<span>{papers.length}</span></h3>
      {papers.map((paper) => <PaperItem key={paper.title} paper={paper} />)}
    </div>
  );
}

function PaperItem({ paper }: { paper: Paper }) {
  const isTechnicalReport = paper.badge === 'Technical Report';
  const badgeVariant = isTechnicalReport ? 'report' : paper.badge.startsWith('arXiv') ? 'preprint'
    : /^(TMLR|RS)-/.test(paper.badge) ? 'journal' : 'conference';
  const badgeLabel = paper.badge.startsWith('arXiv') ? 'arXiv' : paper.badge.replace('-', ' ');
  const badgeContent = (
    <>
      {isTechnicalReport && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h5" />
        </svg>
      )}
      {badgeLabel}
    </>
  );

  return (
    <article className="pub-item">
      <h4 className="pub-title">
        {paper.badgeUrl ? (
          <a className={`pub-badge pub-badge--${badgeVariant}`} href={paper.badgeUrl} target="_blank" rel="noopener noreferrer">{badgeContent}</a>
        ) : (
          <span className={`pub-badge pub-badge--${badgeVariant}`}>{badgeContent}</span>
        )}
        {paper.title}
        {paper.oral && <span className="pub-oral"> (Oral)</span>}
      </h4>
      {paper.authors && <p className="pub-authors">{highlightAuthor(paper.authors)}</p>}
      {paper.contribution && <p className="pub-contribution">{paper.contribution}</p>}
      <div className="pub-meta">
        <span className="pub-venue">
          {paper.venue && <em>{paper.venue}</em>}
          {paper.note && <span className="pub-note"> · {paper.note}</span>}
        </span>
        {paper.links && paper.links.length > 0 && (
          <span className="pub-links">
            {paper.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {link.label === 'github' ? (
                    <path d="m5 4-4 4 4 4m6-8 4 4-4 4M9 2 7 14" />
                  ) : link.label === 'project page' ? (
                    <path d="M6 3H3v10h10v-3M9 2h5v5M14 2 7 9" />
                  ) : (
                    <path d="M9 1H3v14h10V5L9 1Zm0 0v4h4M6 8h4M6 11h4" />
                  )}
                </svg>
                {link.label === 'github' ? 'Code' : link.label === 'project page' ? 'Project' : link.label === 'paper' ? 'Paper' : link.label}
              </a>
            ))}
          </span>
        )}
        {paper.citations !== undefined && <CitationBadge count={paper.citations} />}
        {paper.stars && (
          <a href={`https://github.com/${paper.stars}`} target="_blank" rel="noopener noreferrer" className="pub-stars" aria-label={`GitHub stars for ${paper.stars}`}>
            <img src={`https://img.shields.io/github/stars/${paper.stars}?style=social&label=Stars`} alt="GitHub stars" height="18" loading="lazy" />
          </a>
        )}
      </div>
    </article>
  );
}

function highlightAuthor(authors: string): React.ReactNode {
  const parts = authors.split(/(Yuhang Han(?:[*†✉]*)?|Y Han(?:[*†✉]*)?)/);
  return parts.map((part, i) => {
    if (/^(Yuhang Han|Y Han)(?:[*†✉]*)?$/.test(part)) {
      return <u key={i} className="author-highlight">{part}</u>;
    }
    return <span key={i}>{part}</span>;
  });
}
