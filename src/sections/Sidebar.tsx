import { profile } from '@/data/profile';

export function Sidebar() {
  return (
    <aside className="profile" aria-label="Personal profile">
      <div itemScope itemType="http://schema.org/Person" className="profile_box">
        <div className="author__avatar">
          <img
            src={profile.avatar}
            alt={profile.name}
          />
          <svg className="profile-goose" viewBox="0 0 64 72" role="img" aria-label="A little white goose" focusable="false">
            <ellipse cx="31" cy="67" rx="20" ry="2.5" fill="#243644" opacity=".08" />
            <g fill="none" stroke="#c9803d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M26 56v9l-5 2h10M38 56v9l5 2H33" />
            </g>
            <path
              d="m14 39-8-5c1 10 5 19 16 23 13 6 27-1 28-13 0-9-7-13-7-21v-3c7 2 13-3 13-9 0-6-5-9-10-8-8 0-11 7-11 15l1 12c0 6-9 5-14 7-3 1-5 2-8 2Z"
              fill="#fffdf7" stroke="#71858a" strokeWidth="1.6" strokeLinejoin="round"
            />
            <path d="M16 43c5 4 12 3 18 0 0 8-9 12-16 6" fill="#edf2ee" stroke="#b8c9c1" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M41 25c0 8 5 12 5 18" fill="none" stroke="#d4dfd9" strokeWidth="1.8" strokeLinecap="round" />
            <path d="m54 10 8 3q2 1 0 2l-8 2q2-4 0-7Z" fill="#e6a052" stroke="#bf793b" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="49" cy="10.5" r="1.5" fill="#2b3e46" />
            <circle cx="49.4" cy="10" r=".4" fill="#fff" />
          </svg>
        </div>

        <div className="author__content">
          <h1 className="author__name">{profile.name} <span>{profile.nameCN}</span></h1>
          <p className="author__bio">{profile.title}</p>
          <p className="author__affiliation">{profile.education.institution} · {profile.education.lab}</p>
          <p className="author__location">{profile.location}</p>
        </div>

          <div className="author__contacts">
            {profile.googleScholar && (
              <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m2 8 10-5 10 5-10 5L2 8ZM6 10v6c3 3 9 3 12 0v-6M22 8v7" /></svg>
                Google Scholar
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
                GitHub
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></svg>
                Email
              </a>
            )}
          </div>
      </div>
    </aside>
  );
}
