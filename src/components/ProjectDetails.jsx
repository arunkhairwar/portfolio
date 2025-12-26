import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Moon } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition mb-8"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
        Back to Projects
      </button>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.live}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition font-medium"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image Placeholder */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 aspect-video bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Challenges & Solutions */}
      {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Challenges */}
          <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-2xl p-8 border border-orange-100 dark:border-orange-800/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                ⚠️
              </span>
              The Challenges
            </h3>
            <div className="space-y-6">
              {project.challenges?.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-green-50/50 dark:bg-green-900/10 rounded-2xl p-8 border border-green-100 dark:border-green-800/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                ✅
              </span>
              The Solutions
            </h3>
            <div className="space-y-6">
              {project.solutions?.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.features && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
