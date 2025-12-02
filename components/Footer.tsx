import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <img src="https://i.imgur.com/oqaGxkZ.png" alt="Fenix Logo" className="h-12 w-auto mb-6 opacity-80 hover:opacity-100 transition-all duration-500 mx-auto md:mx-0" />
             <div className="text-slate-600 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider">Fenix Uniforme</span> © {new Date().getFullYear()}. Todos os direitos reservados.
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors uppercase tracking-widest font-medium">Privacidade</a>
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors uppercase tracking-widest font-medium">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;