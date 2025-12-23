import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Leading a team of 6 developers in building enterprise-scale React applications. successfully migrated legacy monolith to microservices architecture.",
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Hub",
    period: "2019 - 2021",
    description:
      "Developed and launched 3 key products using MERN stack. Reduced server costs by 40% through optimization.",
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "2018 - 2019",
    description:
      "Collaborated with designers to implement pixel-perfect UIs. Built responsive websites for varied clients.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and career highlights.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Timeline line */}
                <div className="absolute left-[27px] top-12 bottom-[-48px] w-0.5 bg-gray-200 dark:bg-gray-700 last:hidden"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center z-10 relative group-hover:bg-blue-600 transition duration-300">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition duration-300" />
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
