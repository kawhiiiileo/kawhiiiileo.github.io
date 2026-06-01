import { profile } from '@/data/profile';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div itemScope itemType="http://schema.org/Person" className="profile_box">
        <div className="author__avatar">
          <img
            src={profile.avatar}
            alt={profile.name}
          />
        </div>

        <div className="author__content">
          <h3 className="author__name">{profile.name}</h3>
          <p className="author__bio">
            {profile.nameCN}
            <br />
            {profile.title}
          </p>
        </div>

        <div className="author__urls-wrapper">
          <ul className="author__urls social-icons">
            <li><div className="author__description">{profile.bio}</div></li>
            {profile.location && (
              <li><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i> {profile.location}</li>
            )}
            <li><i className="fa fa-fw fa-map-marker" aria-hidden="true"></i> {profile.education.institution}</li>
            {profile.googleScholar && (
              <li><a href={profile.googleScholar}><i className="fas fa-fw fa-graduation-cap" aria-hidden="true"></i> Google Scholar</a></li>
            )}
            {profile.github && (
              <li><a href={profile.github}><i className="fab fa-fw fa-github" aria-hidden="true"></i> Github</a></li>
            )}
            {profile.email && (
              <li><a href={`mailto:${profile.email}`}><i className="fas fa-fw fa-envelope" aria-hidden="true"></i> Email</a></li>
            )}
            {profile.education.advisorUrl && (
              <li><a href={profile.education.advisorUrl}><i className="fas fa-fw fa-user" aria-hidden="true"></i> Advisor: {profile.education.advisor}</a></li>
            )}
          </ul>

          <div className="author__urls_sm">
            {profile.googleScholar && (
              <a href={profile.googleScholar}><i className="fas fa-graduation-cap" aria-hidden="true"></i></a>
            )}
            {profile.github && (
              <a href={profile.github}><i className="fab fa-github" aria-hidden="true"></i></a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`}><i className="fas fa-envelope" aria-hidden="true"></i></a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
