import { News } from './News';
import { Publications } from './Publications';
import { Experience } from './Experience';
import { Services } from './Services';
import { Misc } from './Misc';
import { Sidebar } from './Sidebar';
import { introText, profile } from '@/data/profile';

export function MainContent() {
  return (
    <main className="page__content">
      <section id="about-me" className="about-section">
        <Sidebar />
        <div className="about-intro">
          <h2 className="section-heading">About Me</h2>
          <div className="about-copy" dangerouslySetInnerHTML={{ __html: formatIntro(introText) }} />
          <div className="research-interests">
            <h3 className="research-heading">Research Interests</h3>
            <ul>
              {profile.researchInterests.map(interest => (
                <li key={interest.title}>
                  <span>{interest.title}</span>
                  <div className="research-works">
                    {interest.works.map(work => (
                      <a
                        key={work.label}
                        href={work.url}
                        target={work.url.startsWith('#') ? undefined : '_blank'}
                        rel={work.url.startsWith('#') ? undefined : 'noopener noreferrer'}
                      >
                        {work.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <p className="research-note">RSI: recursive self-improvement.</p>
          </div>
        </div>
      </section>

      <section id="news">
        <News />
      </section>

      <section id="publications">
        <Publications />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <div className="page-footer">
        <section id="services"><Services /></section>
        <section id="misc"><Misc /></section>
      </div>
    </main>
  );
}

// Simple markdown-like formatting for intro text
function formatIntro(text: string): string {
  // Convert **bold** to <strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert [text](url) to <a href="url">text</a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  // Convert newlines to <br> + proper paragraph spacing
  html = html.split('\n\n').map(p => `<p>${p}</p>`).join('');
  html = html.replace(/\n/g, '<br>');
  return html;
}
