import React from 'react';

export function SplitCol({ title, direction = 'left', children }) {
  const revealProp = direction === 'left' ? { 'data-reveal-left': true } : { 'data-reveal-right': true };

  return (
    <div className="split-col" {...revealProp}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}
