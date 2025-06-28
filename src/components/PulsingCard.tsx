
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface PulsingCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const PulsingCard = ({ title, description, children, className = '', delay = 0 }: PulsingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        scale: 1.02
      }}
      transition={{ 
        duration: 0.6, 
        delay,
      }}
      whileHoverTransition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="h-full glass dark:glass-dark border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <CardHeader className="relative z-10">
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PulsingCard;
