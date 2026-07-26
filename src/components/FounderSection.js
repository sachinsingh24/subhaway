import React from 'react';
import { UserCheck, Award, CheckCircle, Quote } from 'lucide-react';

const FounderSection = () => {
  const credentials = [
    'Electronics & Telecommunication Engineer (Mumbai University)',
    'Certified Mind Power Expert & International Business Coach',
    'Personally trained by America’s #1 Success Coach - Jack Canfield',
    '22 Years of corporate leadership experience',
    'Touched over 10,000+ lives across India through transformational workshops',
    'International Best-Selling Author of "Small Steps, Big Growth"',
  ];

  return (
    <section id="founder" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <UserCheck size={14} /> Meet The Master Mind Coach
          </div>
          <h2>
            Empowering You To Reach <span className="text-gold">Peak Excellence</span>
          </h2>
          <p>
            Learn directly from Mr. Subhash Wangde, a seasoned corporate leader turned transformational master coach.
          </p>
        </div>

        {/* Profile Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="founder-grid"
        >
          {/* Founder Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
                border: '6px solid #f8fafc',
              }}
            >
              <img
                src="/images/DSC_9897.jpg"
                alt="Mr. Subhash Wangde Keynote Speaker"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Jack Canfield Endorsement Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: '#0b132b',
                color: '#ffffff',
                padding: '16px 24px',
                borderRadius: '16px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid rgba(245, 158, 11, 0.4)',
              }}
            >
              <Award size={28} color="#f59e0b" />
              <div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Directly Trained By
                </p>
                <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>
                  Jack Canfield (USA)
                </p>
              </div>
            </div>
          </div>

          {/* Biography & Achievements */}
          <div>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0b132b', marginBottom: '8px' }}>
              Mr. Subhash Wangde
            </h3>
            <p style={{ color: '#00b4d8', fontWeight: 700, fontSize: '1.1rem', marginBottom: '24px' }}>
              Founder & Chief Counsellor, Shubhaway Development Academy
            </p>

            <blockquote
              style={{
                background: 'rgba(0, 180, 216, 0.06)',
                borderLeft: '4px solid #00b4d8',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                fontStyle: 'italic',
                color: '#334155',
                fontSize: '1.05rem',
                marginBottom: '28px',
                display: 'flex',
                gap: '12px',
              }}
            >
              <Quote size={24} color="#00b4d8" style={{ flexShrink: 0 }} />
              <span>
                "The mind can be man's best friend or man's worst enemy. All solutions exist INSIDE and not OUTSIDE."
              </span>
            </blockquote>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Subhash Wangde is an Electronics & Telecommunication Engineer from Mumbai University. After spending <strong>22 successful years in corporate leadership</strong>, he chose to follow his true passion: helping people unlock their hidden potential and achieve life-changing goals.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {credentials.map((cred, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.95rem' }}>{cred}</span>
                </div>
              ))}
            </div>

            {/* Sub-Images Gallery Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <img
                src="/images/DSC_9898.jpg"
                alt="Workshop Session"
                style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <img
                src="/images/DSC_9900-1.jpg"
                alt="Live Coaching"
                style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <img
                src="/images/Small_step_Big_growth.jpeg"
                alt="Book Cover"
                style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
