
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface DynamicButtonProps {
  children: ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg' | 'sm';
  onClick?: () => void;
  asChild?: boolean;
  className?: string;
}

const DynamicButton = ({ children, variant = 'default', size = 'default', onClick, asChild, className }: DynamicButtonProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        asChild={asChild}
        className={`group transition-all duration-300 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default DynamicButton;
