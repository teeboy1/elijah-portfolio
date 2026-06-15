"use client";
import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";

export default function Hero() {
  // Executive-focused heading for C-level appeal
  const heading = "Securing Networks. Reducing Downtime. Delivering Outcomes.";
  const titles = [
    "Cybersecurity Analyst",
    "Network Operations Engineer",
    "IT Support Specialist",
    "Incident Manager",
  ];

  const [typed, setTyped] = useState("");
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    let i = 0;
    let forward = true;
    const speed = 80;
    const loop = () => {
      if (!mounted) return;
      const full = titles[tIndex];
      if (forward) {
        setTyped(full.slice(0, i + 1));
        i++;
        if (i === full.length) {
          forward = false;
          setTimeout(loop, 1200);
          return;
        }
      } else {
        setTyped(full.slice(0, i - 1));
        i--;
        if (i === 0) {
          forward = true;
          setTIndex((p) => (p + 1) % titles.length);
        }
      }
      setTimeout(loop, speed);
    };
    loop();
    return () => {
      mounted = false;
    };
  }, [tIndex]);

  // counters
  const stats = [
    { label: "Years Experience", value: 6 },
    { label: "Incidents Managed", value: 50 },
    { label: "Certifications", value: 10 },
    { label: "Network Issues Resolved", value: 100 },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers: number[] = [];
    stats.forEach((s, idx) => {
      const duration = 1200;
      const steps = 40;
      const stepTime = Math.max(10, Math.floor(duration / steps));
      const inc = s.value / steps;
      let current = 0;
      const t = window.setInterval(() => {
        current += inc;
        setCounts((prev) => {
          const copy = [...prev];
          copy[idx] = Math.min(Math.round(current), s.value);
          return copy;
        });
        if (current >= s.value) window.clearInterval(t);
      }, stepTime);
      timers.push(t);
    });
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl border border-white/6 glass">
        <div className="grid md:grid-cols-2">
          {/* Left: dark translucent content card */}
          <div className="p-8 md:p-12">
            <div className="max-w-xl">
              <h2 className="text-sm accent-accent font-medium mb-2">Hello —</h2>
              <h1 className="lead leading-tight text-4xl md:text-6xl" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{heading}</h1>

              <p className="mt-3 text-lg text-muted">
                <span className="text-white text-glow font-extrabold">{typed}</span>
                <span className="blink">▌</span>
              </p>

              <p className="mt-4 text-muted max-w-lg">
                Network Engineer and Cybersecurity Professional with 5+ years of experience supporting, securing, and optimizing enterprise network infrastructures in fast-paced and mission-critical environments. Skilled in network troubleshooting, routing and switching, systems support, network monitoring, incident management, and cybersecurity operations.

Experienced in improving network performance, reliability, and security while collaborating with cross-functional teams to resolve complex technical issues. Proactive, adaptable, and committed to continuous learning, with a strong focus on delivering secure, scalable, and efficient IT solutions.

Open to international opportunities and relocation, bringing a proven ability to support business-critical operations and contribute to organizational success in diverse and dynamic environments.


              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 items-start">
                <a href="/api/resume" className="btn cta w-full sm:w-auto text-center" download>
                  Request CV
                </a>
                <a href="#contact" className="btn cta w-full sm:w-auto text-center" onClick={() => { document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}>
                  Discuss Engagement
                </a>
              </div>

              <div className="featured-logos mt-6 flex items-center gap-3 flex-wrap">
                <div className="logo" title="Splunk">Splunk</div>
                <div className="logo" title="Grafana">Grafana</div>
                <div className="logo" title="AWS">AWS/Azure</div>
                <div className="logo" title="Cisco">Cisco</div>
                <div className="logo" title="ServiceNow">ServiceNow</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s, idx) => (
                  <div key={s.label} className="rounded-lg p-3 text-center glass">
                    <div className="text-2xl md:text-3xl font-extrabold text-zinc-100">
                      {counts[idx]}+
                    </div>
                    <div className="text-sm md:text-base text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: colored panel with curved left edge */}
          <div className="relative right-panel">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#0b3b4a" />
                  <stop offset="50%" stopColor="#082733" />
                  <stop offset="100%" stopColor="#051827" />
                </linearGradient>
              </defs>
              <path d="M0,0 L520,0 C640,0 700,200 800,400 L800,800 L0,800 Z" fill="url(#g1)" />
            </svg>

            <div className="relative z-10 flex items-center justify-center h-full p-8">
              <div className="portrait-wrapper flex items-center justify-center w-full">
                <div className="portrait-container w-40 sm:w-52 md:w-64 lg:w-80 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://i.postimg.cc/2y7LqKpL/passport-png-page-0001-(1).jpg"
                    alt="Elijah Temitayo portrait"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4">
        <Testimonials />
      </div>

    </section>
  );
}
