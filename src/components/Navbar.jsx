import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-extrabold text-slate-900">
          <Link to="/">
            MyPortfolio<span className="text-indigo-600">.</span>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
