import React from "react";
import { Mail, Phone, Github } from "lucide-react";
import BackButton from "../Components/BackButton";

const ContactMe = () => {
  return (
    <section className="font-sora max-w-3xl mx-auto px-4 sm:px-8 md:px-12 py-16 relative">
     

      {/* ─── Heading & subtext ───────────────────────────── */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Contact&nbsp;Me
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Feel free to reach out anytime!
      </p>

      {/* ─── Contact details ─────────────────────────────── */}
      <div className="flex flex-col gap-8 text-gray-800 text-base sm:text-lg">
        {/* Email */}
        <a
          href="mailto:melatamanuel21@gmail.com"
          className="flex items-center gap-4 hover:underline hover:opacity-90 transition"
        >
          <Mail className="w-6 h-6 flex-shrink-0" />
          melatamanuel21@gmail.com
        </a>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 flex-shrink-0" />
          <span>+251&nbsp;938&nbsp;925&nbsp;697</span>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Mel122119"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline hover:opacity-90 transition"
        >
          <Github className="w-6 h-6 flex-shrink-0" />
          github.com/Mel122119
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
