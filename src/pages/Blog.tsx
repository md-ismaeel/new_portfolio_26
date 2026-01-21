import React, { useState } from 'react';
import { motion, useInView, fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/motion/motion';

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Modern Web Development",
        excerpt: "Learn the fundamentals of building beautiful, responsive websites with the latest technologies and best practices.",
        author: "Sarah Johnson",
        date: "Jan 15, 2026",
        readTime: "5 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "The Future of AI in Web Design",
        excerpt: "Exploring how artificial intelligence is revolutionizing the way we approach user experience and interface design.",
        author: "Michael Chen",
        date: "Jan 12, 2026",
        readTime: "8 min read",
        category: "AI & Design",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Building Scalable React Applications",
        excerpt: "Best practices and architecture patterns for creating maintainable React apps that can grow with your business.",
        author: "Emily Rodriguez",
        date: "Jan 10, 2026",
        readTime: "12 min read",
        category: "React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox: When to Use Each",
        excerpt: "A comprehensive guide to understanding the differences and use cases for CSS Grid and Flexbox layouts.",
        author: "David Kim",
        date: "Jan 8, 2026",
        readTime: "6 min read",
        category: "CSS",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Optimizing Web Performance in 2026",
        excerpt: "Techniques and tools to ensure your website loads fast and provides an excellent user experience.",
        author: "Lisa Wang",
        date: "Jan 5, 2026",
        readTime: "10 min read",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "Understanding TypeScript Generics",
        excerpt: "Master TypeScript generics to write more flexible and reusable code with complete type safety.",
        author: "Alex Thompson",
        date: "Jan 3, 2026",
        readTime: "7 min read",
        category: "TypeScript",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop"
    }
];

const categories = ["All", "Development", "AI & Design", "React", "CSS", "Performance", "TypeScript"];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="relative min-h-screen bg-primary-background">
            {/* Background mesh */}
            <div className="absolute inset-0 bg-mesh opacity-30" />

            {/* Hero Section */}
            <motion.section
                className="relative section-y"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-content">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.h1
                            className="display-md mb-6"
                            variants={fadeInUp}
                        >
                            Our <span className="gradient-text">Blog</span>
                        </motion.h1>
                        <motion.p
                            className="body-xl"
                            variants={fadeInUp}
                        >
                            Insights, tutorials, and thoughts on web development, design, and technology.
                        </motion.p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                variants={staggerItem}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-glow'
                                        : 'bg-card text-foreground-secondary border-custom hover:border-primary'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Featured Post */}
                    {selectedCategory === "All" && featuredPost && (
                        <motion.article
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                            className="glass card-modern shadow-float mb-16 overflow-hidden group cursor-pointer"
                            whileHover={{ y: -8 }}
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-background-secondary text-primary text-xs font-medium rounded-full">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-foreground-muted text-sm">{featuredPost.date}</span>
                                        <span className="text-foreground-muted text-sm">•</span>
                                        <span className="text-foreground-muted text-sm">{featuredPost.readTime}</span>
                                    </div>
                                    <h2 className="heading-lg mb-4 group-hover:text-primary transition-colors duration-300">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="body-md mb-6">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="text-primary font-semibold text-sm">
                                                {featuredPost.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-foreground font-medium text-sm">{featuredPost.author}</p>
                                            <p className="text-foreground-muted text-xs">Author</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    )}
                </div>
            </motion.section>

            {/* Blog Grid */}
            <section className="relative pb-20">
                <div className="container-content">
                    <motion.div
                        ref={ref}
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={staggerItem}
                                className="glass card-modern shadow-card overflow-hidden group cursor-pointer"
                                whileHover={{ y: -8 }}
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-background-secondary text-primary text-xs font-medium rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-foreground-muted text-xs">{post.readTime}</span>
                                    </div>
                                    <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="body-md mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-top">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                                <span className="text-primary font-semibold text-xs">
                                                    {post.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <span className="text-foreground-secondary text-sm font-medium">{post.author}</span>
                                        </div>
                                        <span className="text-foreground-muted text-sm">{post.date}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Load More Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More Posts
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <motion.section
                className="relative section-y"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container-narrow">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass card-modern shadow-float text-center p-12"
                    >
                        <h2 className="heading-lg mb-4">Stay Updated</h2>
                        <p className="body-lg mb-8 max-w-xl mx-auto">
                            Subscribe to our newsletter to get the latest articles, tutorials, and insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-background border-custom text-foreground focus:outline-none focus:border-primary transition-colors"
                            />
                            <motion.button
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}