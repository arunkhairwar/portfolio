import React from "react";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 animate-fade-in-up">
            <span className="text-sm font-semibold">
              Available for new opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
            A passionate Full Stack Developer crafting beautiful and functional
            web experiences with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 transition"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-Twitter-blue dark:hover:text-blue-400 transition transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
