import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  X,
  CheckCircle2,
  XCircle,
  Sparkles,
  MousePointerClick
} from 'lucide-react';

export function ConceptModals() {
  const [activeModal, setActiveModal] = useState(null); // 'positive', 'negative', or null

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
      id: 'positive',
      badge: '✓ O que É',
      badgeClass: 'reading-badge--positive',
      icon: ShieldCheck,
      iconClass: 'reading-icon--positive',
      title: 'Educação Sexual Preventiva',
      subtitle: 'Pilares essenciais de proteção e afeto',
      summary: 'É um aprendizado contínuo que ensina crianças e jovens a reconhecerem seus limites e valorizarem o próprio corpo.',
      items: [
        {
          title: 'Anatomia e Linguagem Clara',
          desc: 'Nomear as partes do corpo pelos nomes corretos, eliminando tabus e apelidos confusos que dificultam revelações ou pedidos de ajuda.'
        },
        {
          title: 'Noção de Privacidade e Limites',
          desc: 'Ensinar o que são partes íntimas, quem pode ou não tocá-las e que o corpo da criança é um território pessoal inviolável.'
        },
        {
          title: 'Capacidade de Dizer “NÃO”',
          desc: 'Desenvolver a coragem de rejeitar toques desconfortáveis, beijos forçados e desconfiar de pedidos de “segredinhos”, mesmo de familiares.'
        },
        {
          title: 'Pontes Seguras de Diálogo',
          desc: 'Garantir que a criança saiba exatamente a quem recorrer sem medo de castigo, repressão, vergonha ou culpa.'
        }
      ],
      takeaway: 'Educação sexual preventiva preserva a infância e blinda a criança contra violências.'
    },
    {
      id: 'negative',
      badge: '✕ O que NÃO É',
      badgeClass: 'reading-badge--negative',
      icon: ShieldAlert,
      iconClass: 'reading-icon--negative',
      title: 'Desmistificando os Medos',
      subtitle: 'O que jamais faz parte da prevenção',
      summary: 'Muitos receios nascem de desinformação. A prevenção nunca antecipa fases da vida e não invade a intimidade.',
      items: [
        {
          title: 'NÃO é Erotização Precoce',
          desc: 'Jamais ensina atos sexuais ou estimula a curiosidade adulta. O objetivo é exclusivamente autoproteção, saúde e respeito mútuo.'
        },
        {
          title: 'NÃO Expõe a Conteúdos Adultos',
          desc: 'Toda informação respeita rigorosamente a faixa etária, a maturidade cognitiva e a sensibilidade natural de cada fase da infância.'
        },
        {
          title: 'NÃO Substitui a Família',
          desc: 'Pelo contrário: fortalece a autoridade protetiva dos pais e cuidadores, incentivando que a família seja o primeiro porto seguro.'
        },
        {
          title: 'NÃO Quebra a Inocência',
          desc: 'Quem destrói a inocência é o abusador através do silêncio e da manipulação. O conhecimento preventivo atua como escudo protetor.'
        }
      ],
      takeaway: 'Não falar sobre o tema não afasta o perigo: apenas deixa a criança desprotegida.'
    }
  ];

  return (
    <div className="reading-block">
      <p className="block-lead">
        Clique em cada card para abrir os detalhes e entender a diferença na prática.
      </p>

      <div className="reading-grid">
        {cardsData.map((card) => {
          const IconComp = card.icon;
          return (
            <button
              key={card.id}
              className={`reading-trigger-card reading-trigger-card--${card.id}`}
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

      {/* Modal Overlay */}
      <div 
        className={`reading-modal-overlay ${activeModal ? 'is-active' : ''}`}
        onClick={closeModal}
        aria-hidden={!activeModal}
      >
        {cardsData.map((card) => {
          const isActive = activeModal === card.id;
          if (!isActive) return null;

          const IconComp = card.icon;
          
          return (
            <div 
              key={`modal-${card.id}`}
              className={`reading-modal-content reading-modal-content--${card.id} ${isActive ? 'is-active' : ''}`}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button 
                className="reading-modal-close" 
                onClick={closeModal}
                aria-label="Fechar"
              >
                <X size={24} />
              </button>

              <div className="reading-modal-header">
                <div className={`reading-icon-box ${card.iconClass}`}>
                  <IconComp size={40} />
                </div>
                <div>
                  <span className={`reading-badge ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                  <h3 className="reading-modal-title">{card.title}</h3>
                  <p className="reading-modal-subtitle">{card.subtitle}</p>
                </div>
              </div>

              <p className="reading-modal-summary">{card.summary}</p>

              <div className="reading-modal-body">
                {card.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="reading-modal-item">
                    <div className="reading-modal-icon">
                      {card.id === 'positive' ? (
                        <CheckCircle2 size={20} />
                      ) : (
                        <XCircle size={20} />
                      )}
                    </div>
                    <div>
                      <h4 className="reading-modal-item-title">{item.title}</h4>
                      <p className="reading-modal-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reading-modal-footer">
                <Sparkles size={20} />
                <p>{card.takeaway}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
