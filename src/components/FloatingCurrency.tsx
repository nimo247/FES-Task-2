
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingCurrency = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currencies = ['$', '₹', '$', '₹', '$'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {currencies.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl font-bold text-primary/20 dark:text-primary/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: 0,
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 3,
          }}
          style={{
            left: `${Math.random() * 90}%`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
      
      {/* Static positioned currency symbols */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-primary/30 dark:text-primary/20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        $
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-5xl text-primary/25 dark:text-primary/15"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ₹
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-1/4 text-3xl text-primary/35 dark:text-primary/25"
        animate={{ y: [0, -8, 0], x: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        $
      </motion.div>
    </div>
  );
};

export default FloatingCurrency;
