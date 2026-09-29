import React from 'react';
import { AcolhimentoCard } from '../AcolhimentoCard';
import { FamilyRoleModals } from '../FamilyRoleModals';
import { SchoolRoleModals } from '../SchoolRoleModals';
import { ChecklistItem } from '../ChecklistItem';

export function Section3() {
  return (
    <section className="section" id="secao3">
      <div className="section-inner">
        <h2 className="section-title">Rede de apoio, família e escola</h2>

        <div className="block">
          <h3 className="block-title">O papel da família na educação sexual preventiva</h3>
          <p className="block-lead">
            A educação sexual preventiva começa em casa e vai muito além da prevenção de
            violências. Ela é uma ferramenta de desenvolvimento integral que ensina sobre respeito,
            responsabilidade, autoconhecimento e construção de vínculos saudáveis para toda a vida.
          </p>

          <div className="checklist-container" style={{ margin: '2.5rem 0', padding: '2rem', background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(157, 121, 103, 0.15)' }}>
            <h4 className="block-subtitle" style={{ marginTop: 0, color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Checklist familiar — como aplicar a prevenção na rotina</h4>
            <ul className="checklist">
              <ChecklistItem index={0}>
                <strong>Nomes reais para o corpo:</strong> nomeie as partes íntimas com clareza anatomicamente correta (sem apelidos pejorativos), permitindo relatos precisos caso algo aconteça.
              </ChecklistItem>
              <ChecklistItem index={1}>
                <strong>Respeite a vontade do seu filho:</strong> não force crianças ou adolescentes a abraçarem ou beijarem parentes/conhecidos contra a vontade. Ensine que o afeto é voluntário.
              </ChecklistItem>
              <ChecklistItem index={2}>
                <strong>Construa um ambiente de acolhimento:</strong> garanta que seu filho saiba que pode contar qualquer assunto sem medo de ser punido, julgado ou desacreditado.
              </ChecklistItem>
            </ul>
          </div>

          <div className="interaction-prompt" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--ink)' }}>
             <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Clique nos cartões abaixo para entender melhor como agir no dia a dia:</p>
          </div>

          <FamilyRoleModals />

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

          <SchoolRoleModals />
        </div>
      </div>
    </section>
  );
}
