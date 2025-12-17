import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | ELLA Solutions</title>
                <meta name="description" content="Learn about ELLA Solutions, our mission, vision, and the team driving digital excellence." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen">
                {/* Hero */}
                <div className="relative py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
                        >
                            We Are <span className="text-blue-600">ELLA Solutions</span>
                        </motion.h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            A team of passionate creators, engineers, and strategists dedicated to crafting exceptional digital experiences. We believe in the power of technology to transform businesses and lives.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Target className="w-8 h-8" />, title: "Our Mission", text: "To empower businesses with innovative digital solutions that drive real growth and tangible results." },
                            { icon: <Heart className="w-8 h-8" />, title: "Our Values", text: "Integrity, excellence, and a customer-first approach are at the heart of everything we do." },
                            { icon: <Award className="w-8 h-8" />, title: "Excellence", text: "We strive for perfection in every pixel and every line of code. Good enough is never enough." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all"
                            >
                                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team collaboration"
                                    className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Building the Future Together</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    At ELLA Solutions, we foster a culture of creativity and collaboration. Our diverse team brings together unique perspectives to solve complex challenges.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Whether it's a simple website or a complex enterprise application, we approach every project with the same level of dedication and enthusiasm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
