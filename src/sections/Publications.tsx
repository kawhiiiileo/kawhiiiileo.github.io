import { useEffect, useState } from 'react';
import { conferencePapers, journalPapers, preprints, profile } from '@/data/profile';
import type { Paper } from '@/data/profile';

export function Publications() {
  const [viewMode, setViewMode] = useState<'all' | 'selected'>('all');
  const [citations, setCitations] = useState(profile.citations);

  useEffect(() => {
    let isMounted = true;

    fetch('/gs_data_shieldsio.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load citation data: ${response.status}`);
        }
        return response.json() as Promise<{ message?: string }>;
      })
      .then((data) => {
        if (isMounted && data.message) {
          setCitations(data.message);
        }
      })
      .catch(() => {
        // Keep the static fallback when Google Scholar data is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h2 className="section-heading">📝 Publications</h2>

      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
        Full list on <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
        {' '}· Citations: {citations} · * Equal contribution † Project head · ✉ Corresponding author
      </p>

      <div className="pub-toggle" role="group" aria-label="Publications view">
        <button
          type="button"
          className={`pub-toggle-btn ${viewMode === 'all' ? 'is-active' : ''}`}
          onClick={() => setViewMode('all')}
          aria-pressed={viewMode === 'all'}
        >
          Show by All
        </button>
        <button
          type="button"
          className={`pub-toggle-btn ${viewMode === 'selected' ? 'is-active' : ''}`}
          onClick={() => setViewMode('selected')}
          aria-pressed={viewMode === 'selected'}
        >
          Show by Topic
        </button>
      </div>

      <div id="pub-all" className={`pub-panel ${viewMode === 'all' ? '' : 'is-hidden'}`}>
        <PaperSection title="Peer-reviewed Conference" papers={conferencePapers} />
        <PaperSection title="Peer-reviewed Journal" papers={journalPapers} />
        <PaperSection title="Preprints & Under Submission" papers={preprints} />
      </div>

      <div id="pub-selected" className={`pub-panel ${viewMode === 'selected' ? '' : 'is-hidden'}`}>
        <TopicSection title="Efficient MLLM Inference" papers={[conferencePapers[0], conferencePapers[1], preprints[3]]} />
        <TopicSection title="RL for LLMs" papers={[preprints[0]]} />
        <TopicSection title="Multi-Agent Prompt Optimization" papers={[preprints[2]]} />
        <TopicSection title="Agentic Systems & Routing" papers={[conferencePapers[3], conferencePapers[4], preprints[5]]} />
        <TopicSection title="Other Works" papers={[journalPapers[0], conferencePapers[2], preprints[1], preprints[4]]} />
      </div>
    </>
  );
}

function PaperSection({ title, papers }: { title: string; papers: Paper[] }) {
  if (papers.length === 0) return null;
  return (
    <div className="pub-section">
      <h3 className="pub-section-title">{title}</h3>
      {papers.map((paper, i) => <PaperItem key={i} paper={paper} />)}
    </div>
  );
}

function TopicSection({ title, papers }: { title: string; papers: Paper[] }) {
  if (papers.length === 0) return null;
  return (
    <div className="pub-section">
      <h3 className="pub-section-title">{title}</h3>
      {papers.map((paper, i) => <PaperItem key={i} paper={paper} />)}
    </div>
  );
}

function PaperItem({ paper }: { paper: Paper }) {
  const badgeColor = getBadgeColor(paper.badge);
  const badgeUrl = getBadgeImageUrl(paper.badge, badgeColor);

  return (
    <div className="pub-item">
      {/* Badge */}
      <span className="pub-badge">
        {paper.badgeUrl ? (
          <a href={paper.badgeUrl} target="_blank" rel="noopener noreferrer">
            <img src={badgeUrl} alt={paper.badge} />
          </a>
        ) : (
          <img src={badgeUrl} alt={paper.badge} />
        )}
      </span>

      {/* Oral note */}
      {paper.oral && <span style={{ color: 'red', fontSize: '13px', fontWeight: '600' }}>(Oral)</span>}

      {/* Authors */}
      <span>{highlightAuthor(paper.authors)}, </span>

      {/* Title */}
      <span style={{ fontWeight: '600' }}>&quot;{paper.title}&quot;</span>

      {/* Venue */}
      {paper.venue && <span>, <em style={{ color: 'var(--text-muted)' }}>{paper.venue}</em></span>}

      {/* Note */}
      {paper.note && <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}> ({paper.note})</span>}

      {/* Links */}
      {paper.links && paper.links.length > 0 && (
        <span className="pub-links">
          {paper.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              [{link.label}]
            </a>
          ))}
        </span>
      )}

      {/* GitHub Stars */}
      {paper.stars && (
        <a href={`https://github.com/${paper.stars}`} target="_blank" rel="noopener noreferrer" className="pub-stars">
          <img src={`https://img.shields.io/github/stars/${paper.stars}?style=social&label=Stars`} alt="stars" />
        </a>
      )}
    </div>
  );
}

// Get badge color based on conference/journal/arxiv
function getBadgeColor(badge: string): string {
  const upper = badge.toUpperCase();
  if (upper.includes('AAAI') || upper.includes('ACM CAISW') || upper.includes('ACM CAIW')) return '007ec6';
  if (upper.includes('CVPR')) return 'blue';
  if (upper.includes('ICCV') || upper.includes('ECCV')) return 'blue';
  if (upper.includes('NEURIPS')) return 'blue';
  if (upper.includes('ICLR')) return 'blue';
  if (upper.includes('ICML')) return 'blue';
  if (upper.includes('ICRA')) return 'blue';
  if (upper.includes('CORL')) return 'blue';
  if (upper.includes('ACMMM') || upper.includes('MM')) return 'blue';
  if (upper.includes('ARXIV')) return 'B31B1B';
  if (upper.includes('RS') || upper.includes('TCSVT') || upper.includes('RAL') || upper.includes('TIP') || upper.includes('TNNLS')) return '49846a';
  return 'blue';
}

function getBadgeImageUrl(badge: string, color: string): string {
  const upper = badge.toUpperCase();

  if (upper.startsWith('AAAI-')) {
    const year = badge.split('-').slice(1).join('-');
    return `https://img.shields.io/badge/AAAI-${encodeURIComponent(year)}-${color}?style=flat-square&labelColor=555555`;
  }

  if (upper.startsWith('ACM CAISW ') || upper.startsWith('ACM CAIW ')) {
    const parts = badge.split(' ');
    const year = parts.pop() || '';
    const label = parts.join(' ');
    return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(year)}-${color}?style=flat-square&labelColor=555555`;
  }

  return `https://img.shields.io/badge/${encodeURIComponent(badge)}-${color}?style=flat-square`;
}

// Highlight the author's name
function highlightAuthor(authors: string): React.ReactNode {
  const parts = authors.split(/(Yuhang Han(?:[*†✉]*)?|Y Han(?:[*†✉]*)?)/);
  return parts.map((part, i) => {
    if (/^(Yuhang Han|Y Han)(?:[*†✉]*)?$/.test(part)) {
      return <u key={i} className="author-highlight">{part}</u>;
    }
    return <span key={i}>{part}</span>;
  });
}
