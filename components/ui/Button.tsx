import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, as = 'button', href, ...props }) => {
  const commonClasses = "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-500 transition-colors";

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (as === 'a') {
    return (
      <motion.a href={href} className={commonClasses} {...motionProps} {...(props as any)}>
        {children}
      </motion.a>
    );
  }

  return (
    // FIX: Cast props to 'any' to resolve type conflict between React.ButtonHTMLAttributes and framer-motion's HTMLMotionProps.
    <motion.button {...(props as any)} className={commonClasses} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
