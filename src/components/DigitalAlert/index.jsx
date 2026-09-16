import React from 'react';
import { AlertTriangle, ShieldCheck, Image as ImageIcon, Gift, Scale } from 'lucide-react';

export function DigitalAlert() {
  return (
    <div className="digital-alert-wrapper">
      <div className="grooming-balloon">
        <div className="grooming-icon-ring">
          <AlertTriangle size={32} strokeWidth={2.5} className="grooming-icon" />
        </div>
        <div className="grooming-content">
          <h4 className="grooming-title">O que é Aliciamento Digital (Grooming)?</h4>
          <p className="grooming-text">
            É a aproximação de adultos mal-intencionados que usam o ambiente virtual (jogos online, redes sociais) 
            para ganhar a confiança de crianças e adolescentes com o objetivo de obter fotos íntimas ou extorquir a vítima.
          </p>
        </div>
      </div>

      <div className="digital-tips-section">
        <h4 className="digital-tips-title">Dicas de segurança e proteção online</h4>
        <div className="digital-tips-grid">
          
          <div className="digital-tip-card">
            <div className="tip-icon-box tip-icon-box--green"><ShieldCheck size={24} /></div>
            <div>
              <h5 className="tip-title">Privacidade de perfis</h5>
              <p className="tip-desc">Mantenha as redes sociais restritas apenas a amigos conhecidos do mundo real.</p>
            </div>
          </div>

          <div className="digital-tip-card">
            <div className="tip-icon-box tip-icon-box--red"><ImageIcon size={24} /></div>
            <div>
              <h5 className="tip-title">Cuidado com fotos e dados</h5>
              <p className="tip-desc">Nunca envie fotos em trajes íntimos, com o uniforme da escola ou que mostrem a fachada da sua casa/endereço.</p>
            </div>
          </div>

          <div className="digital-tip-card">
            <div className="tip-icon-box tip-icon-box--amber"><Gift size={24} /></div>
            <div>
              <h5 className="tip-title">Desconfie de facilidades</h5>
              <p className="tip-desc">Promessas de presentes em jogos, propostas para carreira de modelo ou “oportunidades fáceis” são caminhos de abordagem.</p>
            </div>
          </div>

          <div className="digital-tip-card">
            <div className="tip-icon-box tip-icon-box--primary"><Scale size={24} /></div>
            <div>
              <h5 className="tip-title">Respaldo legal</h5>
              <p className="tip-desc">A internet não é uma terra sem leis. A legislação brasileira responsabiliza qualquer violação de direitos no ambiente digital.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
