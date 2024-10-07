import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white mt-10">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.div>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          © {new Date().getFullYear()} All About Mi.
        </motion.p>
        <motion.div
          className="mt-4 space-x-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          <a
            href="http://www.linkedin.com/in/tushar-netale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tusharnetale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:your-tusharnetale007@gmail.com"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Email
          </a>

          <a
            href="https://www.instagram.com/tusharnetale/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Instagram
          </a>

          <a
            href="https://www.snapchat.com/add/tushar-netale?share_id=Hjg04UmgOro&locale=en-US"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Snapchat
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
