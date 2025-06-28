
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, PieChart, BarChart3, Wallet, CreditCard } from 'lucide-react';

const FinancialMetrics = () => {
  const metrics = [
    {
      title: 'Portfolio Value',
      value: '$125,430',
      change: '+12.5%',
      positive: true,
      icon: Wallet,
      description: 'Total portfolio worth'
    },
    {
      title: 'Monthly Revenue',
      value: '$8,240',
      change: '+23.1%',
      positive: true,
      icon: DollarSign,
      description: 'Recurring income'
    },
    {
      title: 'Active Investments',
      value: '47',
      change: '+3',
      positive: true,
      icon: PieChart,
      description: 'Current positions'
    },
    {
      title: 'ROI This Year',
      value: '28.4%',
      change: '+5.2%',
      positive: true,
      icon: TrendingUp,
      description: 'Annual return'
    },
    {
      title: 'Expenses',
      value: '$2,180',
      change: '-8.7%',
      positive: true,
      icon: CreditCard,
      description: 'Monthly spending'
    },
    {
      title: 'Savings Rate',
      value: '45%',
      change: '+2%',
      positive: true,
      icon: BarChart3,
      description: 'Income saved'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="relative overflow-hidden glass dark:glass-dark border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className="p-2 rounded-full bg-primary/10">
                  <metric.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${
                    metric.positive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {metric.description}
                  </span>
                </div>
              </div>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default FinancialMetrics;
