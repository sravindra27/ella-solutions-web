import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | ELLA Solutions</title>
                <meta name="description" content="Get in touch with ELLA Solutions for your web and mobile app development needs." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Let's Discuss Your Project</h1>
                            <p className="text-xl text-slate-600 mb-12">
                                Ready to take your digital presence to the next level? We're here to help you build something amazing.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600">hello@ellasolutions.com</p>
                                        <p className="text-slate-600">support@ellasolutions.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-violet-100 rounded-2xl text-violet-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600">+1 (555) 123-4567</p>
                                        <p className="text-slate-400">Mon - Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600">123 Innovation Dr, Suite 500</p>
                                        <p className="text-slate-400">Tech City, TC 90210</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl"
                        >
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <Send size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-blue-400 hover:text-blue-300 font-semibold">
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                            <input type="text" id="name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                            <input type="email" id="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                        <select id="subject" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors">
                                            <option>General Inquiry</option>
                                            <option>Website Project</option>
                                            <option>Mobile App Project</option>
                                            <option>Staffing Solutions</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                        <textarea id="message" rows="5" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin mr-2" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="ml-2 w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
