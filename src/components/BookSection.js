import React from 'react';
import { BookOpen, Star, CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

const BookSection = ({ onOpenBooking }) => {
  const takeaways = [
    'How micro daily habits compound into massive long-term financial & personal freedom',
    'Timeless success principles to eliminate fear, self-doubt & mental resistance',
    'Practical action blueprints used by top high-performing entrepreneurs & leaders',
    'Simple systems to turn small steps into exponential life breakthroughs',
  ];

  return (
    <section id="book" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)',
            borderRadius: '28px',
            padding: '56px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: '48px',
              alignItems: 'center',
            }}
            className="book-grid"
          >
            {/* Book Cover Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  maxWidth: '300px',
                  borderRadius: '16px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                  transform: 'rotate(-3deg)',
                  transition: 'transform 0.3s ease',
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-3deg) scale(1)')}
              >
                <img
                  src="/images/Small_step_Big_growth.jpeg"
                  alt="Small Steps, Big Growth by Subhash Wangde"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Book Details */}
            <div>
              <div
                className="badge badge-gold"
                style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', marginBottom: '16px' }}
              >
                <BookOpen size={14} /> International Best-Seller
              </div>

              <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>
                SMALL STEPS, BIG GROWTH
              </h2>
              <p style={{ color: '#00b4d8', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
                By Subhash Wangde — Certified Mind Power Expert & Success Coach
              </p>

              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} color="#f59e0b" fill="#f59e0b" />
                ))}
                <span style={{ color: '#cbd5e1', fontSize: '0.9rem', marginLeft: '8px', fontWeight: 600 }}>
                  5.0 Rating | Highly Recommended Read
                </span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Success is not achieved overnight; it is built step-by-step using daily intentional habits and subconscious alignment. In this best-selling book, Subhash Wangde outlines the exact roadmap to transition from where you are now to where you truly deserve to be.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {takeaways.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={onOpenBooking} className="btn-primary">
                  <ShoppingBag size={18} /> Request Signed Copy / Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .book-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .book-grid div[style*="flex"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default BookSection;
