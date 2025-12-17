import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Meatintowns",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
        description: "A premium online meat delivery platform servicing multiple towns with real-time tracking.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://meatintowns.com"
    },
    {
        title: "Varahi Imports & Exports",
        category: "Corporate Website",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        description: "International trade portal showcasing products and facilitating global business connections.",
        tags: ["Next.js", "Tailwind CSS", "CMS"],
        link: "https://varahiimportsexports.com"
    },
    {
        title: "Let Me Help You",
        category: "Service Aggregator",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        description: "Connecting local service providers with customers in need of immediate assistance.",
        tags: ["React Native", "Firebase", "Google Maps API"],
        link: "https://letmehelpyou.in"
    }
];

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio | ELLA Solutions</title>
                <meta name="description" content="View our portfolio of successful projects including Meatintowns, Varahi Imports, and more." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Our Work</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            A selection of projects that demonstrate our capabilities and commitment to quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/30 transition-all hover:shadow-xl shadow-sm"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 backdrop-blur rounded-full text-slate-700 hover:bg-blue-600 hover:text-white transition-colors border border-slate-200">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{project.category}</div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors text-slate-900">{project.title}</h3>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 font-medium border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
