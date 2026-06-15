import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071428] via-[#081726] to-[#05050a] font-sans text-zinc-100">
      <main id="main" className="max-w-6xl mx-auto px-6 py-12">
        <Nav />
        <Hero />
        <div className="mt-12 space-y-16">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
