import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: '1 Chat App',
      description: 'Developed a real-time chat application that allows one-to-one user communication.',
      link: 'https://github.com/tusharnetale/chat-app'
    },
    {
      name: '2 Automated Training and Placement System',
      description: 'The web-based Training and Placement Cell Management system will streamline student data entry and job matching, automating manual processes in the universitys placement department. It will enhance transparency and efficiency,improving job prospects while offering convenience through its online accessibility.',
      link: 'https://your-https://github.com/atharva-mali/automated-placement-systemportfolio-link.com'
    },
    {
      name: '3 Portfolio',
      description: 'Fully responsive portfolio website built using React.js Framer Motion and Tailwind CSS.The website consists of multiple sections',
      link: 'https://tusharnetale.github.io/My-Portfolio/'
    },
    {
      name: '4 mobile website Landing page ',
      description: 'Internship work - using Tailwind CSS Framework HTML Landing page.',
      link: 'https://github.com/tusharnetale/oibsip_taskno.1'
    },
    {
      name: '5 Portfolio website Landing page',
      description: 'Internship work - using Tailwind CSS Framework HTML Portfolio website Landing page.',
      link: 'https://github.com/tusharnetale/oibsip_taskno.2'
    },
    {
      name: '6 Temperature Converter',
      description: 'Internship work - using Tailwind CSS Framework HTML and javascript Temperature Converter.',
      link: 'https://github.com/tusharnetale/oibsip_taskno.3'
    },
    {
      name: '7 Table tracking System',
      description: 'A Hotel Table Reservation System is a comprehensive software solution designed to streamline and simplify the process of reserving tables at a hotel’s restaurant or dining establishment.',
      link: ''
    },
    {
      name: '8 Chatbot Using Python',
      description: 'The "Chatbot Using Python" project enhances a car dealership website by offering a personalized virtual assistant for users. Developed with Python, JavaScript, and JSON, the chatbot helps users navigate car options, answer inquiries, and assist with the purchasing process. Its conversational interface streamlines the overall car selection experience.',
      link: ''
    },
  ];

  return (
    <section id="projects" className="p-10 bg-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 "
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-6 shadow-lg rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(project.link, '_blank')}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
