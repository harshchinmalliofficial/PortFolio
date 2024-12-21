"use client";

import { motion } from "framer-motion";
import { Award, Star, Mic, Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Codewars Winners",
    description:
      "Won First Price In CodeWars organised by the CodeClub of THE KLE TECHNOLOGICAL UNIVERSITY",
    icon: Award,
  },
  {
    id: 2,
    title: "Inter College Football Tournament Winner ",
    description:
      "Won First Price In CodeWars organised by the CodeClub of THE KLE TECHNOLOGICAL UNIVERSITY ",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Debate Speaker",
    description:
      "Won various debating compitions in organised in KLE TECHNOLOGICAL UNIVERSITY",
    icon: Mic,
  },
];

const extra = [
  {
    id: 1,
    title: "GDG { DevFest } 2024 PUNE",
    description:
      "Attended the Google Developers Conference organised by GDG group Pune",
    icon: Star,
  },
  {
    id: 2,
    title: "GDG { DevFest } 2024 HUBLI",
    description:
      "Attended the Google Developers Conference organised by GDG group Hubli ",
    icon: Star,
  },
];

const Achievements = () => {
  return (
    <div className="py-12">
      {/* Noteworthy Achievements Section */}
      <motion.div
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12 text-center">
          Noteworthy Achievements
        </h1>
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
      </motion.div>

      {/* Extra Curriculum Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12 text-center">
          Extra Curriculum
        </h1>
        {extra.map((achievement, index) => (
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
      </motion.div>
    </div>
  );
};

export default Achievements;
