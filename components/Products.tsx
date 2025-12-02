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
    <section id="products" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="text-tactical-accent font-bold uppercase tracking-widest text-xs block mb-2">
              Arsenal Completo
            </span>
            <h2 className="font-display font-bold text-4xl text-white">
              NOSSOS PRODUTOS
            </h2>
          </div>
          <button className="text-slate-300 hover:text-white flex items-center gap-2 group transition-colors">
            Ver catálogo completo
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] overflow-hidden rounded-sm bg-tactical-card border border-white/5 hover:border-tactical-accent/50 transition-colors duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-tactical-accent text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {product.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">
                  {product.title}
                </h3>
                <div className="w-12 h-1 bg-tactical-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;