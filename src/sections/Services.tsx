import { conferenceServices, journalServices } from '@/data/profile';

export function Services() {
  return (
    <>
      <h2 className="section-heading">💼 Services</h2>

      {conferenceServices.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>Conference Reviewer</h3>
          <ul className="service-list">
            {conferenceServices.map((service, index) => (
              <li key={index}>
                <a href={service.url} target="_blank" rel="noopener noreferrer">{service.name}</a>
                {service.note && <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}> ({service.note})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {journalServices.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>Journal Reviewer</h3>
          <ul className="service-list">
            {journalServices.map((service, index) => (
              <li key={index}>
                <a href={service.url} target="_blank" rel="noopener noreferrer">{service.name}</a>
                {service.note && <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}> ({service.note})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}