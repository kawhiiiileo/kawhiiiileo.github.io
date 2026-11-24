import { experiences } from '@/data/profile';

export function Experience() {
  return (
    <>
      <div className="section-header">
        <h2 id="experience-heading" className="section-heading">Experience</h2>
      </div>
      <ul className="experience-list chapter-content">
        {experiences.map((exp) => (
          <li key={exp.institution} className="experience-item">
            <div className="experience-period">
              {exp.period}
            </div>
            <div className="experience-content">
              <div className="experience-heading">
                <a className="experience-logo" href={exp.organizationUrl} target="_blank" rel="noopener noreferrer" aria-label={`${exp.institution} website`}>
                  <img src={`${import.meta.env.BASE_URL}images/organizations/${exp.logo}`} alt={`${exp.institution} logo`} width="32" height="32" loading="lazy" decoding="async" />
                </a>
                <h3 className="experience-title">{exp.institution}<span>{exp.role}</span></h3>
              </div>
              <p className="experience-details">
                {exp.location && <span>{exp.location}</span>}
                {exp.team && <span>{exp.team}</span>}
                {exp.advisor && <span>Advisor: {exp.advisor}</span>}
              </p>
              <p className="experience-topic">{exp.topic}</p>
              {exp.outputs && exp.outputs.length > 0 && (
                <p className="experience-outputs">
                  <span>Selected work</span>
                  {exp.outputs.map((output) => (
                    <a key={output.url} href={output.url} target="_blank" rel="noopener noreferrer">{output.text}</a>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
