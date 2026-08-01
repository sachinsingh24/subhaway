import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import { servicesNavItems } from '../data/servicesData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  // Active underline bar — always rendered (reserves space so labels stay
  // aligned), coloured only for the active item. Stretches to the label width.
  const ActiveUnderline = ({ active }) => (
    <span
      style={{
        marginTop: '6px',
        alignSelf: 'stretch',
        height: '3px',
        borderRadius: '2px',
        backgroundColor: active ? '#95346b' : 'transparent',
      }}
    />
  );

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          height: 'auto',
          gap: '24px',
        }}
      >
        {/* 1. Left: Brand Logo & Title */}
        <Link to="/" className="brand-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo1.png"
            alt="Shubhaway Development Academy Logo"
            className="brand-logo"
            style={{ width: '228px', height: 'auto', display: 'block' }}
          />
        </Link>

        {/* 2. Center: Desktop Navigation Links (Perfectly Centered) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
            height: '100%',
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              position: 'relative',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: '0.95rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
            })}
          >
            {({ isActive }) => (
              <>
                Home
                <ActiveUnderline active={isActive} />
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              position: 'relative',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: '0.95rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
            })}
          >
            {({ isActive }) => (
              <>
                About
                <ActiveUnderline active={isActive} />
              </>
            )}
          </NavLink>

          {/* Services Dropdown Item */}
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              height: '100%',
            }}
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <div
              onClick={() => {
                navigate('/services');
                setDesktopDropdownOpen(false);
              }}
              style={{
                position: 'relative',
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '0.95rem',
                fontWeight: isServicesActive ? '700' : '500',
                color: isServicesActive ? '#95346b' : '#334155',
                boxSizing: 'border-box',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Services
                <ChevronDown
                  size={15}
                  color={isServicesActive ? '#95346b' : '#64748b'}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: desktopDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                />
              </span>
              <ActiveUnderline active={isServicesActive} />
            </div>

            {/* Dropdown Menu Box */}
            {desktopDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.15)',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  padding: '8px 0',
                  width: '260px',
                  zIndex: 1100,
                  animation: 'fadeIn 0.2s ease',
                }}
              >
                {servicesNavItems.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    onClick={() => setDesktopDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px 18px',
                      fontSize: '0.875rem',
                      fontWeight: location.pathname === service.path ? '700' : '500',
                      color: location.pathname === service.path ? '#95346b' : '#334155',
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              position: 'relative',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: '0.95rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
            })}
          >
            {({ isActive }) => (
              <>
                Blog
                <ActiveUnderline active={isActive} />
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              position: 'relative',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: '0.95rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              boxSizing: 'border-box',
              transition: 'all 0.2s ease',
            })}
          >
            {({ isActive }) => (
              <>
                Contact
                <ActiveUnderline active={isActive} />
              </>
            )}
          </NavLink>
        </nav>

        {/* 3. Right: Consultation Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} className="desktop-nav">
          <Link
            to="/contact"
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '0.875rem',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            <PhoneCall size={15} /> Get Consultation
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#1e293b',
            cursor: 'pointer',
            padding: '6px',
            display: 'none',
            marginLeft: 'auto',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          }}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.05rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              padding: '8px 0',
              borderBottom: '1px solid #f1f5f9',
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.05rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              padding: '8px 0',
              borderBottom: '1px solid #f1f5f9',
            })}
          >
            About
          </NavLink>

          {/* Mobile Accordion Services */}
          <div>
            <div
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: isServicesActive ? '#95346b' : '#334155',
                padding: '8px 0',
                borderBottom: '1px solid #f1f5f9',
                cursor: 'pointer',
              }}
            >
              <span>Services</span>
              <ChevronDown size={18} color="#64748b" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </div>

            {mobileServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', paddingTop: '8px' }}>
                {servicesNavItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    style={{
                      fontSize: '0.95rem',
                      color: location.pathname === item.path ? '#95346b' : '#475569',
                      fontWeight: location.pathname === item.path ? '700' : '500',
                      padding: '6px 0',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.05rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              padding: '8px 0',
              borderBottom: '1px solid #f1f5f9',
            })}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '1.05rem',
              fontWeight: isActive ? '700' : '500',
              color: isActive ? '#95346b' : '#334155',
              padding: '8px 0',
              borderBottom: '1px solid #f1f5f9',
            })}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: '8px' }}
          >
            <PhoneCall size={16} /> Get Consultation
          </Link>
        </div>
      )}

      <style>{`
        .brand-link {
          min-width: 0;
        }

        .brand-logo {
          max-width: 100%;
        }

        @media (max-width: 900px) {
          header .container {
            display: flex !important;
            justify-content: space-between !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }

        @media (max-width: 640px) {
          .brand-logo {
            width: 176px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
