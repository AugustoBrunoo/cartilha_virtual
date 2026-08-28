import React, { useState } from 'react';

export function Semaphore() {
  const [activeSignal, setActiveSignal] = useState('red');

  return (
    <div className="semaphore" data-semaphore>
      <div className="semaphore-panel">
        <button
          className={`semaphore-light semaphore-light--red ${activeSignal === 'red' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('red')}
          aria-label="Sinal vermelho — perigo"
        ></button>
        <button
          className={`semaphore-light semaphore-light--yellow ${activeSignal === 'yellow' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('yellow')}
          aria-label="Sinal amarelo — atenção"
        ></button>
        <button
          className={`semaphore-light semaphore-light--green ${activeSignal === 'green' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('green')}
          aria-label="Sinal verde — permitido"
        ></button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start', minHeight: '320px' }}>
        <div
          className="semaphore-display"
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'red' ? 1 : 0,
            transform: activeSignal === 'red' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'red' ? 'auto' : 'none',
            zIndex: activeSignal === 'red' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'red' ? 'visible' : 'hidden',
            height: '100%'
          }}
        >
          <span className="semaphore-badge semaphore-badge--red">🔴 Sinal Vermelho — Perigo</span>
          <h4>Toque inseguro / não permitido</h4>
          <p><strong>O que significa:</strong> toques que geram dor, medo, vergonha ou confusão.</p>
          <p><strong>Exemplos:</strong> pedidos de segredo sobre o próprio corpo, toques em partes íntimas, chantagens para mostrar o corpo ou solicitação de fotos íntimas.</p>
        </div>

        <div
          className="semaphore-display"
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'yellow' ? 1 : 0,
            transform: activeSignal === 'yellow' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'yellow' ? 'auto' : 'none',
            zIndex: activeSignal === 'yellow' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'yellow' ? 'visible' : 'hidden',
            height: '100%'
          }}
        >
          <span className="semaphore-badge semaphore-badge--yellow">🟡 Sinal Amarelo — Atenção</span>
          <h4>Respeite os limites</h4>
          <p><strong>O que significa:</strong> ações que parecem afeto, mas que causam desconforto quando ultrapassam a vontade da pessoa.</p>
          <p><strong>Exemplos:</strong> abraços forçados, cosquinhas em excesso que continuam após pedidos de “pare”, comentários invasivos sobre a aparência física ou abordagens persistentes de estranhos na internet.</p>
        </div>

        <div
          className="semaphore-display"
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'green' ? 1 : 0,
            transform: activeSignal === 'green' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'green' ? 'auto' : 'none',
            zIndex: activeSignal === 'green' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'green' ? 'visible' : 'hidden',
            height: '100%'
          }}
        >
          <span className="semaphore-badge semaphore-badge--green">🟢 Sinal Verde — Permitido</span>
          <h4>Toque seguro e saudável</h4>
          <p><strong>O que significa:</strong> demonstrações espontâneas e voluntárias de carinho e respeito mútuo.</p>
          <p><strong>Exemplos:</strong> aperto de mão, abraço e beijo respeitosos e consentidos, e procedimentos de saúde realizados por profissionais acompanhados de responsáveis legais.</p>
        </div>
      </div>
    </div>
  );
}
