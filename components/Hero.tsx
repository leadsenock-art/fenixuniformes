import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0">
      {/* Background with overlay & Vignette */}
      <div className="absolute inset-0 z-0">
        {/* Soft Radial Gradient for Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-tactical-accent/10 blur-[120px] rounded-full z-10 pointer-events-none"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark via-tactical-dark/80 to-tactical-dark/30 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
        
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://picsum.photos/seed/tactical7/1920/1080"
          alt="Tactical Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center md:text-left"
        >
          <motion.div variants={item} className="flex items-center justify-center md:justify-start space-x-3 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-tactical-accent animate-pulse"></span>
            <span className="text-tactical-accent font-bold tracking-[0.25em] uppercase text-xs md:text-sm bg-tactical-accent/10 px-4 py-1.5 rounded-full border border-tactical-accent/20">
              Fenix Militar & Uniforme
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-5xl md:text-7xl lg:text-9xl text-white leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
            UNIFORMES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-accent via-yellow-200 to-tactical-accent">
              PREMIUM
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed mx-auto md:mx-0">
            A fusão definitiva entre tecnologia têxtil e resistência operacional. 
            Soluções completas para forças de segurança que exigem o extraordinário.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#products"
              className="group relative px-10 py-5 bg-gradient-to-br from-tactical-accent to-yellow-600 text-black font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_35px_rgba(234,179,8,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <span className="relative flex items-center justify-center gap-2">
                Ver Catálogo <ChevronRight className="w-4 h-4" />
              </span>
            </a>
            
            <a
              href="https://wa.me/5571996534605"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white hover:text-tactical-accent font-bold uppercase tracking-widest transition-all duration-300 rounded-full text-center hover:border-tactical-accent/50 shadow-lg hover:-translate-y-1"
            >
              Fazer Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;