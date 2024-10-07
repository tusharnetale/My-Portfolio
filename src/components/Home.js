import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-violet-300 h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Hero Image */}
      <motion.img
        src={require('../assets/portfolio-image.png')} // Add the image path here
        alt="Professional Work"
        className="rounded-lg shadow-lg mb-8 overflow-hidden w-80 md:mt-5 md:w-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Welcome Message */}
      <motion.h1
        className="text-2xl text-white mb-4 md:text-6xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to My Professional Portfolio
      </motion.h1>

      {/* Professional Description */}
      <motion.p
        className="text-white text-lg max-w-lg md:text-1xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        I’m Tushar web developer eager to learn and grow in the field. With a foundation in React.js, MongoDB, and Tailwind CSS,MYSQL I'm excited to build modern applications. My portfolio showcases my passion for web development and my commitment to creating quality projects.
      </motion.p>
    </section>
  );
};

export default Home;
