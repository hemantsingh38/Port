import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolio } from '../data/portfolio';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = portfolio.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container-wide section-spacing text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="btn-primary">
          Back to all projects
        </Link>
      </main>
    );
  }

  const currentIndex = portfolio.findIndex((p) => p.id === id);
  const nextProject = portfolio[(currentIndex + 1) % portfolio.length];
  const prevProject = portfolio[(currentIndex - 1 + portfolio.length) % portfolio.length];

  return (
    <main>
      {/* Hero with cover image */}
      <section className="w-full">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-96 md:h-screen object-cover"
        />
      </section>

      {/* Project header */}
      <section className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-2">
              {project.index}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide opacity-60 mb-4">
              Project Details
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs opacity-50 mb-1">Category</dt>
                <dd className="text-lg">{project.category}</dd>
              </div>
              <div>
                <dt className="text-xs opacity-50 mb-1">Year</dt>
                <dd className="text-lg">{project.year}</dd>
              </div>
              {project.client && (
                <div>
                  <dt className="text-xs opacity-50 mb-1">Client</dt>
                  <dd className="text-lg">{project.client}</dd>
                </div>
              )}
            </dl>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide opacity-60 mb-4">
              Role & Tools
            </h3>
            <div className="mb-6">
              <p className="text-sm opacity-70 mb-3">{project.role}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-border text-sm rounded-full opacity-70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      {project.pullQuote && (
        <section className="container-wide py-12 md:py-16 border-y border-border">
          <blockquote className="text-3xl md:text-4xl font-bold max-w-3xl">
            "{project.pullQuote}"
          </blockquote>
        </section>
      )}

      {/* Description */}
      <section className="container-wide py-12 md:py-16">
        <div className="max-w-2xl">
          {project.description.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed mb-6 opacity-80">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Project images */}
      <section className="container-wide py-12 md:py-16">
        <div className="space-y-12">
          {project.images.map((image, i) => (
            <div
              key={i}
              className={`
                ${
                  image.layoutHint === 'full'
                    ? 'w-full'
                    : image.layoutHint === 'half'
                      ? 'w-full md:w-1/2'
                      : image.layoutHint === 'small'
                        ? 'w-full md:w-1/3'
                        : image.layoutHint === 'offset'
                          ? 'w-full md:ml-auto md:w-2/3'
                          : 'w-full'
                }
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              <p className="text-sm opacity-50 mt-4">{image.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to next/prev projects */}
      <section className="container-wide py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link
            to={`/project/${prevProject.id}`}
            className="group p-6 border border-border hover:bg-border transition-colors"
          >
            <p className="text-xs opacity-50 mb-2">Previous</p>
            <h3 className="text-2xl font-bold group-hover:opacity-70 transition-opacity">
              {prevProject.title}
            </h3>
          </Link>
          <Link
            to={`/project/${nextProject.id}`}
            className="group p-6 border border-border hover:bg-border transition-colors text-right"
          >
            <p className="text-xs opacity-50 mb-2">Next</p>
            <h3 className="text-2xl font-bold group-hover:opacity-70 transition-opacity">
              {nextProject.title}
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
}
