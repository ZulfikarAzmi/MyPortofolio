import React from "react";
import { FaLaravel, FaNodeJs, FaGithub, FaReact } from "react-icons/fa";
import { SiMysql, SiPostman, SiGo, SiPostgresql, SiNextdotjs, SiFirebase } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Go", icon: <SiGo className="text-cyan-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-900 to-cyan-900 
                 flex flex-col items-center justify-center text-center relative"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
        My <span className="text-cyan-400">Tech Stack</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800/50 p-6 rounded-lg 
                       border border-gray-700 transition-all duration-300
                       hover:bg-gray-800/70 hover:border-cyan-500/30 hover:shadow-lg"
          >
            <div className="text-5xl mb-3">
              {skill.icon}
            </div>
            <div className="text-lg text-white font-medium">
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center text-gray-500/20 p-6">
        <div className="text-8xl font-black opacity-10">{`{ }`}</div>
        <div className="text-8xl font-black opacity-10">&#60;/&#62;</div>
      </div>
    </section>
  );
};

export default Skills;
