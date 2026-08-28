import React, { useState, useRef, useEffect } from 'react';

export function AccordionItem({ title, children, defaultExpanded = false }) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(defaultExpanded ? '1000px' : '0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="accordion-icon">＋</span>
      </button>
      <div
        className="accordion-panel"
        ref={contentRef}
        style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }}
      >
        {children}
      </div>
    </div>
  );
}
