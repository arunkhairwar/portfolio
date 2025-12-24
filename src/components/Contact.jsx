import { Check, Copy } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "arun.khairwar@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Have a question or want to work together? Feel free to drop me a
            message. I'm always open to discussing new projects, creative ideas
            or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:arun.khairwar@example.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Say Hello
            </a>
            <button
              onClick={handleCopy}
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 active:bg-gray-50 dark:active:bg-slate-700/50"
            >
              {isCopied ? "Email Copied!" : "Copy Email"}
              {isCopied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
