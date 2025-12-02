import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Fardamento Militar',
    category: 'Alta Resistência',
    image: 'https://picsum.photos/seed/camo1/600/800',
  },
  {
    id: 2,
    title: 'Acessórios Táticos',
    category: 'Equipamentos',
    image: 'https://picsum.photos/seed/tacticalvest/600/800',
  },
  {
    id: 3,
    title: 'Uniformes Profissionais',
    category: 'Corporativo',
    image: 'https://picsum.photos/seed/uniform2/600/800',
  },
  {
    id: 4,
    title: 'Camisas Operacionais',
    category: 'Conforto & Ação',
    image: 'https://picsum.photos/seed/tshirtop/600/800',
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <span className="text-tactical-accent font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs block mb-3 md:mb-4 px-3 py-1 bg-tactical-accent/10 border border-tactical-accent/20 rounded-full w-fit">
              Arsenal Completo
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
              LINHA <span className="text-slate-500">OPERACIONAL</span>
            </h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/10 hover:border-tactical-accent/50 text-slate-300 hover:text-white flex items-center gap-3 group transition-all duration-300 hover:bg-white/5 w-full md:w-auto justify-between md:justify-start">
            <span className="text-xs font-bold uppercase tracking-widest">Catálogo Completo</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-tactical-accent group-hover:text-black transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[380px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-tactical-card/50 border border-white/5 hover:border-tactical-accent/40 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-tactical-accent/20 border border-tactical-accent/30 text-tactical-accent text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 backdrop-blur-sm">
                    {product.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase leading-none mb-3 md:mb-4 group-hover:text-tactical-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <div className="h-px w-full bg-white/20 mt-2 md:mt-4 overflow-hidden relative">
                     <div className="absolute inset-0 bg-tactical-accent w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;