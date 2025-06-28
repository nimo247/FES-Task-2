
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Stock {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockTicker = () => {
  const [stocks] = useState<Stock[]>([
    { symbol: 'AAPL', price: 185.92, change: 2.15, changePercent: 1.17 },
    { symbol: 'GOOGL', price: 142.87, change: -1.23, changePercent: -0.85 },
    { symbol: 'MSFT', price: 378.85, change: 5.67, changePercent: 1.52 },
    { symbol: 'AMZN', price: 155.21, change: -0.89, changePercent: -0.57 },
    { symbol: 'TSLA', price: 248.50, change: 12.30, changePercent: 5.21 },
    { symbol: 'NVDA', price: 875.28, change: 15.67, changePercent: 1.82 },
  ]);

  return (
    <div className="w-full bg-muted/50 backdrop-blur-sm border-y border-border/50 py-2 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center gap-2 text-sm">
            <span className="font-bold text-primary">{stock.symbol}</span>
            <span className="font-mono">${stock.price.toFixed(2)}</span>
            <div className={`flex items-center gap-1 ${
              stock.change >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {stock.change >= 0 ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              <span className="font-mono">
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StockTicker;
