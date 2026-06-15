import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6 text-center text-zinc-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Elijah Temitayo. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://github.com/teeboy1" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/E_baba5858" target="_blank" rel="noreferrer">X</a>
            <span>LinkedIn (profile under review)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
