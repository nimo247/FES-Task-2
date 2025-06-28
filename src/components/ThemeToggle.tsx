
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ 
          rotate: theme === 'dark' ? 360 : 0,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 0.3, ease: "easeInOut" }
        }}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Animated background circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10"
        animate={{
          scale: theme === 'dark' ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
