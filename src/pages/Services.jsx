import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Smartphone, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "web-dev",
        title: "Website Development",
        icon: <Code className="w-8 h-8" />,
        description: "We build pixel-perfect, high-performance websites that captivate your audience. valid HTML/CSS, responsive design, and modern frameworks.",
        features: ["Custom Design & UI/UX", "React / Next.js Development", "SEO Optimization", "Performance Tuning"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
        color: "blue"
    },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        icon: <Smartphone className="w-8 h-8" />,
        description: "Native and cross-platform mobile applications that provide intuitive and engaging user experiences on iOS and Android.",
        features: ["iOS & Android Apps", "React Native / Flutter", "App Store Optimization", "User-Centric Design"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        color: "violet"
    },
    {
        id: "digital",
        title: "Digital Solutions",
        icon: <BarChart className="w-8 h-8" />,
        description: "Data-driven strategies to boost your online presence. From SEO to analytics, we help you make informed business decisions.",
        features: ["Search Engine Optimization", "Social Media Marketing", "Data Analytics", "Cloud Solutions"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        color: "emerald"
    },
    {
        id: "staffing",
        title: "Contract Stock & Staffing",
        icon: <Users className="w-8 h-8" />,
        description: "We provide skilled professionals to augment your team. Flexible staffing solutions to meet your project demands.",
        features: ["IT Staff Augmentation", "Project-Based Hiring", "Vetted Professionals", "Rapid Onboarding"],
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
        color: "amber"
    }
];

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | ELLA Solutions</title>
                <meta name="description" content="Explore our range of digital services including Web Development, Mobile Apps, and Digital Strategy." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen">
                {/* Header */}
                <div className="relative py-24 bg-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
                        >
                            Our <span className="text-blue-600">Expertise</span>
                        </motion.h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to elevate your business in the modern age.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="container mx-auto px-4 py-20 space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                        >
                            {/* Visual */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className={`absolute -inset-4 bg-gradient-to-r from-${service.color}-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-slate-100 text-${service.color}-600 mb-6`}>
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700">
                                            <CheckCircle className={`w-5 h-5 mr-3 text-${service.color}-600`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={`inline-flex items-center font-semibold text-${service.color}-600 hover:text-${service.color}-700 transition-colors`}
                                >
                                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">Ready to transform your business?</h2>
                        <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-block">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
