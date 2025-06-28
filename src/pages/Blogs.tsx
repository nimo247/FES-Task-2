import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, Calendar, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import DynamicButton from '@/components/DynamicButton';
import PulsingCard from '@/components/PulsingCard';

const Resources = () => {
  const resources = [
    {
      title: "Introduction to Stock Market",
      description: "Comprehensive guide covering basics of stock market investing, market analysis, and trading strategies.",
      category: "Investment",
      date: "March 15, 2024",
      type: "PDF Guide",
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Personal Finance Management",
      description: "Learn how to manage personal finances, budgeting techniques, and saving strategies for students.",
      category: "Personal Finance",
      date: "March 10, 2024",
      type: "Workshop Material",
      icon: DollarSign,
      color: "bg-blue-500"
    },
    {
      title: "Cryptocurrency Fundamentals",
      description: "Understanding blockchain technology, cryptocurrency markets, and digital asset investment basics.",
      category: "Crypto",
      date: "March 5, 2024",
      type: "Video Series",
      icon: PieChart,
      color: "bg-purple-500"
    },
    {
      title: "Financial Modeling Basics",
      description: "Excel-based financial modeling techniques for valuation, forecasting, and investment analysis.",
      category: "Analysis",
      date: "February 28, 2024",
      type: "Excel Templates",
      icon: BookOpen,
      color: "bg-orange-500"
    },
    {
      title: "Market Analysis Techniques",
      description: "Technical and fundamental analysis methods for evaluating stocks and market trends.",
      category: "Analysis",
      date: "February 20, 2024",
      type: "Research Paper",
      icon: TrendingUp,
      color: "bg-red-500"
    },
    {
      title: "Banking and Financial Services",
      description: "Overview of banking systems, financial services, and career opportunities in finance sector.",
      category: "Career",
      date: "February 15, 2024",
      type: "Career Guide",
      icon: DollarSign,
      color: "bg-teal-500"
    }
  ];

  const categories = ['All', 'Investment', 'Personal Finance', 'Crypto', 'Analysis', 'Career'];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(59,130,246,0.6)'
              }}
            >
              Financial Resources
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our curated collection of financial education materials, research papers, 
              and learning resources to enhance your understanding of finance and economics.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <DynamicButton
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </DynamicButton>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <PulsingCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                delay={index * 0.1}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${resource.color} text-white`}>
                    <resource.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {resource.date}
                </div>
                <Badge variant="outline" className="w-fit mb-4">
                  {resource.category}
                </Badge>
                <div className="flex gap-2 mt-4">
                  <DynamicButton size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </DynamicButton>
                  <DynamicButton size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </DynamicButton>
                </div>
              </PulsingCard>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <PulsingCard
              title="Need More Resources?"
              description="Can't find what you're looking for? Reach out to us and we'll help you find the right materials."
              className="max-w-2xl mx-auto"
            >
              <DynamicButton size="lg" className="w-full sm:w-auto">
                <BookOpen className="mr-2 h-5 w-5" />
                Request Resources
              </DynamicButton>
            </PulsingCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resources;
