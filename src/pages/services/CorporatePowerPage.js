import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Flame,
  Magnet,
  Zap,
  Users,
  TrendingUp,
  Globe2,
  Target,
} from 'lucide-react';

// Dark, corporate, teal-accented theme — static, unique to Corporate Power.
const TEAL = '#14b8a6';
const TEAL_DK = '#0f766e';
const SLATE = '#0f172a';

// Relevant service imagery sourced from Pixabay (free to use, no attribution required)
const img = (path) => `https://cdn.pixabay.com/photo/${path}_1280.jpg`;

const challenges = [
  { icon: Globe2, text: 'Significant competition at a global level' },
  { icon: TrendingUp, text: 'Rising costs and customers demanding more for less' },
  { icon: Users, text: 'Attrition and keeping a stretched workforce motivated' },
  { icon: Zap, text: 'The constant need to innovate in order to survive' },
  { icon: Target, text: 'Sound, fast decision-making under real pressure' },
  { icon: Building2, text: 'Aligning every employee to the central vision' },
];

const exercises = [
  { icon: Flame, name: 'Fire Eating', note: 'Confront fear head-on' },
  { icon: Magnet, name: 'Hand Magnetism', note: 'Focus the mind' },
  { icon: Zap, name: 'Body Stiffening', note: 'Prove inner strength' },
  { icon: Users, name: 'Two-Finger Lift', note: 'The power of a team' },
  { icon: Target, name: 'Needle Piercing', note: 'Break the pain barrier' },
  { icon: TrendingUp, name: 'Pendulum Dowsing', note: 'Decision making' },
];

const benefits = [
  'An empowered, motivated and aligned workforce',
  'Sound decision-making and rapid problem solving',
  'Enhanced right-brain, creative and innovative thinking',
  'Powerful mind techniques for negotiation and persuasion',
  'Improved team dynamics and shared ownership',
  'Higher focus, confidence and resilience under stress',
  'Better customer service and stronger relations',
  'A positive approach to work and life',
];

const CorporatePowerPage = () => {
  return (
    <div style={{ backgroundColor: SLATE }}>
      {/* HERO — full-bleed dark image */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.72) 60%, rgba(15,23,42,0.5) 100%), url(${img('2017/02/07/00/04/meeting-2044639')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
        }}
      >
        <div className="container" style={{ padding: '96px 20px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 16px',
              borderRadius: '6px',
              backgroundColor: 'rgba(20,184,166,0.18)',
              border: `1px solid ${TEAL}`,
              color: TEAL,
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <Building2 size={15} /> Corporate Training
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.3rem, 4.6vw, 3.6rem)', lineHeight: 1.1, margin: '20px 0 16px', maxWidth: '760px' }}>
            Unleash the Power Within your organisation
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.08rem', lineHeight: 1.8, maxWidth: '620px' }}>
            A customised intervention that aligns people to your vision, sharpens decision-making and builds resilience —
            through mindset conditioning and live breakthrough experiences that make learning stick back at work.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '30px' }}>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: TEAL, borderColor: TEAL, color: SLATE }}>
              Request a proposal <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
              <ArrowLeft size={16} /> All Services
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS strip */}
      <section style={{ backgroundColor: TEAL_DK }}>
        <div className="container cp-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', padding: '30px 20px' }}>
          {[
            ['1–2 Days', 'Custom intervention'],
            ['Company-specific', 'Built around your goals'],
            ['Leadership + Teams', 'Every level engaged'],
            ['Experiential', 'Breakthrough exercises'],
          ].map(([b, s]) => (
            <div key={s} style={{ textAlign: 'center', color: '#ffffff' }}>
              <div style={{ fontWeight: 800, fontSize: '1.35rem', color: '#99f6e4' }}>{b}</div>
              <div style={{ fontSize: '0.86rem', color: '#ccfbf1', marginTop: '4px' }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGES — dark grid */}
      <section className="section" style={{ backgroundColor: SLATE }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '36px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '2.1rem', marginBottom: '12px' }}>The challenges organisations face today</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.7 }}>
              Opportunities never existed on this scale before — but neither did these pressures.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%),1fr))', gap: '18px' }}>
            {challenges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '14px',
                  padding: '20px 22px',
                }}
              >
                <span style={{ flexShrink: 0, width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(20,184,166,0.15)', display: 'grid', placeItems: 'center' }}>
                  <Icon size={22} color={TEAL} />
                </span>
                <span style={{ color: '#e2e8f0', fontSize: '0.96rem', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH — light break with image */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container cp-two" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '44px', alignItems: 'center' }}>
          <div>
            <span style={{ color: TEAL_DK, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our approach
            </span>
            <h2 style={{ fontSize: '2.1rem', color: SLATE, margin: '10px 0 16px' }}>Experiential, not just motivational</h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '16px' }}>
              The workshop makes participants aware of the enormous potential within every person, then gives them a
              simple, repeatable system to tap into it — the same one used by all successful people, knowingly or
              unknowingly.
            </p>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85 }}>
              Learning is anchored through live breakthrough exercises that shatter limiting beliefs, so the shift in
              mindset carries straight back into the workplace.
            </p>
          </div>
          <img
            src={img('2018/05/16/15/27/business-people-3406077')}
            alt="Business team collaborating in a meeting"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 18px 40px rgba(15,23,42,0.18)' }}
          />
        </div>
      </section>

      {/* SIGNATURE BREAKTHROUGH EXERCISES */}
      <section className="section" style={{ background: `linear-gradient(135deg, ${SLATE}, #134e4a)` }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#ffffff' }}>Signature breakthrough exercises</h2>
            <p style={{ color: '#99f6e4' }}>Practical experiences that help participants break past their limiting boundaries.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%),1fr))', gap: '18px' }}>
            {exercises.map(({ icon: Icon, name, note }) => (
              <div
                key={name}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: `1px solid rgba(20,184,166,0.35)`,
                  borderRadius: '16px',
                  padding: '26px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'grid', placeItems: 'center', width: '58px', height: '58px', margin: '0 auto 14px', borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DK})` }}>
                  <Icon size={26} color="#ffffff" />
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '4px' }}>{name}</h3>
                <p style={{ color: '#5eead4', fontSize: '0.85rem' }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — light two column */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: SLATE }}>Critical outcomes for your business</h2>
            <p>What leaders and teams take back to the floor.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 40px', maxWidth: '900px', margin: '0 auto' }} className="cp-benefits">
            {benefits.map((b) => (
              <div key={b} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#ccfbf1', color: TEAL_DK, display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                  ✓
                </span>
                <span style={{ color: '#334155', fontSize: '0.97rem', lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: TEAL, padding: '56px 0' }}>
        <div className="container cp-cta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ color: SLATE, fontSize: '1.9rem', marginBottom: '8px' }}>Bring this to your team</h2>
            <p style={{ color: '#134e4a', fontSize: '1.02rem', maxWidth: '520px' }}>
              We tailor every module to your organisation's vision, challenges and people.
            </p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: SLATE, borderColor: SLATE, whiteSpace: 'nowrap' }}>
            Talk to us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cp-two { grid-template-columns: 1fr !important; }
          .cp-metrics { grid-template-columns: 1fr 1fr !important; }
          .cp-benefits { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CorporatePowerPage;
