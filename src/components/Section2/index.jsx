import React from 'react';
import { Semaphore } from '../Semaphore';
import { AlertTabs } from '../AlertTabs';
import { BodyGame } from '../BodyGame';
import { DigitalAlert } from '../DigitalAlert';

export function Section2() {
  return (
    <section className="section section--alt" id="secao2">
      <div className="section-inner">
        <h2 className="section-title">Guia prático de proteção</h2>

        {/* 2.1 e 2.2 Corpo e Semáforo Unificados */}
        <div className="block block--signature">
          <div style={{ paddingBottom: '3.5em', marginBottom: '3.5em', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="numbered-title-group">
              <div className="acolhimento-badge" style={{ background: '#ffffff', color: 'var(--primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <span>1</span>
              </div>
              <h3 className="block-title">Conhecendo o próprio corpo e estabelecendo limites</h3>
            </div>
            <p className="block-lead"><strong>Nomear para proteger:</strong> ensinar o nome correto das partes do corpo (como vulva, pênis, ânus e nádegas) sem apelidos pejorativos ou tabus é o primeiro passo para a autoproteção. A clareza na linguagem permite que crianças e adolescentes consigam relatar com precisão qualquer desconforto ou agressão sofrida.</p>
            <BodyGame />
          </div>

          <div>
            <div className="numbered-title-group">
              <div className="acolhimento-badge" style={{ background: '#ffffff', color: 'var(--primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <span>2</span>
              </div>
              <h3 className="block-title">O semáforo do consentimento e dos toques</h3>
            </div>
            <p className="block-lead">Escolha um sinal para descobrir o que ele significa.</p>
            <Semaphore />
          </div>
        </div>

        {/* 2.3 Sinais de alerta */}
        <div className="block">
          <h3 className="block-title">Identificando sinais de alerta</h3>
          <div className="notice-box">
            <strong>Aviso importante:</strong> os sinais abaixo são pontos de atenção e devem ser observados em conjunto, considerando mudanças repentinas no comportamento habitual do filho(a). A presença de um sinal isolado não significa um diagnóstico definitivo. Este é um guia informativo de proteção. Em caso de suspeita, procure orientação técnica especializada ou os canais de apoio.
          </div>
          <AlertTabs />
        </div>

        {/* Divisória leve */}
        <div className="block-divider" role="separator" aria-hidden="true" />

        {/* 2.4 Alerta digital */}
        <div className="block">
          <h3 className="block-title">Alerta digital: orientações para o mundo virtual</h3>
          <DigitalAlert />
        </div>
      </div>
    </section>
  );
}
