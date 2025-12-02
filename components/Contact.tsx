import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-tactical-accent/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-tactical-accent/10 border border-tactical-accent/20 mb-4 md:mb-6">
                <span className="text-tactical-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Fale Conosco</span>
              </div>
              
              <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">
                VAMOS INICIAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-accent to-yellow-600">SUA MISSÃO</span>
              </h2>
              
              <p className="text-slate-400 mb-8 md:mb-12 text-base md:text-lg font-light max-w-md">
                Pronto para equipar sua equipe com o melhor? Nossa equipe está pronta para atender sua demanda.
              </p>

              <div className="space-y-4 md:space-y-6">
                <a href="tel:+557136141624" className="flex items-center space-x-4 md:space-x-6 group p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Telefone Fixo</h4>
                    <p className="text-lg md:text-xl text-white font-display tracking-wide group-hover:text-tactical-accent transition-colors">(71) 3614-1624</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 md:space-x-6 group p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 transition-all duration-300">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Localização</h4>
                    <p className="text-base md:text-lg text-white font-display tracking-wide">Feira de Santana – BA</p>
                  </div>
                </div>

                <a href="https://instagram.com/fenixuniforme01" target="_blank" rel="noreferrer" className="flex items-center space-x-4 md:space-x-6 group p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tactical-card flex items-center justify-center border border-white/10 group-hover:border-tactical-accent/50 group-hover:scale-110 transition-all duration-300">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-tactical-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Siga-nos</h4>
                    <p className="text-base md:text-lg text-white font-display tracking-wide group-hover:text-tactical-accent transition-colors">@fenixuniforme01</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 md:mt-12">
                <a 
                  href="https://wa.me/5571996534605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto gap-4 bg-gradient-to-r from-green-600 to-green-500 hover:to-green-400 text-white pl-8 pr-6 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-500/30 hover:-translate-y-1 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar no WhatsApp</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

            <div className="h-[300px] md:h-full md:min-h-[400px] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
               <img 
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop" 
                alt="Mapa Localização Estilizado" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl">
                    <p className="text-white font-bold mb-2">Visite nossa loja</p>
                    <p className="text-slate-300 text-xs md:text-sm mb-4">Confira de perto a qualidade dos nossos produtos.</p>
                    <div className="flex items-center text-tactical-accent text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2">
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