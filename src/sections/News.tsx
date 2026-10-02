import { useState } from 'react';
import { recentNews, olderNews } from '@/data/profile';

export function News() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <>
      <div className="section-header">
        <h2 className="section-heading">News</h2>
        <button
          type="button"
          className="news-toggle-btn"
          onClick={() => setShowOlder(!showOlder)}
          aria-expanded={showOlder}
          aria-controls="news-older"
        >
          {showOlder ? 'Less news' : 'Earlier news'} <span aria-hidden="true">{showOlder ? '−' : '+'}</span>
        </button>
      </div>
      <ul className="news-list">
        {recentNews.map((item, index) => (
          <li key={index} className={`news-item${index === 0 ? ' news-item--featured' : ''}`}>
            <span className="date-tag">{item.date}</span>
            <span dangerouslySetInnerHTML={{ __html: formatNews(item.content) }} />
          </li>
        ))}
      </ul>

      <div id="news-older" className={`news-year ${showOlder ? '' : 'is-hidden'}`}>
        <ul className="news-list">
          {olderNews.map((item, index) => (
            <li key={index} className="news-item">
              <span className="date-tag">{item.date}</span>
              <span dangerouslySetInnerHTML={{ __html: formatNews(item.content) }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Format emphasis and links, then emphasize the leading plain-text category.
function formatNews(text: string): string {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  html = html.replace(/^(\[[^\]\r\n]+\])/, '<strong class="news-label">$1</strong>');
  return html;
}
