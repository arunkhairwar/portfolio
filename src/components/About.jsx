import React from "react";
import { Code, Server, Database, Layout } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      items: ["React", "Vue", "TypeScript", "Tailwind CSS", "Redux", "Next.js"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Express", "Python", "Go", "FastAPI"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      category: "Tools",
      icon: <Code className="w-6 h-6" />,
      items: ["Git", "Docker", "AWS", "Linux", "Jest"],
    },
  ];

  return (
    <section id="about" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Sidebar / Name Section */}
          <div className="lg:col-span-4 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Arun Khairwar
              </h2>
              <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-bold tracking-wider text-sm mb-6 shadow-lg">
                FRONTEND DEVELOPER
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Dedicated to crafting intuitive and performant user experiences.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-12 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                With 5+ years of experience in full-stack development, I have
                worked with startups and established companies to deliver robust
                software solutions. My journey began with simple static pages
                and has evolved into architecting complex distributed systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                When I'm not coding, you can find me hiking, reading sci-fi
                novels, or experimenting with new cooking recipes. I believe in
                continuous learning and sharing knowledge with the community.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-8">
                <span className="w-12 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-xl hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm">
                        {skill.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white dark:bg-slate-700 text-sm text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
