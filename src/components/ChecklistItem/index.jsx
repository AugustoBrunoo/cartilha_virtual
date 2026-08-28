import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ChecklistItem({ children, index }) {
  const [ref, isVisible] = useScrollReveal(0.6);
  const [isDelayedVisible, setIsDelayedVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsDelayedVisible(true), index * 600 + 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <li className="checklist-item" ref={ref}>
      <div
        className="checklist-check"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isDelayedVisible ? '#22c55e' : 'transparent',
          borderColor: isDelayedVisible ? '#22c55e' : '#ccc',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none' // Remove interaction
        }}
      >
        <Check size={16} color="white" style={{ opacity: isDelayedVisible ? 1 : 0, transform: isDelayedVisible ? 'scale(1)' : 'scale(0.5)', transition: 'all 0.5s ease 0.2s' }} />
      </div>
      <div style={{
        color: isDelayedVisible ? '#166534' : 'inherit',
        transition: 'color 0.5s ease'
      }}>
        {children}
      </div>
    </li>
  );
}
