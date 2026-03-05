import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import LeadPipeline from './pages/admin/LeadPipeline';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import CustomCursor from './components/CustomCursor';
import { Mail, Phone, MapPin, Instagram, Facebook, Home } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <CustomCursor />

        <Routes>
          {/* Main Landing Route */}
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          } />

          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <DashboardLayout type="admin">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/properties" element={<div className="p-8 text-slate-300">Gestión de Propiedades próximamente...</div>} />
                <Route path="/leads" element={<LeadPipeline />} />
                <Route path="/settings" element={<div className="p-8 text-slate-300">Ajustes próximamente...</div>} />
              </Routes>
            </DashboardLayout>
          } />

          {/* Owner Routes */}
          <Route path="/owner/*" element={
            <DashboardLayout type="owner">
              <Routes>
                <Route path="/" element={<OwnerDashboard />} />
                <Route path="/stats" element={<div className="p-8 text-slate-300">Estadísticas detalladas próximamente...</div>} />
                <Route path="/help" element={<div className="p-8 text-slate-300">Soporte próximamente...</div>} />
              </Routes>
            </DashboardLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

const Footer = () => (
  <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 premium-gradient rounded flex items-center justify-center">
              <Home className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-premium-blue">CBH <span className="font-light">Bienes Raíces</span></span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Su inmobiliaria de confianza en Monterrey. Especialistas en gestoría legal, créditos y comercialización de inmuebles premium.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-premium-blue hover:bg-premium-blue hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-premium-blue hover:bg-premium-blue hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-premium-blue mb-6">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-500 text-sm">
              <Phone size={16} className="text-premium-light" />
              81 4667 8880
            </li>
            <li className="flex items-center gap-3 text-slate-500 text-sm">
              <Mail size={16} className="text-premium-light" />
              info@cbhbienesraices.com.mx
            </li>
            <li className="flex items-start gap-3 text-slate-500 text-sm">
              <MapPin size={16} className="text-premium-light mt-1 flex-shrink-0" />
              Monterrey, Nuevo León, México
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-premium-blue mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-premium-light">Aviso de Privacidad</a></li>
            <li><a href="#" className="hover:text-premium-light">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} CBH Bienes Raíces. Todos los derechos reservados. Desarrollado con Estilo Premium.
      </div>
    </div>
  </footer>
);

export default App;
