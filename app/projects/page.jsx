// "use client";

// import { motion } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";
// import blogtech from "../assets/blogtech.png";

// const projects = [
//   {
//     id: 1,
//     title: "BLOGHTECH ",
//     description:
//       " A AI-Powered Prompt your go-to hub for all things tech blogging! .",
//     technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
//     github: "https://github.com/yourusername/ai-ecommerce",
//     live: "https://blogtech-eo99.vercel.app/",
//     image: blogtech,
//   },
//   {
//     id: 2,
//     title: "CodeClub",
//     description:
//       "A Educational platform for a student for developing  problem solving skills ",
//     technologies: ["Solidity", "Web3.js", "React", "Node.js"],
//     github: "https://github.com/yourusername/blockchain-supply-chain",
//     live: "https://blockchain-supply-demo.vercel.app",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     id: 3,
//     title: "PDF CHATBOT ",
//     description: "A Machine Learing project helping students tp chat with PDF",
//     technologies: ["React", "Socket.io", "Express", "Docker"],
//     github: "https://github.com/yourusername/collab-ide",
//     live: "https://collab-ide-demo.vercel.app",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="min-h-screen py-12">
//       <motion.h1
//         className="text-4xl font-bold mb-12 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Innovative Projects
//       </motion.h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
//               <p className="text-gray-300 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-blue-400 hover:text-blue-300"
//                 >
//                   <Github className="mr-1" /> GitHub
//                 </a>
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-green-400 hover:text-green-300"
//                 >
//                   <ExternalLink className="mr-1" /> Live Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "BLOGHTECH",
    description:
      "A AI-Powered Prompt your go-to hub for all things tech blogging!",
    technologies: ["Next", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/harshchinmalliofficial/BLOGTECH",
    live: "https://blogtech-eo99.vercel.app/",
    image: "/blogtech.png", // Moved to public folder
  },
  {
    id: 2,
    title: "CodeClub",
    description:
      "A Educational platform for a student solving coding problems with intregration with code forces api for developing problem solving skills",
    technologies: ["React", "Express", "Tailwind", "Node.js"],
    github: "https://github.com/harshchinmalliofficial/CodeClub",
    live: "https://blockchain-supply-demo.vercel.app",
    image: "/CodeClub.png",
  },
  {
    id: 3,
    title: "PDF CHATBOT",
    description: "A Machine Learning project helping students to chat with PDF",
    technologies: ["Pyton", "Langchain", "Pandas"],
    github: "https://github.com/harshchinmalliofficial/PDF-CHATBOT",
    live: "https://collab-ide-demo.vercel.app",
    image: "/placeholder.jpg",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Innovative Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-400 hover:text-green-300"
                >
                  <ExternalLink className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
