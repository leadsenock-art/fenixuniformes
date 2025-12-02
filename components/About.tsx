import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-tactical-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-tactical-accent z-10"></div>
            <div className="relative z-0 overflow-hidden rounded-sm shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://picsum.photos/seed/police1/800/1000"
                alt="Fardamento Policial"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-display font-bold text-3xl text-white">FENIX</p>
                <p className="text-tactical-accent text-sm tracking-widest uppercase">Since 2024</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Target className="text-tactical-accent w-5 h-5" />
              <span className="text-tactical-accent font-bold uppercase tracking-widest text-xs">Sobre a Marca</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
              EXCELÊNCIA EM <br />
              <span className="text-slate-500">VESTUÁRIO TÁTICO</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
              Localizada em Feira de Santana – BA, a <strong className="text-white font-semibold">Fenix Uniforme</strong> é referência em fardamentos de alta performance. Entendemos que a rotina militar e policial exige mais do que apenas tecido: exige resistência, funcionalidade e uma apresentação impecável.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-tactical-gray p-3 rounded-sm">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Missão Tática</h4>
                  <p className="text-sm text-slate-400">Fornecer equipamentos que garantam a segurança e a confiança do operador em campo.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#contact" className="text-white border-b border-tactical-accent pb-1 hover:text-tactical-accent transition-colors uppercase text-sm tracking-widest">
                Conheça nossa história
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;