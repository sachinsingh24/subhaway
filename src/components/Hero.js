import React from 'react';
import { ArrowRight, Award, ShieldCheck, PlayCircle } from 'lucide-react';

const Hero = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      style={{
        background: 'var(--bg-dark-hero)',
        color: '#ffffff',
        paddingTop: '160px',
        paddingBottom: '110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 180, 216, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          {/* Left Column Text */}
          <div>
            <div
              className="badge"
              style={{
                background: 'rgba(0, 180, 216, 0.15)',
                color: '#00b4d8',
                border: '1px solid rgba(0, 180, 216, 0.3)',
                marginBottom: '20px',
              }}
            >
              <Award size={16} />
              Transformational Workshops For The 21st Century
            </div>

            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Science of Achieving <br />
              <span className="text-gradient">Peak Performance</span> & <br />
              Massive Success
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: '#cbd5e1',
                marginBottom: '36px',
                maxWidth: '600px',
                lineHeight: 1.6,
              }}
            >
              Helping Small Business Owners, Solopreneurs, Executives & Students unleash their highest mind potential. Double your business, conquer stress, and live a happier, healthier life.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                Start Your Transformation <ArrowRight size={18} />
              </button>
              <a
                href="#programs"
                className="btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '16px 32px',
                  fontSize: '1.05rem',
                }}
              >
                <PlayCircle size={18} color="#00b4d8" /> Explore Programs
              </a>
            </div>

            {/* Key Trust Signals */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              className="stats-grid"
            >
              <div>
                <h3 style={{ color: '#00b4d8', fontSize: '2rem', fontWeight: 800 }}>10,000+</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>Lives Touched & Transformed</p>
              </div>
              <div>
                <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 800 }}>10 Million</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>2032 Empowerment Vision</p>
              </div>
              <div>
                <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 800 }}>22+ Years</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>Corporate & Mind Mastery</p>
              </div>
            </div>
          </div>

          {/* Right Column Image & Floating Cards */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                border: '4px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <img
                src="/images/DSC_9895 ready.jpg"
                alt="Mr. Subhash Wangde - Mind Power Expert"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 19, 43, 0.8) 0%, transparent 50%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700 }}>Mr. Subhash Wangde</h4>
                <p style={{ color: '#00b4d8', fontSize: '0.875rem', fontWeight: 600 }}>
                  Founder, International Mind & Success Coach
                </p>
              </div>
            </div>

            {/* Floating Glass Badges */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '-20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                animation: 'floatAnimation 4s ease-in-out infinite',
              }}
              className="floating-badge-1"
            >
              <div style={{ background: '#f59e0b', padding: '10px', borderRadius: '12px', color: '#fff' }}>
                <Award size={20} />
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>Jack Canfield Trained</p>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Success Principles Expert</p>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '-20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                animation: 'floatAnimation 4s ease-in-out infinite 2s',
              }}
              className="floating-badge-2"
            >
              <div style={{ background: '#00b4d8', padding: '10px', borderRadius: '12px', color: '#fff' }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>Best-Selling Author</p>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Small Steps, Big Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid h1 {
            font-size: 2.5rem !important;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid div[style*="flex"] {
            justify-content: center;
          }
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .floating-badge-1, .floating-badge-2 {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
