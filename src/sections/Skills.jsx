import React from "react";
import { FaLaravel, FaNodeJs, FaGithub, FaReact } from "react-icons/fa";
import { SiMysql, SiPostman, SiGo, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Go", icon: <SiGo className="text-cyan-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-br from-gray-900 to-cyan-900 
                 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
        My <span className="text-cyan-400">Tech Stack</span>
      </h2>

      {/* Grid jadi 4 kolom di desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all 
                       hover:scale-105 hover:bg-cyan-700 hover:shadow-cyan-500/50"
          >
            <div className="text-6xl mx-auto mb-4">{skill.icon}</div>
            <p className="text-lg text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
