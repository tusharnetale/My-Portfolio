import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="p-10 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        "Motivated software developer with expertise in Java, cloud computing,
        and web development. Skilled in designing and implementing scalable,
        efficient software solutions. Excited to work collaboratively with
        cross-functional teams to refine product architecture, troubleshoot
        existing systems, and deliver innovative applications. Dedicated to
        continuous learning and adapting to new technologies for enhancing
        product performance and usability. "
      </motion.p>
    </section>
  );
};

export default About;
