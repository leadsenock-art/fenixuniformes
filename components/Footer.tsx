import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0 text-slate-500">
          <span className="text-white font-bold uppercase tracking-wider">Fenix Uniforme</span> © {new Date().getFullYear()}. Todos os direitos reservados.
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-tactical-accent transition-colors">Política de Privacidade</a>
          <a href="#" className="text-slate-500 hover:text-tactical-accent transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;