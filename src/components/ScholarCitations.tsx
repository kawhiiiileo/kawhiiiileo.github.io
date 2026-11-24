const dateFormat = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'Asia/Shanghai',
});

interface ScholarCitationsProps {
  count: number;
  href: string;
  updated: string;
  synced: boolean;
}

export function ScholarCitations({ count, href, updated, synced }: ScholarCitationsProps) {
  return (
    <a className="scholar-citations" href={href} target="_blank" rel="noopener noreferrer">
      <strong className="scholar-citations__metric">{count.toLocaleString('en-US')}</strong>
      <span className="scholar-citations__details">
        <span className="scholar-citations__source">Google Scholar citations</span>
        <time className="scholar-citations__date" dateTime={updated}>
          {synced ? 'Synced ' : 'Saved '}{dateFormat.format(new Date(updated))}
        </time>
      </span>
    </a>
  );
}
