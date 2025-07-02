import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

const BackButton = () => (
  <Link
    to="/"
    className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition"
  >
    <ArrowLeft size={20} />
  </Link>
);

export default BackButton;
