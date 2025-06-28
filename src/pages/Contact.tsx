
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, DollarSign, TrendingUp, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageTransition from '@/components/PageTransition';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import DynamicButton from '@/components/DynamicButton';
import PulsingCard from '@/components/PulsingCard';
import FloatingCurrency from '@/components/FloatingCurrency';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@fesnsut.dev",
      link: "mailto:contact@fesnsut.dev"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New Delhi, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  const financialStats = [
    { icon: DollarSign, value: "500+", label: "Members", color: "text-green-500" },
    { icon: TrendingUp, value: "50+", label: "Events", color: "text-blue-500" },
    { icon: Banknote, value: "25+", label: "Workshops", color: "text-purple-500" }
  ];

  return (
    <PageTransition>
      <FloatingCurrency />
      <div className="min-h-screen pt-24 pb-16 relative">
        {/* Financial floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-32 left-10 text-6xl text-primary/20"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            💰
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-5xl text-green-500/30"
            animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            $
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/4 text-4xl text-blue-500/30"
            animate={{ x: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ₹
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(59,130,246,0.6)'
              }}
            >
              Get In Touch
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          {/* Financial Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {financialStats.map((stat, index) => (
              <PulsingCard
                key={stat.label}
                title={stat.value}
                description={stat.label}
                delay={0.1 * index}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </PulsingCard>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <PulsingCard
                      key={info.title}
                      title={info.title}
                      delay={0.3 + index * 0.1}
                    >
                      <motion.a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.a>
                    </PulsingCard>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl glass dark:glass-dark">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <DynamicButton size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </DynamicButton>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <PulsingCard
              title="Ready to Join FES NSUT?"
              className="border-0 shadow-xl p-8"
            >
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you want to enhance your financial knowledge or contribute to our society, 
                we're here to help you grow in the world of finance and economics.
              </p>
              <DynamicButton size="lg" variant="outline">
                Schedule a Meeting
              </DynamicButton>
            </PulsingCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
