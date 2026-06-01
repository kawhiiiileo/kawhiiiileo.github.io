import { experiences } from '@/data/profile';

export function Experience() {
  return (
    <>
      <h2 className="section-heading">💻 Internship Experience</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {experiences.map((exp, index) => (
          <li key={index} className="compact-list-item">
            * {exp.role} — <strong>{exp.institution}</strong>
            {exp.location && <span style={{ color: 'var(--muted-text-color)' }}> ({exp.location})</span>}
            <br />
            <span className="meta-line">Time: {exp.period}</span>
            {exp.team && (
              <>
                <br />
                <span className="meta-line">Team: {exp.team}</span>
              </>
            )}
            {exp.advisor && (
              <>
                <br />
                <span className="meta-line">Advisor: {exp.advisor}</span>
              </>
            )}
            <br />
            <span className="meta-line">Topic: {exp.topic}</span>
            {exp.outputs && exp.outputs.length > 0 && (
              <>
                <br />
                <span className="meta-line">Output: {exp.outputs.map((o, i) => (
                  <a key={i} href={o.url} target="_blank" rel="noopener noreferrer" className="nowrap-link">
                    [{o.text}]
                  </a>
                ))}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
