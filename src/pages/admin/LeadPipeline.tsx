import { motion } from 'framer-motion';
import {
    Plus,
    Search,
    ChevronDown,
    Filter,
    List,
    Columns,
    Phone,
    MessageCircle,
    MoreHorizontal
} from 'lucide-react';
import { useState } from 'react';

interface Lead {
    id: string;
    name: string;
    description: string;
    tags: string[];
    source: string;
    type: 'free' | 'pro';
    status: 'nuevo' | 'contactado' | 'activo' | 'futuro' | 'cerrado';
}

const LeadPipeline = () => {
    const [view, setView] = useState<'list' | 'pipeline'>('pipeline');

    const columns = [
        { id: 'nuevo', label: 'Nuevo', color: 'bg-slate-400', count: 124 },
        { id: 'contactado', label: 'Contactado', color: 'bg-purple-500', count: 86 },
        { id: 'activo', label: 'Activo', color: 'bg-emerald-400', count: 42 },
        { id: 'futuro', label: 'Futuro', color: 'bg-amber-400', count: 15 },
        { id: 'cerrado', label: 'Cerrado', color: 'bg-blue-500', count: 9 },
    ];

    const mockLeads: Lead[] = [
        {
            id: '1',
            name: 'EDUARDO LOPEZ TORRES',
            description: 'Inmobiliaria de Eduardo LOPEZ TORRES',
            tags: ['spanish', 'México', 'signup'],
            source: 'free',
            type: 'free',
            status: 'activo'
        },
        {
            id: '2',
            name: 'Abigail Yampolsky',
            description: 'Inmobiliaria de Abigail Yampolsky',
            tags: ['spanish', 'México', 'signup'],
            source: 'free',
            type: 'free',
            status: 'activo'
        },
        {
            id: '3',
            name: 'Moisés Catán',
            description: 'Interesado en Residencia Apodaca',
            tags: ['spanish', 'México'],
            source: 'whatsapp',
            type: 'pro',
            status: 'activo'
        },
        {
            id: '4',
            name: 'AMINE EL KACIMI',
            description: 'Inmobiliaria de Amine EL KACIMI',
            tags: ['spanish', 'México', 'signup'],
            source: 'free',
            type: 'free',
            status: 'nuevo'
        }
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* EB Style Sub-header */}
            <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-4 flex-1 max-w-4xl">
                    <button className="bg-[#2152ff] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                        <Plus size={18} /> Agregar
                    </button>

                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar por nombre, teléfono, etc."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all bg-slate-50/50"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        {['Estatus', 'Probabilidad', 'Asignado a'].map((filter) => (
                            <button key={filter} className="px-3 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50">
                                {filter} <ChevronDown size={14} />
                            </button>
                        ))}
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                            <Filter size={16} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl ml-8">
                    <button
                        onClick={() => setView('list')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all ${view === 'list' ? 'bg-white text-[#2152ff] shadow-sm' : 'text-slate-400'}`}
                    >
                        <List size={14} /> Lista
                    </button>
                    <button
                        onClick={() => setView('pipeline')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all ${view === 'pipeline' ? 'bg-white text-[#2152ff] shadow-sm' : 'text-slate-400'}`}
                    >
                        <Columns size={14} /> Pipeline
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 overflow-x-auto bg-slate-50/30 p-8">
                <div className="flex gap-6 min-w-max h-full">
                    {columns.map((col) => (
                        <div key={col.id} className="w-80 flex flex-col gap-6">
                            {/* Column Header */}
                            <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${col.color}`} />
                                    <h3 className="font-black text-premium-blue uppercase tracking-widest text-xs">{col.label}</h3>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{col.count}</span>
                            </div>

                            {/* Cards Container */}
                            <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
                                {mockLeads.filter(l => l.status === col.id).map((lead) => (
                                    <motion.div
                                        key={lead.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative"
                                    >
                                        <button className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal size={18} />
                                        </button>

                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-sm font-black text-premium-blue leading-tight pr-4">
                                                {lead.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 font-medium line-clamp-2">
                                                {lead.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 my-1">
                                                {lead.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] text-slate-400 font-black uppercase tracking-tighter hover:text-blue-500 cursor-default">
                                                        {tag},
                                                    </span>
                                                ))}
                                                <span className="text-[10px] text-blue-500 font-black uppercase tracking-tighter">
                                                    {lead.type}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-50">
                                                <div className="flex items-center gap-2">
                                                    <button className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                                                        <Phone size={14} />
                                                    </button>
                                                    <button className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors shadow-sm">
                                                        <MessageCircle size={14} />
                                                    </button>
                                                </div>
                                                <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white overflow-hidden shadow-sm">
                                                    <div className="w-full h-full bg-premium-gradient" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 hover:border-slate-300 hover:text-slate-500 transition-all flex items-center justify-center gap-2 text-xs font-bold">
                                    <Plus size={16} /> Nuevo Lead
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadPipeline;
