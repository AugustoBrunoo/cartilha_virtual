import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, Info, ShieldAlert, CheckCircle, Scale, Eye, GraduationCap } from 'lucide-react';
import './References.css';

export default function References() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.ref-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const referencesData = [
    {
      title: 'Conceitos Fundamentais, Sexo e Sexualidade',
      subtitle: '(Seção 1.1)',
      icon: <Info size={28} />,
      items: [
        'EGYPTO, A. Educação sexual na escola: alternativas teóricas e práticas. São Paulo: Olho d\'Água, 2003.',
        'FIGUEIRÓ, M. N. D. Educação sexual: como ensinar no espaço escolar. Londrina: UEL, 2018.',
        'ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS). Orientações técnicas internacionais sobre educação em sexualidade: uma abordagem fundamentada em evidências. Paris: UNESCO/OMS, 2017.',
        'UNESCO. Orientação técnica internacional de educação em sexualidade: uma abordagem informada por evidências. Brasília: UNESCO, 2019.'
      ]
    },
    {
      title: 'Definição de Abuso, Tipos e Contextos',
      subtitle: '(Seção 1.2)',
      icon: <ShieldAlert size={28} />,
      items: [
        'ABRAPIA. Maus-tratos contra crianças e adolescentes: proteção e prevenção. Rio de Janeiro: ABRAPIA, 2002.',
        'ANCIÃES, A.; AGULHAS, R. Abuso sexual de crianças e adolescentes: prevenção, avaliação e intervenção. Lisboa: Pactor, 2022.',
        'BRASIL. Lei nº 13.431, de 4 de abril de 2017. Estabelece o sistema de garantia de direitos da criança e do adolescente vítima ou testemunha de violência. Brasília, DF: Presidência da República, 2017.',
        'BRASIL. Ministério da Mulher, da Família e dos Direitos Humanos. Guia de prevenção ao abuso e exploração sexual de crianças e adolescentes. Brasília, DF: MFDH, 2021.',
        'FORTES, L. Proteção à infância e formas de violência. São Paulo: Cortez, 2015.',
        'LIMA, M. R. Violência e exploração sexual na infância e adolescência: aspectos conceituais e práticos. Rio de Janeiro: LTC, 2019.',
        'RANGEL, M. Abuso sexual infantil: aspectos jurídicos e sociais. São Paulo: Saraiva, 2009.',
        'SANDERSON, C. Counseling adult survivors of child sexual abuse. 3. ed. London: Jessica Kingsley Publishers, 2005.'
      ]
    },
    {
      title: 'Mitos e Realidades sobre a Violência Sexual',
      subtitle: '(Seção 1.3)',
      icon: <CheckCircle size={28} />,
      items: [
        'BRASIL. Ministério da Saúde. Linha de cuidado para atenção integral à saúde de crianças, adolescentes e suas famílias em situação de violências. Brasília, DF: Ministério da Saúde, 2021.',
        'CHILDFUND BRASIL. Mapeamento dos fatores de vulnerabilidade de adolescentes brasileiros na internet. [S. I.]: ChildFund Brasil, 2025.',
        'DISQUE 100 / SITE CHILDHOOD BRASIL. Relatório de denúncias de violações de direitos humanos contra crianças e adolescentes. São Paulo: Instituto Childhood, 2021.',
        'FÓRUM BRASILEIRO DE SEGURANÇA PÚBLICA (FBSP). Anuário Brasileiro de Segurança Pública. São Paulo: FBSP, 2021.'
      ]
    },
    {
      title: 'Pilares do Consentimento e Legislação',
      subtitle: '(Seção 1.4)',
      icon: <Scale size={28} />,
      items: [
        'BRASIL. Decreto-Lei nº 2.848, de 7 de dezembro de 1940. Código Penal (Art. 217-A - Estupro de Vulnerável). Brasília, DF: Presidência da República, 1940.',
        'BRASIL. Lei nº 8.069, de 13 de julho de 1990. Dispõe sobre o Estatuto da Criança e do Adolescente (ECA). Brasília, DF: Presidência da República, 1990.'
      ]
    },
    {
      title: 'Identificação de Sinais de Alerta',
      subtitle: '(Seção 2.3 - Físicos, Cognitivos e Emocionais)',
      icon: <Eye size={28} />,
      items: [
        'ABRAPIA. Atenção aos sinais de violência na infância e adolescência. Rio de Janeiro: ABRAPIA, 2002.',
        'ANCIÃES, A.; AGULHAS, R. Sinais e sintomas do abuso sexual infantil. Lisboa: Pactor, 2022.',
        'LEINER, S. Sinais físicos e emocionais do abuso na infância. São Paulo: Atheneu, 2007.',
        'ROVINSKI, S. L. R.; PELISOLI, C. Avaliação psicológica de crianças e adolescentes vítimas de violência. Porto Alegre: Artmed, 2019.',
        'SANDERSON, C. Indicadores de trauma e impacto psicológico do abuso infantil. London: Jessica Kingsley Publishers, 2005.',
        'SILVA, L. M. Violência sexual contra crianças e adolescentes: identificação e intervenção na saúde. São Paulo: Hucitec, 2013.'
      ]
    },
    {
      title: 'Formação Técnica de Referência',
      subtitle: 'Acompanhamento de Projetos',
      icon: <GraduationCap size={28} />,
      items: [
        'ROCHA, Leiliane. Metodologia ESEPAS: Educação Sexual, Emocional e Prevenção ao Abuso Sexual Infantil e Juvenil. Formação Master ESEPAS, 2024.'
      ]
    }
  ];

  return (
    <div className="references-page" ref={containerRef}>
      <div className="ref-nav-bar">
        <div className="ref-nav-inner">
          <Link to="/" className="ref-back-link">
            <ChevronLeft size={20} /> Voltar para o Guia
          </Link>
        </div>
      </div>
      
      <header className="ref-header">
        <div className="ref-header-bg"></div>
        <div className="ref-header-content">
          <div className="ref-icon-wrapper">
            <BookOpen size={42} />
          </div>
          <h1 className="ref-title">Referências Bibliográficas</h1>
          <p className="ref-subtitle">Base teórica e fontes de pesquisa utilizadas na construção da cartilha.</p>
        </div>
      </header>

      <main className="ref-main">
        <div className="ref-grid">
          {referencesData.map((section, idx) => (
            <section key={idx} className="ref-section">
              <div className="ref-section-header">
                <div className="ref-section-icon">{section.icon}</div>
                <div>
                  <h2 className="ref-section-title">{section.title}</h2>
                  <span className="ref-section-subtitle">{section.subtitle}</span>
                </div>
              </div>
              <ul className="ref-list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="ref-item">
                    <span className="ref-bullet"></span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      
      <footer className="ref-footer">
        <p>Desenvolvido com o compromisso de proteger a infância e adolescência.</p>
      </footer>
    </div>
  );
}
