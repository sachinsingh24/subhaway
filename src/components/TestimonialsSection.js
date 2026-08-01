import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        'Attending the Mind Power Unlimited For Publick workshop transformed how I run my business. In just 6 months, I doubled my revenue while freeing up my weekends to spend with family. Mr. Subhash’s EFT techniques are miraculous!',
      name: 'Rajesh Sharma',
      role: 'Manufacturing Business Owner',
      program: 'Mind Power Unlimited For Publick',
    },
    {
      quote:
        'My son was struggling with extreme exam anxiety and low concentration. After the Super Student Unlimited workshop and DMIT counseling, his focus shot up dramatically and he scored 94% in his board exams!',
      name: 'Priya Kulkarni',
      role: 'Parent & Educator',
      program: 'Super Student & DMIT',
    },
    {
      quote:
        'We organized Unleash the Power Within for our corporate leadership team. The fire eating and pendulum dowsing breakthrough exercises broke our team barriers and energized everyone to achieve our yearly targets in 8 months.',
      name: 'Anil Deshmukh',
      role: 'VP Sales, Tech Solutions',
      program: 'Corporate Workshop',
    },
  ];

  return (
    <section className="section-padding" style={{ background: '#f1f5f9', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <MessageSquare size={14} /> Real Transformation Stories
          </div>
          <h2>
            Loved By <span className="text-gradient">Thousands of Participants</span>
          </h2>
          <p>Read how lives, businesses, and student careers have shifted after experiencing our programs.</p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderRadius: '24px',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <blockquote
                  style={{
                    color: '#334155',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    fontStyle: 'italic',
                  }}
                >
                  "{t.quote}"
                </blockquote>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '20px',
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0b132b' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{t.role}</p>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#00b4d8',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {t.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
