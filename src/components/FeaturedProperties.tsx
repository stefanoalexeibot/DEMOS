import { MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const properties = [
    {
        id: 1,
        title: "Residencia de Lujo en Apodaca",
        location: "Privada Exclusiva, Apodaca",
        price: "$4,500,000",
        beds: 3,
        baths: 2.5,
        sqft: "240 m²",
        tag: "Venta",
        image: "/properties/residencia_apodaca.png"
    },
    {
        id: 2,
        title: "Penthouse Vista Montaña",
        location: "Monterrey Centro",
        price: "$7,200,000",
        beds: 2,
        baths: 2,
        sqft: "180 m²",
        tag: "Venta",
        image: "/properties/penthouse.png"
    },
    {
        id: 3,
        title: "Casa Contemporánea en Escobedo",
        location: "Cerradas de Anáhuac, Escobedo",
        price: "$3,850,000",
        beds: 3,
        baths: 2,
        sqft: "210 m²",
        tag: "Venta",
        image: "/properties/casa_escobedo.png"
    }
];

const FeaturedProperties = () => {
    return (
        <section id="properties" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-premium-light font-bold tracking-widest uppercase text-xs">Portafolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-premium-blue mt-2">Propiedades Destacadas</h2>
                    </div>
                    <button className="group flex items-center gap-2 text-premium-blue font-bold hover:gap-3 transition-all underline underline-offset-8">
                        Ver todas las propiedades <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={prop.image}
                                    alt={prop.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="premium-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {prop.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
                                    <MapPin size={12} />
                                    {prop.location}
                                </div>
                                <h3 className="text-xl font-bold text-premium-blue mb-4 group-hover:text-premium-light transition-colors">
                                    {prop.title}
                                </h3>

                                <div className="flex justify-between items-center py-4 border-t border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center">
                                            <BedDouble size={16} className="text-slate-400 mb-1" />
                                            <span className="text-[10px] text-slate-500 font-medium">{prop.beds} Rec.</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Bath size={16} className="text-slate-400 mb-1" />
                                            <span className="text-[10px] text-slate-500 font-medium">{prop.baths} Baños</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Square size={16} className="text-slate-400 mb-1" />
                                            <span className="text-[10px] text-slate-500 font-medium">{prop.sqft}</span>
                                        </div>
                                    </div>
                                    <div className="text-lg font-black text-premium-blue">
                                        {prop.price}
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

export default FeaturedProperties;
