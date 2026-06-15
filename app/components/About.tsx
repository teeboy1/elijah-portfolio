import React from "react";

export default function About() {
  return (
    <section id="about" className="site-section glass">
      <div className="mb-4">
        <button className="nav-btn" aria-label="About Me">ABOUT ME</button>
      </div>
      <p className="text-zinc-700 leading-relaxed">
        I hold a Bachelor's degree in Electrical and Electronic Engineering with
        a strong focus on telecommunications, embedded systems and control
        systems. With over six years working in Network Operations Centers, I
        have extensive experience in monitoring IP/MPLS and DWDM networks,
        incident management, and cross-team coordination. I combine
        cybersecurity fundamentals, data analysis and technical support
        expertise to secure and optimise networks while delivering excellent
        customer outcomes.
      </p>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700">
        <li>Electrical & Electronic Engineering</li>
        <li>Network Operations Center (NOC)</li>
        <li>Incident Management & Escalations</li>
        <li>Cybersecurity & SOC Operations</li>
        <li>Data Analysis & Reporting</li>
        <li>Technical Support & Troubleshooting</li>
      </ul>
    </section>
  );
}
