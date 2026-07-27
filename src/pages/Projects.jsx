export default function Projects() {
  const projects = [
    {
      title: "Customer Feedback Analyzer",
      description: "Automated analysis pipeline sorting incoming client feedback directly based on content sentiment.",
      tags: ["n8n", "Webhooks", "JSON"]
    },
    {
      title: "Google Drive File Organizer",
      description: "Automated cloud system classifying uploaded storage files dynamically into organized folder structures.",
      tags: ["Google Drive API", "Automation"]
    },
    {
      title: "Social Post Engine",
      description: "Cross-platform publishing automation integrating social page outputs with tracking spreadsheets.",
      tags: ["React", "REST API", "Tailwind CSS"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Projects</h1>
        <p className="text-slate-600 mb-10">A showcase of systems and web applications built recently.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {p.tags.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}