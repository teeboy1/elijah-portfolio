import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="site-section">
      <h3 className="mb-6 flex items-center gap-4 text-[#D4AF37]">
        Professional Experience
        <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-strong)' }}>
          6 Years
        </span>
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold accent-orange text-[#D4AF37]">Fault Manager – Network Management Operations Center</h4>
          <p className="text-zinc-700 mt-2">
            Monitored nationwide telecom infrastructure, managed critical incidents
            across IP/MPLS and DWDM networks, conducted network surveillance and
            fault management, coordinated outage resolution activities, and
            collaborated with cross-functional technical teams to reduce downtime.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold accent-orange text-[#D4AF37]">Data Analyst &amp; Customer Support Manager</h4>
          <p className="text-zinc-700 mt-2">
            Performed customer and operational data analysis, developed reports
            and dashboards to improve customer satisfaction, managed support
            operations and escalations, and delivered data-driven
            recommendations to stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
