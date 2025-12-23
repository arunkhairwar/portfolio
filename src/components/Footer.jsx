import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
          © {new Date().getFullYear()} Alex Chen. Built with{" "}
          <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> and
          React.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
