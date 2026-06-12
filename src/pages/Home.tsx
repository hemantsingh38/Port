import { config } from '../data/portfolio';
import { ProjectGrid } from '../components/ProjectGrid';

export function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container-wide py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{config.name}</h1>
          <p className="text-xl md:text-2xl opacity-70 mb-8">{config.tagline}</p>
          <p className="text-lg leading-relaxed opacity-80">{config.aboutShort}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectGrid />
    </main>
  );
}
