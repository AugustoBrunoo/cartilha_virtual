import React from 'react';
import { AcolhimentoCard } from '../AcolhimentoCard';
import { FamilyRoleModals } from '../FamilyRoleModals';
import { SchoolRoleModals } from '../SchoolRoleModals';

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
