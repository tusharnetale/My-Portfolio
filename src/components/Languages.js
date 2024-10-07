import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  {
    name: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language designed for portability and performance.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png',
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS is a utility-first CSS framework that provides low-level building blocks for designing customized UIs.',
    image: 'https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png', // Corrected Tailwind CSS icon
       
   },
  {
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png',
  },
  {
    name: 'JavaScript',
    description: 'JavaScript is a versatile, high-level programming language that enables interactive web development and is the backbone of web applications.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
  },
];

const Languages = () => {
  return (
    <section id="languages" className="p-10 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Languages & Technologies
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-6 shadow-lg rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={language.image}
              alt={language.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{language.name}</h3>
            <p className="text-gray-700">{language.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
