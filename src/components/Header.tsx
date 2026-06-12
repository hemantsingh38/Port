import { Link } from 'react-router-dom';
import { config } from '../data/portfolio';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-border">
      <nav className="container-wide flex items-center justify-between py-6">
        <Link to="/" className="flex-1">
          <h1 className="text-2xl font-bold">{config.name}</h1>
          <p className="text-sm text-gray-600">{config.tagline}</p>
        </Link>
        <div className="flex gap-8 ml-auto">
          <Link to="/" className="hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <a href={`mailto:${config.email}`} className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
