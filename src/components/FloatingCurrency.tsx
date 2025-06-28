
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingCurrency = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const financeSymbols = ['$', '₹', '€', '£', '¥', '₿', 'Ξ', '◎', '💰', '📈', '💳', '🏦'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating symbols */}
      {financeSymbols.map((symbol, index) => (
        <motion.div
          key={`${symbol}-${index}`}
          className="absolute text-4xl md:text-6xl font-bold text-primary/20 dark:text-primary/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: 0,
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * window.innerWidth,
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 2,
          }}
          style={{
            left: `${Math.random() * 90}%`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
      
      {/* Static positioned currency symbols with enhanced animations */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-primary/30 dark:text-primary/20"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        💰
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-5xl text-primary/25 dark:text-primary/15"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, -15, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 1 
        }}
      >
        📈
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-1/4 text-3xl text-primary/35 dark:text-primary/25"
        animate={{ 
          y: [0, -12, 0], 
          x: [0, 8, -8, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 2 
        }}
      >
        ₿
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-1/4 text-4xl text-primary/30 dark:text-primary/20"
        animate={{ 
          y: [0, -18, 0], 
          rotate: [0, 20, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 3 
        }}
      >
        💳
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-10 text-3xl text-primary/25 dark:text-primary/15"
        animate={{ 
          y: [0, -10, 0], 
          x: [0, -5, 5, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 4 
        }}
      >
        🏦
      </motion.div>
    </div>
  );
};

export default FloatingCurrency;
