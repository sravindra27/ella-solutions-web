import { motion } from 'framer-motion';

const QualityStatement = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        "We build the same quality websites for our clients that you see here."
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        This website is our promise. A testament to our commitment to excellence, performance, and design.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default QualityStatement;
