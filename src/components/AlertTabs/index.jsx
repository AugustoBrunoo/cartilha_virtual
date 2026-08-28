import React, { useState, useRef, useEffect } from 'react';

export function AlertTabs() {
  const [activeTab, setActiveTab] = useState('fisicos');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const measure = () => {
      const activeIndex = ['fisicos', 'cognitivos', 'emocionais'].indexOf(activeTab);
      const activeBtn = tabsRef.current[activeIndex];

      if (activeBtn) {
        setIndicatorStyle({
          width: `${activeBtn.offsetWidth}px`,
          transform: `translateX(${activeBtn.offsetLeft - 4}px)`,
          opacity: 1
        });
      }
    };

    measure();
    if (document.fonts) {
      document.fonts.ready.then(measure);
    }
    const timer = setTimeout(measure, 150);

    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, [activeTab]);

  return (
    <div className="tabs" data-tabs>
      <div className="tabs-nav" style={{ position: 'relative' }}>
        <button
          ref={el => tabsRef.current[0] = el}
          className={`tab-btn ${activeTab === 'fisicos' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('fisicos')}
        >Sinais Físicos</button>
        <button
          ref={el => tabsRef.current[1] = el}
          className={`tab-btn ${activeTab === 'cognitivos' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('cognitivos')}
        >Sinais Cognitivos</button>
        <button
          ref={el => tabsRef.current[2] = el}
          className={`tab-btn ${activeTab === 'emocionais' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('emocionais')}
        >Sinais Emocionais</button>
        <span className="tab-indicator" style={{ ...indicatorStyle, opacity: indicatorStyle.width ? 1 : 0 }}></span>
      </div>

      <div className="tabs-content" style={{ marginTop: '1.5rem' }}>
        <div className={`tab-panel ${activeTab === 'fisicos' ? 'is-active' : ''}`}>
          <ul className="signal-list signal-list--red">
            <li><strong>Alertas visíveis/ginecológicos:</strong> vermelhidão, dores, coceira, inchaço, lesões, odores incomuns nas partes íntimas ou presenças de secreções/sêmen.</li>
            <li><strong>Infecções recorrentes:</strong> aparecimento inexplicável de infecções urinárias, digestivas ou Infecções Sexualmente Transmissíveis (ISTs).</li>
            <li><strong>Marcas físicas e dores:</strong> hematomas ou traumas sem explicação clara (especialmente em coxas, seios, nádegas e baixo ventre), dores no corpo frequentes e distúrbios graves do sono/pesadelos.</li>
          </ul>
        </div>

        <div className={`tab-panel ${activeTab === 'cognitivos' ? 'is-active' : ''}`}>
          <ul className="signal-list signal-list--yellow">
            <li><strong>Mudança no desempenho escolar:</strong> queda brusca no rendimento ou, no extremo oposto, uma busca excessiva pela escola (transformando o ambiente escolar em um refúgio para não ficar em casa).</li>
            <li><strong>Perda de foco e memória:</strong> dificuldade marcante de atenção e concentração na rotina (a mente fica ocupada tentando lidar com a situação de dor/medo).</li>
            <li><strong>Fuga para a fantasia / negação:</strong> isolamento em “mundos irreais” como forma de se distanciar da dor interna e da realidade.</li>
          </ul>
        </div>

        <div className={`tab-panel ${activeTab === 'emocionais' ? 'is-active' : ''}`}>
          <ul className="signal-list signal-list--blue">
            <li><strong>Sentimentos intensos de ameaça:</strong> crises de ansiedade, medos sem motivo aparente e constante preocupação de que “um segredo” seja descoberto.</li>
            <li><strong>Vergonha e culpa:</strong> sentimento desproporcional de responsabilidade sobre o que acontece, rejeição ao próprio corpo ou sensação de “não ter valor”.</li>
            <li><strong>Alterações de humor e defesa:</strong> agressividade repentina, destruição de objetos, raiva excessiva ou reações de Estresse Pós-Traumático (TEPT).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
