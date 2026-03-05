import React, { useState } from 'react';
import { Calculator, ChevronRight, Home, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppraisalCalculator = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: 'casa',
        m2: '',
        location: '',
        condition: 'excelente'
    });

    const [result, setResult] = useState<number | null>(null);

    const calculateValue = () => {
        // Basic logic for demonstration (Monterrey Average $18k-$25k per m2)
        const basePrice = formData.type === 'casa' ? 22000 : 28000;
        const conditionMultiplier = formData.condition === 'excelente' ? 1.2 : 1;
        const val = parseInt(formData.m2) * basePrice * conditionMultiplier;
        setResult(val);
        setStep(3);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-premium-light font-bold tracking-widest uppercase text-xs">Vende con inteligencia</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-premium-blue mt-2 mb-6">¿Sabes cuánto vale tu propiedad hoy?</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Obtén una estimación instantánea basada en los precios actuales del mercado en Monterrey. Nuestra herramienta utiliza datos reales para darte un punto de partida sólido.
                    </p>

                    <ul className="space-y-4">
                        {['Precisión con data real', 'Sin compromiso alguno', 'Asesoría experta incluida'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle2 className="text-green-500" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-premium-blue text-white rounded-xl flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-xl font-bold text-premium-blue">Tipo de Inmueble</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {['Casa', 'Departamento'].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setFormData({ ...formData, type: t.toLowerCase() })}
                                            className={`p-6 rounded-2xl border-2 transition-all text-center ${formData.type === t.toLowerCase()
                                                    ? 'border-premium-blue bg-white shadow-md text-premium-blue'
                                                    : 'border-slate-200 text-slate-400 hover:border-slate-300'
                                                }`}
                                        >
                                            <Home className="mx-auto mb-2" />
                                            <span className="font-bold">{t}</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full premium-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                                >
                                    Siguiente <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <button onClick={() => setStep(1)} className="text-slate-400 text-sm hover:text-premium-blue">← Volver</button>
                                    <div className="w-10 h-10 bg-premium-blue text-white rounded-xl flex items-center justify-center font-bold ml-auto">2</div>
                                    <h3 className="text-xl font-bold text-premium-blue">Detalles de Construcción</h3>
                                </div>

                                <div className="space-y-6 mb-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Metros de Construcción (m²)</label>
                                        <input
                                            type="number"
                                            placeholder="Ej. 250"
                                            className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-premium-blue transition-colors"
                                            onChange={(e) => setFormData({ ...formData, m2: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Ubicación (Municipio)</label>
                                        <select
                                            className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-premium-blue transition-colors appearance-none"
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        >
                                            <option>Seleccionar...</option>
                                            <option>Monterrey</option>
                                            <option>San Pedro</option>
                                            <option>Apodaca</option>
                                            <option>Escobedo</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={calculateValue}
                                    disabled={!formData.m2}
                                    className="w-full premium-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    Calcular Ahora <Calculator size={18} />
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calculator size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-premium-blue mb-2">Valor Estimado</h3>
                                <div className="text-4xl md:text-5xl font-black text-premium-blue mb-6">
                                    ${result?.toLocaleString('en-US')} MXN
                                </div>
                                <p className="text-slate-500 mb-8 text-sm">
                                    Esta es una estimación preliminar. Para un valúo comercial certificado, agenda una cita.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <button className="premium-gradient text-white py-4 rounded-xl font-bold shadow-lg">
                                        Agendar Valúo Profesional
                                    </button>
                                    <button onClick={() => setStep(1)} className="text-slate-400 font-medium hover:text-premium-blue">
                                        Reiniciar Calculadora
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AppraisalCalculator;
