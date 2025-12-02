import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark via-tactical-dark/70 to-tactical-dark/40 z-10" />
        <img
          src="https://picsum.photos/seed/tactical7/1920/1080"
          alt="Tactical Background"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="flex items-center space-x-4 mb-6">
            <div className="h-[2px] w-12 bg-tactical-accent" />
            <span className="text-tactical-accent font-bold tracking-[0.3em] uppercase text-sm">
              Fenix Militar & Uniforme
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            UNIFORMES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-accent to-white">
              TÁTICOS PROFISSIONAIS
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-light border-l-4 border-tactical-gray pl-6">
            Qualidade, durabilidade e conforto para quem vive a rotina da segurança pública. 
            Soluções completas para forças policiais e guardas municipais.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="group relative px-8 py-4 bg-tactical-accent text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
              <span className="relative flex items-center gap-2">
                Ver Catálogo <ChevronRight className="w-4 h-4" />
              </span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-600 hover:border-tactical-accent text-white hover:text-tactical-accent font-bold uppercase tracking-wider transition-all duration-300 rounded-sm"
            >
              Fazer Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-10 hidden md:block z-20">
        <div className="flex flex-col items-end space-y-2 opacity-50">
          <span className="h-[1px] w-20 bg-white"></span>
          <span className="text-xs tracking-widest uppercase">Feira de Santana - BA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;