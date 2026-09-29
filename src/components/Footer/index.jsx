import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoNave from '../../assets/logos/Logo-Nave-CG.png';
import logoJcc from '../../assets/logos/jcc.png';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-supported">
          <span className="footer-label">Apoiado por:</span>
          <div className="footer-logos">
            <a href="https://navedoconhecimento.rio/" target="_blank" rel="noopener noreferrer" className="footer-logo-link footer-logo-link--nave">
              <img src={logoNave} alt="Nave do Conhecimento Campo Grande" className="footer-logo-img" />
            </a>
            <span className="footer-logo-divider"></span>
            <a href="https://jovenscientistas.ciedseduca.org.br/" target="_blank" rel="noopener noreferrer" className="footer-logo-link footer-logo-link--jcc">
              <img src={logoJcc} alt="Jovens Cientistas Cariocas" className="footer-logo-img" />
            </a>
          </div>
        </div>

        <div className="footer-powered">
          <Link to="/referencias" className="footer-refs-link">
            Referências Bibliográficas
          </Link>
          
          <span className="footer-label" style={{ marginTop: '1.5rem' }}>Desenvolvido por</span>
          <a href="https://www.nodasolucoes.dev/" className="noda-brand-link group">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="noda-logo-svg">
              <defs>
                <linearGradient id="boltGradient" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="55%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#4338CA" />
                </linearGradient>
                <filter id="boltGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="1.8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect x="1" y="1" width="30" height="30" rx="9" fill="#0B0F19" stroke="rgba(148,163,184,0.16)" />
              <path d="M18.5 6L10 18h5.2l-1.7 8L22 13.5h-5.2L18.5 6z" fill="url(#boltGradient)"
                filter="url(#boltGlow)" className="noda-bolt" />
            </svg>
            <span className="noda-brand-text">Noda<span className="noda-brand-dot">.</span></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
