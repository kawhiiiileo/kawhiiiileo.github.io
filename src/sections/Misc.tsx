import { miscLinks } from '@/data/profile';

export function Misc() {
  return (
    <>
      <h2 id="misc-heading" className="section-heading">Misc</h2>
      <p className="misc-copy">
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
