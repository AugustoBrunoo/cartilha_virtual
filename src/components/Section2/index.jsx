import React from 'react';
import { Semaphore } from '../Semaphore';
import { AlertTabs } from '../AlertTabs';
import { BodyGame } from '../BodyGame';

export function Section2() {
  return (
    <section className="section section--alt" id="secao2">
      <div className="section-inner">
        <p className="section-eyebrow">Seção 2</p>
        <h2 className="section-title">Guia prático de proteção</h2>

        {/* 2.1 Corpo e limites */}
        <div className="block">
          <h3 className="block-title">Conhecendo o próprio corpo e estabelecendo limites</h3>
          <p className="block-lead"><strong>Nomear para proteger:</strong> ensinar o nome correto das partes do corpo (como vulva, pênis, ânus e nádegas) sem apelidos pejorativos ou tabus é o primeiro passo para a autoproteção. A clareza na linguagem permite que crianças e adolescentes consigam relatar com precisão qualquer desconforto ou agressão sofrida.</p>

          <BodyGame />
        </div>

        {/* 2.2 Semáforo */}
        <div className="block block--signature">
          <h3 className="block-title">O semáforo do consentimento e dos toques</h3>
          <p className="block-lead">Escolha um sinal para descobrir o que ele significa.</p>
          <Semaphore />
        </div>

        {/* 2.3 Sinais de alerta */}
        <div className="block">
          <h3 className="block-title">Identificando sinais de alerta</h3>
          <div className="notice-box">
            <strong>Aviso importante:</strong> os sinais abaixo são pontos de atenção e devem ser observados em conjunto, considerando mudanças repentinas no comportamento habitual do filho(a). A presença de um sinal isolado não significa um diagnóstico definitivo. Este é um guia informativo de proteção. Em caso de suspeita, procure orientação técnica especializada ou os canais de apoio.
          </div>
          <AlertTabs />
        </div>

        {/* 2.4 Alerta digital */}
        <div className="block">
          <h3 className="block-title">Alerta digital: orientações para o mundo virtual</h3>
          <div className="digital-card">
            <p><strong>O que é Aliciamento Digital (Grooming)?</strong> É a aproximação de adultos mal-intencionados que usam o ambiente virtual (jogos online, redes sociais) para ganhar a confiança de crianças e adolescentes com o objetivo de obter fotos íntimas ou extorquir a vítima.</p>
            <p className="digital-subtitle">Dicas de segurança e proteção online</p>
            <ol className="digital-list">
              <li><strong>Privacidade de perfis:</strong> mantenha as redes sociais restritas apenas a amigos conhecidos do mundo real.</li>
              <li><strong>Cuidado com fotos e dados:</strong> nunca envie fotos em trajes íntimos, com o uniforme da escola ou que mostrem a fachada da sua casa/endereço.</li>
              <li><strong>Desconfie de facilidades:</strong> promessas de presentes em jogos, propostas para carreira de modelo ou “oportunidades fáceis” oferecidas por desconhecidos são os principais caminhos de abordagem.</li>
              <li><strong>Respaldo legal:</strong> lembre-se de que a internet não é uma terra sem leis. A legislação brasileira prevê mecanismos de proteção à privacidade e responsabiliza qualquer violação de direitos de crianças e adolescentes no ambiente digital.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
