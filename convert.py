import re

with open("src/components/Section2/index.jsx", "r") as f:
    content = f.read()

# Make sure imports exist
if "import React" not in content:
    content = "import React, { useState, useRef, useEffect } from 'react';\n" + content
else:
    # ensure useState, useRef, useEffect are imported if missing
    if "useState" not in content:
        content = content.replace("import React", "import React, { useState, useRef, useEffect }")

# Define Semaphore Component
semaphore_comp = """
function Semaphore() {
  const [activeSignal, setActiveSignal] = useState('red');
  
  return (
    <div className="semaphore" data-semaphore>
      <div className="semaphore-panel">
        <button 
          className={`semaphore-light semaphore-light--red ${activeSignal === 'red' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('red')} 
          aria-label="Sinal vermelho — perigo"
        ></button>
        <button 
          className={`semaphore-light semaphore-light--yellow ${activeSignal === 'yellow' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('yellow')} 
          aria-label="Sinal amarelo — atenção"
        ></button>
        <button 
          className={`semaphore-light semaphore-light--green ${activeSignal === 'green' ? 'is-active' : ''}`}
          onClick={() => setActiveSignal('green')} 
          aria-label="Sinal verde — permitido"
        ></button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start' }}>
        <div 
          className="semaphore-display" 
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'red' ? 1 : 0,
            transform: activeSignal === 'red' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'red' ? 'auto' : 'none',
            zIndex: activeSignal === 'red' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'red' ? 'visible' : 'hidden'
          }}
        >
          <span className="semaphore-badge semaphore-badge--red">🔴 Sinal Vermelho — Perigo</span>
          <h4>Toque inseguro / não permitido</h4>
          <p><strong>O que significa:</strong> toques que geram dor, medo, vergonha ou confusão.</p>
          <p><strong>Exemplos:</strong> pedidos de segredo sobre o próprio corpo, toques em partes íntimas, chantagens para mostrar o corpo ou solicitação de fotos íntimas.</p>
        </div>
        
        <div 
          className="semaphore-display" 
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'yellow' ? 1 : 0,
            transform: activeSignal === 'yellow' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'yellow' ? 'auto' : 'none',
            zIndex: activeSignal === 'yellow' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'yellow' ? 'visible' : 'hidden'
          }}
        >
          <span className="semaphore-badge semaphore-badge--yellow">🟡 Sinal Amarelo — Atenção</span>
          <h4>Respeite os limites</h4>
          <p><strong>O que significa:</strong> ações que parecem afeto, mas que causam desconforto quando ultrapassam a vontade da pessoa.</p>
          <p><strong>Exemplos:</strong> abraços forçados, cosquinhas em excesso que continuam após pedidos de “pare”, comentários invasivos sobre a aparência física ou abordagens persistentes de estranhos na internet.</p>
        </div>
        
        <div 
          className="semaphore-display" 
          style={{
            gridArea: '1 / 1 / 2 / 2',
            opacity: activeSignal === 'green' ? 1 : 0,
            transform: activeSignal === 'green' ? 'translateY(0)' : 'translateY(15px)',
            pointerEvents: activeSignal === 'green' ? 'auto' : 'none',
            zIndex: activeSignal === 'green' ? 2 : 1,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            visibility: activeSignal === 'green' ? 'visible' : 'hidden'
          }}
        >
          <span className="semaphore-badge semaphore-badge--green">🟢 Sinal Verde — Permitido</span>
          <h4>Toque seguro e saudável</h4>
          <p><strong>O que significa:</strong> demonstrações espontâneas e voluntárias de carinho e respeito mútuo.</p>
          <p><strong>Exemplos:</strong> aperto de mão, abraço e beijo respeitosos e consentidos, e procedimentos de saúde realizados por profissionais acompanhados de responsáveis legais.</p>
        </div>
      </div>
    </div>
  );
}

function AlertTabs() {
  const [activeTab, setActiveTab] = useState('fisicos');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeIndex = ['fisicos', 'cognitivos', 'emocionais'].indexOf(activeTab);
    const activeBtn = tabsRef.current[activeIndex];
    
    if (activeBtn) {
      setIndicatorStyle({
        width: `${activeBtn.offsetWidth}px`,
        transform: `translateX(${activeBtn.offsetLeft - 4}px)`,
        opacity: 1
      });
    }
  }, [activeTab]);

  return (
    <div className="tabs" data-tabs>
      <div className="tabs-nav">
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
  );
}

"""

# Insert components before export function Section2
content = re.sub(r'export function Section2\(\) \{', semaphore_comp + '\nexport function Section2() {', content)

# Replace semaphore HTML
start_sem = '<div className="semaphore" data-semaphore>'
end_sem = '</div>\n          </div>\n\n          {/*  2.3 Sinais de alerta  */}'
if start_sem in content and end_sem in content:
    sem_str = content[content.find(start_sem):content.find(end_sem)]
    content = content.replace(sem_str, '<Semaphore />\n')

# Replace tabs HTML
start_tabs = '<div className="tabs" data-tabs>'
end_tabs = '</div>\n          </div>\n\n          {/*  2.4 Alerta digital  */}'
if start_tabs in content and end_tabs in content:
    tabs_str = content[content.find(start_tabs):content.find(end_tabs)]
    content = content.replace(tabs_str, '<AlertTabs />\n')

with open("src/components/Section2/index.jsx", "w") as f:
    f.write(content)
