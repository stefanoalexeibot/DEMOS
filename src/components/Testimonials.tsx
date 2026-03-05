import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "Inversionista",
        text: "Excelente servicio de CBH. Me ayudaron a encontrar la bodega ideal para mi negocio en tiempo récord y con una asesoría legal impecable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Ana María Garza",
        role: "Propietaria",
        text: "Vendí mi casa en Apodaca en menos de un mes. El marketing digital que manejan hizo toda la diferencia. Profesionales de principio a fin.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Roberto Treviño",
        role: "Cliente de Renta",
        text: "La atención personalizada y la rapidez para los trámites me sorprendieron. El equipo de CBH realmente conoce el mercado de Monterrey.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-premium-light font-bold tracking-widest uppercase text-xs">Testimonios</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-premium-blue mt-2">Lo que dicen nuestros clientes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-xl transition-all"
                        >
                            <Quote className="absolute top-10 right-10 text-slate-100 group-hover:text-blue-50 transition-colors" size={60} />

                            <div className="relative z-10">
                                <p className="text-slate-600 italic leading-relaxed mb-8">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-premium-blue/10" />
                                    <div>
                                        <h4 className="font-bold text-premium-blue">{t.name}</h4>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
