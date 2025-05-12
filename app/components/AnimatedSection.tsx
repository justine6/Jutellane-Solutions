'use client';

import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
