import React from 'react';

const defaultSteps = [
  {
    title: 'Escute com calma',
    description: 'Mantenha a postura acolhedora, sem demonstrar pânico ou julgamento.'
  },
  {
    title: 'Reafirme a inocência da vítima',
    description: 'Reforce que a responsabilidade pela proteção é do adulto e que a criança/adolescente não tem culpa.'
  },
  {
    title: 'Busque apoio técnico',
    description: 'Utilize a rede pública de proteção para os encaminhamentos necessários de saúde e suporte psicológico.'
  }
];

export function AcolhimentoCard({
  title = "Acolhimento em situações de risco ou suspeita",
  subtitle = "Caso uma linha de limite seja cruzada ou ocorra uma revelação",
  steps = defaultSteps,
  children
}) {
  return (
    <div className="acolhimento-card">
      {title && <h3 className="acolhimento-title">{title}</h3>}
      {subtitle && <p className="acolhimento-sub">{subtitle}</p>}

      {children ? (
        children
      ) : (
        <div className="acolhimento-list">
          {steps.map((step, index) => (
            <div className="acolhimento-item" key={index}>
              <div className="acolhimento-badge">
                <span>{index + 1}</span>
              </div>
              <div className="acolhimento-body">
                <h4 className="acolhimento-item-title">{step.title}</h4>
                <p className="acolhimento-item-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
