import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
          © {new Date().getFullYear()} Arun Khairwar
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/arunkhairwar"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-khairwar"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
