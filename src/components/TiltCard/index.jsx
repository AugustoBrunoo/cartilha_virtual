import React from 'react';

const iconWrapperStyle = {
  backgroundColor: '#800020',
  color: '#fff',
  padding: '12px',
  borderRadius: '12px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  width: '56px',
  height: '56px'
};

export function TiltCard({ icon: Icon, title, description }) {
  return (
    <div className="tilt-card" data-tilt>
      <div style={iconWrapperStyle}><Icon size={28} /></div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
