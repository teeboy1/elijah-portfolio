import React from "react";

const categories = [
  {
    title: "Cybersecurity",
    skills: [
      "Security Operations Center (SOC)",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Assessment",
      "Threat Intelligence",
      "SIEM Operations",
    ],
  },
  {
    title: "Networking",
    skills: ["IP/MPLS", "DWDM", "BGP", "OSPF", "Routing & Switching", "TCP/IP"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Grafana", "Splunk", "Zabbix", "Performance Monitoring"],
  },
  {
    title: "Data Analysis",
    skills: ["Excel", "Power BI", "SQL", "Data Visualization"],
  },
  {
    title: "Technical Support",
    skills: ["Customer Support", "Troubleshooting", "Service Desk", "Root Cause Analysis"],
  },
  {
    title: "Tools & OS",
    skills: ["Linux", "Windows Server", "Azure", "Git", "Wireshark", "ServiceNow"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="grid gap-6 md:grid-cols-3">
      {categories.map((c) => (
        <div key={c.title} className="rounded-xl site-section p-4">
          <h4 className="text-lg font-semibold mb-3 text-[#D4AF37]">{c.title}</h4>
          <ul className="space-y-2 text-sm text-zinc-700">
            {c.skills.map((s) => (
              <li key={s} className="flex items-center justify-between">
                <span>{s}</span>
                <div className="w-32 ml-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-2" style={{ background: 'linear-gradient(90deg,var(--color-accent),var(--color-accent-cyan))', width: `${60 + (s.length % 40)}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
