import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "AI Agent Workflow",
      description: "Automated AI agent pipeline built with n8n for intelligent task execution.",
      tags: ["n8n", "AI Agent", "Automation"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/01-AI-agent" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Auto Excel Sheet Automation",
      description: "Automated data extraction and sheet updating system.",
      tags: ["n8n", "Excel", "Automation"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/02-Auto-excel-sheet" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Freelancer Workflow",
      description: "Automated client management and freelancing task processing.",
      tags: ["n8n", "Freelance", "API"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/03-Freelancer" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Sentiment Analysis Pipeline",
      description: "Automated feedback sorting based on text sentiment evaluation.",
      tags: ["n8n", "Sentiment Analysis", "NLP"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/04-sentimal_analysis" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Weather Automation",
      description: "Real-time weather data fetcher and notification workflow.",
      tags: ["n8n", "Weather API", "Automation"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/05-Weather" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Joke API Integration",
      description: "Fun API integration delivering random automated content response.",
      tags: ["n8n", "REST API", "JSON"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/06-joke-API" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Gmail Task Automation",
      description: "Automated Gmail management pipeline for handling email tasks.",
      tags: ["n8n", "Gmail API", "Email"],
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/07-gmail-task" // <-- Idhar apna GitHub repo link likhna hai
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Projects</h1>
        <p className="text-slate-600 mb-10">A showcase of n8n automation workflows and web applications.</p>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.description}</p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mb-4">
                  {p.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Repository Button */}
                <div className="pt-2">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}