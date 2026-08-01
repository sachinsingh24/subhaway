import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, ChevronRight } from 'lucide-react';
import { servicesNavItems } from '../data/servicesData';
import { getSocialLinkProps, socialLinks } from '../data/socialLinks';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2a2552', color: '#cbd5e1', paddingTop: '50px', paddingBottom: '24px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Col 1: About */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '14px 16px',
                marginBottom: '18px',
                boxShadow: '0 10px 24px rgba(15, 23, 42, 0.18)',
              }}
            >
              <img
                src="/images/logo1.png"
                alt="Shubhaway Development Academy Logo"
                style={{ width: '250px', maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '16px' }}>
              Shubhaway Development Academy provides transformational workshops, corporate coaching, and DMIT family counselling to help individuals achieve peak performance and success.
            </p>
            <p style={{ color: '#95346b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>
              Vision: Empowering 10 Million Lives by 2032
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {socialLinks.map((link) => {
                const { name, Icon } = link;

                return (
                <a
                  key={name}
                  {...getSocialLinkProps(link)}
                  aria-label={name}
                  title={name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#cbd5e1',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#95346b';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <Icon size={18} />
                </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li>
                <Link to="/" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#95346b" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#95346b" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#95346b" /> Services & Workshops
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#95346b" /> Educational Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#95346b" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px' }}>Key Programs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {servicesNavItems.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ChevronRight size={14} color="#95346b" /> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#95346b" />
                <a href="tel:+917875506912" style={{ color: '#cbd5e1' }}>+91 7875506912</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#95346b" />
                <a href="mailto:subhash.wangde@gmail.com" style={{ color: '#cbd5e1' }}>subhash.wangde@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={16} color="#95346b" />
                <a href="https://www.subhashwangde.com" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1' }}>www.subhashwangde.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px 16px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <p>© {new Date().getFullYear()} Shubhaway Development Academy. All Rights Reserved.</p>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>|</span>
          <p>
            Developed by{' '}
            <a
              href="https://sachinsingh24-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#95346b', fontWeight: 600 }}
            >
              Multifly Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
