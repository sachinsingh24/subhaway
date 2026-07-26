import React from 'react';
import { Flame, Compass, Magnet, ShieldAlert, Sparkles, Shield } from 'lucide-react';

const BreakthroughSection = () => {
  const exercises = [
    {
      title: 'Fire Eating',
      icon: Flame,
      color: '#ef4444',
      description: 'Break through raw human fear in seconds and realize that fear is only a mental creation.',
    },
    {
      title: 'Hand Magnetism',
      icon: Magnet,
      color: '#3b82f6',
      description: 'Feel physical attraction generated between hands using subconscious mental energy focus.',
    },
    {
      title: 'Body Stiffening',
      icon: Shield,
      color: '#8b5cf6',
      description: 'Transform the human body into a completely rigid bridge, demonstrating mind over matter.',
    },
    {
      title: 'Lifting with Two Fingers',
      icon: Sparkles,
      color: '#f59e0b',
      description: 'Four people effortlessly lift a full-grown person using just two fingers through aligned energy.',
    },
    {
      title: 'Needle Piercing',
      icon: ShieldAlert,
      color: '#ec4899',
      description: 'Master pain perception control and shatter lifelong beliefs about physical limitations.',
    },
    {
      title: 'Pendulum Dowsing',
      icon: Compass,
      color: '#10b981',
      description: 'Access inner subconscious guidance for accurate, sound decision making in business and life.',
    },
  ];

  return (
    <section id="breakthrough" className="section-padding" style={{ background: '#0b132b', color: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-gold" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>
            <Sparkles size={14} /> Experiential Learning
          </div>
          <h2 style={{ color: '#ffffff' }}>
            Practical <span className="text-gold">Breakthrough Exercises</span>
          </h2>
          <p style={{ color: '#94a3b8' }}>
            Our workshops feature powerful physical & mental exercises that permanently shatter limiting beliefs and leave you feeling truly UNSTOPPABLE.
          </p>
        </div>

        {/* Exercises Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '28px',
          }}
        >
          {exercises.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${item.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${item.color}20`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={28} />
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div
          style={{
            marginTop: '56px',
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(79, 70, 229, 0.15) 100%)',
            border: '1px solid rgba(0, 180, 216, 0.3)',
            borderRadius: '20px',
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700 }}>
              Shift Your Reality At A Cellular Level
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              These physical exercises ensure that your transformation is permanent and deeply rooted in your subconscious.
            </p>
          </div>
          <a href="#contact" className="btn-primary">
            Experience It Live
          </a>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughSection;
