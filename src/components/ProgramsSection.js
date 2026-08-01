import React, { useState } from 'react';
import { BookOpen, GraduationCap, Building2, Smile, Dna, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import ProgramModal from './ProgramModal';

const ProgramsSection = ({ onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedModalProgram, setSelectedModalProgram] = useState(null);

  const programs = [
    {
      id: 'mind-power',
      category: 'Mind Power',
      icon: BookOpen,
      iconColor: '#00b4d8',
      title: 'Mind Power Unlimited For Publick for Public',
      subtitle: 'Blueprint for Success in Personal & Professional Life',
      audience: 'Business People, Solopreneurs, Professionals, Housewives, Senior Citizens',
      duration: '2 Days Transformational Workshop',
      shortDescription:
        'Master the timeless principles of Mind Power, Alpha state programming, Law of Attraction, and Emotional Freedom Techniques to achieve financial & emotional freedom.',
      fullDescription:
        'This flagship workshop is designed to help you create a complete BLUEPRINT FOR SUCCESS. You will learn how the subconscious mind works, how to clear limiting beliefs, program goals in the Alpha state, re-wire your brain using EFT, and double your income while freeing up your personal time.',
      highlights: [
        'Detailed explanation of How the Mind Works & Powers of Subconscious Mind',
        'Alpha State Mind Programming & SMART Goal Setting in all life areas',
        'Law of Attraction & Affirmation / Mind Movies / Vision Board',
        'Emotional Freedom Technique (EFT) for re-wiring brain & pain control',
        'Negativity removal & creating a Psychic Shield against negative influences',
        'Wealth creation, Weight management, and attracting ideal partners/clients',
        'Phobia removal, sleep management, mental alarm & habit breaking',
      ],
    },
    {
      id: 'super-student',
      category: 'Students',
      icon: GraduationCap,
      iconColor: '#4f46e5',
      title: 'Super Student Unlimited',
      subtitle: 'Unleash Hidden Potential in 21st Century Students',
      audience: 'School & College Students, Competitive Exam Aspirants, Parents',
      duration: '2-Day Experiential Student Empowerment Workshop',
      shortDescription:
        'Empower students to overcome exam stress, peer pressure, and distractions while drastically improving memory, focus, and academic performance.',
      fullDescription:
        'Today students face unprecedented challenges including information overload, peer pressure, exam stress, and lack of concentration. Super Student Unlimited provides a scientific system for cellular-level transformation, giving students high EQ, clarity of career goals, and unstoppable confidence.',
      highlights: [
        'Complete Goal Orientation & Career path clarity',
        'High-level Focus, Concentration, and Memory retention techniques',
        'Coping mechanisms for exam stress and academic anxiety',
        'Higher Emotional Quotient (EQ) and Spiritual Quotient (SQ)',
        'Building strong, positive relationships with parents and peers',
        'Overcoming addictions (gadgets, social media, peer pressure)',
      ],
    },
    {
      id: 'corporate-power',
      category: 'Corporates',
      icon: Building2,
      iconColor: '#7c3aed',
      title: 'Unleash the Power Within for Corporates',
      subtitle: 'Sales, Leadership & Employee Effectiveness Breakthrough',
      audience: 'Corporate Leaders, Executives, Sales & Technical Teams',
      duration: 'Custom 1 or 2-Day Executive Workshop',
      shortDescription:
        'Transform corporate teams to solve high-pressure challenges, boost productivity, foster right-brain innovation, and align with organizational vision.',
      fullDescription:
        'Designed for modern corporations dealing with global competition, work pressure, attrition, and complex market shifts. This workshop equips leaders and employees with mind power techniques, breakthrough physical exercises, and sound decision-making abilities to achieve massive organizational growth.',
      highlights: [
        'Align employees to central company vision and mission',
        'Sound decision-making and rapid problem-solving capabilities',
        'Right-brain & creative thinking enhancement for innovation',
        'Stress reduction and work-life balance for high retention',
        'Experiential breakthrough exercises: Fire Eating, Hand Magnetism, Pendulum Dowsing, Body Stiffening',
        'Powerful mind techniques for high-stakes negotiation & persuasion',
      ],
    },
    {
      id: 'stress-free',
      category: 'Stress Relief',
      icon: Smile,
      iconColor: '#10b981',
      title: 'Stress Free Living Workshop',
      subtitle: 'Psychological Acupuncture & Holistic Mind-Body Harmony',
      audience: 'Working Professionals, Homemakers, Executives, Anyone Facing Stress',
      duration: 'Interactive 1-Day Seminar / Workshop',
      shortDescription:
        'Eliminate negative stress, anxiety, and physical burnout using Psychological Acupuncture (EFT), Power Naps, and daily mindfulness rituals.',
      fullDescription:
        'Modern lifestyle, improper sleep, and constant expectations make stress the single biggest health threat. This workshop identifies internal and external stressors and empowers you with non-invasive EFT, power naps, forgiveness rituals, and subconscious healing.',
      highlights: [
        'Understanding internal stressors (perfectionism, inability to say NO, irrational beliefs)',
        'EFT (Emotional Freedom Technique) - Psychological Acupuncture for negative emotions',
        'Power Nap technique for rapid energy rejuvenation',
        'Practice of Mindfulness, Law of Vibration & Gratitude',
        'Creating daily rituals for stress-free, medicine-free living',
      ],
    },
    {
      id: 'dmit-counselling',
      category: 'DMIT',
      icon: Dna,
      iconColor: '#f59e0b',
      title: 'One-on-One Family Counselling using DMIT',
      subtitle: 'Discover Inborn Potential via Dermatoglyphics Multiple Intelligence Test',
      audience: 'Parents, Children (Ages 3+), Professionals, Couples',
      duration: 'Personalized Testing & 1-on-1 Deep Counseling Session',
      shortDescription:
        'Discover your or your child’s 8 types of inborn intelligence, left/right brain dominance, and ideal career path using fingerprint science.',
      fullDescription:
        'Fingerprints develop simultaneously with the brain between the 13th and 21st week of pregnancy. DMIT is a scientific analysis tool that maps fingerprint patterns to unlock an individual’s hidden talents, learning style, personality type, and optimal career trajectory.',
      highlights: [
        'Identify child’s inborn 8 types of intelligence skills',
        'Determine whether your child is a Left-Brain or Right-Brain thinker',
        'Discover exact learning patterns (Visual, Auditory, Kinesthetic)',
        'Personalized career path guidance based on natural genetic potential',
        'Family & marital harmony counseling based on personality mapping',
      ],
    },
  ];

  const categories = ['All', 'Mind Power', 'Students', 'Corporates', 'Stress Relief', 'DMIT'];

  const filteredPrograms =
    activeTab === 'All' ? programs : programs.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="section-padding" style={{ background: '#f1f5f9', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <Sparkles size={14} /> Transformational Catalog
          </div>
          <h2>
            Programs Designed for <span className="text-gradient">Maximum Impact</span>
          </h2>
          <p>
            Explore our curated workshops, corporate trainings, and personal counseling offerings created to transform every facet of your life.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '0.925rem',
                  transition: 'all 0.2s ease',
                  background: activeTab === cat ? '#0b132b' : '#ffffff',
                  color: activeTab === cat ? '#00b4d8' : '#475569',
                  boxShadow: activeTab === cat ? '0 10px 20px rgba(11,19,43,0.15)' : 'none',
                  border: '1px solid',
                  borderColor: activeTab === cat ? '#0b132b' : '#cbd5e1',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
            gap: '32px',
          }}
        >
          {filteredPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  background: '#ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: `${program.iconColor}15`,
                        color: program.iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                      {program.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0b132b', marginBottom: '8px' }}>
                    {program.title}
                  </h3>
                  <p style={{ color: program.iconColor, fontWeight: 600, fontSize: '0.875rem', marginBottom: '16px' }}>
                    {program.subtitle}
                  </p>

                  <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                    {program.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                    {program.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} color={program.iconColor} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 500 }}>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <button
                    onClick={() => setSelectedModalProgram(program)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '10px 16px', fontSize: '0.875rem', justifyContent: 'center' }}
                  >
                    View Syllabus
                  </button>
                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className="btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                  >
                    Enroll <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Modal Popup */}
      <ProgramModal
        program={selectedModalProgram}
        onClose={() => setSelectedModalProgram(null)}
        onSelectProgram={onSelectProgram}
      />
    </section>
  );
};

export default ProgramsSection;
