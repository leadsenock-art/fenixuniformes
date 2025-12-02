import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Qualidade Profissional",
    description: "Tecidos de alta tecnologia que suportam a abrasão e o desgaste do dia a dia operacional."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Durabilidade Extrema",
    description: "Costuras reforçadas e acabamento premium para garantir longevidade ao uniforme."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Conforto Operacional",
    description: "Modelagem anatômica que permite total liberdade de movimento em situações críticas."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Pronto Para Uso",
    description: "Design tático inteligente, com bolsos estratégicos e secagem rápida."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-tactical-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-tactical-accent font-bold uppercase tracking-widest text-xs block mb-4">
            Por que escolher a Fenix?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
            PADRÃO DE QUALIDADE SUPERIOR
          </h2>
          <p className="text-slate-400">
            Cada peça é desenvolvida pensando na realidade dos profissionais de segurança pública da Bahia e do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-tactical-dark p-8 rounded-sm border border-white/5 hover:border-tactical-accent/30 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black rounded-sm flex items-center justify-center mb-6 group-hover:bg-tactical-accent transition-colors duration-300">
                <div className="text-tactical-accent group-hover:text-black transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3 uppercase font-display">
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