interface CitationBadgeProps {
  count: number;
  label?: string;
}

export function CitationBadge({ count, label = 'Citations' }: CitationBadgeProps) {
  return <span className="citation-badge">{count.toLocaleString('en-US')} {label.toLowerCase()}</span>;
}
