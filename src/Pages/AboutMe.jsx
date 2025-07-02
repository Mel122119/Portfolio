import React from "react";
import BackButton from "../Components/BackButton";
import photo from "../assets/image/photo.jpg";

const AboutMe = () => {
  return (
    <section className="relative max-w-5xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12 font-sora">

     
      {/* Profile Image */}
      <div className="flex items-start space-x-12">
  {/* Profile Image */}
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-black shadow-lg -ml-16 translate-y-40 flex-shrink-0">
    <img src={photo} alt="Myself" className="w-full h-full object-cover" />
  </div>

  {/* Text Section */}
  <div className="ml-8">
    <h2 className="text-4xl font-bold mb-16">About Me</h2>
    <p className="text-lg text-gray-700 leading-10">
      Hi, I'm <span className="font-semibold">Melat Amanuel</span>, a passionate Frontend Developer and an Electrical and Computer Engineer graduate.
      <br /><br />
      I have internship experience in software development.
      I have strong problem-solving abilities, time management, teamwork, and adaptability. 
      I am eager to apply my knowledge and continue developing technical and interpersonal skills in a dynamic environment.
      <br /><br />
      Outside of coding, I love traveling, baking, and listening to music.
    </p>
  </div>
</div>

    </section>
  );
};

export default AboutMe;
