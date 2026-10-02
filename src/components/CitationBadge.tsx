interface CitationBadgeProps {
  count: number;
  label?: string;
}

export function CitationBadge({ count, label = 'Citations' }: CitationBadgeProps) {
  return (
    <span className="citation-badge" aria-label={`${label}: ${count}`}>
      <span className="citation-badge__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-5 9 5-9 5-9-5Z" />
          <path d="M7 12v5c3 2 7 2 10 0v-5M21 9v7" />
        </svg>
      </span>
      <span>{label}</span>
      <span className="citation-badge__count">{count.toLocaleString('en-US')}</span>
    </span>
  );
}
