import React from 'react';
import { SplitCol } from '../SplitCol';
import { AcolhimentoCard } from '../AcolhimentoCard';
import { SchoolCard } from '../SchoolCard';

export function Section3() {
  return (
    <section className="section" id="secao3">
      <div className="section-inner">
        <p className="section-eyebrow">Seção 3</p>
        <h2 className="section-title">Rede de apoio, família e escola</h2>

        <div className="block">
          <h3 className="block-title">O papel da família na educação sexual preventiva</h3>
          <p className="block-lead">
            A educação sexual preventiva começa em casa e vai muito além da prevenção de
            violências. Ela é uma ferramenta de desenvolvimento integral que ensina sobre respeito,
            responsabilidade, autoconhecimento e construção de vínculos saudáveis para toda a vida.
          </p>

          <div className="split-grid">
            <SplitCol title="Benefícios no ambiente familiar" direction="left">
              <ul className="dot-list">
                <li>
                  <strong>Autoconhecimento e autoestima:</strong> ajuda crianças e adolescentes a
                  compreenderem as transformações do próprio corpo com naturalidade, segurança e sem
                  vergonha.
                </li>
                <li>
                  <strong>Prevenção de relacionamentos abusivos:</strong> ensina desde cedo o que é
                  respeito mútuo, consentimento e reciprocidade, preparando jovens para identificar e
                  rejeitar dinâmicas tóxicas ou abusivas no futuro.
                </li>
                <li>
                  <strong>Fortalecimento do vínculo familiar:</strong> transforma os pais e responsáveis na
                  principal fonte de informação confiável, evitando que dúvidas sobre corpo e afetividade
                  sejam sanadas na internet ou com fontes inadequadas.
                </li>
                <li>
                  <strong>Construção de autonomia e limites:</strong> desenvolve a capacidade de dizer
                  “não” a pressões sociais, de pares ou de parceiros, fortalecendo a tomada de decisões
                  conscientes.
                </li>
              </ul>
            </SplitCol>

            <SplitCol title="Como praticar no cotidiano" direction="right">
              <ul className="dot-list">
                <li>
                  <strong>Naturalize as conversas:</strong> responda às dúvidas dos seus filhos com
                  honestidade e de acordo com a idade, sem demonstrar tabu ou punir a curiosidade natural.
                </li>
                <li>
                  <strong>Valide emoções e sentimentos:</strong> ensine que todas as emoções são válidas e
                  que ninguém deve aceitar desconforto para agradar aos outros.
                </li>
                <li>
                  <strong>Promova um ambiente de acolhimento:</strong> garanta que seu filho saiba que,
                  independentemente do erro ou da dúvida, a família é um porto seguro para o qual ele sempre
                  pode voltar.
                </li>
              </ul>
            </SplitCol>
          </div>

          <AcolhimentoCard
            title="Acolhimento em situações de risco ou suspeita"
            subtitle="Caso uma linha de limite seja cruzada ou ocorra uma revelação"
          />
        </div>

        <div className="block">
          <h3 className="block-title">O papel da escola e dos profissionais da rede</h3>
          <p className="block-lead">
            A instituição escolar vai além do ensino acadêmico: é um espaço privilegiado
            para a promoção da saúde, do respeito às diferenças e da convivência comunitária. A educação
            preventiva na escola fortalece a autonomia dos estudantes e complementa o diálogo iniciado na
            família.
          </p>

          <div className="school-grid">
            <SchoolCard eyebrow="Ações práticas no ambiente escolar">
              <ul className="dot-list">
                <li>
                  <strong>Identificação precoce:</strong> educadores e equipes pedagógicas acompanham o
                  desenvolvimento diário e são fundamentais para notar mudanças súbitas de comportamento,
                  queda no rendimento ou sinais de isolamento.
                </li>
                <li>
                  <strong>Projetos pedagógicos preventivos:</strong> promoção de palestras, rodas de
                  conversa e atividades sobre respeito ao corpo, bullying, segurança digital e limites
                  interpessoais.
                </li>
                <li>
                  <strong>Canal seguro de escuta:</strong> a escola atua como um ponto de apoio em que
                  crianças e adolescentes encontram adultos de referência para tirar dúvidas ou pedir ajuda.
                </li>
              </ul>
            </SchoolCard>

            <SchoolCard eyebrow="Rede multiprofissional">
              <ul className="dot-list">
                <li>
                  <strong>Profissionais de saúde e psicologia:</strong> orientam sobre o desenvolvimento
                  biológico e emocional, oferecendo suporte preventivo para a saúde mental e acolhimento em
                  momentos de vulnerabilidade.
                </li>
                <li>
                  <strong>Assistência Social (CRAS/CREAS) e Conselho Tutelar:</strong> atuam no
                  fortalecimento das famílias e no acompanhamento de situações de risco, garantindo que os
                  direitos de crianças e adolescentes sejam integralmente respeitados no território.
                </li>
              </ul>
            </SchoolCard>
          </div>
        </div>
      </div>
    </section>
  );
}
