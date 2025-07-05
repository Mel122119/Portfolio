import React from "react";
import BackButton from "../Components/BackButton";
import photo from "../assets/image/photo.jpg";

const AboutMe = () => {
  return (
    <section className="relative max-w-5xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center md:items-start gap-12 font-sora">
      {/* ────── Image ────── */}
      <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black shadow-lg flex-shrink-0">
        <img src={photo} 
        alt="Melat Amanuel" 
        className="w-full h-full object-cover" />
      </div>

      {/* ────── Text ────── */}
      <div>
        <h2 className="text-4xl font-bold mb-8 md:mb-16 text-center md:text-left">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-10">
          Hi, I'm <span className="font-semibold">Melat Amanuel</span>, a passionate Front‑End Developer and an Electrical & Computer Engineering graduate.
          <br /><br />
          I have internship experience in software development and strong skills in problem‑solving, time management, teamwork, and adaptability.
          I’m eager to keep growing my technical and interpersonal skills in a dynamic environment.
          <br /><br />
          Outside of coding, I love traveling, baking, and listening to music.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
