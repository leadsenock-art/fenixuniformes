import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-tactical-dark relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-tactical-card/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              ENTRE EM <span className="text-tactical-accent">CONTATO</span>
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              Pronto para equipar sua equipe com o melhor? Fale conosco agora mesmo ou visite nossa loja.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-tactical-card border border-white/10 rounded-sm">
                  <Phone className="w-6 h-6 text-tactical-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Telefone</h4>
                  <p className="text-xl text-white font-display tracking-wide">(71) 3614-1624</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-tactical-card border border-white/10 rounded-sm">
                  <MapPin className="w-6 h-6 text-tactical-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Localização</h4>
                  <p className="text-xl text-white font-display tracking-wide">Feira de Santana – BA</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-tactical-card border border-white/10 rounded-sm">
                  <Instagram className="w-6 h-6 text-tactical-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Instagram</h4>
                  <a href="https://instagram.com/fenixuniforme01" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-tactical-accent transition-colors font-display tracking-wide">
                    @fenixuniforme01
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-green-900/20">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-tactical-card p-1 rounded-sm border border-white/10">
            <div className="w-full h-[400px] bg-slate-800 rounded-sm relative overflow-hidden group">
               {/* Decorative Placeholder for Map */}
               <img 
                src="https://picsum.photos/seed/map/800/600?grayscale" 
                alt="Mapa Localização" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-tactical-accent text-black px-6 py-3 font-bold uppercase tracking-widest text-sm shadow-xl">
                    Ver no Google Maps
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;