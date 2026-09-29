import React from 'react';
import { Hand, EyeOff, Smartphone, MessageCircle } from 'lucide-react';
import { ConceptModals } from '../ConceptModals';
import { FlipCard } from '../FlipCard';

import { TiltCard } from '../TiltCard';
import { SpotCard } from '../SpotCard';

export function Section1() {
  return (
    <>
      {/*  SEÇÃO 1  */}
      <section className="section" id="secao1">
        <div className="section-inner">
          <h2 className="section-title">O que você precisa saber sobre educação sexual preventiva</h2>

          {/*  1. Diferença fundamental  */}
          <div className="block" data-reveal-group>
            <blockquote className="pull-quote" data-reveal>
              “Educação sexual <strong>NÃO</strong> é sobre ato sexual.<br /> É sobre sexualidade, saúde e autoproteção.”
            </blockquote>

            <div className="compare-grid">
              <SpotCard
                title="Sexo"
                items={[
                  "Anatomia e órgãos genitais.",
                  "Aspectos biológicos.",
                  "Relação e ato sexual."
                ]}
              />

              <div className="compare-divider">
                <span className="compare-vs" aria-hidden="true">VS</span>
              </div>

              <SpotCard
                title="Sexualidade"
                isAccent={true}
                items={[
                  "Dimensão central e natural do ser humano.",
                  "Como a pessoa pensa, sente, age e interage.",
                  "Afeto, respeito, limites, intimidade e busca por bem-estar em todas as áreas."
                ]}
              />
            </div>
          </div>

          {/*  O que é e o que não é — Modais interativos  */}
          <div className="block">
            <h3 className="block-title">O que é — e o que não é</h3>
            <ConceptModals />
          </div>

          {/*  Formas de abuso  */}
          <div className="block">
            <h3 className="block-title">Formas de abuso, violência e contextos de risco</h3>
            <p className="block-lead"><strong>O que é Abuso Sexual Infantil e Juvenil?</strong> Toda ação que utiliza a
              vulnerabilidade de uma criança ou adolescente para fins sexuais, presencialmente ou por meios
              eletrônicos, caracterizando sempre uma relação desigual de poder e a exploração do desenvolvimento
              da vítima.</p>

            <div className="tilt-grid">
              <TiltCard
                icon={Hand}
                title="Abuso com contato físico"
                description="Toques em partes íntimas, beijos forçados, jogos sexuais ou qualquer prática física não consentida/inadequada."
              />
              <TiltCard
                icon={EyeOff}
                title="Abuso sem contato físico"
                description="Exposição à nudez ou pornografia, comentários de teor sexual, voyeurismo e solicitações para envio de fotos/vídeos despidos."
              />
              <TiltCard
                icon={Smartphone}
                title="Violência e exploração digital (Grooming)"
                description="Aliciamento online através de redes sociais, jogos virtuais e aplicativos de mensagens para chantagem, extorsão ou obtenção de arquivos íntimos."
              />
              <TiltCard
                icon={MessageCircle}
                title="Violência emocional e negligência"
                description="Ameaças, chantagens emocionais (“nosso segredinho”) e isolamento promovido pelo agressor para silenciar a vítima."
              />
            </div>

            <div className="digital-card" style={{ marginTop: '2.5em', padding: '2em' }}>
              <p className="digital-subtitle" style={{ marginTop: 0 }}>Contextos da Violência</p>
              <p style={{ marginBottom: '1.2em' }}>É fundamental entender que a violência pode ocorrer em diferentes ambientes:</p>
              <ul className="digital-list" style={{ listStyle: 'none', padding: 0 }}>
                <li><strong>Intrafamiliar:</strong> praticada por membros da própria família ou residentes da casa.</li>
                <li><strong>Extrafamiliar / Comunitário:</strong> por pessoas conhecidas, figuras de autoridade, líderes, cuidadores ou amigos da família.</li>
                <li><strong>Digital:</strong> no ambiente cibernético e redes sociais, muitas vezes por meio de perfis falsos ou aliciadores.</li>
              </ul>
            </div>
          </div>

          {/*  Mitos e realidades  */}
          <div className="block">
            <h3 className="block-title">Desmistificando a violência: mitos e realidades</h3>
            <p className="block-lead">Clique em cada card para revelar a realidade por trás do mito.</p>
            <div className="flip-grid">
              <FlipCard
                index={0}
                myth="Abusadores são estranhos e monstros facilmente identificáveis."
                reality={<>Cerca de <strong>85% a 90%</strong> dos abusadores são pessoas conhecidas e de confiança da família ou da vítima.</>}
              />
              <FlipCard
                index={1}
                myth="Só meninas sofrem abuso."
                reality={<>Meninos e meninas correm risco. Estima-se que <strong>1 em cada 3 a 4 meninas</strong> e <strong>1 em cada 6 a 10 meninos</strong> sofram algum tipo de violência sexual.</>}
              />
              <FlipCard
                index={2}
                myth="Adolescentes não sofrem abuso porque sabem se defender."
                reality="Adolescentes enfrentam altos riscos de abuso e manipulação, especialmente no contexto digital e por figuras de autoridade, tendo muitas vezes sua condição de vítima desvalorizada ou culpabilizada."
              />
              <FlipCard
                index={3}
                myth="Se não houve violência física, não é abuso."
                reality="Coerção psicológica, chantagem, exposição e manipulação online são formas graves de abuso sexual e geram profundos impactos emocionais."
              />
            </div>
          </div>

          {/*  Pilares do consentimento  */}
          <div className="block">
            <h3 className="block-title">Consentimento, limites e prevenção no dia a dia</h3>
            <p className="block-subtitle">Os pilares do consentimento e dos limites do corpo</p>
            <ol className="pillar-list">
              <li><span className="pillar-num">1</span><div><strong>Idade e capacidade:</strong> A idade mínima de consentimento é 14 anos (conforme o Código Penal). Mesmo após essa idade, é necessário avaliar a maturidade emocional e psicológica do adolescente para compreender as consequências de suas escolhas.</div></li>
              <li><span className="pillar-num">2</span><div><strong>Autonomia e liberdade:</strong> O consentimento deve ser dado explicitamente, sem coerção, manipulação, chantagem, intimidação ou desigualdade de autoridade.</div></li>
              <li><span className="pillar-num">3</span><div><strong>Contínuo:</strong> O consentimento não é algo que, uma vez dado, permanece para sempre. Não é autorização permanente. Pode ser revogado a qualquer momento ao longo do ato por qualquer uma das partes.</div></li>
            </ol>


          </div>
        </div>
      </section>

    </>
  );
}
