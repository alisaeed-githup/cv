import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <Experience />
      <Skills />
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p>© 2024 Ali Saeid. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;