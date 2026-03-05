import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Home, Settings, LogOut, Search, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

interface DashboardLayoutProps {
    children: ReactNode;
    type: 'admin' | 'owner';
}

const DashboardLayout = ({ children, type }: DashboardLayoutProps) => {
    const location = useLocation();

    const adminLinks = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Propiedades', href: '/admin/properties', icon: Home },
        { name: 'Contactos', href: '/admin/leads', icon: Users },
        { name: 'Ajustes', href: '/admin/settings', icon: Settings },
    ];

    const ownerLinks = [
        { name: 'Mi Propiedad', href: '/owner', icon: Home },
        { name: 'Estadísticas', href: '/owner/stats', icon: LayoutDashboard },
        { name: 'Soporte', href: '/owner/help', icon: Settings },
    ];

    const links = type === 'admin' ? adminLinks : ownerLinks;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-premium-blue text-white flex flex-col fixed h-full z-20 overflow-hidden">
                <div className="p-8">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 premium-gradient rounded flex items-center justify-center">
                            <Home className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold">CBH <span className="font-light">CRM</span></span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {links.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all font-medium text-sm",
                                    isActive
                                        ? "bg-white/10 text-white shadow-inner"
                                        : "text-blue-100/80 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <link.icon size={20} className={isActive ? "text-premium-light" : "text-blue-200/60"} />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <button className="flex items-center gap-4 px-4 py-3 w-full rounded-2xl text-blue-100/70 hover:text-white transition-colors font-medium text-sm">
                        <LogOut size={20} className="text-blue-300/40" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Wrapper */}
            <div className="flex-1 ml-64 flex flex-col">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
                    <div className="relative w-96 max-w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar leads, contratos..."
                            className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:border-premium-blue/20 transition-all font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-400 hover:text-premium-blue transition-colors">
                            <Bell size={22} />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="h-8 w-px bg-slate-200" />
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-sm font-bold text-premium-blue">Alexei Bot</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-premium-blue/60">Advisor</div>
                            </div>
                            <div className="w-10 h-10 rounded-full premium-gradient overflow-hidden border-2 border-slate-100 p-0.5">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-premium-blue font-black text-xs">AB</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
