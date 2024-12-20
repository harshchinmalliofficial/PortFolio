"use client";

import { motion } from "framer-motion";
import { Award, Star, Mic } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Innovation Award Winner",
    description:
      "Received the prestigious Tech Innovator Award for groundbreaking work in AI-driven web applications.",
    icon: Award,
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description:
      "Major contributor to popular open-source projects with over 1000 stars, including contributions to React and Node.js ecosystems.",
    icon: Star,
  },
  {
    id: 3,
    title: "Keynote Speaker",
    description:
      "Invited as a keynote speaker at multiple international tech conferences, including WebSummit and Google I/O.",
    icon: Mic,
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Noteworthy Achievements
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="bg-gray-800 p-6 rounded-lg mb-8 flex items-start"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-blue-500 p-3 rounded-full mr-4">
              <achievement.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{achievement.title}</h2>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
