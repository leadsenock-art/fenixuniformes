import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-tactical-dark relative overflow-hidden">
      {/* Subtle textured background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Image Side - Floating Organic Shape */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-tactical-accent/20 blur-[80px] rounded-full transform scale-75"></div>
            
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black border border-white/5">
              <img
                src="https://picsum.photos/seed/police1/800/1000"
                alt="Fardamento Policial"
                className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/90 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <p className="font-display font-bold text-2xl text-white">FENIX</p>
                  <p className="text-tactical-accent text-xs tracking-[0.2em] uppercase font-semibold">Qualidade Superior</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-tactical-accent flex items-center justify-center text-black">
                  <Star className="w-5 h-5 fill-current" />
                </div>
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
            <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Target className="text-tactical-accent w-4 h-4" />
              <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Sobre a Marca</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1]">
              EXCELÊNCIA EM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-accent to-yellow-600">VESTUÁRIO TÁTICO</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
              Localizada em Feira de Santana – BA, a <strong className="text-white font-semibold">Fenix Uniforme</strong> redefine o padrão de fardamentos. 
              Nossa filosofia une design ergonômico e resistência militar, criando equipamentos que impõem respeito e garantem performance.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-tactical-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Missão Tática</h4>
                  <p className="text-sm text-slate-500">Equipamentos que garantem a segurança e a confiança do operador.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block text-white hover:text-tactical-accent transition-all duration-300 uppercase text-xs font-bold tracking-[0.2em] border-b border-tactical-accent/30 hover:border-tactical-accent pb-1">
              Conheça nossa história
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;