import React from 'react';

/**
 * SealBadge — the page's signature element.
 * Mirrors the society's real circular emblem (ringed border + stars)
 * so every stat reads as an official mark rather than a decorative stat card.
 */
export default function SealBadge({ number, label }) {
  return (
    <div className="seal-badge" role="img" aria-label={`${number} ${label}`}>
      <i className="bi bi-star-fill seal-star left" aria-hidden="true"></i>
      <span className="seal-number">{number}</span>
      <span className="seal-label">{label}</span>
      <i className="bi bi-star-fill seal-star right" aria-hidden="true"></i>
    </div>
  );
}