"use client";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "SOC Home Lab",
    description:
      "Built a Security Operations Center laboratory environment using Splunk for log analysis, security monitoring, and incident investigation.",
    tech: ["Splunk", "Windows Logs", "Linux", "SIEM"],
  },
  {
    title: "Network Monitoring Dashboard",
    description:
      "Developed monitoring dashboards for network visibility, performance analysis, and incident tracking.",
    tech: ["Grafana", "Network Monitoring Tools"],
  },
  {
    title: "Vulnerability Assessment Project",
    description:
      "Conducted vulnerability assessments and security reviews using industry-standard methodologies.",
    tech: ["Nmap", "Linux", "Security Tools"],
  },
  {
    title: "Incident Management Automation",
    description:
      "Created processes and workflows to improve incident handling and operational efficiency.",
    tech: ["ServiceNow", "Automation Tools"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["All", "SOC", "Monitoring", "Vulnerability", "Automation"];

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    return p.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects" className="site-section">
      <div className="flex gap-3 mb-4">
        {categories.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded ${filter===c? 'bg-[#D4AF37] text-black' : 'bg-white/6 text-zinc-200'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article key={p.title} onClick={() => setSelected(p)} className="rounded-xl p-4 hover:scale-105 transform transition-shadow cursor-pointer project-card">
            <h4 className="font-semibold accent-orange text-[#D4AF37]">{p.title}</h4>
            <p className="text-zinc-700 mt-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded text-zinc-800" style={{background:'rgba(255,106,0,0.06)'}}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
