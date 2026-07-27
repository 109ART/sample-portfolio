export default function About() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">About Me</h1>
        <p className="text-base text-slate-600 leading-relaxed mb-10">
          I am a software developer with a focus on web development and workflow integrations. I specialize in building web frontends and automating complex operational processes.
        </p>

        <div className="bg-white p-8 rounded-xl border border-slate-200 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-slate-800 border-b pb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React JS', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'REST APIs', 'Node.js', 'Git & GitHub', 'Workflow Automation'].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-slate-100 text-slate-800 text-sm font-medium rounded-md border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}