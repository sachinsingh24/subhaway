import React from 'react';
import { getSocialLinkProps, socialLinks } from '../data/socialLinks';

// Reusable social icon row for light backgrounds (About, Contact pages).
const SocialLinks = ({ size = 18 }) => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      {socialLinks.map((link) => {
        const { name, Icon } = link;

        return (
        <a
          key={name}
          {...getSocialLinkProps(link)}
          aria-label={name}
          title={name}
          style={base}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#95346b';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#95346b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.borderColor = '#cbd5e1';
          }}
        >
          <Icon size={size} />
        </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
