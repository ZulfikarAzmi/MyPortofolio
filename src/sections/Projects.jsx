import React from "react";
import ProjectCard from "../components/ProjectCard";
import cbt1 from "../assets/projects/cbt/cbt1.png";


const Projects = () => {
  const projectList = [
    {
      title: "Computer Based Test (CBT) Exam Web App",
      description:
        "A web-based exam system with support for multiple-choice questions, image options, auto-grading, and admin management. Built using Laravel, React, and Inertia.js.",
      techStack: ["React", "Laravel", "Tailwind", "MySQL"],
      githubLink: "",  
      image: cbt1,
    },
    // Tambah project lain di sini
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
      <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
