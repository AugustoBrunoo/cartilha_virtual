import React from 'react';

export function EmergencyModals() {
  return (
    <>
{/*  Emergency FAB  */}
<div className="fab-wrap">
  <button className="fab" id="fabBtn" aria-haspopup="dialog" aria-label="Canais de emergência">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4.5 8-11.8V5l-8-3-8 3v5.2C4 17.5 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.5 12.2l1.8 1.8 3.2-3.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>
  <span className="fab-label">Preciso de ajuda</span>
</div>

{/*  Emergency modal  */}
<div className="modal-overlay" id="emergencyModal" role="dialog" aria-modal="true" aria-labelledby="emergencyTitle">
  <div className="modal-card modal-card--emergency">
    <button className="modal-close" id="emergencyClose" aria-label="Fechar">✕</button>
    <h3 id="emergencyTitle">Canais de emergência</h3>
    <p>Se uma criança ou adolescente corre risco agora, ligue:</p>
    <div className="emergency-buttons">
      <a href="tel:100" className="tel-btn tel-btn--indigo">
        <span className="tel-num">100</span>
        <span className="tel-desc">Direitos Humanos — nacional, gratuito, 24h e anônimo</span>
      </a>
      <a href="tel:190" className="tel-btn tel-btn--red">
        <span className="tel-num">190</span>
        <span className="tel-desc">Polícia Militar — emergência ou flagrante</span>
      </a>
    </div>
    <a href="#secao4" className="modal-link" id="emergencySeeMore">Ver todos os canais de apoio →</a>
  </div>
</div>

{/*  Body-zone info modal  */}
<div className="modal-overlay" id="bodyModal" role="dialog" aria-modal="true" aria-labelledby="bodyModalTitle">
  <div className="modal-card">
    <button className="modal-close" id="bodyModalClose" aria-label="Fechar">✕</button>
    <h3 id="bodyModalTitle">Esta é uma área privada!</h3>
    <p>Ninguém pode tocar, olhar, fotografar ou pedir para você mostrar, exceto em situações de higiene e cuidados médicos acompanhados pelos pais.</p>
    <p className="modal-note">Seu corpo, suas fotos e sua intimidade pertencem apenas a você. Ninguém tem o direito de exigir exposição ou toques em troca de afeto, atenção, presentes ou popularidade.</p>
  </div>
</div>

    </>
  );
}
