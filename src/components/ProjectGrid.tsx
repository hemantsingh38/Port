import { portfolio } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  return (
    <section className="container-wide section-spacing">
      <div className="grid-projects">
        {portfolio.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
