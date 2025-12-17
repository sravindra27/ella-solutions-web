import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Graphics */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-white mix-blend-overlay" />
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 border border-blue-600/20 rounded-full bg-blue-50 backdrop-blur-sm">
                        <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                            Premium Digital Agency
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        <span className="block text-slate-900">Transforming Ideas into</span>
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Digital Reality
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                        We design and develop world-class websites and mobile applications that set your business apart. Experience the difference of true craftsmanship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="px-8 py-4 rounded-full font-semibold text-lg text-slate-700 border border-slate-300 hover:bg-slate-100/50 hover:border-slate-400 transition-all flex items-center justify-center backdrop-blur-sm"
                        >
                            View Our Work
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    {/* Floating Visual Element on Right */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                            alt="Digital Dashboard"
                            className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-700"
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl animate-bounce-slow">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                    <ArrowRight size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs">Projects Completed</p>
                                    <p className="text-slate-900 font-bold text-xl">100+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
