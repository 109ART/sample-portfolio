import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start gap-6">
        <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full tracking-wide">
          Available for new opportunities
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-3xl">
          Build modern web apps & seamless automation systems.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          I design and develop responsive React applications and automated workflows focused on performance, clean structure, and great user experience.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-8">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-slate-900">Frontend Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Responsive web applications engineered with React, Tailwind CSS, and clean JavaScript architecture.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-slate-900">Workflow Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Designing custom backend integration flows, webhook processing, and API orchestration.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-slate-900">UI/UX Implementation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transforming complex requirements into clean, user-friendly, and accessible interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}