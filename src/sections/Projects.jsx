import React from "react";
import ProjectCard from "../components/ProjectCard";
import cbt1 from "../assets/projects/cbt/cbt1.png";
import goapi from "../assets/projects/go-api/res-api.png";
import lms from "../assets/projects/mini-lms/mini-lms.png";
import movie from "../assets/projects/movie-app/movieApp.png";


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
     {
      title: "Simple Ecommerce API",
      description:
        "A simple e-commerce API built with Go and Fiber, designed to manage users, stores, products, categories, addresses, and transactions. The API includes JWT authentication, database management with GORM, and product image upload support.",
      techStack: ["Golang", "MySQL"],
      githubLink: "https://github.com/ZulfikarAzmi/go-ecommerce-api",  
      image: goapi,
    },
    {
      title: "Mini - LMS",
      description:
        "A lightweight Learning Management System built with React and Firebase, designed to provide a seamless learning experience. The platform includes course management, quizzes, progress tracking, and authentication, with a clean and responsive UI powered by Tailwind CSS.",
      techStack: ["React JS", "Firebase", "Tailwind"],
      githubLink: "https://github.com/ZulfikarAzmi/lms-frontend",  
      image: lms,
    },
    {
      title: "Movie App",
      description:
        "Movieblitz App is a web application built with Next.js 14 (App Router) that connects to the TMDB API to search and display detailed movie information including posters, trailers, cast, and recommendations.",
      techStack: ["Next JS", "Tailwind"],
      githubLink: "https://github.com/ZulfikarAzmi/next-movie-app",  
      image: movie,
    },
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
