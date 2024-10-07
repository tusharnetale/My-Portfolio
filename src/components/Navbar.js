import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <motion.div
          className="text-white text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          Tushar Portfolio
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About','Languages', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 mt-2 p-4 space-y-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
