import React from "react";
import BackButton from "../Components/BackButton";
import Screenshot from "../assets/image/Screenshot.png";

const Projects = () => {
  return (
    <section className="font-sora relative max-w-3xl mx-auto px-4 sm:px-8 md:px-12 py-16">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 mb-100">
        {/* Image */}
        <img
          src={Screenshot}
          alt="CricTracker screenshot"
          className="
            w-full max-w-150 sm:max-w-300 md:w-100 lg:w-130  
            mx-auto                                     
            rounded-lg shadow-lg object-cover flex-shrink-0
            md:-ml-10 lg:-ml-85                        
          "
        />

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-12">
            Job Listing Website – CricTracker{" "}
            <span className="text-gray-500 text-base font-medium">(2025)</span>
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-7">
            CricTracker is a cricket‑focused platform that delivers live scores,
            breaking news, and match insights from the cricketing world. I
            contributed as a <span className="font-medium">Frontend Developer</span>{" "}
            on both the user‑facing website and the internal admin dashboard during
            my time at <span className="font-medium">Yudiz Solutions Pvt.&nbsp;Ltd.</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Projects;
