import { config, about } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-border mt-24 py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm opacity-80 mb-2">{config.email}</p>
            <p className="text-sm opacity-80">{config.issue}</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Socials</h3>
            <ul className="space-y-2">
              {config.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Disciplines</h3>
            <ul className="space-y-1">
              {about.disciplines.map((d) => (
                <li key={d} className="text-sm opacity-80">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <p className="text-xs opacity-60">{about.colophon}</p>
        </div>
      </div>
    </footer>
  );
}
