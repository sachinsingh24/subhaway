import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Fingerprint,
  Brain,
  Users,
  User,
  Leaf,
  Music,
  BookOpen,
  Calculator,
  Shapes,
  PersonStanding,
  ScanLine,
  ClipboardList,
  BarChart3,
  MessagesSquare,
  TrendingUp,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  HelpCircle,
  Target,
  TrendingDown,
  Hourglass,
  HeartCrack,
  ThumbsDown,
  CloudRain,
  Smartphone,
  Cookie,
  Ban,
} from 'lucide-react';

// Warm orange, scientific + family theme — static, unique to DMIT.
const ORANGE = '#ea580c';
const DEEP = '#7c2d12';

// Diagrams and photographs taken from the academy's own DMIT brochure, self-hosted under /public.
const img = (file) => `/images/services/${file}`;
const local_img = (file) => `/images/services/${file}`;

// Explanatory diagrams lifted from the brochure, sized to sit in one half of a two-column section.
const sideDiagramStyle = {
  width: '100%',
  display: 'block',
  borderRadius: '18px',
  border: '1px solid #fed7aa',
  boxShadow: '0 16px 36px rgba(124,45,18,0.12)',
};

// Brochure photograph with the caption bar used in the original PDF.
// `fill` lets the figure stretch to the height of whatever sits beside it in a grid row.
const CaptionedPhoto = ({ src, alt, caption, height = 190, fill = false }) => (
  <figure
    style={{
      margin: 0,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 12px 28px rgba(15,23,42,0.14)',
      display: 'flex',
      flexDirection: 'column',
      height: fill ? '100%' : undefined,
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: fill ? 'auto' : `${height}px`,
        flex: fill ? '1 1 auto' : undefined,
        minHeight: fill ? 0 : undefined,
        objectFit: 'cover',
        display: 'block',
      }}
    />
    <figcaption
      style={{
        backgroundColor: ORANGE,
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 14px',
        fontSize: '0.88rem',
        fontWeight: 600,
        lineHeight: 1.45,
      }}
    >
      {caption}
    </figcaption>
  </figure>
);

// The four scientific pillars DMIT rests on.
const science = [
  'Fingerprints are Unique. No two individuals have the same fingerprints.',
  'Fingerprints and Brain Development happens simultaneously between the 13th to 21st week of pregnancy.',
  'Scientists have discovered that there is a co-relation between the brain development and the fingerprint patterns.',
  "Fingerprints don't change in one's entire lifetime.",
];

const didYouKnow = [
  "The Pattern of the fingerprints don't change & that is absolute way to find the inborn talent of you and your child.",
  'Every child is Unique & born Genius.',
  'Every child has 8-types of Intelligence Skills.',
  'Your child could be a left Brain thinker or Right Brain thinker.',
];

// Eight Kinds Of Intelligence. The brochure diagram names them; the one-line
// descriptions are the standard meaning of each, kept short so the cards stay compact.
const intelligences = [
  { icon: User, label: 'Intrapersonal', desc: 'Understanding oneself' },
  { icon: Users, label: 'Interpersonal-Social', desc: 'Relating well to others' },
  { icon: Leaf, label: 'Naturalistic-Physical World', desc: 'Connecting with nature' },
  { icon: Music, label: 'Musical-Rhythmic', desc: 'Sensing rhythm and melody' },
  { icon: BookOpen, label: 'Verbal-Linguistic', desc: 'Strength with words' },
  { icon: PersonStanding, label: 'Bodily-Kinesthetic', desc: 'Learning through movement' },
  { icon: Calculator, label: 'Logical-Mathematical', desc: 'Reasoning with numbers' },
  { icon: Shapes, label: 'Visual-Spatial', desc: 'Thinking in images and space' },
];

// Brain zone ↔ finger mapping read from the fingerprints.
const zones = [
  { no: '1', zone: 'Pre-Frontal', traits: 'Human Characteristics (including sub-conscious behaviour)', finger: 'Thumb' },
  { no: '2', zone: 'Post-Frontal', traits: 'Thinking Style (logical or creative)', finger: 'Index finger' },
  { no: '3', zone: 'Parietal', traits: 'Kinesthetic Ability (fine & gross motor skills)', finger: 'Middle finger' },
  { no: '4', zone: 'Temporal', traits: 'Auditory Ability (listening skill & music appreciation)', finger: 'Ring finger' },
  { no: '5', zone: 'Occipital', traits: 'Visual Ability (reading or observation skill and image appreciation)', finger: 'Little finger' },
];

const findOut = [
  "Your child's Inborn Intelligence",
  "Your child's learning pattern",
  'Whether your child is logical or creative',
  'How your child memorizes information',
  "Your child's areas of interest or activities",
  'Which career your child is likely to excel in',
  "Your child's Personality Type",
  "Your child's Inborn Potential",
];

const challenges = [
  { icon: HelpCircle, text: 'Confusion & Lack of Clarity' },
  { icon: Target, text: 'Lack of Focus & Concentration' },
  { icon: TrendingDown, text: 'Lack of Motivation & Lack of Confidence' },
  { icon: Hourglass, text: 'Laziness & Procrastination' },
  { icon: HeartCrack, text: 'Sadness, Hurt, Impatience (Lack of Emotional Control)' },
  { icon: ThumbsDown, text: 'Disrespect, Taking things for granted and Lacking responsibility' },
  { icon: CloudRain, text: 'Feeling Depressed' },
  { icon: Smartphone, text: 'Addiction to Smartphones, Social Media, Internet, TV, Tabs, Gaming' },
  { icon: Cookie, text: 'Cravings for Junk Food' },
  { icon: Ban, text: 'Addiction to Smoking, Alcohol and Drugs' },
];

// The two things the brochure says successful parents have understood.
// Photos from Unsplash (free licence), downloaded into /public rather than hot-linked:
// unsplash.com/photos/photo-1585853088189-7c7fadd9b38e and photo-1620777462689-babf6dcd8706
const secretCards = [
  {
    file: 'secret-unique-children.jpg',
    alt: 'Three children of different backgrounds smiling together',
    title: 'That their children are Unique and Different',
  },
  {
    file: 'secret-guiding-child.jpg',
    alt: 'A mother reading a picture book with her young daughter',
    title: "And they have understood how to Condition the Child's Mind",
  },
];

const secret = [
  'There is an International Technology available today to understand your Child through understanding the development of your Child’s brain.',
  "You can exactly know your Child's Natural Talents, Strengths and Abilities, the child's Personality, Learning Style, Acquiring Method, his/her Quotients.",
  'You can also know what you should do to get the best results from your child and help him/her to be Successful and Happy!',
  "This test gives upto 95% accuracy, which will enable you to know exactly what your child's talents are.",
];

const reliable = [
  'The test is completely Scientific. It is not based on a paper-pen test but directly generated from the fingerprints.',
  'The fingerprint patterns of each finger indicates how each lobe of the brain was developed at the time of birth. Which means they indicate the Natural talents gifted to the child.',
  'You will be able to understand your Child better allowing you to have a happier, healthier relationship with the child.',
  "Your child's academics will improve as they will understand their learning styles.",
  'You will understand their natural and god gifted talents which will help in taking a decision for their career.',
  'You will be able to help your Child unleash his/her highest potential and succeed in life by creating excellence.',
];

// Steps To Success
const steps = [
  { icon: ClipboardList, title: 'Register', text: 'Enquire and book your counselling slot.' },
  { icon: ScanLine, title: 'Fingerprints', text: 'All ten prints captured — quick and non-invasive.' },
  { icon: Fingerprint, title: 'Analysis', text: 'Ridge patterns read against the brain lobes.' },
  { icon: BarChart3, title: 'Reports', text: 'A detailed multiple-intelligence profile.' },
  { icon: MessagesSquare, title: 'Counselling', text: 'A personal session turns the report into guidance.' },
  { icon: TrendingUp, title: 'Success', text: 'Moving forward on real, inborn strengths.' },
];

const DmitCounsellingPage = () => {
  return (
    <div className="dm-page" style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)', borderBottom: '1px solid #fed7aa' }}>
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3.4rem)', lineHeight: 1.12, color: DEEP, margin: '18px 0 16px' }}>
              Dermatoglyphics Multiple Intelligence Test for your child's <span style={{ color: ORANGE }}>success and happiness</span>
            </h1>
            <p style={{ fontSize: '1.08rem', color: '#7c2d12', lineHeight: 1.8, maxWidth: '560px' }}>
              DMIT is a sophisticated technology used to understand the Multiple Intelligences of a person through their
              fingerprint patterns — a finger print analysis that reveals inborn intelligence, learning style and natural
              talent, delivered through a personal one-on-one counselling session.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#9a3412', marginTop: '14px', fontWeight: 700 }}>
              Dermatoglyphics is a Statistically Proven International Technology.
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
              src={img('dmit-children.jpg')}
              alt="Four smiling children lying on the grass"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 22px 50px rgba(234,88,12,0.22)' }}
            />
            <div
              className="dm-hero-badge"
              style={{
                position: 'absolute',
                bottom: '-18px',
                left: '-18px',
                maxWidth: 'calc(100% + 18px)',
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
                <div style={{ fontWeight: 800, color: DEEP, fontSize: '1.1rem' }}>Upto 95% accuracy</div>
                <div style={{ fontSize: '0.8rem', color: '#9a3412' }}>directly from the fingerprints</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      {/* <section className="section">
        <div className="container dm-two" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '46px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2rem)', color: DEEP, marginBottom: '18px' }}>Introduction</h2>
            <p style={{ color: '#9a3412', fontSize: '1rem', lineHeight: 1.85, marginBottom: '16px' }}>
              Dermatoglyphics refers to the branch of science in the study of the patterns of skins (dermal) ridges
              present on the fingers, toes, and the soles of human. Scientifically, it has been proven that no two
              people can have the same fingerprints in this world. And once a child is born, his fingerprints are
              completely developed and they remain unchanged till the end of life.
            </p>
            <p style={{ color: '#9a3412', fontSize: '1rem', lineHeight: 1.85, marginBottom: '16px' }}>
              We all know that our entire body is controlled by brain. Brain has 2 parts — Left Brain and Right Brain.
              The Right Part of our body is controlled by Left Brain and the Left Part of the body is controlled by
              Right Brain.
            </p>
            <p style={{ color: '#9a3412', fontSize: '1rem', lineHeight: 1.85, marginBottom: '16px' }}>
              Medical experts and scientists thus discovered that the amount of brain cells distributed in different
              part of the brain helps us understand a person's multiple intelligence as well as his innate potential
              capabilities and personality.
            </p>
            <p style={{ color: '#9a3412', fontSize: '1rem', lineHeight: 1.85 }}>
              Our fingerprints reveal to us what we need and how we learn, transforming our lives through a holistic
              education approach.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            <img
              src={img('intro-fingerprint-scan.jpg')}
              alt="A fingerprint illuminated on a biometric scanner, showing its ridge pattern"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '22px', display: 'block', boxShadow: '0 18px 40px rgba(15,23,42,0.18)' }}
            />
            <figcaption style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.86rem', color: '#9a3412' }}>
              Dermatoglyphics — the science of the ridge patterns on our fingertips.
            </figcaption>
          </figure>
        </div>
      </section> */}

      {/* THE SCIENCE — four pillars */}
      <section className="section" style={{ backgroundColor: DEEP, color: '#ffffff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#ffffff' }}>DMIT — Dermatoglyphics Multiple Intelligence Test</h2>
            <p style={{ color: '#fdba74' }}>
              We have multiple intelligences e.g. logical, linguistic, intrapersonal, interpersonal, etc. DMIT reads them
              through your fingerprint patterns.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%),1fr))', gap: '18px' }}>
            {science.map((f, i) => (
              <div key={f} style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(253,186,116,0.35)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fb923c', marginBottom: '8px' }}>0{i + 1}</div>
                <p style={{ color: '#fed7aa', fontSize: '0.95rem', lineHeight: 1.6 }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DID YOU KNOW */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Did you know?</h2>
            <p>The facts that make DMIT an absolute way to find inborn talent.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%),1fr))', gap: '18px' }}>
            {didYouKnow.map((d) => (
              <div key={d} style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '16px', padding: '24px', display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color={ORANGE} style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: '#9a3412', fontSize: '0.96rem', lineHeight: 1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EIGHT KINDS OF INTELLIGENCE */}
      <section className="section" style={{ backgroundColor: '#fff7ed' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Eight kinds of intelligence</h2>
            <p>Every child has 8 types of intelligence skills — DMIT shows you which ones are strongest.</p>
          </div>
          <div className="dm-fitrow" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'stretch' }}>
            <img
              src={img('dmit-eight-intelligences.jpg')}
              alt="Chart of the eight kinds of intelligence radiating from a brain"
              style={{ ...sideDiagramStyle, alignSelf: 'start' }}
            />
            <div
              className="dm-fit dm-cards-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(4, 1fr)', gap: '12px', height: '100%' }}
            >
              {intelligences.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    minHeight: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #fed7aa',
                    borderRadius: '14px',
                    padding: '11px 14px',
                  }}
                >
                  <span style={{ display: 'grid', placeItems: 'center', width: '34px', height: '34px', borderRadius: '10px', background: `linear-gradient(135deg, ${ORANGE}, #f97316)`, flexShrink: 0 }}>
                    <Icon size={18} color="#ffffff" />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: '0.85rem', color: DEEP, lineHeight: 1.35 }}>{label}</h3>
                    <p style={{ fontSize: '0.76rem', color: '#9a3412', lineHeight: 1.45, marginTop: '2px' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRAIN ZONES ↔ FINGERS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Each finger maps to a lobe of the brain</h2>
            <p>The fingerprint patterns of each finger indicate how each lobe of the brain was developed at the time of birth.</p>
          </div>
          <div className="dm-fitrow" style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: '36px', alignItems: 'stretch' }}>
            <img
              src={img('dmit-brain-zones.jpg')}
              alt="Diagram mapping each of the five brain zones to a finger and its traits"
              style={{ ...sideDiagramStyle, alignSelf: 'start' }}
            />
            <div className="dm-fit" style={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: '12px', height: '100%' }}>
              {zones.map(({ no, zone, traits, finger }) => (
                <div
                  key={no}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    minHeight: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderLeft: `4px solid ${ORANGE}`,
                    borderRadius: '12px',
                    padding: '10px 16px',
                  }}
                >
                  <span
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: '26px',
                      height: '26px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      backgroundColor: '#ffedd5',
                      color: DEEP,
                      fontSize: '0.8rem',
                      fontWeight: 800,
                    }}
                  >
                    {no}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '3px' }}>
                      <h3 style={{ fontSize: '0.96rem', color: DEEP }}>{zone}</h3>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '999px', padding: '2px 9px' }}>
                        <Fingerprint size={12} color={ORANGE} />
                        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: DEEP }}>{finger}</span>
                      </span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.79rem', lineHeight: 1.45 }}>{traits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DMIT HELPS YOU FIND OUT */}
      <section className="section" style={{ backgroundColor: '#fff7ed' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>DMIT helps you find out…</h2>
            <p>Clear, personalised insight into your child instead of guesswork.</p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%),1fr))', gap: '12px' }}>
              {findOut.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', backgroundColor: '#ffffff', border: '1px solid #fed7aa', borderRadius: '12px', padding: '14px 18px' }}>
                  <Brain size={18} color={ORANGE} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: DEEP, fontSize: '0.95rem', lineHeight: 1.55 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CHALLENGES FACED BY PARENTS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Challenges faced by parents</h2>
            <p>Let us see some of the most commonly faced challenges by parents…</p>
          </div>
          <div className="dm-challenge" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: '24px', alignItems: 'stretch' }}>
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '20px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <AlertTriangle size={22} color="#dc2626" />
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem' }}>Commonly faced challenges</h3>
              </div>
              <ul className="dm-cards-2" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {challenges.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    style={{
                      display: 'flex',
                      gap: '11px',
                      alignItems: 'center',
                      backgroundColor: '#ffffff',
                      border: '1px solid #fecaca',
                      borderRadius: '11px',
                      padding: '11px 13px',
                    }}
                  >
                    <span style={{ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '9px', backgroundColor: '#fee2e2', flexShrink: 0 }}>
                      <Icon size={16} color="#dc2626" />
                    </span>
                    <span style={{ color: '#7f1d1d', fontSize: '0.87rem', lineHeight: 1.45 }}>{text}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '20px', color: '#991b1b', fontSize: '0.96rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                So the challenges are many and these are likely to increase with time…
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px', height: '100%' }}>
              <CaptionedPhoto
                src={img('dmit-child-not-understanding.jpg')}
                alt="A boy holding his head in frustration while a teacher explains a lesson"
                caption="Your child does not understand your teaching"
                fill
              />
              <CaptionedPhoto
                src={img('dmit-teaching-difficulty.jpg')}
                alt="A mother struggling to help her son study from a textbook"
                caption="Difficulties in teaching your CHILD"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE SECRET */}
      <section className="section" style={{ backgroundColor: '#fff7ed' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>But despite the challenges, some parents succeed. Why?</h2>
            <p>The secret is that very few parents have understood two things.</p>
          </div>
          <div className="dm-secret" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {secretCards.map(({ file, alt, title }, i) => (
              <article
                key={title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  border: '1px solid #fed7aa',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 26px rgba(124,45,18,0.08)',
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={img(file)} alt={alt} style={{ width: '100%', height: '196px', objectFit: 'cover', display: 'block' }} />
                  <span
                    style={{
                      position: 'absolute',
                      left: '20px',
                      bottom: '-21px',
                      display: 'grid',
                      placeItems: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: ORANGE,
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      border: '3px solid #ffffff',
                      boxShadow: '0 6px 14px rgba(124,45,18,0.3)',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div style={{ padding: '34px 24px 26px' }}>
                  <h3 style={{ fontSize: '1.12rem', color: DEEP, lineHeight: 1.5 }}>{title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="dm-secret-2" style={{ display: 'grid', gridTemplateColumns: '0.34fr 1fr', gap: '24px', alignItems: 'stretch' }}>
            <CaptionedPhoto
              src={img('dmit-child-alone.jpg')}
              alt="A child sitting alone by a window, hugging their knees"
              caption="Children do not understand themselves"
              fill
            />
            <div style={{ display: 'grid', gap: '12px' }}>
              {secret.map((s) => (
                <div key={s} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', backgroundColor: '#ffffff', border: '1px solid #fed7aa', borderRadius: '14px', padding: '16px 20px' }}>
                  <CheckCircle2 size={20} color={ORANGE} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: '#9a3412', fontSize: '0.95rem', lineHeight: 1.65 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DMIT IS SO RELIABLE */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Why DMIT is so reliable</h2>
            <p>Not a paper-pen test — a scientific reading generated directly from the fingerprints.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%),1fr))', gap: '20px' }}>
            {reliable.map((r) => (
              <div
                key={r}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '26px',
                  boxShadow: '0 6px 18px rgba(124,45,18,0.05)',
                }}
              >
                <ShieldCheck size={26} color={ORANGE} style={{ marginBottom: '14px' }} />
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>{r}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', color: ORANGE, fontWeight: 700, fontSize: '1.05rem' }}>
            …and much much more.
          </p>
        </div>
      </section>

      {/* STEPS TO SUCCESS */}
      <section className="section" style={{ backgroundColor: '#fff7ed' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: DEEP }}>Steps to success</h2>
            <p>From registration to a confident, personalised way forward.</p>
          </div>
          <div className="dm-fitrow" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'stretch' }}>
            <img
              src={local_img('imaginebuddy-blocks-9164225_1920.jpg')}
              alt="Two people in a one-to-one counselling session across a table"
              style={{ ...sideDiagramStyle, aspectRatio: '3/2', objectFit: 'cover', alignSelf: 'start' }}
            />
            <div
              className="dm-fit dm-cards-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)', gap: '12px', height: '100%' }}
            >
              {steps.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  style={{
                    position: 'relative',
                    minHeight: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: `4px solid ${ORANGE}`,
                    borderRadius: '14px',
                    padding: '14px 16px',
                  }}
                >
                  <span style={{ position: 'absolute', top: '10px', right: '14px', fontSize: '1.5rem', fontWeight: 800, color: '#ffedd5' }}>{i + 1}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '5px' }}>
                    <Icon size={20} color={ORANGE} style={{ flexShrink: 0 }} />
                    <h3 style={{ fontSize: '0.98rem', color: DEEP }}>{title}</h3>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.5 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${DEEP}, ${ORANGE})`, padding: '58px 0', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <UserCheck size={34} style={{ marginBottom: '12px' }} />
          <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '12px' }}>Understand your child's true potential</h2>
          <p style={{ color: '#fed7aa', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '26px' }}>
            Book a one-on-one family counselling session using DMIT and help your child unleash their highest potential
            and succeed in life by creating excellence.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '26px' }}>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: DEEP, borderColor: '#ffffff' }}>
              Book your session <ArrowRight size={16} />
            </Link>
          </div>
          <p style={{ color: '#ffedd5', fontSize: '0.92rem', marginBottom: '12px' }}>
            For any assistance, please call or WhatsApp:
          </p>
          <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.95rem' }}>
            <a href="tel:+919702376872" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700 }}>
              <Phone size={16} /> 97023 76872
            </a>
            <a href="mailto:subhash.wangde@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700 }}>
              <Mail size={16} /> subhash.wangde@gmail.com
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Long technical words ("Dermatoglyphics") must never force a horizontal scrollbar. */
        .dm-page h1, .dm-page h2, .dm-page h3, .dm-page p, .dm-page li, .dm-page a {
          overflow-wrap: break-word;
        }
        .dm-page img { max-width: 100%; }

        /* Narrower than this the diagram is too short for the cards to sit beside it,
           so the pair stacks and the cards fall back to their natural height. */
        @media (max-width: 1150px) {
          .dm-fitrow { grid-template-columns: 1fr !important; }
          .dm-fit { height: auto !important; grid-template-rows: none !important; }
        }
        @media (max-width: 900px) {
          .dm-hero, .dm-two, .dm-challenge, .dm-secret, .dm-secret-2 { grid-template-columns: 1fr !important; }
          .dm-hero { padding: 48px 20px !important; gap: 34px !important; }
        }
        @media (max-width: 560px) {
          .dm-cards-2 { grid-template-columns: 1fr !important; }
          /* Keep the floating stat card clear of the screen edge on phones. */
          .dm-hero-badge { left: 0 !important; bottom: -14px !important; padding: 13px 16px !important; }
          .dm-hero { padding: 36px 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default DmitCounsellingPage;
