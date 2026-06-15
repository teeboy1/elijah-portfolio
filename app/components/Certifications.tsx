import React from "react";

const certs = [
  "Google Cybersecurity Professional Certificate",
  "Splunk Core Certified User",
  "ISC2 Certified in Cybersecurity (CC)",
  "Cisco CCNA",
  "Fortinet NSE",
  "Microsoft Azure Fundamentals",
];

export default function Certifications() {
  return (
    <section id="certifications" className="site-section">
      <div className="mb-4">
        <button className="nav-btn">CERTIFICATIONS</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c} className="cert-card p-4 rounded-lg">
            <div className="cert-title">{c}</div>
            <div className="text-xs text-muted mt-2">Verified</div>
          </div>
        ))}
        <div className="cert-card p-4 rounded-lg flex items-center justify-center">
          <div className="text-sm text-muted">More coming soon...</div>
        </div>
      </div>
    </section>
  );
}
