import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Qualidade Premium",
    description: "Tecidos de alta tecnologia que suportam a abrasão e o desgaste do dia a dia operacional."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Durabilidade",
    description: "Costuras reforçadas e acabamento de elite para garantir longevidade ao uniforme."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Conforto Tático",
    description: "Modelagem anatômica que permite total liberdade de movimento em situações críticas."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Pronto Para Ação",
    description: "Design inteligente com bolsos estratégicos e tecnologia de secagem rápida."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-tactical-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <span className="text-tactical-accent font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs block mb-3 md:mb-4">
            Diferenciais Fenix
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
            PADRÃO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">QUALIDADE SUPERIOR</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Cada detalhe é projetado para superar as expectativas dos profissionais mais exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 hover:border-tactical-accent/30 hover:bg-white/[0.06] transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center mb-6 md:mb-8 shadow-inner group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-shadow duration-500">
                <div className="text-white group-hover:text-tactical-accent transition-colors duration-300 drop-shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3 md:mb-4 uppercase font-display tracking-wide">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;