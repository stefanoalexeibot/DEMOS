import React from 'react';
import { Gavel, ShieldCheck, BadgeDollarSign, HeartHandshake, FileText, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Asesoría Legal Inmobiliaria",
        description: "Acompañamiento jurídico profesional en cada contrato para garantizar tu seguridad patrimonial.",
        icon: Gavel,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Créditos Hipotecarios",
        description: "Gestión experta de créditos Infonavit y bancarios con las mejores tasas del mercado.",
        icon: BadgeDollarSign,
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        title: "Administración de Propiedades",
        description: "Cuidamos tu inversión como si fuera nuestra. Gestión eficiente de rentas y mantenimiento.",
        icon: LayoutDashboard,
        color: "bg-premium-accent text-premium-blue"
    },
    {
        title: "Estimación de Valor",
        description: "Realizamos valúos precisos para asegurar que tu propiedad se venda al mejor precio posible.",
        icon: FileText,
        color: "bg-slate-50 text-slate-600"
    },
    {
        title: "Trámites Notariales",
        description: "Apoyo integral en intestados, registro público y toda la gestión administrativa ante notario.",
        icon: ShieldCheck,
        color: "bg-blue-100 text-premium-blue"
    },
    {
        title: "Marketing Inmobiliario",
        description: "Posicionamos tu inmueble con fotografía profesional y estrategias digitales de alto impacto.",
        icon: HeartHandshake,
        color: "bg-sky-50 text-sky-600"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-premium-light font-bold tracking-widest uppercase text-xs">Excelencia en el Servicio</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-premium-blue mt-2 mb-6">Soluciones Integrales para tu Patrimonio</h2>
                    <p className="text-slate-500">
                        Más que una agencia inmobiliaria, somos tus aliados estratégicos. Cubrimos todas las etapas del proceso con profesionalismo y ética.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-premium-light/30 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-premium-blue mb-4">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
