import { News } from './News';
import { Publications } from './Publications';
import { Experience } from './Experience';
import { Services } from './Services';
import { Misc } from './Misc';
import { Sidebar } from './Sidebar';
import { introText, profile } from '@/data/profile';

export function MainContent() {
  return (
    <main id="main" tabIndex={-1}>
      <div className="page-width">
        <section id="about-me" className="about-section" aria-labelledby="profile-name">
          <div className="profile-identity">
            <p className="profile-affiliation">{profile.education.institution} · {profile.education.lab}</p>
            <div className="profile-heading">
              <h1 id="profile-name">{profile.name}</h1>
              <p className="profile-byline"><span lang="zh-Hans">{profile.nameCN}</span> <span>{profile.location}</span></p>
            </div>
          </div>

          <Sidebar />

          <div className="about-intro">
            <div className="about-copy" dangerouslySetInnerHTML={{ __html: formatIntro(introText) }} />
            <ul className="profile-links" aria-label="Contact and profiles">
              <li><a href={profile.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
              <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={'mailto:' + profile.email}>Email</a></li>
            </ul>
          </div>
        </section>

        <section className="research-interests" aria-labelledby="research-heading">
          <h2 id="research-heading">Research interests</h2>
          <ul>
            {profile.researchInterests.map((interest) => (
              <li key={interest.title}>
                <h3>{interest.title}</h3>
                <div className="research-works">
                  {interest.works.map((work, index) => (
                    <span key={work.label}>
                      {index > 0 && <span className="link-separator" aria-hidden="true"> · </span>}
                      <a
                        href={work.url}
                        target={work.url.startsWith('#') ? undefined : '_blank'}
                        rel={work.url.startsWith('#') ? undefined : 'noopener noreferrer'}
                      >
                        {work.label}
                      </a>
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="page-width">
        <section id="publications" className="chapter" aria-labelledby="publications-heading">
          <Publications />
        </section>

        <section id="news" className="chapter" aria-labelledby="news-heading">
          <News />
        </section>

        <section id="experience" className="chapter" aria-labelledby="experience-heading">
          <Experience />
        </section>

        <footer className="page-footer">
          <section id="services" aria-labelledby="services-heading"><Services /></section>
          <section id="misc" aria-labelledby="misc-heading"><Misc /></section>
        </footer>
      </div>
    </main>
  );
}

function formatIntro(text: string): string {
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return html
    .split('\n\n')
    .map((paragraph) => '<p>' + paragraph.replace(/\n/g, '<br>') + '</p>')
    .join('');
}
