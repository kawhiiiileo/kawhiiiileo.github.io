import { conferenceServices, journalServices } from '@/data/profile';

export function Services() {
  return (
    <>
      <h2 className="section-heading">Services</h2>
      {[
        { title: 'Conference Reviewer', services: conferenceServices },
        { title: 'Journal Reviewer', services: journalServices },
      ].map(({ title, services }) => services.length > 0 && (
        <div className="service-group" key={title}>
          <h3>{title}</h3>
          <ul className="service-list">
            {services.map((service) => (
              <li key={service.name}>
                <a href={service.url} title={service.name} target="_blank" rel="noopener noreferrer">{service.note || service.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
