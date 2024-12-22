// Footer.tsx;
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Harsh Chinmalli</h2>
            <p className="text-gray-400">Innovative Software Engineer</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/harshchinmalliofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-chinmalli-1242b42b6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Twitter />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Harsh Chinmalli. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
