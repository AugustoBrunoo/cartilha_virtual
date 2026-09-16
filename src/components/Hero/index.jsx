import React from 'react';

export function Hero() {
  return (
    <>
      {/*  HERO  */}
      <section className="hero" id="hero">
        <div className="hero-blob hero-blob--1" aria-hidden="true"></div>
        <div className="hero-blob hero-blob--2" aria-hidden="true"></div>
        <div className="hero-inner">
          <p className="eyebrow" data-reveal>Educação Sexual na Prática</p>
          <h1 className="hero-title" data-reveal>Proteção, Afeto e Diálogo: <span>o direito de crescer em segurança</span></h1>
          <div className="hero-text" data-reveal>
            <p>Bem-vindo(a)! Falar sobre corpo, sentimentos, limites e desenvolvimento com crianças e adolescentes não é apenas um ato educativo: é uma estratégia de amor, proteção e cuidado.</p>
            <p>Este guia foi desenvolvido para apoiar pais, mães, educadores e responsáveis na construção de um diálogo aberto e sem tabus.</p>
            <p>Nosso objetivo é transformar a informação em uma barreira de proteção para que nossos meninos e meninas cresçam conscientes de seus direitos, seguros e preparados para reconhecer e comunicar situações de risco em qualquer fase da vida.</p>
          </div>
          <a href="#secao1" className="btn btn--primary" data-reveal>Começar a leitura</a>
        </div>
      </section>

    </>
  );
}
