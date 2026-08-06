import { News } from './News';
import { Publications, TechnicalReports } from './Publications';
import { Experience } from './Experience';
import { Services } from './Services';
import { Misc } from './Misc';
import { introText } from '@/data/profile';

export function MainContent() {
  return (
    <main className="page__content">
      <span className="anchor" id="about-me"></span>
      <section>
        <h1 className="section-heading">👋 About Me</h1>
        <div dangerouslySetInnerHTML={{ __html: formatIntro(introText) }} />
      </section>

      <span className="anchor" id="news"></span>
      <section>
        <News />
      </section>

      <span className="anchor" id="publications"></span>
      <section>
        <Publications />
      </section>

      <span className="anchor" id="technical-reports"></span>
      <section>
        <TechnicalReports />
      </section>

      <span className="anchor" id="experience"></span>
      <section>
        <Experience />
      </section>

      <span className="anchor" id="services"></span>
      <section>
        <Services />
      </section>

      <span className="anchor" id="misc"></span>
      <section>
        <Misc />
      </section>
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
