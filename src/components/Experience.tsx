import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: ' TIGER PACK ',
    position: 'General Accountant ',
    period: ' Apr 2021 - Present',
    description:
      'Manage comprehensive accounting transactions and ensure accuracy in financial reporting. Prepare and publish monthly, quarterly, and annual financial statements.Handle account reconciliations for accounts payable and receivable.Conduct timely bank payments and ensure the accuracy of profit/loss statements.Perform financial audits and process employee payroll in coordination with HR.Prepare and review journal entries, bank reconciliations, and financial documentation.',
  },
  {
    company: 'Mas Industrial Supplies',
    position: 'General Accountant ',
    period: 'Dec 2020 - Mar 2021 ',
    description:
      'Reconciled and balanced accounts, resolving discrepancies effectively. Assisted with balance sheet preparation and monthly account reconciliations.Filed and maintained journal entries for internal audits.Processed vendor invoices and managed payment schedules.Prepared financial reports and bank reconciliations.',
  },
  {
    company: ' TIGER PACK ',
    position: 'Junior Accountant',
    period: ' Jun 2020 - Dec 2020',
    description:
      'Recorded treasury transactions and prepared daily financial reports. Managed accounts receivable, processed payments, and handled client account reviews.Ensured timely collection of receivables and reconciled accounts.',
  },
  {
    company: ' Joy & Learn Egypt ',
    position: 'Inventory Accountant',
    period: ' Jan 2020 - May 2020',
    description:
      'Recorded daily inventory transactions and prepared journal entries with appropriate supporting documentation. Monitored and reported on inventory movement and consumption, producing weekly and periodic reports.Maintained historical records of inventory by documenting all transactions.Conducted daily and weekly reconciliations to ensure accurate inventory balances. ',
  },
  {
    company: ' ConsulƟng InsƟtuƟon for AccounƟng ',
    position: 'Junior Accountant',
    period: ' | Dec 2019 - May 2020',
    description:
      'Assisted senior accountants in daily accounting tasks. Analyzed general expenses, sales invoices, and VAT. Prepared journal entries and handled opening and closing balance sheets. ',
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-200"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <div className="text-blue-600 font-medium mb-1">
                {exp.company}
              </div>
              <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
