import React from "react";
import Banner from "../assets/image/Banner.png";
import {
  FaFacebookF,
  FaReddit,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-32 py-16 font-sora">
      {/* ─────────── Text block ─────────── */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
          Hello, I’m <span className="font-bold">Melat Amanuel.</span>
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium">
          <span className="font-bold">
            Front‑end <span className="outline-text">Developer</span>
          </span>
        </h2>

        <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium">
          Based in <span className="font-bold">Ethiopia.</span>
        </h3>

        <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
          I’m a motivated front‑end developer and Electrical &amp; Computer
          Engineering graduate.
        </p>

        {/* Social icons */}
        <div className="mt-8 flex justify-center lg:justify-start gap-4">
          <a
            href="https://facebook.com/"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded bg-black text-white hover:scale-105 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://reddit.com/"
            aria-label="Reddit"
            className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100 transition"
          >
            <FaReddit />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:you@example.com"
            aria-label="Gmail"
            className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100 transition"
          >
            <FaGoogle />
          </a>
        </div>
      </div>

      {/* ─────────── Image block ─────────── */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Banner}
          alt="Portrait of Melat Amanuel"
          className="w-64 sm:w-80 md:w-[450px] lg:w-[550px] rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
