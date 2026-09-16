import React from 'react';

export function SpotCard({ title, items, isAccent = false }) {
  return (
    <div className={`spot-card ${isAccent ? 'spot-card--accent' : ''}`}>
      <div className="spot-card-inner">
        <h3>{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
