import { motion } from 'framer-motion';
import { Code, Smartphone, BarChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Code size={32} />,
        title: "Website Development",
        description: "Custom, high-performance websites tailored to your brand.",
        color: "text-blue-600",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile App Development",
        description: "Native and cross-platform apps that engaging users on the go.",
        color: "text-violet-600",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: <BarChart size={32} />,
        title: "Digital Solutions",
        description: "SEO, analytics, and automation to streamline operations.",
        color: "text-emerald-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: <Users size={32} />,
        title: "Contract Staffing",
        description: "Connecting you with top-tier talent for your projects.",
        color: "text-amber-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
];

const ServiceHighlights = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Comprehensive solutions designed to scale with your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Card Image Header */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute bottom-4 left-4 ${service.color} bg-white/90 p-2 rounded-lg z-20 shadow-lg`}>
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                                    Learn more <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlights;
