import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import Services from './Services';
import AppraisalCalculator from './AppraisalCalculator';
import Testimonials from './Testimonials';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <main>
            <Hero />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <FeaturedProperties />
            </motion.div>
            <AppraisalCalculator />

            {/* Why CBH Section */}
            <section id="about" className="py-24 bg-premium-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Cuidando tu patrimonio</span>
                                <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-8 uppercase tracking-tight">Nuestra Misión</h2>
                                <p className="text-xl text-blue-100 font-light leading-relaxed mb-10">
                                    "Brindar tranquilidad y seguridad a nuestros clientes en cada una de las operaciones inmobiliarias, encargándonos de cuidar su patrimonio de la manera más eficaz y profesional."
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-bold mb-2">+10</div>
                                        <div className="text-blue-300 text-sm tracking-wide uppercase">Años de experiencia</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold mb-2">100%</div>
                                        <div className="text-blue-300 text-sm tracking-wide uppercase">Certificados</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            whileInView={{ opacity: 1, scale: 0.95, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-b-8 border-r-8 border-blue-400/30">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                                    alt="Oficina Premium"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Services />
            <Testimonials />

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <motion.div
                    className="max-w-4xl mx-auto px-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-premium-blue mb-8">¿Listo para dar el siguiente paso?</h2>
                    <p className="text-xl text-slate-500 mb-12">Estamos listos para asesorarte en la venta, compra o renta de tu propiedad en Monterrey.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://wa.me/528116105555"
                            className="premium-gradient text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform w-full md:w-auto"
                        >
                            Hablar con un Asesor
                        </a>
                        <a
                            href="tel:8146678880"
                            className="bg-slate-100 text-premium-blue px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-colors w-full md:w-auto"
                        >
                            Llamar Ahora
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default LandingPage;
