import { useEffect, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { conferencePapers, journalPapers, preprints, profile, technicalReports } from '@/data/profile';
import type { Paper } from '@/data/profile';
import { CitationBadge } from '@/components/CitationBadge';
import { ScholarCitations } from '@/components/ScholarCitations';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { loadScholarSnapshot, scholarPaperCitations } from '@/lib/scholar';
import type { ScholarSnapshot } from '@/lib/scholar';

interface PaperGroup {
  topic?: string;
  papers: readonly Paper[];
}

const allPapers = [...conferencePapers, ...journalPapers, ...technicalReports, ...preprints];
const topicGroups: PaperGroup[] = [
  { topic: 'Multimodal Acceleration', papers: [conferencePapers[2], conferencePapers[3], ...preprints.filter(paper => paper.topic === 'multimodal-acceleration')] },
  { topic: 'Multimodal Reinforcement Learning', papers: [conferencePapers[1], ...preprints.filter(paper => paper.topic === 'multimodal-rl')] },
  { topic: 'Asynchronous Reinforcement Learning', papers: preprints.filter(paper => paper.topic === 'asynchronous-rl') },
  { topic: 'Multi-Agent Prompt Optimization', papers: [journalPapers[0]] },
  { topic: 'Agentic Systems & Routing', papers: [conferencePapers[0]] },
  { topic: 'Other topics', papers: [journalPapers[1], ...technicalReports, ...preprints.filter(paper => !paper.topic)] },
];

const publicationViews = [
  { id: 'pub-all', label: 'All papers', groups: [{ papers: allPapers }] },
  { id: 'pub-topic', label: 'By topic', groups: topicGroups },
  { id: 'pub-preprints', label: 'Preprints', groups: [{ papers: preprints }] },
] as const;

const authorshipSections = [
  { title: 'First & Co-first Author', lead: true },
  { title: 'Other Work', lead: false },
];

type ViewId = (typeof publicationViews)[number]['id'];

export function Publications() {
  const [viewId, setViewId] = useState<ViewId>(() => (
    window.location.hash === '#preprints' ? 'pub-preprints' : 'pub-all'
  ));
  const [scholar, setScholar] = useState<ScholarSnapshot | null>(null);
  const latestTotal = scholar && Date.parse(scholar.updated) >= Date.parse(profile.citationsSavedOn)
    ? scholar
    : null;

  useEffect(() => {
    const controller = new AbortController();
    void loadScholarSnapshot(profile.googleScholar, controller.signal)
      .then((snapshot) => {
        if (!controller.signal.aborted) setScholar(snapshot);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    function syncPublicationHash() {
      if (window.location.hash === '#preprints') setViewId('pub-preprints');
      if (window.location.hash === '#publications') {
        setViewId((current) => current === 'pub-preprints' ? 'pub-all' : current);
      }
    }

    window.addEventListener('hashchange', syncPublicationHash);
    return () => window.removeEventListener('hashchange', syncPublicationHash);
  }, []);

  function changeView(next: ViewId) {
    setViewId(next);
    if (next === 'pub-preprints' || window.location.hash === '#preprints') {
      window.history.replaceState(window.history.state, '', next === 'pub-preprints' ? '#preprints' : '#publications');
    }
  }

  return (
    <>
      <div className="section-header">
        <h2 id="publications-heading" className="section-heading">Publications</h2>
        <ScholarCitations
          count={latestTotal?.total ?? profile.citations}
          href={profile.googleScholar}
          updated={latestTotal?.updated ?? profile.citationsSavedOn}
          synced={latestTotal !== null}
        />
      </div>

      <div className="chapter-content" id="preprints">
        <div className="publication-toolbar">
          <div className="pub-toggle" role="group" aria-label="Publications view">
            {publicationViews.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => changeView(id)}
                aria-pressed={viewId === id}
                aria-controls={id}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {publicationViews.map(({ id, groups }) => (
          <div key={id} id={id} hidden={viewId !== id}>
            {viewId === id && <PaperList groups={groups} scholar={scholar} />}
          </div>
        ))}
        <p className="publication-legend">* Equal contribution · † Project head · ✉ Corresponding author</p>
      </div>
    </>
  );
}

function PaperList({ groups, scholar }: { groups: readonly PaperGroup[]; scholar: ScholarSnapshot | null }) {
  return authorshipSections.map(({ title, lead }) => {
    const matchingGroups = groups
      .map(({ topic, papers }) => ({ topic, papers: papers.filter(paper => Boolean(paper.authorship) === lead) }))
      .filter(({ papers }) => papers.length > 0);

    if (matchingGroups.length === 0) return null;

    return (
      <section className="pub-section" key={title} aria-label={title}>
        <h3 className="pub-section-title">{title}</h3>
        {matchingGroups.map(({ topic, papers }) => (
          <div className={topic ? 'pub-topic-group' : undefined} key={topic ?? title}>
            {topic && <h4 className="pub-topic-title">{topic}</h4>}
            {papers.map((paper) => (
              <PaperItem
                key={paper.title}
                paper={paper}
                heading={topic ? 'h5' : 'h4'}
                citations={scholarPaperCitations(scholar, paper.title) ?? paper.citations}
              />
            ))}
          </div>
        ))}
      </section>
    );
  });
}

function PaperItem({ paper, heading: Heading, citations }: { paper: Paper; heading: 'h4' | 'h5'; citations?: number }) {
  const isPreprint = paper.badge.startsWith('arXiv-');
  const venueLabel = isPreprint ? paper.badge.replace('arXiv-', 'Preprint · arXiv:') : paper.badge.replace('-', ' ');
  const primaryLink = paper.links?.find(({ label }) => label === 'arXiv' || label === 'paper')
    ?? paper.links?.[0];

  return (
    <article className={paper.image ? 'pub-item' : 'pub-item pub-item--text'}>
      <div className="pub-entry">
        <Heading className="pub-title">
          {primaryLink
            ? <a href={primaryLink.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
            : paper.title}
        </Heading>
        {paper.authors && <p className="pub-authors">{highlightAuthor(paper.authors)}</p>}
        {paper.contribution && <p className="pub-contribution">{paper.contribution}</p>}
        <p className="pub-venue">
          {paper.badgeUrl
            ? <a href={paper.badgeUrl} target="_blank" rel="noopener noreferrer" title={paper.venue}>{venueLabel}</a>
            : <span title={paper.venue}>{venueLabel}</span>}
          {paper.oral && <span> · Oral</span>}
          {paper.note && <span> · {paper.note}</span>}
        </p>
        <div className="pub-meta">
          {paper.links?.map((link, index) => (
            <span key={link.url}>
              {index > 0 && <span className="link-separator" aria-hidden="true"> · </span>}
              <a
                className={link.label === 'github' ? 'pub-action pub-action--code' : 'pub-action'}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label === 'github' ? 'Code' : link.label === 'project page' ? 'Project' : link.label === 'paper' ? 'Paper' : link.label}
              </a>
            </span>
          ))}
          {citations !== undefined && <CitationBadge count={citations} />}
          {paper.stars && (
            <a href={'https://github.com/' + paper.stars} target="_blank" rel="noopener noreferrer" className="pub-stars" aria-label={'GitHub stars for ' + paper.stars}>
              <img src={'https://img.shields.io/github/stars/' + paper.stars + '?style=social&label=Stars'} alt="GitHub stars" height="17" loading="lazy" />
            </a>
          )}
        </div>
      </div>
      {paper.image && <PaperFigure image={paper.image} title={paper.title} alt={paper.imageAlt ?? ''} />}
    </article>
  );
}

function PaperFigure({ image, title, alt }: { image: string; title: string; alt: string }) {
  const src = import.meta.env.BASE_URL + 'images/papers/' + image;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="pub-figure" aria-label={'Enlarge figure for ' + title}>
          <img src={src} alt="" width={160} height={96} loading="lazy" decoding="async" />
          <span className="pub-figure-label" aria-hidden="true"><ZoomIn size={16} /></span>
        </button>
      </DialogTrigger>
      <DialogContent className="pub-figure-dialog">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="sr-only">Open the original image to inspect it at full resolution.</DialogDescription>
        <img className="pub-figure-expanded" src={src} alt={alt} />
        <a className="pub-figure-original" href={src} target="_blank" rel="noopener noreferrer">Open original image</a>
      </DialogContent>
    </Dialog>
  );
}

function highlightAuthor(authors: string): React.ReactNode {
  const parts = authors.split(/(Yuhang Han(?:[*†✉]*)?|Y Han(?:[*†✉]*)?)/);
  return parts.map((part, i) => {
    if (/^(Yuhang Han|Y Han)(?:[*†✉]*)?$/.test(part)) {
      return <strong key={i} className="author-highlight">{part}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}
