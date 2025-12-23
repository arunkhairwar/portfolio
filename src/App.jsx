import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 selection:bg-blue-200 dark:selection:bg-blue-900">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-300" />

        {/* Grid Background with Mask */}
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:60px_60px] opacity-100 transition-opacity duration-300 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 dark:opacity-10">
          <div className="aspect-square w-96 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 dark:opacity-10">
          <div className="aspect-square w-96 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          {/* <About /> */}
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
