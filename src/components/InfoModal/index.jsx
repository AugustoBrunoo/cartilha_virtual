import React, { useEffect, useState, useRef } from 'react';
import { X, MapPin, Clock, Phone, Smartphone, Info, Copy, ExternalLink, ChevronLeft, ArrowRight, AlertTriangle, Check } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './InfoModal.css';

// Fix Leaflet's default icon path issues in React/Vite
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to auto-fit map bounds when there are multiple locations
function MapBoundsFitter({ locations }) {
  const map = useMap();
  useEffect(() => {
    const validLocs = locations.filter(loc => loc.coordinates);
    if (validLocs.length > 0) {
      if (validLocs.length === 1) {
        map.setView(validLocs[0].coordinates, 15);
      } else {
        const bounds = L.latLngBounds(validLocs.map(loc => loc.coordinates));
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [locations, map]);
  return null;
}

export function InfoModal({ isOpen, onClose, title, details, choices }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        setSelectedChoice(null); // Reset when fully closed
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setToastMessage('Informações copiadas!');
    
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setCopiedIdx(null);
      setToastMessage('');
    }, 2400);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  // Determine what to show
  const showChoices = choices && !selectedChoice;
  const currentTitle = showChoices ? title : (selectedChoice ? selectedChoice.title : title);
  
  // If we selected a choice, we use its details if they exist, otherwise fallback to the main details
  const rawDetails = selectedChoice?.details || details;
  
  // Normalize details to always be an array of locations for easier rendering
  const locations = rawDetails ? (Array.isArray(rawDetails) ? rawDetails : [rawDetails]) : [];

  return (
    <div className={`info-modal-overlay ${isClosing ? 'is-closing' : ''}`} onClick={onClose}>
      <div className={`info-modal-content ${isClosing ? 'is-closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="info-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em' }}>
            {selectedChoice && (
              <button className="info-modal-back" onClick={() => setSelectedChoice(null)} aria-label="Voltar">
                <ChevronLeft size={24} />
              </button>
            )}
            <h3>{currentTitle}</h3>
          </div>
          <button className="info-modal-close" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>
        
        <div className="info-modal-body-wrapper" key={selectedChoice ? selectedChoice.id : 'choices'}>
          {showChoices ? (
            <div className="info-modal-body info-modal-body--choices">
            <p className="info-modal-subtitle">Por favor, escolha qual tipo de unidade você deseja consultar:</p>
            <div className="info-modal-choices">
              {choices.map(choice => (
                <button 
                  key={choice.id} 
                  className="choice-card" 
                  onClick={() => setSelectedChoice(choice)}
                >
                  <div className="choice-card-content">
                    <h4>{choice.title}</h4>
                    <p>{choice.description}</p>
                  </div>
                  <div className="choice-card-icon">
                    <ArrowRight size={24} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {locations.length > 0 ? (
              <div className="info-modal-body">
                <div className="info-modal-locations-list">
                  {locations.map((loc, index) => (
                    <div key={index} className="info-modal-details-wrapper">
                      {loc.name && <h4 className="info-location-name">{loc.name}</h4>}
                      
                      <div className="info-modal-details">
                        {loc.address && (
                          <div className="info-detail-item">
                            <div className="info-detail-icon">
                              <MapPin size={22} />
                            </div>
                            <div className="info-detail-text">
                              <h4>Endereço Físico</h4>
                              <p>{loc.address}</p>
                            </div>
                          </div>
                        )}

                        {loc.hours && (
                          <div className="info-detail-item">
                            <div className="info-detail-icon">
                              <Clock size={22} />
                            </div>
                            <div className="info-detail-text">
                              <h4>Horário de Atendimento</h4>
                              <p>{loc.hours}</p>
                            </div>
                          </div>
                        )}

                        {loc.phones && (
                          <div className="info-detail-item">
                            <div className="info-detail-icon">
                              <Phone size={22} />
                            </div>
                            <div className="info-detail-text">
                              <h4>Telefones de Contato</h4>
                              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
                                {Array.isArray(loc.phones) ? (
                                  loc.phones.map((phone, idx) => (
                                    <li key={idx}>
                                      <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
                                    </li>
                                  ))
                                ) : (
                                  <li>
                                    <a href={`tel:${loc.phones.replace(/\D/g, '')}`}>{loc.phones}</a>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        )}

                        {loc.mobile && (
                          <div className="info-detail-item">
                            <div className="info-detail-icon">
                              <Smartphone size={22} />
                            </div>
                            <div className="info-detail-text">
                              <h4>Celular do Plantão</h4>
                              <p>
                                <a href={`tel:${loc.mobile.replace(/\D/g, '')}`}>{loc.mobile}</a>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {loc.note && (
                        <div className="info-location-note">
                          <AlertTriangle size={20} />
                          <p>{loc.note}</p>
                        </div>
                      )}

                      <div className="info-modal-actions-row">
                        <button 
                          className={`info-modal-action-btn ${copiedIdx === index ? 'info-modal-action-btn--copied' : ''}`}
                          onClick={() => {
                            const text = `${loc.name || currentTitle}\nEndereço: ${loc.address || ''}\nHorário: ${loc.hours || ''}\nTelefones: ${loc.phones ? (Array.isArray(loc.phones) ? loc.phones.join(', ') : loc.phones) : ''}\nCelular: ${loc.mobile || ''}`;
                            handleCopy(text, index);
                          }}
                        >
                          {copiedIdx === index ? (
                            <>
                              <Check size={16} /> Copiado!
                            </>
                          ) : (
                            <>
                              <Copy size={16} /> Copiar
                            </>
                          )}
                        </button>

                        {loc.coordinates && (
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[0]},${loc.coordinates[1]}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="info-modal-action-btn info-modal-action-btn--map"
                          >
                            <ExternalLink size={16} /> Rotas no Maps
                          </a>
                        )}
                      </div>
                      
                      {locations.length > 1 && index < locations.length - 1 && <hr className="info-location-divider" />}
                    </div>
                  ))}
                </div>
                
                <div className="info-modal-map-container">
                  <div className="info-modal-map">
                    <MapContainer 
                      center={locations[0]?.coordinates || [0,0]} 
                      zoom={15} 
                      scrollWheelZoom={false}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <TileLayer
                        attribution='&copy; Google Maps'
                        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                      />
                      {locations.map((loc, idx) => 
                        loc.coordinates && (
                          <Marker key={idx} position={loc.coordinates} icon={customIcon}>
                            <Popup>{loc.name || currentTitle}</Popup>
                          </Marker>
                        )
                      )}
                      <MapBoundsFitter locations={locations} />
                    </MapContainer>
                  </div>
                </div>
              </div>
            ) : (
              <div className="info-modal-body" style={{ gridTemplateColumns: '1fr' }}>
                <div className="info-modal-empty">
                  <Info size={48} />
                  <p>Informações detalhadas em breve.</p>
                </div>
              </div>
            )}
          </>
        )}
        </div>

        {/* Elegant Floating Toast Notification */}
        <div className={`info-modal-toast ${toastMessage ? 'is-shown' : ''}`} aria-live="polite">
          <Check size={18} className="info-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      </div>
    </div>
  );
}
