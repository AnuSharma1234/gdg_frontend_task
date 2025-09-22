'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ minHeight: '100%' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
