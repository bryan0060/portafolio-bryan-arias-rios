import React from 'react';
import './TechBadge.css';

const TechBadge = ({ name, icon: Icon, color }) => {
  return (
    <div className="tech-badge">
      <div className="tech-badge-icon" style={{ color }}>
        <Icon />
      </div>
      <span className="tech-badge-name">{name}</span>
    </div>
  );
};

export default TechBadge;