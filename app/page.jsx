"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

// Enhanced skills array with completion percentages
const skills = [
  { name: "React", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "Node.js", percentage: 85 },
  { name: "Python", percentage: 88 },
  { name: "Machine Learning", percentage: 75 },
  { name: "Cloud Computing", percentage: 80 },
  { name: "DevOps", percentage: 70 },
  { name: "UI/UX Design", percentage: 75 },
]

const Home = () => {
  // State for typing animation
  const [displayText, setDisplayText] = useState("");
  const [isTypingName, setIsTypingName] = useState(true);
  const [isErasing, setIsErasing] = useState(false);
  
  const fullName = "Harsh Chinmalli";
  const fullTitle = "Software Engineer";
  
  useEffect(() => {
    let timeout;
    
    // Function to type text - ultrafast speed
    const typeText = () => {
      const targetText = isTypingName ? fullName : fullTitle;
      
      if (!isErasing) {
        // Typing mode - ultrafast speed (20-30ms between characters)
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1));
          timeout = setTimeout(typeText, 20 + Math.random() * 10);
        } else {
          // Finished typing current text, very short pause before erasing (500ms)
          timeout = setTimeout(() => {
            setIsErasing(true);
            typeText();
          }, 500);
        }
      } else {
        // Erasing mode - ultrafast speed (10-20ms between characters)
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, displayText.length - 1));
          timeout = setTimeout(typeText, 10 + Math.random() * 10);
        } else {
          // Finished erasing, switch text and start typing again with minimal delay
          setIsTypingName(!isTypingName);
          setIsErasing(false);
          timeout = setTimeout(typeText, 200);
        }
      }
    };
    
    // Start the typing animation with shorter initial delay
    timeout = setTimeout(typeText, 200);
    
    return () => clearTimeout(timeout);
  }, [displayText, isTypingName, isErasing]);
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative h-20 flex items-center justify-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-gray-50 to-gray-100">
          {displayText}
          <motion.span
            className="inline-block w-1 h-12 md:h-14 bg-purple-500 ml-1 absolute bottom-0"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
          />
        </h1>
      </div>
      
      <motion.p
        className="text-lg md:text-xl text-center max-w-2xl mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Crafting cutting-edge solutions at the intersection of web development, machine learning, and cloud
        technologies.
      </motion.p>

      {/* Enhanced Skills Section with Percentages */}
      <motion.div
        className="max-w-4xl w-full mb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.h3
          className="text-xl font-semibold text-center mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-50 to-gray-100">Technical Expertise</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 group shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Background decoration */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>

              {/* Skill content */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {skill.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href="/projects"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Projects <ArrowRight className="ml-2" />
        </Link>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300"
        >
          Contact Me <ArrowRight className="ml-2" />
        </Link>
        <a
          href="/Resume.pdf"
          download
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300"
        >
          Download Resume <ArrowRight className="ml-2" />
        </a>
      </motion.div>
    </div>
  )
}

export default Home