import { Link } from 'react-router-dom';
import { Project } from '../data/portfolio';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <Link to={`/project/${project.id}`}>
      <article className="card-project">
        <div className="relative overflow-hidden mb-6">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-sm font-semibold opacity-60">{project.index}</span>
            <span className="text-xs opacity-50">{project.year}</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm opacity-70 mb-3">{project.category}</p>
          <p className="text-base leading-relaxed">{project.summary}</p>
        </div>
      </article>
    </Link>
  );
}
