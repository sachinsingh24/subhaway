import React from 'react';
import { Eye, Target, Zap, CheckCircle2, Compass, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const whoWeHelp = [
    'Small Business Owners & CEOs seeking business doubling & time freedom',
    'Solopreneurs wanting clarity, focus & massive revenue growth',
    'Students aiming for top academic performance & stress elimination',
    'Corporate Professionals facing high-pressure schedules & attrition',
    'Families & Individuals seeking emotional harmony and inner peace',
  ];

  return (
    <section id="about" className="section-padding" style={{ background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <Compass size={14} /> Who We Are
          </div>
          <h2>
            Unleashing the <span className="text-gradient">Unlimited Power</span> Within You
          </h2>
          <p>
            Founded in 2019 by Mr. Subhash Wangde, Shubhaway Development Academy provides proven systems and mind power techniques to turn limiting beliefs into extraordinary achievements.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            marginBottom: '64px',
          }}
          className="grid-2-col"
        >
          {/* Vision */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
              borderLeft: '6px solid #00b4d8',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(0, 180, 216, 0.12)',
                color: '#00b4d8',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Eye size={30} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: '#0b132b' }}>
              Our Grand Vision
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
              To inspire, motivate, and empower <strong style={{ color: '#0077b6' }}>10 Million people</strong> to live happier, healthier, and more successful lives by <strong style={{ color: '#0077b6' }}>2032</strong>.
            </p>
          </div>

          {/* Mission */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
              borderLeft: '6px solid #7c3aed',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(124, 58, 237, 0.12)',
                color: '#7c3aed',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Target size={30} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: '#0b132b' }}>
              Our Core Mission
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
              To touch, transform, and help individuals achieve their vision through classroom workshops, corporate training, 1-on-1 coaching, DMIT counselling, and cutting-edge mind science.
            </p>
          </div>
        </div>

        {/* Core Conviction Banner */}
        <div
          style={{
            background: 'var(--bg-dark-hero)',
            borderRadius: '24px',
            padding: '48px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(11, 19, 43, 0.2)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              opacity: 0.1,
              color: '#ffffff',
            }}
          >
            <Zap size={240} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              className="badge badge-gold"
              style={{ marginBottom: '16px', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}
            >
              <Sparkles size={14} /> Our Core Philosophy
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.3 }}>
              "All Humans are equally powerful. The only difference is some have learned how to TAP into their Inner Potential to become SUCCESSFUL."
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '900px' }}>
              Our conviction comes from the experiences of <strong>THOUSANDS of participants</strong> who have seen their lives transformed after attending our programs. With cutting-edge tools, we help you break limiting beliefs and past conditioning.
            </p>

            {/* List of who we empower */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
              className="grid-2-col"
            >
              {whoWeHelp.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#00b4d8" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#f8fafc', fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-2-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
