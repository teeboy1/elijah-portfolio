"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message?: string }>({ type: null });

  const SERVICE_ID = "service_zry34zb";
  const TEMPLATE_ID = "template_4v4q10e";
  const PUBLIC_KEY = "Gh__To0ZcTVMuZ1hi";

  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
    } catch (err) {
      // ignore init errors in dev
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus({ type: null });
    const templateParams = {
      to_name: "Elijah Temitayo",
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus({ type: "success", message: "Message sent successfully." });
      formRef.current.reset();
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="site-section py-12 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
      <div className="mb-4">
        <button className="nav-btn nav-btn--inverse">CONTACT</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start mt-6">
        <div className="order-2 md:order-1 glass p-6 rounded-lg border-l-4" style={{ borderColor: 'var(--accent-secondary)' }}>
          <p className="text-white text-glow font-semibold">Location: Lagos, Nigeria</p>
          <p className="text-white text-glow mt-1"><a href="mailto:elnactayo2@gmail.com" className="underline">elnactayo2@gmail.com</a></p>
          <p className="text-white text-glow mt-1"><a href="https://github.com/teeboy1" target="_blank" rel="noreferrer" className="underline">github.com/teeboy1</a></p>
          <p className="text-white text-glow mt-1"><a href="https://twitter.com/E_baba5858" target="_blank" rel="noreferrer" className="underline">@E_baba5858</a></p>
          <p className="text-white text-glow mt-1">Website: <a href="https://elijah-portfolio-vert.vercel.app/" target="_blank" rel="noreferrer" className="underline">https://elijah-portfolio-vert.vercel.app/</a></p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:elnactayo2@gmail.com" className="btn cta">Email Me</a>
            <a href="/api/resume" className="btn cta">Download Resume</a>
          </div>
        </div>

        <form
          id="contact-form"
          ref={formRef}
          onSubmit={handleSubmit}
          className="order-1 md:order-2 space-y-3 glass p-6 rounded-lg shadow-lg"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input id="name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <input id="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" required className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
          </div>

          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="w-full p-3 rounded border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />

          {status.type === 'success' && (
            <p className="text-green-500">{status.message}</p>
          )}
          {status.type === 'error' && (
            <p className="text-red-500">{status.message}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" disabled={sending} className="btn flex-1 bg-[#D4AF37] text-black hover:brightness-95">
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            <a href="mailto:elnactayo2@gmail.com" className="btn btn-outline border-white/30 text-white">Email</a>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
