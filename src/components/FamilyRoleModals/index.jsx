import React, { useState, useEffect } from 'react';
import {
  HeartHandshake,
  MessageCircleHeart,
  X,
  CheckCircle2,
  MousePointerClick
} from 'lucide-react';

export function FamilyRoleModals() {
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
      id: 'family-benefits',
      badge: '✓ Benefícios',
      badgeClass: 'reading-badge--family',
      icon: HeartHandshake,
      iconClass: 'reading-icon--family',
      title: 'Benefícios no ambiente familiar',
      subtitle: 'O impacto positivo da educação em casa',
      summary: 'A educação sexual preventiva dentro de casa cria laços de confiança e prepara os jovens para uma vida segura.',
      items: [
        {
          title: 'Autoconhecimento e autoestima',
          desc: 'Ajuda crianças e adolescentes a compreenderem as transformações do próprio corpo com naturalidade, segurança e sem vergonha.'
        },
        {
          title: 'Prevenção de relacionamentos abusivos',
          desc: 'Ensina desde cedo o que é respeito mútuo, consentimento e reciprocidade, preparando jovens para identificar e rejeitar dinâmicas tóxicas ou abusivas no futuro.'
        },
        {
          title: 'Fortalecimento do vínculo familiar',
          desc: 'Transforma os pais e responsáveis na principal fonte de informação confiável, evitando que dúvidas sobre corpo e afetividade sejam sanadas na internet ou com fontes inadequadas.'
        },
        {
          title: 'Construção de autonomia e limites',
          desc: 'Desenvolve a capacidade de dizer “não” a pressões sociais, de pares ou de parceiros, fortalecendo a tomada de decisões conscientes.'
        }
      ],
      takeaway: 'Famílias que dialogam abertamente constroem uma base sólida de proteção e autonomia.'
    },
    {
      id: 'family-practice',
      badge: '★ Prática',
      badgeClass: 'reading-badge--family',
      icon: MessageCircleHeart,
      iconClass: 'reading-icon--family',
      title: 'Como praticar no cotidiano',
      subtitle: 'Atitudes diárias que fazem a diferença',
      summary: 'Pequenas ações diárias estabelecem uma cultura familiar baseada em confiança e respeito mútuo.',
      items: [
        {
          title: 'Naturalize as conversas',
          desc: 'Responda às dúvidas dos seus filhos com honestidade e de acordo com a idade, sem demonstrar tabu ou punir a curiosidade natural.'
        },
        {
          title: 'Valide emoções e sentimentos',
          desc: 'Ensine que todas as emoções são válidas e que ninguém deve aceitar desconforto para agradar aos outros.'
        },
        {
          title: 'Promova um ambiente de acolhimento',
          desc: 'Garanta que seu filho saiba que, independentemente do erro ou da dúvida, a família é um porto seguro para o qual ele sempre pode voltar.'
        }
      ],
      takeaway: 'A prevenção não precisa de um "grande momento": ela acontece nas conversas do dia a dia.'
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
              className={`reading-trigger-card reading-trigger-card--family`}
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
            className={`reading-modal-content reading-modal-content--family is-active`}
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
