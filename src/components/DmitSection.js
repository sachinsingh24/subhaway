import React from 'react';
import { Dna, Fingerprint, Brain, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const DmitSection = ({ onSelectProgram }) => {
  const dmitBenefits = [
    'Your Child’s Inborn Intelligence & Hidden Potentials',
    'Specific Learning Style (Visual, Auditory, or Kinesthetic)',
    'Whether your child is a Left-Brain or Right-Brain thinker',
    'How your child absorbs and memorises information',
    'Specific career domains where your child is guaranteed to excel',
    'Personality Type mapping for better parenting and communication',
  ];

  const intelligenceTypes = [
    'Logical-Mathematical',
    'Linguistic / Verbal',
    'Spatial / Visual',
    'Musical / Rhythmic',
    'Bodily-Kinesthetic',
    'Interpersonal',
    'Intrapersonal',
    'Naturalistic',
  ];

  return (
    <section id="dmit" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <Fingerprint size={14} /> Science of Inborn Genius
          </div>
          <h2>
            DMIT & <span className="text-gradient">Family Counselling</span>
          </h2>
          <p>
            Dermatoglyphics Multiple Intelligence Test — Unlock your child's innate genetic talent through fingerprint brain mapping.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px',
          }}
          className="dmit-grid"
        >
          {/* Left Column: Scientific Explanation */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Brain size={32} color="#00b4d8" />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0b132b' }}>
                Every Child Is Born A Genius
              </h3>
            </div>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Fingerprints and brain lobes develop simultaneously between the <strong>13th and 21st week of pregnancy</strong>. Scientists have established a direct correlation between fingerprint patterns and brain development. Since fingerprints never change, DMIT provides an absolute map of inborn talent.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '32px' }}>
              {dmitBenefits.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectProgram('One-on-One Family Counselling using DMIT')}
              className="btn-primary"
            >
              Book DMIT Assessment <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 8 Intelligences Showcase */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)',
              color: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Dna size={28} color="#f59e0b" />
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                The 8 Inborn Intelligences
              </h4>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '24px' }}>
              DMIT measures the exact distribution of these 8 intelligence categories to guide education and career decisions:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              {intelligenceTypes.map((type, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#00b4d8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={14} color="#f59e0b" />
                  <span>{type}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.875rem',
                color: '#94a3b8',
                textAlign: 'center',
              }}
            >
              Includes 1-on-1 Deep Counselling with Master Coach <strong>Subhash Wangde</strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .dmit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DmitSection;
