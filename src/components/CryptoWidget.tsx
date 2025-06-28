
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  changePercent: number;
  icon: string;
}

const CryptoWidget = () => {
  const cryptos: CryptoData[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 67890.45,
      change24h: 1250.30,
      changePercent: 1.87,
      icon: '₿'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3456.78,
      change24h: -89.12,
      changePercent: -2.51,
      icon: 'Ξ'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: 178.92,
      change24h: 12.45,
      changePercent: 7.48,
      icon: '◎'
    }
  ];

  return (
    <Card className="glass dark:glass-dark border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-primary" />
          Cryptocurrency Prices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cryptos.map((crypto, index) => (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="text-2xl font-bold text-primary"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {crypto.icon}
                </motion.div>
                <div>
                  <div className="font-semibold">{crypto.name}</div>
                  <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                </div>
              </div>
              
              <div className="text-right">
                <motion.div
                  className="font-mono font-bold"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  ${crypto.price.toLocaleString()}
                </motion.div>
                <div className={`flex items-center gap-1 text-sm ${
                  crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {crypto.change24h >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span className="font-mono">
                    {crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoWidget;
