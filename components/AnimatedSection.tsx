
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 sm:py-28 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
