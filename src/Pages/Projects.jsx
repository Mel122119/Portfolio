import React from "react";
import BackButton from "../Components/BackButton";

const Projects = () => {
  return (
    <section className="font-sora relative max-w-3xl mx-auto px-4 sm:px-8 md:px-12 py-16">
     
      {/* ─── Section Heading ───────────────────── */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          Job Listing Website – CricTracker <span className="text-gray-500 text-base font-medium">(2025)</span>
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-7">
          CricTracker is a cricket-focused platform that delivers live scores, breaking news, and match insights from the cricketing world. I contributed as a{" "}
          <span className="font-medium">Frontend Developer</span> on both the user-facing website and the internal admin dashboard during my time at{" "}
          <span className="font-medium">Yudiz Solutions Pvt. Ltd.</span>
        </p>
      </div>

    </section>
  );
};

export default Projects;
