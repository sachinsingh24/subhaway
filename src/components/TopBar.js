import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { getSocialLinkProps, socialLinks } from '../data/socialLinks';

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: '#2a2552',
        color: '#c4bedf',
        fontSize: '0.85rem',
        padding: '8px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="tel:+917875506912"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}
          >
            <Phone size={14} color="#95346b" />
            <span>+91 7875506912</span>
          </a>
          <a
            href="mailto:subhash.wangde@gmail.com"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}
          >
            <Mail size={14} color="#95346b" />
            <span>subhash.wangde@gmail.com</span>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="https://www.subhashwangde.com"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}
          >
            <Globe size={14} color="#95346b" />
            <span>www.subhashwangde.com</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {socialLinks.map((link) => {
              const { name, Icon } = link;

              return (
              <a
                key={name}
                {...getSocialLinkProps(link)}
                aria-label={name}
                title={name}
                style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1' }}
              >
                <Icon size={16} />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
