// Navbar.tsx;
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Briefcase, Award, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/achievements", label: "Achievements", icon: Award },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Harsh Chinmalli
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, icon: Icon, onClick }) => (
  <Link
    href={href}
    className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded transition duration-300"
    onClick={onClick}
  >
    <div className="flex items-center">
      <Icon className="mr-2" size={18} />
      {label}
    </div>
  </Link>
);

export default Navbar;
