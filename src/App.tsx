/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardCheck,
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Target,
  Eye,
  Rocket
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
          <img src="/logo.png" alt="Cuidora logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-2xl font-bold text-primary-dark tracking-tight">Cuidora</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#proposito" className="hover:text-primary transition-colors">Propósito</a>
        <a href="#mision" className="hover:text-primary transition-colors">Misión</a>
        <a href="#vision" className="hover:text-primary transition-colors">Visión</a>
        <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
          Comenzar ahora
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse delay-700" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-dark rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Red de Cuidado Confiable
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
          Cuidar es complejo, <span className="text-primary">Cuidora</span> Cuida contigo.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Nuestro propósito es apoyar el trabajo de y entre quienes cuidan, ayudándoles a registrar, organizar y seguir sus acciones de manera confiable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all shadow-xl flex items-center justify-center gap-2 group">
            Únete a la red <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-all flex items-center justify-center">
            Saber más
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="/hero-care.jpg"
            alt="Cuidado familiar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-primary/10">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <ShieldCheck size={28} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Confiable</p>
            <p className="text-xs text-gray-500">Tecnología para el cuidado</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center text-primary mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const InfoSection = () => (
  <section id="proposito" className="py-24 bg-primary-light/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Tejiendo una red de cuidado</h2>
        <p className="text-lg text-gray-600">
          A través de Cuidora se teje una red de cuidado, se registran las rutinas diarias y se optimiza la planificación del cuidado de tu familiar.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={ClipboardCheck}
          title="Registro Diario"
          description="Registra las rutinas y acciones diarias de manera clara y organizada."
        />
        <FeatureCard 
          icon={Calendar}
          title="Planificación"
          description="Facilita la planificación del cuidado combinando tecnología y practicidad."
        />
        <FeatureCard 
          icon={Users}
          title="Coordinación"
          description="Articula el cuidado haciendo que la coordinación sea más práctica y confiable"
        />
      </div>
    </div>
  </section>
);

const MissionVision = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary-dark text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Target size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Rocket size={20} />
            </div>
            <h3 id="mision" className="text-2xl font-bold uppercase tracking-widest">Misión</h3>
          </div>
          <p className="text-xl leading-relaxed font-light">
            Ofrecer una plataforma que registre, organice y simplifique el seguimiento del cuidado, conectando a quienes cuidan mediante tecnología práctica, profesional, confiable e intuitiva.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-primary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Eye size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Eye size={20} />
            </div>
            <h3 id="vision" className="text-2xl font-bold uppercase tracking-widest">Visión</h3>
          </div>
          <p className="text-xl leading-relaxed font-light">
            Ser la herramienta digital que transforme la forma en que se articula el cuidado, haciendo posible que sea práctico, profesional y confiable para quienes cuidan.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Purpose = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-primary/5 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="w-20 h-20 bg-primary-light rounded-3xl flex items-center justify-center text-primary mb-8">
            <Target size={40} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Propósito</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Ayudar a quienes cuidan y a las personas que reciben cuidados a organizar, registrar y seguir el cuidado, simplificando el trabajo conjunto de manera confiable.
          </p>
          <ul className="space-y-4">
            {[
              "Tecnología práctica y profesional",
              "Conexión entre cuidadores",
              "Seguimiento confiable",
              "Fácil de usar"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img 
            src="/care-1.jpg"
            alt="Cuidadora acompañando adulto mayor"
            className="rounded-2xl shadow-md w-full aspect-square object-cover"
          />
          <img 
            src="/care-2.jpg"
            alt="Familia cuidando adulto mayor"
            className="rounded-2xl shadow-md w-full aspect-square object-cover mt-8"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-primary/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Cuidora logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-primary-dark">Cuidora</span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Combinando tecnología y practicidad desde la experiencia de quienes cuidan para articular el cuidado de manera práctica y organizada.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Enlaces</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#proposito" className="hover:text-primary transition-colors">Propósito</a></li>
            <li><a href="#mision" className="hover:text-primary transition-colors">Misión</a></li>
            <li><a href="#vision" className="hover:text-primary transition-colors">Visión</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Contacto</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li>info@cuidora.com</li>
            <li>+1 (555) 000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Cuidora. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacidad</a>
          <a href="#" className="hover:text-primary">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <Purpose />
        <MissionVision />
        
        <section className="py-24 bg-primary-dark text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          </div>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-8">¿Listo para transformar el cuidado?</h2>
            <p className="text-xl text-primary-light/80 mb-10">
              Únete a nuestra red y descubre cómo la tecnología puede hacer tu labor más clara, confiable y organizada.
            </p>
            <button className="bg-white text-primary-dark px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-light transition-all shadow-2xl flex items-center justify-center gap-2 mx-auto group">
              Empezar ahora <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
