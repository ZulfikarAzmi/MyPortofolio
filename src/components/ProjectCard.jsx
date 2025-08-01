import React from "react";

const ProjectCard = ({ title, description, techStack, githubLink, image, isPrivate }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>

        <div>
          <h4 className="text-cyan-400 font-semibold">Tech Stack</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-cyan-500 text-white px-3 py-1 text-sm rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {githubLink && !isPrivate ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-cyan-400 hover:underline"
          >
            View on GitHub →
          </a>
        ) : (
          <p className="text-sm text-gray-400 mt-4 italic">
            Repository is private
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
