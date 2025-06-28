
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Getting Started with React 18 and Concurrent Features",
      excerpt: "Explore the new concurrent features in React 18 and how they can improve your application's performance and user experience.",
      author: "FES NSUT",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "photo-1633356122544-f134324a6cee",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt: "Learn best practices for creating robust and scalable APIs using Node.js and TypeScript with proper error handling and validation.",
      author: "FES NSUT",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "photo-1627398242454-45a1465c2479",
      tags: ["Node.js", "TypeScript", "Backend"]
    },
    {
      title: "Modern CSS: Grid, Flexbox, and Container Queries",
      excerpt: "Master modern CSS layout techniques including CSS Grid, Flexbox, and the new container queries for responsive design.",
      author: "FES NSUT",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "photo-1507003211169-0a1dd7228f2d",
      tags: ["CSS", "Web Design", "Frontend"]
    },
    {
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Explore different database design patterns and when to use them in your applications for optimal performance.",
      author: "FES NSUT",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "photo-1558494949-ef010cbdcc31",
      tags: ["Database", "Architecture", "Backend"]
    },
    {
      title: "State Management in React: Redux vs Zustand vs Context",
      excerpt: "A comprehensive comparison of different state management solutions in React and when to use each one.",
      author: "FES NSUT",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "photo-1621839673705-6617adf9e890",
      tags: ["React", "State Management", "JavaScript"]
    },
    {
      title: "Optimizing Web Performance: Core Web Vitals Guide",
      excerpt: "Learn how to optimize your web applications for Core Web Vitals and improve your site's performance scores.",
      author: "FES NSUT",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "photo-1460925895917-afdab827c52f",
      tags: ["Performance", "Web Development", "SEO"]
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development, technology, and programming
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="overflow-hidden border-0 shadow-xl glass dark:glass-dark">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={`https://images.unsplash.com/${blogPosts[0].image}?w=600&h=400&fit=crop`}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(blogPosts[0].date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-fit group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass dark:glass-dark h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${post.image}?w=400&h=250&fit=crop`}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blogs;
