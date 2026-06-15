"use client";
import React, { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id?: string) => {
    setMobileOpen(false);
    if (!id) return;
    if (id === "resume") {
      window.location.href = "/api/resume";
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full mb-8">
      <div className="mx-auto max-w-5xl bg-transparent rounded-xl py-3 px-4 flex items-center justify-between glass">
        <div className="flex items-center gap-4">
          <button
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center nav-btn p-2"
          >
            MENU
          </button>

          <a href="#top" className="flex items-center gap-3">
            <div className="nav-btn text-lg font-semibold px-3 py-2" style={{ background: 'linear-gradient(180deg,#fff6e1,var(--accent-secondary))' }}>
              EXECUTIVE PORTFOLIO
            </div>
          </a>

          <div className="hidden md:flex gap-3 items-center">
            <a href="#about" className="nav-btn">ABOUT</a>
            <a href="#skills" className="nav-btn">SKILLS</a>
            <a href="#experience" className="nav-btn">EXPERIENCE</a>
          </div>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <a href="/api/resume" className="nav-btn px-4 py-2" download>
            Get Resume
          </a>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="absolute left-4 right-4 top-20 z-40 md:hidden">
            <div className="bg-slate-900/80 glass p-3 rounded-xl flex flex-col gap-2">
              <button onClick={() => handleNavClick('about')} className="nav-btn full-width">ABOUT</button>
              <button onClick={() => handleNavClick('skills')} className="nav-btn full-width">SKILLS</button>
              <button onClick={() => handleNavClick('experience')} className="nav-btn full-width">EXPERIENCE</button>
              <button onClick={() => handleNavClick('projects')} className="nav-btn full-width">PROJECTS</button>
              <button onClick={() => handleNavClick('contact')} className="nav-btn full-width">CONTACT</button>
              <button onClick={() => handleNavClick('resume')} className="nav-btn full-width">GET RESUME</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
