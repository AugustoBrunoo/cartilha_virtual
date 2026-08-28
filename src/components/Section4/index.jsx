import React from 'react';

export function Section4() {
  return (
    <>
  {/*  SEÇÃO 4  */}
  <section className="section section--emergency" id="secao4">
    <div className="section-inner">
      <p className="section-eyebrow section-eyebrow--light">Seção 4 · Bloco 1</p>
      <h2 className="section-title section-title--light">Canais de orientação, atendimento e denúncia</h2>
      <p className="section-lead section-lead--light">Guarde estes contatos. Em caso de dúvida, ligue — não é
        preciso ter certeza para pedir orientação.</p>

      <div className="channel-grid">
        <a href="tel:100" className="channel-card channel-card--magnetic" data-magnetic>
          <span className="channel-num">100</span>
          <span className="channel-name">Direitos Humanos</span>
          <span className="channel-desc">Nacional — gratuito, 24h e anônimo</span>
        </a>
        <a href="tel:190" className="channel-card channel-card--magnetic channel-card--red" data-magnetic>
          <span className="channel-num">190</span>
          <span className="channel-name">Polícia Militar</span>
          <span className="channel-desc">Casos de emergência ou flagrante</span>
        </a>
        <div className="channel-card channel-card--info">
          <span className="channel-name">Conselho Tutelar de Campo Grande</span>
          <span className="channel-desc">Telefone, e-mail e endereço local — consulte a unidade mais próxima</span>
          <button className="copy-btn" data-copy="Conselho Tutelar de Campo Grande">Copiar informações</button>
        </div>
        <div className="channel-card channel-card--info">
          <span className="channel-name">CREAS / CRAS Campo Grande</span>
          <span className="channel-desc">Telefones e endereços dos equipamentos de assistência social do território</span>
          <button className="copy-btn" data-copy="CREAS / CRAS Campo Grande">Copiar informações</button>
        </div>
        <div className="channel-card channel-card--info">
          <span className="channel-name">DPCA — Delegacia de Proteção à Criança e ao Adolescente</span>
          <span className="channel-desc">Informações de atendimento junto à unidade local</span>
          <button className="copy-btn" data-copy="DPCA — Delegacia de Proteção à Criança e ao Adolescente">Copiar informações</button>
        </div>
      </div>
      <span className="copy-toast" id="copyToast">Copiado!</span>
    </div>

    <div className="section-divider"><span></span></div>

    <div className="section-inner">
      <p className="section-eyebrow section-eyebrow--light">Seção 4 · Bloco 2</p>
      <h2 className="section-title section-title--light">Sobre a autora &amp; créditos do projeto</h2>

      <div className="author-card">
        <div className="author-badge">👩‍🏫</div>
        <div className="author-body">
          <p className="author-role">Pesquisadora, Pedagoga e Defensora da Proteção Infantil</p>
          <p className="author-bio">Graduanda em Pedagogia pela UniSão José e Master ESEPAS (Educação Sexual,
            Emocional e Prevenção ao Abuso Sexual). Atua como pesquisadora no Programa Jovens Cientistas
            Cariocas, desenvolvendo ações de conscientização e orientação preventiva voltadas a famílias,
            educadores e comunidades na Nave do Conhecimento de Campo Grande.</p>
          <p className="author-bio">Acredita que a proteção de crianças e adolescentes não acontece apenas com
            alertas, mas com informação, diálogo e consciência no dia a dia.</p>

          <div className="author-links">
            <span className="author-link">📩 Contato profissional: <em>[Seu E-mail]</em></span>
            <a className="author-link" href="https://instagram.com/brunaschagas" target="_blank" rel="noopener">📷 @brunaschagas</a>
            <span className="author-link">🌐 Portfólio / LinkedIn: <em>[Seu Link]</em></span>
          </div>

          <div className="badge-row">
            <span className="inst-badge">Jovens Cientistas Cariocas</span>
            <span className="inst-badge">Nave do Conhecimento · Campo Grande</span>
            <span className="inst-badge">UniSão José</span>
          </div>
        </div>
      </div>

      <p className="disclaimer">Este Web App é um recurso educativo e informativo fruto de pesquisa científica
        e não substitui o atendimento técnico dos órgãos de saúde, assistência social e segurança pública.</p>
    </div>
  </section>

    </>
  );
}
