import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

// Brand glyphs as inline SVG (lucide-react no longer ships brand icons).
const FacebookIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M20.4 3H3.6A.6.6 0 003 3.6v16.8a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6zM8.3 18.3H5.4V9.4h2.9v8.9zM6.9 8.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zm11.4 10.1h-2.9v-4.3c0-1 0-2.4-1.4-2.4s-1.6 1.1-1.6 2.3v4.4H9.5V9.4h2.8v1.2h.1a3 3 0 012.7-1.5c2.9 0 3.5 1.9 3.5 4.4v4.8z" />
  </svg>
);

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/subhashwangdebusinesscoach', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/subhaway', Icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/subhshwangde', Icon: LinkedinIcon },
];

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
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
