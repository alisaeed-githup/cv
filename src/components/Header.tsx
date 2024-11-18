import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <img
            src="/ali.jfif"
            alt="Ali Saeid"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">Ali Saeid</h1>
          <h2 className="text-xl text-blue-100 mb-4">
            {' '}
            General Accountant & Full Stack Developer
          </h2>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="mailto:Alysaeid96@gmail.com"
              className="flex items-center hover:text-blue-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Alysaeid96@gmail.com</span>
            </a>
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Cairo, Egypt</span>
            </span>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/alisaeed-githup"
              className="hover:text-blue-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-saeid-644349131/"
              className="hover:text-blue-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
