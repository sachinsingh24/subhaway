import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Fingerprint,
  Brain,
  Lightbulb,
  Eye,
  Ear,
  Hand,
  Compass,
  Users,
  ScanLine,
  FileText,
  MessagesSquare,
} from 'lucide-react';

// Warm orange, scientific + family theme — static, unique to DMIT.
const ORANGE = '#ea580c';
const DEEP = '#7c2d12';

// Relevant service imagery sourced from Pixabay (free to use, no attribution required)
const img = (path) => `https://cdn.pixabay.com/photo/${path}_1280.jpg`;

const facts = [
  'No two individuals have the same fingerprints',
  'Fingerprints and the brain develop together — weeks 13 to 21 of pregnancy',
  'Fingerprint patterns never change across a lifetime',
  'Every child has 8 types of intelligence skills',
];

const reveals = [
  { icon: Brain, title: 'Inborn intelligence', text: "Your child's natural strengths and inborn potential." },
  { icon: Lightbulb, title: 'Logical or creative', text: 'Whether they are a left-brain or right-brain thinker.' },
  { icon: Compass, title: 'Career direction', text: 'The domains your child is likely to excel in.' },
  { icon: Users, title: 'Personality type', text: 'How they relate to others and handle the world.' },
];

const learningStyles = [
  { icon: Eye, label: 'Visual', text: 'Learns best by seeing' },
  { icon: Ear, label: 'Auditory', text: 'Learns best by hearing' },
  { icon: Hand, label: 'Kinesthetic', text: 'Learns best by doing' },
];

const steps = [
  { icon: ScanLine, title: 'Capture', text: 'Fingerprint patterns are scanned — quick, simple and non-invasive.' },
  { icon: FileText, title: 'Analyse', text: 'Patterns are interpreted into a detailed multiple-intelligence profile.' },
  { icon: MessagesSquare, title: 'Counsel', text: 'A one-on-one session translates the profile into practical family guidance.' },
];

const DmitCounsellingPage = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section style={{ background: `linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)`, borderBottom: '1px solid #fed7aa' }}>
        <div className="container dm-hero" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center', padding: '74px 20px' }}>
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: '999px',
                backgroundColor: '#ffedd5',
                color: DEEP,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              <Fingerprint size={15} /> DMIT & Family Counselling
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.12, color: DEEP, margin: '18px 0 16px' }}>
              Every child is <span style={{ color: ORANGE }}>unique</span> — and born a genius
            </h1>
            <p style={{ fontSize: '1.08rem', color: '#7c2d12', lineHeight: 1.8, maxWidth: '560px' }}>
              DMIT (Dermatoglyphics Multiple Intelligence Test) reads the fingerprint patterns that form alongside the
              brain before birth — revealing inborn intelligence, learning style and natural talent through a
              personalised, one-on-one counselling session.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link to="/contact" className="btn-primary" style={{ backgroundColor: ORANGE, borderColor: ORANGE }}>
                Book an assessment <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                <ArrowLeft size={16} /> All Services
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src={img('2018/09/11/19/49/education-3670453')}
              alt="Child learning and exploring"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 22px 50px rgba(234,88,12,0.22)' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-18px',
                left: '-18px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 12px 30px rgba(15,23,42,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Fingerprint size={30} color={ORANGE} />
              <div>
                <div style={{ fontWeight: 800, color: DEEP, fontSize: '1.1rem' }}>8 Intelligences</div>
                <div style={{ fontSize: '0.8rem', color: '#9a3412' }}>mapped for every child</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DID YOU KNOW facts */}
      <section className="section" style={{ backgroundColor: DEEP, color: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#ffffff' }}>Did you know?</h2>
            <p style={{ color: '#fdba74' }}>The science that makes DMIT an absolute way to understand inborn talent.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%),1fr))', gap: '18px' }}>
            {facts.map((f, i) => (
              <div key={f} style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(253,186,116,0.35)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fb923c', marginBottom: '8px' }}>0{i + 1}</div>
                <p style={{ color: '#fed7aa', fontSize: '0.95rem', lineHeight: 1.6 }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT DMIT REVEALS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>What DMIT helps you discover</h2>
            <p>Clear, personalised insight instead of guesswork.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%),1fr))', gap: '20px' }}>
            {reveals.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                style={{
                  backgroundColor: '#fff7ed',
                  border: '1px solid #fed7aa',
                  borderRadius: '18px',
                  padding: '26px',
                }}
              >
                <span style={{ display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '14px', background: `linear-gradient(135deg, ${ORANGE}, #f97316)`, marginBottom: '16px' }}>
                  <Icon size={24} color="#ffffff" />
                </span>
                <h3 style={{ fontSize: '1.15rem', color: DEEP, marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#9a3412', fontSize: '0.95rem', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING STYLES */}
      <section className="section" style={{ backgroundColor: '#fff7ed' }}>
        <div className="container dm-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: DEEP, marginBottom: '14px' }}>How does your child learn best?</h2>
            <p style={{ color: '#9a3412', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '24px' }}>
              Understanding whether a child is visual, auditory or kinesthetic transforms how they study, communicate and
              remember — at home and in the classroom.
            </p>
            <div style={{ display: 'grid', gap: '14px' }}>
              {learningStyles.map(({ icon: Icon, label, text }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#ffffff', border: '1px solid #fed7aa', borderRadius: '14px', padding: '16px 20px' }}>
                  <span style={{ display: 'grid', placeItems: 'center', width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ffedd5', flexShrink: 0 }}>
                    <Icon size={22} color={ORANGE} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, color: DEEP }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', color: '#9a3412' }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img('2015/07/28/22/05/child-865116')}
            alt="Young child discovering their learning style"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '22px', boxShadow: '0 18px 40px rgba(15,23,42,0.15)' }}
          />
        </div>
      </section>

      {/* PROCESS steps */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>A simple, personalised process</h2>
            <p>From fingerprint to focused family guidance in three steps.</p>
          </div>
          <div className="dm-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} style={{ position: 'relative', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderTop: `4px solid ${ORANGE}`, borderRadius: '18px', padding: '28px' }}>
                <span style={{ position: 'absolute', top: '20px', right: '22px', fontSize: '2.4rem', fontWeight: 800, color: '#ffedd5' }}>{i + 1}</span>
                <Icon size={30} color={ORANGE} style={{ marginBottom: '14px' }} />
                <h3 style={{ fontSize: '1.2rem', color: DEEP, marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${DEEP}, ${ORANGE})`, padding: '58px 0', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <Fingerprint size={34} style={{ marginBottom: '12px' }} />
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '12px' }}>Understand your child's true potential</h2>
          <p style={{ color: '#fed7aa', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '26px' }}>
            Suitable for children aged 3 and above, students and career changers. Book a one-on-one DMIT counselling
            session today.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: DEEP, borderColor: '#ffffff' }}>
            Book your session <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dm-hero, .dm-two { grid-template-columns: 1fr !important; }
          .dm-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default DmitCounsellingPage;
