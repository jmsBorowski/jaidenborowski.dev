"use client";

import { useState } from "react";
import { projects, Project } from "./projectsData";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-white">
      
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Programming Projects</h1>
  
      <p className="text-lg text-gray-700 max-w-xl text-center mb-10">
        Here are a few of the projects I’ve worked on.  
        More coming soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 h-full bg-white">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
            onClick={() => setSelectedProject(project)}
          >
            {/* Placeholder Image */}
            <Image
              src={project.images[0]} // first image becomes thumbnail
              alt={project.title}
              width={500}
              height={300}
              className="h-48 w-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.blurb}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
