import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Leaf,
  Wind,
  Moon,
  Heart,
  Sun,
  Hand,
  Sparkles,
} from 'lucide-react';

// Calm, green, wellness theme — static, unique to Stress Free Living.
const GREEN = '#16a34a';
const DEEP = '#14532d';

// Relevant service imagery sourced from Pixabay (free to use, no attribution required)
const img = (path) => `https://cdn.pixabay.com/photo/${path}_1280.jpg`;

const within = [
  'Perfectionism and one-track mindedness',
  'Attempting to please everyone; cannot say no',
  'Workaholic habits and bottled-up feelings',
  'Unrealistic expectations and inflexibility',
  'Less or improper sleep',
  'Poor nutrition and little exercise',
];

const outside = [
  'A recent illness, accident or major loss',
  'Changing jobs, retirement or childbirth',
  'Home, marital and work-related problems',
  'Major financial strain',
  'Responsibilities towards family and organisation',
  'Poor environment and poor time management',
];

const rituals = [
  { icon: Sparkles, label: 'Law of attraction & vibration' },
  { icon: Sun, label: 'Visualisation & affirmation' },
  { icon: Heart, label: 'Gratitude & appreciation' },
  { icon: Wind, label: 'Forgive & forget' },
  { icon: Leaf, label: 'Meditation & mindfulness' },
  { icon: Moon, label: 'Exercise, nutrition & rest' },
];

const StressFreePage = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* HERO — soft calm, left text + rounded image */}
      <section style={{ background: `linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)` }}>
        <div
          className="container sf-hero"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', padding: '78px 20px' }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: '999px',
                backgroundColor: '#dcfce7',
                color: DEEP,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              <Leaf size={15} /> Stress Free Living Workshop
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.12, color: DEEP, margin: '18px 0 16px' }}>
              A calmer mind, a{' '}
              <span style={{ color: GREEN }}>stress-free</span> life — without medicines
            </h1>
            <p style={{ fontSize: '1.08rem', color: '#3f6212', lineHeight: 1.8, maxWidth: '540px' }}>
              A practical workshop that helps you identify the stressors within and around you, then release them with
              EFT, relaxation and simple daily rituals you can use the very same day.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link to="/contact" className="btn-primary" style={{ backgroundColor: GREEN, borderColor: GREEN }}>
                Join the workshop <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                <ArrowLeft size={16} /> All Services
              </Link>
            </div>
          </div>
          <img
            src={img('2016/05/10/21/50/meditation-1384758')}
            alt="Person meditating calmly outdoors"
            style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '28px', boxShadow: '0 22px 50px rgba(22,163,74,0.22)' }}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ color: DEEP, fontSize: '2.1rem', marginBottom: '16px' }}>Stress is becoming the biggest challenge</h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.85 }}>
            A sedentary lifestyle, improper eating and sleep, fierce competition, inflation and constant demands are
            pushing stress to the top of the list of 21st-century challenges. Learning how to manage it is the key to a
            successful and happy life.
          </p>
        </div>
      </section>

      {/* STRESSORS within / outside */}
      <section className="section" style={{ backgroundColor: '#f0fdf4' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Let's understand stress</h2>
            <p>It comes from stressors both within you and around you.</p>
          </div>
          <div className="sf-stress" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bbf7d0', borderRadius: '20px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#dcfce7', display: 'grid', placeItems: 'center' }}>
                  <Heart size={20} color={GREEN} />
                </span>
                <h3 style={{ color: DEEP, fontSize: '1.2rem' }}>Stressors within you</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '11px' }}>
                {within.map((w) => (
                  <li key={w} style={{ display: 'flex', gap: '10px', color: '#3f6212', fontSize: '0.95rem', lineHeight: 1.55 }}>
                    <Leaf size={16} color={GREEN} style={{ flexShrink: 0, marginTop: '3px' }} /> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bbf7d0', borderRadius: '20px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#dcfce7', display: 'grid', placeItems: 'center' }}>
                  <Wind size={20} color={GREEN} />
                </span>
                <h3 style={{ color: DEEP, fontSize: '1.2rem' }}>Stressors outside you</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '11px' }}>
                {outside.map((o) => (
                  <li key={o} style={{ display: 'flex', gap: '10px', color: '#3f6212', fontSize: '0.95rem', lineHeight: 1.55 }}>
                    <Leaf size={16} color={GREEN} style={{ flexShrink: 0, marginTop: '3px' }} /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EFT explainer */}
      <section className="section">
        <div className="container sf-two" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '44px', alignItems: 'center' }}>
          <img
            src={img('2021/03/27/10/43/yoga-6128116')}
            alt="Person practising yoga and mindful breathing"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 16px 40px rgba(15,23,42,0.12)' }}
          />
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: GREEN, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Hand size={16} /> Core technique
            </span>
            <h2 style={{ fontSize: '2rem', color: DEEP, margin: '10px 0 16px' }}>EFT — Emotional Freedom Technique</h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '16px' }}>
              A blend of Chinese acupressure and modern psychology — sometimes called <em>“psychological acupuncture.”</em>{' '}
              It's non-invasive and used to remove the effect of negative emotions and past experiences that cause stress.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Non-invasive', 'Relaxation technique', 'Power nap for rejuvenation'].map((t) => (
                <span key={t} style={{ padding: '8px 15px', borderRadius: '999px', backgroundColor: '#dcfce7', color: DEEP, fontSize: '0.85rem', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DAILY RITUALS */}
      <section className="section" style={{ background: `linear-gradient(135deg, ${DEEP}, ${GREEN})`, color: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#ffffff' }}>Your daily mindfulness practice</h2>
            <p style={{ color: '#bbf7d0' }}>Simple rituals to build into everyday life for a stress-free, medicine-free lifestyle.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%),1fr))', gap: '18px' }}>
            {rituals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                }}
              >
                <Icon size={24} color="#ffffff" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.98rem', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '34px', color: '#dcfce7', fontStyle: 'italic', fontSize: '1.05rem' }}>
            “Take 100% responsibility of your own life.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ color: DEEP, fontSize: '2rem', marginBottom: '14px' }}>Reset your nervous system</h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '26px' }}>
            Leave with tools you can use the same day. Sleep better, calm down and feel more like yourself again.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: GREEN, borderColor: GREEN }}>
            Enquire about the next workshop <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sf-hero, .sf-two, .sf-stress { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default StressFreePage;
