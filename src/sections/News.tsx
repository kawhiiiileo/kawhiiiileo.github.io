import { useState } from 'react';
import { recentNews, olderNews } from '@/data/profile';

export function News() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <>
      <h2 className="section-heading">News</h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
        {recentNews.map((item, index) => (
          <li key={index} className="pub-item">
            <span className="date-tag">{item.date}</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: formatNews(item.content) }} />
          </li>
        ))}
      </ul>

      <div id="news-older" className={`news-year ${showOlder ? '' : 'is-hidden'}`}>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {olderNews.map((item, index) => (
            <li key={index} className="pub-item">
              <span className="date-tag">{item.date}</span>{' '}
              <span dangerouslySetInnerHTML={{ __html: formatNews(item.content) }} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`news-toggle-btn ${showOlder ? 'is-active' : ''}`}
        onClick={() => setShowOlder(!showOlder)}
        aria-expanded={showOlder}
      >
        {showOlder ? 'Show less' : 'Show more'}
      </button>
    </>
  );
}

// Format news content: **bold** to <strong>, [text](url) to links
function formatNews(text: string): string {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return html;
}
