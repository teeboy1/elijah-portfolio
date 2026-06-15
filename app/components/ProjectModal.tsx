"use client";
import React from "react";

export default function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div role="dialog" aria-modal="true" className="relative max-w-2xl w-full bg-white/6 backdrop-blur rounded-xl p-6 border border-white/8">
        <button onClick={onClose} className="absolute right-4 top-4 text-zinc-200">Close</button>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-zinc-200 mt-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech?.map((t: string) => (
            <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded text-zinc-100">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a className="rounded-full bg-cyan-500 px-4 py-2 text-black font-semibold" href="#" onClick={(e)=>{e.preventDefault(); onClose();}}>View Demo</a>
          <a className="rounded-full border border-white/6 px-4 py-2 text-cyan-200" href="#" onClick={(e)=>{e.preventDefault(); onClose();}}>View Details</a>
        </div>
      </div>
    </div>
  );
}
