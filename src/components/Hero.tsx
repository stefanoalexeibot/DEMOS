import { Search, MapPin, Building2, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Placeholder */}
            <div className="absolute inset-0 opacity-60">
                <div className="w-full h-full bg-[url('/properties/residencia_apodaca.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase premium-gradient rounded-full shadow-xl">
                        Exclusividad y Confianza
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Tu Patrimonio en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                            Manos de Expertos
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
                        En CBH Bienes Raíces brindamos tranquilidad y seguridad en cada paso de tu proceso inmobiliario en Monterrey.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass p-2 rounded-2xl md:rounded-full shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2"
                >
                    <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                        <MapPin className="text-premium-light" size={20} />
                        <input
                            type="text"
                            placeholder="¿Dónde quieres vivir? (Ej. Apodaca, Escobedo)"
                            className="bg-transparent border-none outline-none w-full text-slate-700 placeholder:text-slate-400 text-sm"
                        />
                    </div>

                    <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                        <Building2 className="text-premium-light" size={20} />
                        <select className="bg-transparent border-none outline-none w-full text-slate-700 text-sm appearance-none">
                            <option>Tipo de Propiedad</option>
                            <option>Casa</option>
                            <option>Departamento</option>
                            <option>Terreno</option>
                            <option>Local / Bodega</option>
                        </select>
                    </div>

                    <div className="flex-1 w-full flex items-center gap-3 px-6 py-3">
                        <DollarSign className="text-premium-light" size={20} />
                        <select className="bg-transparent border-none outline-none w-full text-slate-700 text-sm appearance-none">
                            <option>Rango de Precio</option>
                            <option>Menos de $2M</option>
                            <option>$2M - $5M</option>
                            <option>$5M - $10M</option>
                            <option>Más de $10M</option>
                        </select>
                    </div>

                    <button className="w-full md:w-auto premium-gradient text-white px-10 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
                        <Search size={18} />
                        Buscar
                    </button>
                </motion.div>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default Hero;
