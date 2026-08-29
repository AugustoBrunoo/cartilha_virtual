import React, { useState } from 'react';
import { InfoModal } from '../InfoModal';

export function ChannelInfoCard({ name, description, details, choices }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="channel-card channel-card--info">
        <span className="channel-name">{name}</span>
        <span className="channel-desc">{description}</span>
        <button className="info-btn" onClick={() => setIsModalOpen(true)}>
          Ver mais
        </button>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={name}
        details={details}
        choices={choices}
      />
    </>
  );
}
