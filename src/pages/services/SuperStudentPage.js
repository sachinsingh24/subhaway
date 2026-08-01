import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Target,
  BookOpen,
  Users,
  Trophy,
  Smartphone,
} from 'lucide-react';

// Indigo, youthful, energetic theme — static, unique to Super Student.
const INDIGO = '#6366f1';
const DEEP = '#312e81';

// Relevant service imagery sourced from Pixabay (free to use, no attribution required)
const img = (path) => `https://cdn.pixabay.com/photo/${path}_1280.jpg`;

const challenges = [
  'Strain in parent–child relationships',
  'Exam stress and lack of clarity around goals',
  'Peer pressure and difficult choices',
  'Career confusion with too many options',
  'Loss of confidence, concentration and focus',
  'Distraction from gadgets and social media',
];

const solutions = [
  'A clear, motivating roadmap for studies and career',
  'Practical tools to stay calm and focused before exams',
  'Confidence to make independent, healthy decisions',
  'Scientific memory and concentration techniques',
  'Higher self-belief and emotional balance',
  'A healthy relationship with technology',
];

const benefits = [
  { icon: Target, title: 'Complete goal orientation', text: 'Total clarity on what they want to do in their lives.' },
  { icon: Brain, title: 'Focus & memory', text: 'Higher concentration and scientific memory enhancement.' },
  { icon: Trophy, title: 'Exams & sports', text: 'Improved performance in academics and on the field.' },
  { icon: Users, title: 'Better relationships', text: 'With parents, siblings and friends — and dealing with peer pressure.' },
  { icon: BookOpen, title: 'Higher EQ & SQ', text: 'Emotional and spiritual quotient to understand themselves.' },
  { icon: Smartphone, title: 'Beat distraction', text: 'Freedom from gadget, social-media and addiction traps.' },
];

const SuperStudentPage = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* HERO — bold indigo gradient, centered with floating image row */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DEEP} 0%, ${INDIGO} 55%, #8b5cf6 100%)`,
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ padding: '76px 20px 130px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            <GraduationCap size={15} /> Super Student Unlimited
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', lineHeight: 1.1, margin: '20px auto 16px', maxWidth: '900px' }}>
            Unleash the power within — and become <span style={{ color: '#c4b5fd' }}>unstoppable</span>
          </h1>
          <p style={{ color: '#e0e7ff', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto 30px' }}>
            An immersive workshop that empowers students to break through barriers, sharpen focus and confidently
            answer the one question school never teaches: <em>“What do I really want?”</em>
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: DEEP, borderColor: '#ffffff' }}>
              Enrol / Enquire <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}>
              <ArrowLeft size={16} /> All Services
            </Link>
          </div>
        </div>

        {/* overlapping image strip */}
        <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '-90px', paddingBottom: '0' }}>
          <div className="ss-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px',marginBottom: '15px' }}>
            {[
              ['2015/09/22/15/02/studying-951818', 'Students studying together'],
              ['2015/07/17/22/43/student-849825', 'A focused student learning'],
              ['2016/11/14/03/16/book-1822474', 'Books and study material'],
            ].map(([id, alt]) => (
              <img
                key={id}
                src={img(id)}
                alt={alt}
                style={{ width: '100%', height: '210px', objectFit: 'cover', borderRadius: '18px', boxShadow: '0 20px 40px rgba(49,46,129,0.35)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE vs SOLUTION comparison */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>From today's challenges to tomorrow's clarity</h2>
            <p>The 21st century brings opportunities that never existed before — and challenges students never faced before.</p>
          </div>
          <div className="ss-compare" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '20px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <AlertTriangle size={22} color="#dc2626" />
                <h3 style={{ color: '#b91c1c', fontSize: '1.25rem' }}>The challenges they face</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                {challenges.map((c) => (
                  <li key={c} style={{ display: 'flex', gap: '10px', color: '#7f1d1d', fontSize: '0.96rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#dc2626', fontWeight: 800 }}>—</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#eef2ff', border: `1px solid #c7d2fe`, borderRadius: '20px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <CheckCircle2 size={22} color={INDIGO} />
                <h3 style={{ color: DEEP, fontSize: '1.25rem' }}>What they walk away with</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                {solutions.map((s) => (
                  <li key={s} style={{ display: 'flex', gap: '10px', color: '#3730a3', fontSize: '0.96rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={18} color={INDIGO} style={{ flexShrink: 0, marginTop: '2px' }} /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CELLULAR TRANSFORMATION quote band */}
      <section style={{ background: `linear-gradient(135deg, ${INDIGO}, #8b5cf6)`, color: '#ffffff', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <Brain size={34} style={{ marginBottom: '14px', opacity: 0.9 }} />
          <p style={{ fontSize: '1.5rem', lineHeight: 1.5, fontWeight: 600, color: '#ffffff' }}>
            “This workshop brings about a change at a cellular level — so the results are permanent.”
          </p>
          <p style={{ marginTop: '14px', color: '#ddd6fe', fontSize: '0.95rem' }}>Every child is unique and born a genius.</p>
        </div>
      </section>

      {/* BENEFITS grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Program benefits & outcomes</h2>
            <p>An overall shift in attitude that empowers students to achieve whatever they set out to.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '20px' }}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '26px',
                  border: '1px solid #e2e8f0',
                  borderTop: `4px solid ${INDIGO}`,
                  boxShadow: '0 6px 18px rgba(49,46,129,0.06)',
                }}
              >
                <span
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: '#eef2ff',
                    marginBottom: '16px',
                  }}
                >
                  <Icon size={24} color={INDIGO} />
                </span>
                <h3 style={{ fontSize: '1.15rem', color: DEEP, marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div
          className="container"
          style={{
            background: `linear-gradient(135deg, ${DEEP}, ${INDIGO})`,
            borderRadius: '24px',
            padding: '54px 40px',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '12px' }}>Give your child a head start</h2>
          <p style={{ color: '#e0e7ff', maxWidth: '620px', margin: '0 auto 26px', fontSize: '1.02rem', lineHeight: 1.7 }}>
            Reserve a place in the next Super Student Unlimited workshop and help them tap into their infinite potential.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: DEEP, borderColor: '#ffffff' }}>
            Book a seat <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ss-compare { grid-template-columns: 1fr !important; }
          .ss-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default SuperStudentPage;
