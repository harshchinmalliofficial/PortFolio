"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Machine Learning",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Harsh Chinmalli
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Innovative Software Engineer
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Crafting cutting-edge solutions at the intersection of web development,
        machine learning, and cloud technologies.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          View Projects <ArrowRight className="ml-2" />
        </Link>
        <Link
          href="/contact"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          Contact Me <ArrowRight className="ml-2" />
        </Link>
        <a
          href="/Resume.pdf"
          download
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          Download Resume <ArrowRight className="ml-2" />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
