"use client";
import React from "react";

export default function Testimonials(){
  const items = [
    {
      quote: "Elijah led a network reliability initiative that reduced incident volume by 42% and improved SLA adherence across our core services.",
      name: "Jumoke-Aina",
      title: "Noc Operations, GlobacomTel",
    }
  ];

  return (
    <section className="testimonials grid gap-4 md:grid-cols-2">
      {items.map((t, i) => (
        <div key={i} className="testimonial-card glass p-6 rounded-xl">
          <p className="italic text-lg text-white">“{t.quote}”</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">AS</div>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted">{t.title}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
