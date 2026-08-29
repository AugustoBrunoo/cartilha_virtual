import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar" id="navbar">
      <a href="#hero" className="nav-brand">
        <Shield className="nav-brand-icon" size={20} color="#800020" />
        Proteção &amp; Diálogo
      </a>
      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} id="navLinks">
        <a href="#secao1" data-nav="secao1" onClick={() => setIsOpen(false)}>Entenda</a>
        <a href="#secao2" data-nav="secao2" onClick={() => setIsOpen(false)}>Guia Prático</a>
        <a href="#secao3" data-nav="secao3" onClick={() => setIsOpen(false)}>Rede de Apoio</a>
        <a href="#secao4" data-nav="secao4" onClick={() => setIsOpen(false)}>Canais &amp; Créditos</a>
      </nav>
      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`} 
        id="navToggle" 
        aria-label="Abrir menu" 
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span></span><span></span><span></span>
      </button>
    </header>
  );
}
