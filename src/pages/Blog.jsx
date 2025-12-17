import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
    {
        title: "The Future of Web Development: 2025 Trends",
        excerpt: "Explore the emerging technologies and design trends that will shape the web in the coming year.",
        date: "Dec 15, 2024",
        author: "Sarah Jenkins",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Why Your Business Needs a Native Mobile App",
        excerpt: "Discover the benefits of native mobile applications and how they improve user engagement and retention.",
        date: "Dec 10, 2024",
        author: "Mike Ross",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Optimizing for Core Web Vitals",
        excerpt: "A comprehensive guide to improving your website's performance and search engine ranking.",
        date: "Dec 05, 2024",
        author: "Alex Chen",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
];

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog | ELLA Solutions</title>
                <meta name="description" content="Latest insights and articles on web development, mobile apps, and digital strategy." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Insights</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Thoughts, updates, and best practices from our team of experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/30 transition-all hover:-translate-y-1 group hover:shadow-xl shadow-sm"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 mb-4 text-xs text-slate-500">
                                        <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                                        <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 text-slate-900">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                                        Read More <ArrowRight size={16} className="ml-1" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
