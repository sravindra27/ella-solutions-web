import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                                ELLA Solutions
                            </span>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Building exceptional digital experiences. We craft high-performance websites and mobile apps that drive business growth.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Website Development</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Mobile App Development</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Digital Solutions</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Contract Staffing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Our Work</Link></li>
                            <li><Link to="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Insights</Link></li>
                            <li><Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-blue-600 mt-0.5 shrink-0" />
                                <span className="text-slate-600 text-sm">123 Innovation Dr,<br />Tech City, TC 90210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <span className="text-slate-600 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <span className="text-slate-600 text-sm">hello@ellasolutions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center bg-slate-50">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} ELLA Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
