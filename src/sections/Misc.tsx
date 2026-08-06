import { miscLinks } from '@/data/profile';

export function Misc() {
  return (
    <>
      <h2 className="section-heading">Misc</h2>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
        Feel free to connect with me on{' '}
        {miscLinks.map((link, i) => (
          <span key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
            {i < miscLinks.length - 1 ? ' · ' : ''}
          </span>
        ))}
        .
      </p>
    </>
  );
}
