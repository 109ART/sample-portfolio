export default function Services() {
  const services = [
    {
      title: "Frontend Web Development",
      description: "Building fast, responsive, and cross-browser single-page applications with React and Tailwind CSS."
    },
    {
      title: "API & Workflow Integration",
      description: "Automating system processes by integrating webhooks, third-party APIs, and data storage solutions."
    },
    {
      title: "UI Optimization & Refactoring",
      description: "Converting outdated web designs into modern, clean, and highly usable component libraries."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Services</h1>
        <p className="text-slate-600 mb-10">Tailored technical development services for modern applications.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}