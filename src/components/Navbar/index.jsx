import React from 'react';
import { Shield } from 'lucide-react';

export function Navbar() {
  return (
    <>
{/*  Floating glass navbar  */}
<header className="navbar" id="navbar">
  <a href="#hero" className="nav-brand">
    <Shield className="nav-brand-icon" size={20} color="#800020" />
    Proteção &amp; Diálogo
  </a>
  <nav className="nav-links" id="navLinks">
    <a href="#secao1" data-nav="secao1">Entenda</a>
    <a href="#secao2" data-nav="secao2">Guia Prático</a>
    <a href="#secao3" data-nav="secao3">Rede de Apoio</a>
    <a href="#secao4" data-nav="secao4">Canais &amp; Créditos</a>
  </nav>
  <button className="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>

    </>
  );
}
