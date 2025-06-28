import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Code2, Database, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import PageTransition from '@/components/PageTransition';
import FloatingCurrency from '@/components/FloatingCurrency';
import StockTicker from '@/components/StockTicker';
import FinancialMetrics from '@/components/FinancialMetrics';
import CryptoWidget from '@/components/CryptoWidget';

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "photo-1611224923853-80b023f02d71",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts and interactive maps",
      image: "photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code2, description: "React, Next.js, Vue.js, TypeScript" },
    { name: "Backend Development", icon: Database, description: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS, Android" },
    { name: "Web Technologies", icon: Globe, description: "HTML5, CSS3, JavaScript, REST APIs" }
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
                Full Stack Developer & Technology Enthusiast
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Creating innovative digital solutions with cutting-edge technologies. 
                Passionate about building scalable applications and solving complex problems.
              </motion.p>
              
              <motion.div 
                className="flex gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex gap-6 justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:contact@example.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Overview</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time financial metrics and investment portfolio performance
              </p>
            </motion.div>
            <FinancialMetrics />
          </div>
        </section>

        {/* Crypto & About Section */}
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate full-stack developer and financial technology enthusiast from NSUT 
                    (Netaji Subhas University of Technology) with expertise in modern web technologies 
                    and fintech solutions. I love creating user-centric financial applications 
                    that solve real-world problems and deliver exceptional user experiences in the finance sector.
                  </p>
                </motion.div>
              </div>
              <div className="lg:col-span-1">
                <CryptoWidget />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center h-full glass dark:glass-dark border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{skill.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
