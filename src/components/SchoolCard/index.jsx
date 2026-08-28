import React from 'react';

export function SchoolCard({ eyebrow, items, children }) {
  return (
    <div className="school-card">
      {eyebrow && <p className="school-card-eyebrow">{eyebrow}</p>}
      {items ? (
        <ul className="dot-list">
          {items.map((item, index) => (
            <li key={index}>
              {item.title && <strong>{item.title}: </strong>}
              {item.description || item}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
}
