import { useState } from 'react';
import { recentNews, olderNews } from '@/data/profile';
import type { NewsItem } from '@/data/profile';

const latestNewsCount = 4;
const displayedNews = recentNews.slice(0, latestNewsCount);
const archivedNews = [...recentNews.slice(latestNewsCount), ...olderNews];
const monthFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export function News() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <>
      <div className="section-header">
        <h2 id="news-heading" className="section-heading">News</h2>
      </div>
      <div className="chapter-content">
        <NewsList items={displayedNews} />
        <div id="news-older" hidden={!showOlder}>
          <NewsList items={archivedNews} />
        </div>
        {archivedNews.length > 0 && (
          <button
            type="button"
            className="news-toggle-btn"
            onClick={() => setShowOlder((shown) => !shown)}
            aria-expanded={showOlder}
            aria-controls="news-older"
          >
            {showOlder ? 'Hide earlier news' : 'Earlier news'} <span aria-hidden="true">{showOlder ? '−' : '+'}</span>
          </button>
        )}
      </div>
    </>
  );
}

function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((item) => {
        const month = item.date.replace('/', '-');
        return (
          <li key={item.content} className="news-item">
            <time className="date-tag" dateTime={month}>{monthFormat.format(new Date(month + '-01T00:00:00Z'))}</time>
            <span dangerouslySetInnerHTML={{ __html: formatNews(item.content) }} />
          </li>
        );
      })}
    </ul>
  );
}

function formatNews(text: string): string {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return html.replace(/^\[([^\]\r\n]+)\]/, '<span class="news-label">$1</span>');
}
