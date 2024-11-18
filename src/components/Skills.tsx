import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Redux',
      'bootstrab',
    ],
  },
  {
    title: 'Backend & Database ',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Accountant',
    icon: <Database className="w-6 h-6" />,
    skills: [
      'Financial Reporting & Analysis',
      'Accounts Payable & Receivable ',
      'Payroll Management',
      'Bank Reconciliation ',
      'General Ledger Accounting ',
      'Financial Auditing  ',
      'ERP Systems (Gates Soft, Advac)   ',
      'Microsoft Office Suite (Excel, Word, PowerPoint ',
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4 text-blue-600">
                {category.icon}
                <h3 className="ml-2 font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
