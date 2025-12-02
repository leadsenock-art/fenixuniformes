import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-tactical-dark min-h-screen text-slate-200 selection:bg-tactical-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;