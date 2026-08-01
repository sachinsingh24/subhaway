import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Sparkles,
  Target,
  Wallet,
  HeartPulse,
  Clock,
  Smile,
  ShieldCheck,
} from 'lucide-react';

// Sky-blue "Blueprint for Success" theme — fully static, unique to Mind Power.
const SKY = '#0ea5e9';
const DEEP = '#0c4a6e';

// Relevant service imagery sourced from Pixabay (free to use, no attribution required)
const img = (path) => `https://cdn.pixabay.com/photo/${path}_1280.jpg`;
// Takes the full filename including extension, so both .jpg and .png assets work.
const local_img = (file) => `/images/services/${file}`;

const wishlist = [
  { icon: Wallet, text: 'Double your income and free up more of your time' },
  { icon: Smile, text: 'Create happy, fulfilling relationships at home and work' },
  { icon: HeartPulse, text: 'Heal yourself and stay fit throughout your life' },
  { icon: Sparkles, text: 'Experience inner peace, joy and lasting confidence' },
  { icon: Target, text: 'Achieve financial freedom with focused daily action' },
  { icon: ShieldCheck, text: 'Break through limiting beliefs and past conditioning' },
];

const principles = [
  {
    title: 'Understand The Mind',
    text: 'Detailed explanation of how the mind works, the types of minds and the powers of the subconscious mind.',
  },
  {
    title: 'Identify Your Life Purpose',
    text: 'Identify your life purpose and set balanced, SMART goals across every area of your life.',
  },
  {
    title: 'Program The Subconscious Mind',
    text: 'Alpha-state mind programming, visualisation, auto-suggestions, mind movies and vision boards.',
  },
  {
    title: 'Clear The Blockages',
    text: 'Use Emotional Freedom Technique (EFT) to rewire the brain and remove emotional and physical blocks.',
  },
  {
    title: 'Protect And Attract',
    text: 'Negativity removal, a psychic shield for protection, and attracting the right people and opportunities.',
  },
];

const tools = [
  'Law of Attraction',
  'Alpha State Programming',
  'Visualisation & Mind Movies',
  'Vision Board',
  'Affirmations',
  'EFT Tapping',
  'Wealth Creation',
  'Weight Management',
  'Phobia Removal',
  'Sleep & Power Nap',
  'Mental Alarm',
  'Habit Shifting',
];

const attendees = ['Business People', 'Sales People', 'Homemakers', 'Professionals', 'Students', 'Senior Citizens'];

const MindPowerPage = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* HERO — light split with image collage (distinct from dark banners) */}
      <section
        style={{
          background: `radial-gradient(1100px 500px at 90% -10%, rgba(14,165,233,0.16), transparent), linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)`,
          borderBottom: '1px solid #e0f2fe',
        }}
      >
        <div
          className="container mp-hero"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '48px',
            alignItems: 'center',
            padding: '72px 20px',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 14px',
                borderRadius: '999px',
                backgroundColor: '#e0f2fe',
                color: DEEP,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              <Brain size={15} /> Mind Power Unlimited For Public
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.1, margin: '18px 0 16px', color: DEEP }}>
              Build Your Complete{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${SKY}, #22d3ee)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Blueprint For Success
              </span>
            </h1>
            <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.8, maxWidth: '560px' }}>
            A transformational workshop that teaches timeless success principles and subconscious mind techniques to help you go from where you are today to where you want to be—faster than ever before.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link to="/contact" className="btn-primary" style={{ backgroundColor: SKY, borderColor: SKY }}>
                Enquire for This Workshop <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                <ArrowLeft size={16} /> All Services
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <img
              src={local_img('mtajmr-touch-of-your-shadow-2245659_1920.jpg')}
              alt="Person reaching a mountain summit at sunrise"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '18px', gridRow: 'span 2', boxShadow: '0 20px 45px rgba(2,132,199,0.22)' }}
            />
            <img
              src={img('2016/11/22/23/29/meditate-1851165')}
              alt="Person meditating in the alpha state"
              style={{ width: '100%', height: '122px', objectFit: 'cover', borderRadius: '18px' }}
            />
            <img
              src={img('2024/01/04/14/27/write-8487618')}
              alt="Writing goals in a notebook"
              style={{ width: '100%', height: '122px', objectFit: 'cover', borderRadius: '18px' }}
            />
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section style={{ backgroundColor: DEEP, color: '#ffffff' }}>
        <div
          className="container mp-stats"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '34px 20px' }}
        >
          {[
            ['Transformation', 'Immersive workshop'],
            ['10,000+', 'Lives touched across India'],
            ['All ages', 'Students to senior citizens'],
            ['100%', 'Experiential, hands-on practice'],
          ].map(([big, small]) => (
            <div key={small} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#7dd3fc' }}>{big}</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT MAKES SUCCESSFUL PEOPLE SUCCESSFUL */}
      <section className="section">
        <div className="container mp-two" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '44px', alignItems: 'center' }}>
          <img
            src={local_img('roszie-woman-7780330_1920.png')}
            alt="Climbing toward the top — growth mindset"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 16px 40px rgba(15,23,42,0.12)' }}
          />
          <div>
            <h2 style={{ fontSize: '2.1rem', color: DEEP, marginBottom: '16px' }}>What makes successful people successful?</h2>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.85, marginBottom: '16px' }}>
              All human beings are equally powerful. The only difference is that some have learned how to tap into their
              inner potential, while others have no idea how to use it. This workshop hands you a well-defined system for
              peak performance — the same one all successful people use, knowingly or unknowingly.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.85 }}>
              As Swami Vivekananda said, <em>“You are the architect of your future.”</em> These two days are about
              learning how to actually create a life of your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WOULD YOU LIKE — wishlist */}
      <section className="section" style={{ backgroundColor: '#f0f9ff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>What would you like?</h2>
            <p>Pick any of these — the workshop is built to help you get there.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '18px' }}>
            {wishlist.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0f2fe',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  boxShadow: '0 4px 14px rgba(2,132,199,0.06)',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${SKY}, #22d3ee)`,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Icon size={22} color="#ffffff" />
                </span>
                <span style={{ color: '#0f172a', fontSize: '0.98rem', fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS PRINCIPLES — numbered journey */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Your Transformation journey</h2>
            <p>A step-by-step system that shatters limiting beliefs and makes you unstoppable.</p>
          </div>
          <div style={{ display: 'grid', gap: '16px', maxWidth: '860px', margin: '0 auto' }}>
            {principles.map((p, i) => (
              <div
                key={p.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '22px',
                  alignItems: 'flex-start',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${SKY}`,
                  borderRadius: '14px',
                  padding: '22px 24px',
                }}
              >
                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#e0f2fe',
                    color: DEEP,
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: DEEP, marginBottom: '6px' }}>{p.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.7 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIND POWER TOOLS — pill cloud on gradient */}
      <section
        className="section"
        style={{ background: `linear-gradient(135deg, ${DEEP}, #0e7490)`, color: '#ffffff' }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2.1rem', marginBottom: '12px' }}>Tools & techniques you master</h2>
          <p style={{ color: '#bae6fd', maxWidth: '640px', margin: '0 auto 32px', fontSize: '1.02rem' }}>
            Cutting-edge mind tools to break any limiting belief or past conditioning.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '820px', margin: '0 auto' }}>
            {tools.map((t) => (
              <span
                key={t}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND + CTA */}
      <section className="section">
        <div className="container mp-cta" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: DEEP, marginBottom: '18px' }}>Who should attend?</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {attendees.map((a) => (
                <span
                  key={a}
                  style={{
                    padding: '9px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#f0f9ff',
                    border: '1px solid #bae6fd',
                    color: DEEP,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              background: `linear-gradient(135deg, ${SKY}, #0284c7)`,
              borderRadius: '22px',
              padding: '38px',
              color: '#ffffff',
              boxShadow: '0 20px 45px rgba(2,132,199,0.3)',
            }}
          >
            <Clock size={30} style={{ marginBottom: '12px' }} />
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '10px' }}>Ready to write your blueprint?</h3>
            <p style={{ color: '#e0f2fe', lineHeight: 1.7, marginBottom: '22px' }}>
              Join the next Transformation Mind Power Unlimited For Public workshop and create a measurable internal shift.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ backgroundColor: '#ffffff', color: DEEP, borderColor: '#ffffff', width: '100%', justifyContent: 'center' }}
            >
              Talk to the team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mp-hero, .mp-two, .mp-cta { grid-template-columns: 1fr !important; }
          .mp-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default MindPowerPage;
