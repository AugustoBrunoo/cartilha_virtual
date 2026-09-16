import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  X,
  CheckCircle2,
  MousePointerClick
} from 'lucide-react';

export function SchoolRoleModals() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const cardsData = [
    {
      id: 'school-actions',
      badge: '✓ Ações Práticas',
      badgeClass: 'reading-badge--school',
      icon: GraduationCap,
      iconClass: 'reading-icon--school',
      title: 'Ações práticas no ambiente escolar',
      subtitle: 'O dia a dia da prevenção na escola',
      summary: 'A instituição escolar vai além do ensino acadêmico: é um espaço privilegiado para a promoção da saúde e do respeito.',
      items: [
        {
          title: 'Identificação precoce',
          desc: 'Educadores e equipes pedagógicas acompanham o desenvolvimento diário e são fundamentais para notar mudanças súbitas de comportamento, queda no rendimento ou sinais de isolamento.'
        },
        {
          title: 'Projetos pedagógicos preventivos',
          desc: 'Promoção de palestras, rodas de conversa e atividades sobre respeito ao corpo, bullying, segurança digital e limites interpessoais.'
        },
        {
          title: 'Canal seguro de escuta',
          desc: 'A escola atua como um ponto de apoio em que crianças e adolescentes encontram adultos de referência para tirar dúvidas ou pedir ajuda.'
        }
      ],
      takeaway: 'A educação preventiva na escola fortalece a autonomia e complementa o diálogo familiar.'
    },
    {
      id: 'school-network',
      badge: '★ Rede de Apoio',
      badgeClass: 'reading-badge--school',
      icon: Users,
      iconClass: 'reading-icon--school',
      title: 'Rede multiprofissional',
      subtitle: 'A união de forças para proteger',
      summary: 'Garantir a segurança e o acolhimento exige uma rede integrada de diferentes áreas de atuação.',
      items: [
        {
          title: 'Profissionais de saúde e psicologia',
          desc: 'Orientam sobre o desenvolvimento biológico e emocional, oferecendo suporte preventivo para a saúde mental e acolhimento em momentos de vulnerabilidade.'
        },
        {
          title: 'Assistência Social (CRAS/CREAS) e Conselho Tutelar',
          desc: 'Atuam no fortalecimento das famílias e no acompanhamento de situações de risco, garantindo que os direitos de crianças e adolescentes sejam integralmente respeitados no território.'
        }
      ],
      takeaway: 'A proteção integral depende de uma rede articulada, onde cada profissional faz a sua parte.'
    }
  ];

  return (
    <div className="reading-block">
      <div className="reading-grid">
        {cardsData.map((card) => {
          const IconComp = card.icon;
          return (
            <button
              key={card.id}
              className={`reading-trigger-card reading-trigger-card--school`}
              onClick={() => openModal(card.id)}
              aria-label={`Abrir detalhes sobre ${card.title}`}
            >
              <div className="reading-trigger-header">
                <span className={`reading-badge ${card.badgeClass}`}>
                  {card.badge}
                </span>
                <span className="reading-hint-pill">
                  <MousePointerClick size={14} /> Clique para ler
                </span>
              </div>
              <div className="reading-trigger-content">
                <div className={`reading-icon-box ${card.iconClass}`}>
                  <IconComp size={32} />
                </div>
                <div className="reading-trigger-text">
                  <h4 className="reading-card-title">{card.title}</h4>
                  <p className="reading-card-subtitle">{card.subtitle}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeModal && (
        <div className="reading-modal-overlay is-active" onClick={closeModal}>
          <div
            className={`reading-modal-content reading-modal-content--school is-active`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="reading-modal-close"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {cardsData.filter(c => c.id === activeModal).map(card => {
              const IconComp = card.icon;
              return (
                <div key={card.id}>
                  <div className="reading-modal-header">
                    <div className={`reading-icon-box ${card.iconClass}`}>
                      <IconComp size={32} />
                    </div>
                    <div>
                      <h3 className="reading-modal-title">{card.title}</h3>
                      <p className="reading-modal-subtitle">{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="reading-modal-summary">{card.summary}</p>

                  <div className="reading-modal-body">
                    {card.items.map((item, idx) => (
                      <div className="reading-modal-item" key={idx}>
                        <CheckCircle2 size={22} className="reading-modal-icon" strokeWidth={2.5} />
                        <div>
                          <h4 className="reading-modal-item-title">{item.title}</h4>
                          <p className="reading-modal-item-desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="reading-modal-footer">
                    <p>{card.takeaway}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
