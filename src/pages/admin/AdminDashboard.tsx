import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Home, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-premium-blue">Panel del Asesor</h1>
                    <p className="text-slate-500 mt-1">Bienvenido de nuevo, CBH Team.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-premium-blue shadow-sm hover:bg-slate-50 transition-colors">
                        Descargar Reportes
                    </button>
                    <button className="premium-gradient text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
                        + Nueva Propiedad
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { label: 'Leads Activos', value: '42', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Propiedades', value: '18', change: '0%', icon: Home, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                    { label: 'Vistas Totales', value: '1.2k', change: '+18%', icon: BarChart3, color: 'text-sky-600', bg: 'bg-sky-50' },
                    { label: 'Visitas Pendientes', value: '7', change: '-2', icon: LayoutDashboard, color: 'text-premium-light', bg: 'bg-blue-50' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-slate-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="text-2xl font-black text-premium-blue">{stat.value}</div>
                        <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Placeholder */}
            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Properties Table */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="font-bold text-premium-blue text-lg">Propiedades Recientes</h3>
                        <button className="text-premium-light text-xs font-black uppercase tracking-widest hover:underline">Ver todas</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                <tr>
                                    <th className="px-6 py-4">Propiedad</th>
                                    <th className="px-6 py-4">Estatus</th>
                                    <th className="px-6 py-4">Precio</th>
                                    <th className="px-6 py-4">Vistas</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { name: 'Penthouse Vista Montaña', status: 'Exclusiva', price: '$7.2M', views: '342' },
                                    { name: 'Casa Contemporánea Escobedo', status: 'Activa', price: '$3.8M', views: '128' },
                                    { name: 'Residencia Apodaca', status: 'Vendido', price: '$4.5M', views: '521' },
                                ].map((p, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-bold text-premium-blue">{p.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${p.status === 'Vendido' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                                }`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-500">{p.price}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-400">{p.views}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <h3 className="font-bold text-premium-blue text-lg mb-6">Actividad de Leads</h3>
                    <div className="space-y-6">
                        {[
                            { user: 'Juan Pérez', action: 'solicitó información', target: 'Penthouse', time: 'hace 5m', type: 'info' },
                            { user: 'María Garza', action: 'agendó una visita para', target: 'Casa Escobedo', time: 'hace 2h', type: 'visit' },
                            { user: 'Roberto Treviño', action: 'descargó la ficha de', target: 'Residencia Apodaca', time: 'hace 4h', type: 'download' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-xs text-premium-blue">
                                    {item.user[0]}
                                </div>
                                <div>
                                    <p className="text-xs leading-relaxed">
                                        <span className="font-bold text-premium-blue">{item.user}</span> {item.action} <span className="font-bold text-slate-700">{item.target}</span>
                                    </p>
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 rounded-xl border border-slate-100 text-xs font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-colors">
                        Ver todo el historial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
