import { about } from '../data/portfolio';

export function About() {
  return (
    <main>
      <section className="container-wide section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Portrait */}
          <div>
            <img
              src={about.portraitImage}
              alt={about.name}
              className="w-full aspect-square object-cover mb-8"
            />
          </div>

          {/* Bio & Info */}
          <div>
            <h1 className="text-5xl font-bold mb-12">{about.name}</h1>

            <div className="space-y-6 mb-12">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 opacity-60">
                Disciplines
              </h3>
              <ul className="space-y-2 mb-12">
                {about.disciplines.map((discipline) => (
                  <li key={discipline} className="text-lg opacity-80">
                    {discipline}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm opacity-60">{about.colophon}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
