import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import BackButton from "../Components/BackButton";

const hardSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-black text-3xl" /> },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
];

const Skills = () => {
  return (
    <div className="font-sora max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-16 relative">
     

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Skills</h1>

      {/* Hard Skills */}
      <section className="mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Hard Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {hardSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {skill.icon}
              <p className="mt-2 text-sm sm:text-base text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Soft Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 text-center p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-sm sm:text-base text-gray-700 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
