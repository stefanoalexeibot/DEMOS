import { motion } from 'framer-motion';
import { ShieldCheck, Clock, TrendingUp, HelpCircle } from 'lucide-react';

const OwnerDashboard = () => {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-premium-blue">Portal de Propietario</h1>
                    <p className="text-slate-500 mt-1">Estatus de tu propiedad: **Penthouse Vista Montaña**</p>
                </div>
                <button className="bg-premium-blue text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                    <HelpCircle size={18} /> Contactar Asesor
                </button>
            </div>

            {/* Timeline Placeholder */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 mb-8">
                <h3 className="font-bold text-premium-blue mb-8">Progreso de Venta</h3>
                <div className="flex items-center justify-between relative max-w-4xl mx-auto">
                    {/* Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
                    <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-premium-light -translate-y-1/2" />

                    {[
                        { label: 'Publicada', done: true },
                        { label: 'Visitas', done: false },
                        { label: 'Oferta', done: false },
                        { label: 'Cierre', done: false },
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step.done ? 'bg-premium-light text-white shadow-lg' : 'bg-white border-2 border-slate-100 text-slate-300'}`}>
                                {step.done ? <ShieldCheck size={20} /> : i + 1}
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-widest ${step.done ? 'text-premium-blue' : 'text-slate-400'}`}>{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Marketing Tracker */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                    <h3 className="font-bold text-premium-blue text-lg mb-6">Actividades de Marketing</h3>
                    <div className="space-y-6">
                        {[
                            { title: 'Fotografía Profesional y Video con Drone', date: 'Completado el 15 Feb', status: 'done' },
                            { title: 'Publicación en Portales Premium (Inmuebles24, Lamudi)', date: 'Completado el 16 Feb', status: 'done' },
                            { title: 'Campaña en Redes Sociales (Facebook/Instagram Ads)', date: 'En curso (Semana 2)', status: 'active' },
                            { title: 'Open House para Brokers Exclusivos', date: 'Programado para 15 Mar', status: 'coming' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-premium-blue/10 transition-colors">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.status === 'done' ? 'bg-green-50 text-green-500' :
                                        item.status === 'active' ? 'bg-blue-50 text-blue-500' : 'bg-slate-50 text-slate-300'
                                    }`}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-premium-blue">{item.title}</h4>
                                    <p className="text-xs text-slate-400 font-medium">{item.date}</p>
                                </div>
                                <div className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'done' ? 'text-green-500' :
                                        item.status === 'active' ? 'text-blue-500' : 'text-slate-300'
                                    }`}>
                                    {item.status === 'done' ? 'Listo' : item.status === 'active' ? 'Activo' : 'Próximo'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Insights */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                    <h3 className="font-bold text-premium-blue text-lg mb-6">Métricas del Mercado</h3>
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                                <span>Interés en Zona</span>
                                <span className="text-premium-light">Muy Alto</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    className="h-full premium-gradient"
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-premium-blue">342</div>
                                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Vistas totales</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-premium-blue">12 días</div>
                                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">En el mercado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-12 py-3 bg-premium-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-blue-900/10">
                        Ver Reporte Detallado
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
