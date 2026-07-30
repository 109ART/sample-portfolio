import React, { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "AI Agent Workflow",
      description: "Automated AI agent pipeline built with n8n for intelligent task execution.",
      tags: ["n8n", "AI Agent", "Automation"],
      image: "/01-AI-agent/AI_agent.png", // Agar public folder me hai to aise path rkhein
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/01-AI-agent" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Auto Excel Sheet Automation",
      description: "Automated data extraction and sheet updating system.",
      tags: ["n8n", "Excel", "Automation"],
      image: "/02-Auto-excel-sheet/Auto-excel-sheet.png",
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/02-Auto-excel-sheet" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Freelancer Workflow",
      description: "Automated client management and freelancing task processing.",
      tags: ["n8n", "Freelance", "API"],
      image: "/03-Freelancer/Freelancer.png",
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/03-Freelancer" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Sentiment Analysis Pipeline",
      description: "Automated feedback sorting based on text sentiment evaluation.",
      tags: ["n8n", "Sentiment Analysis", "NLP"],
      image: "/04-sentimal_analysis/sentiment_analysis.png",
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/04-sentimal_analysis" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Weather Automation",
      description: "Real-time weather data fetcher and notification workflow.",
      tags: ["n8n", "Weather API", "Automation"],
      image: "/05-Weather/Weather.png",
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/05-Weather" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Joke API Integration",
      description: "Fun API integration delivering random automated content response.",
      tags: ["n8n", "REST API", "JSON"],
      image: "/06-joke-API/joke-API.png",
      repoUrl: "https://github.com/109ART/n8n-automation-workflows/tree/main/06-joke-API" // <-- Idhar apna GitHub repo link likhna hai
    },
    {
      title: "Gmail Task Automation",
      description: "Automated Gmail management pipeline for handling email tasks.",
      tags: ["n8n", "Gmail API", "Email"],
      image: "/07-gmail-task/gmail-task.png", // VS Code folder ke mutabiq
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

                {/* Buttons (View Image + GitHub Link) */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedImage(p.image)}
                    className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                  >
                    View Image
                  </button>

                  <a
                    href={p.repoUrl} // <-- Apna Repo Link yahan p.repoUrl me update kar sakti hain
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image View Modal (Popup) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-xl p-4 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Workflow Preview" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}