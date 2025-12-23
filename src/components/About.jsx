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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a dedicated developer with a strong foundation in computer
            science and a love for building scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Based in San Francisco, available globally
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With 5+ years of experience in full-stack development, I have
              worked with startups and established companies to deliver robust
              software solutions. My journey began with simple static pages and
              has evolved into architecting complex distributed systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi
              novels, or experimenting with new cooking recipes. I believe in
              continuous learning and sharing knowledge with the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {item}
                      {i < skill.items.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
