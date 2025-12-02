import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tactical-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-tactical-accent/10 border border-tactical-accent/20 mb-6">
                <span className="text-tactical-accent text-xs font-bold uppercase tracking-[0.2em]">Fale Conosco</span>
              </div>
              
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                VAMOS INICIAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-accent to-yellow-600">SUA MISSÃO</span>
              </h2>
              
              <p className="text-slate-400 mb-12 text-lg font-light max-w-md">
                Pronto para equipar sua equipe com o melhor? Nossa equipe está pronta para atender sua demanda.
              </p>

              <div className="space-y-6">
                <a href="tel:+557136141624" className="flex items-center space-x-6 group p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Telefone Fixo</h4>
                    <p className="text-xl text-white font-display tracking-wide group-hover:text-tactical-accent transition-colors">(71) 3614-1624</p>
                  </div>
                </a>

                <div className="flex items-center space-x-6 group p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Localização</h4>
                    <p className="text-lg text-white font-display tracking-wide">Feira de Santana – BA</p>
                  </div>
                </div>

                <a href="https://instagram.com/fenixuniforme01" target="_blank" rel="noreferrer" className="flex items-center space-x-6 group p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 group-hover:scale-110 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Siga-nos</h4>
                    <p className="text-lg text-white font-display tracking-wide group-hover:text-tactical-accent transition-colors">@fenixuniforme01</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/5571996534605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-green-500 hover:to-green-400 text-white pl-8 pr-6 py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-500/30 hover:-translate-y-1 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar no WhatsApp</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

            <div className="h-full min-h-[400px] relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
               <img 
                src="https://picsum.photos/seed/map/800/800?grayscale" 
                alt="Mapa Localização" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <p className="text-white font-bold mb-2">Visite nossa loja</p>
                    <p className="text-slate-300 text-sm mb-4">Confira de perto a qualidade dos nossos produtos.</p>
                    <div className="flex items-center text-tactical-accent text-xs font-bold uppercase tracking-widest gap-2">
                        Ver no Google Maps <ArrowRight className="w-3 h-3" />
                    </div>
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