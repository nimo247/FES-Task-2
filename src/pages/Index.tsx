
import { motion } from 'framer-motion';
import { ChevronDown, Users, Calendar, BookOpen, TrendingUp, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import PageTransition from '@/components/PageTransition';
import FloatingCurrency from '@/components/FloatingCurrency';
import StockTicker from '@/components/StockTicker';
import FinancialMetrics from '@/components/FinancialMetrics';
import CryptoWidget from '@/components/CryptoWidget';

const Index = () => {
  const events = [
    {
      title: "Stock Market Workshop",
      description: "Learn the fundamentals of stock market investing and technical analysis",
      image: "photo-1611974789855-9c2a0a7236a3",
      technologies: ["Trading", "Technical Analysis", "Investment", "Risk Management"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "FinTech Innovation Summit",
      description: "Explore the latest trends in financial technology and digital banking",
      image: "photo-1559526324-4b87b5e36e44",
      technologies: ["Blockchain", "Digital Banking", "AI in Finance", "Cryptocurrencies"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Corporate Finance Case Study",
      description: "Analyze real-world corporate finance scenarios and investment decisions",
      image: "photo-1454165804606-c3d57bc86b40",
      technologies: ["Valuation", "M&A", "Financial Modeling", "Corporate Strategy"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const activities = [
    { name: "Weekly Market Updates", icon: TrendingUp, description: "Stay updated with market trends and analysis" },
    { name: "Guest Lectures", icon: Users, description: "Industry experts share insights and experiences" },
    { name: "Investment Competitions", icon: Award, description: "Test your investment skills in simulated markets" },
    { name: "Financial Literacy Programs", icon: BookOpen, description: "Educate students about personal finance and economics" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <FloatingCurrency />
        
        {/* Stock Ticker */}
        <StockTicker />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                FES NSUT
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Financial Economics Society
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Empowering students at NSUT Delhi with financial knowledge, market insights, and economic understanding. 
                Join us to explore the world of finance, investments, and economic analysis.
              </motion.p>
              
              <motion.div 
                className="flex gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="group">
                  <Users className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Join FES
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#events">View Events</a>
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex gap-6 justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Target className="h-6 w-6" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <TrendingUp className="h-6 w-6" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <BookOpen className="h-6 w-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </section>

        {/* Financial Metrics Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Market Insights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time financial metrics and market data analysis for educational purposes
              </p>
            </motion.div>
            <FinancialMetrics />
          </div>
        </section>

        {/* About & Crypto Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">About FES NSUT</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    The Financial Economics Society at Netaji Subhas University of Technology (NSUT) 
                    is a student-driven organization dedicated to fostering financial literacy and 
                    economic understanding among students. We bridge the gap between academic theory 
                    and real-world financial applications.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our mission is to create a community of financially aware individuals who can 
                    make informed decisions about investments, career choices, and economic trends. 
                    Through workshops, seminars, and hands-on activities, we prepare students for 
                    the dynamic world of finance.
                  </p>
                </motion.div>
              </div>
              <div className="lg:col-span-1">
                <CryptoWidget />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center h-full glass dark:glass-dark border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                        <activity.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{activity.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our educational events, workshops, and competitions to enhance your financial knowledge
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <ProjectCard key={event.title} {...event} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
