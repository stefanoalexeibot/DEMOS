import { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Propiedades', href: '#properties' },
        { name: 'Servicios', href: '#services' },
        { name: 'Nosotros', href: '#about' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center shadow-lg">
                        <Home className="text-white w-6 h-6" />
                    </div>
                    <span className={cn(
                        "text-xl font-bold tracking-tight",
                        isScrolled ? "text-premium-blue" : "text-white"
                    )}>
                        CBH <span className="font-light">Bienes Raíces</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-premium-light",
                                isScrolled ? "text-slate-600" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/528116105555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        <Phone size={16} />
                        Contactar
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-premium-blue"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-premium-blue" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 glass border-t animate-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="premium-gradient text-white py-3 rounded-xl font-bold">
                            Contactar Ahora
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
