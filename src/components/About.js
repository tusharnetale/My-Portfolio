import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="p-10 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
       
        "Aspiring MCA student with a passion for technology and a solid foundation in Java, cloud 
        computing and web Development management holding a Bachelor's degree in Computer
        Applications. Currently pursuing a Master's degree. Passionate about web Development and staying
        updated on emerging technologies. Committed to innovation and continuous growth."
      </motion.p>
    </section>
  );
};

export default About;
