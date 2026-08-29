import React, { useState } from 'react';
import { MousePointerClick } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function FlipCard({ myth, reality, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, isVisible] = useScrollReveal(0.2);

  // We override the default GSAP inline styles by forcing opacity and transform via React style
  return (
    <div
      ref={ref}
      className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
      tabIndex="0"
      role="button"
      aria-label="Virar card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`
      }}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsFlipped(!isFlipped); } }}
    >
      <div className="flip-card-inner">
        <div className="flip-face flip-front">
          <span className="flip-tag flip-tag--myth">MITO</span>
          <p>{myth}</p>
          <span className="flip-hint">
            <MousePointerClick size={16} /> Clique para revelar
          </span>
        </div>
        <div className="flip-face flip-back">
          <span className="flip-tag flip-tag--real">REALIDADE</span>
          <p>{reality}</p>
        </div>
      </div>
    </div>
  );
}
