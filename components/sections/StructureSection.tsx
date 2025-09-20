
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { TEAM_STRUCTURE } from '../../constants';
import { motion } from 'framer-motion';

const StructureSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <AnimatedSection id="structure">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Our Structure</h2>
        <p className="mt-4 text-lg text-gray-400">The team that keeps BOLD running smoothly.</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* President */}
        <motion.div
          className="bg-zinc-800 rounded-lg p-6 shadow-lg text-center w-full max-w-sm"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-orange-500" src={TEAM_STRUCTURE[0].img} alt={TEAM_STRUCTURE[0].name} />
          <h3 className="text-xl font-bold text-white">{TEAM_STRUCTURE[0].name}</h3>
          <p className="text-orange-500 font-semibold">{TEAM_STRUCTURE[0].role}</p>
        </motion.div>

        {/* Other Roles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-4xl">
          {TEAM_STRUCTURE.slice(1).map((member, index) => (
            <motion.div
              key={member.role}
              className="bg-zinc-800 rounded-lg p-4 shadow-md text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <img className="w-24 h-24 mx-auto rounded-full mb-3" src={member.img} alt={member.name} />
              <h4 className="text-lg font-bold text-white">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StructureSection;
