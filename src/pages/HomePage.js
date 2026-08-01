import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, ChevronRight } from 'lucide-react';
import servicesData from '../data/servicesData';
import blogPosts, { formatBlogDate } from '../data/blogPosts';

const HomePage = () => {
  const recentPosts = blogPosts.filter((post) =>
    ['science-of-subconscious-mind', 'student-exam-stress-management', 'dmit-fingerprint-science'].includes(post.id)
  );

  const founderHighlights = [
    { value: '22+ Years', label: 'Corporate leadership experience' },
    { value: '10,000+', label: 'Lives touched through workshops and coaching' },
    { value: '10 Million', label: 'People to empower by 2032' },
  ];

  return (
    <div>
      <section className="home-hero-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
            className="hero-grid home-hero-grid"
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f6e7f1',
                  color: '#7c2b59',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  marginBottom: '16px',
                }}
              >
                Training | Coaching | Consulting | Counselling
              </span>
              <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                Shubhaway Development Academy
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '28px', lineHeight: 1.6 }}>
                Helping small business owners, corporate professionals, solopreneurs, and students unleash their highest potential through mind power techniques and structured personal coaching.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn-primary">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="home-hero-image" style={{ textAlign: 'center' }}>
              <img
                src="/images/DSC_9895 ready.jpg"
                alt="Mr. Subhash Wangde - Founder"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '1px solid #cbd5e1',
                }}
              />
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                Mr. Subhash Wangde - Certified Mind Power Trainer & Counsellor
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '30px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '20px',
              textAlign: 'center',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#95346b', marginBottom: '4px' }}>10,000+</h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Lives Transformed Across India</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#95346b', marginBottom: '4px' }}>22+ Years</h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Corporate Leadership Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#95346b', marginBottom: '4px' }}>10 Million</h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>2032 Empowerment Vision</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#95346b', marginBottom: '4px' }}>Jack Canfield</h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Personally Trained Coach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our Core Philosophy</h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '24px', lineHeight: 1.7 }}>
              "All Humans are equally powerful. The only difference is some have learned how to TAP into their Inner Potential to become SUCCESSFUL while others have no idea of how to use this POTENTIAL."
            </p>
            <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '28px' }}>
              Founded in 2019 by Mr. Subhash Wangde, Shubhaway Development Academy conducts experiential workshops and DMIT counseling sessions designed to shatter limiting beliefs and build a permanent mindset for success.
            </p>
            <Link to="/about" className="btn-outline">
              Learn More About Our Story <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>Overview of All Services</h2>
            <p>Browse every Shubhaway service in one responsive section and open the dedicated page for the one that matches your current goal.</p>
          </div>

          <div
            className="home-services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: '24px',
              marginBottom: '36px',
            }}
          >
            {servicesData.map((service) => (
              <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    display: 'block',
                    backgroundColor: '#f8fafc',
                  }}
                />

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: service.accentColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.category}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '8px', marginBottom: '12px' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{service.homeSummary}</p>
                  </div>

                  <span
                    style={{
                      display: 'block',
                      padding: '12px 14px',
                      borderRadius: '14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.88rem',
                      color: '#334155',
                      lineHeight: 1.55,
                    }}
                  >
                    {service.duration}
                  </span>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to={service.path} className="btn-outline" style={{ padding: '10px 14px', fontSize: '0.88rem' }}>
                      View service page
                    </Link>
                    <Link to="/contact" style={{ fontSize: '0.9rem', fontWeight: 600, color: service.accentColor, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Contact for this service <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn-primary">
              Browse the Full Services Page <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.1fr',
              gap: '40px',
              alignItems: 'stretch',
            }}
            className="founder-story-grid"
          >
            <div className="card" style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)', borderTop: '4px solid #95346b' }}>
              <span style={{ color: '#95346b', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Leadership Journey
              </span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '8px', marginBottom: '12px' }}>Impact at a glance</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                Shubhaway Development Academy is built on decades of leadership experience, deep coaching practice, and a long-term mission to transform lives at scale.
              </p>

              <div style={{ display: 'grid', gap: '14px', marginBottom: '24px' }}>
                {founderHighlights.map((item) => (
                  <div key={item.label} style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid #dbeafe' }}>
                    <strong style={{ display: 'block', fontSize: '1.15rem', color: '#0f172a', marginBottom: '4px' }}>{item.value}</strong>
                    <span style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px 18px', borderRadius: '14px', backgroundColor: '#0f172a' }}>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '14px' }}>
                  The academy focuses on practical transformation: stronger mindset, clearer goals, better performance, and healthier day-to-day decisions.
                </p>
                <Link to="/about" className="btn-primary">
                  Discover the Full Story <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* The portrait is absolutely positioned so it adds no height of its own;
                  its wrapper then grows into whatever the text below leaves spare, so
                  this column finishes exactly level with the stats card beside it. */}
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 auto',
                  minHeight: '220px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/DSC_9897.jpg"
                  alt="Mr. Subhash Wangde"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    // Portrait shot — bias the crop upward so the face stays in frame.
                    objectPosition: 'center 22%',
                    display: 'block',
                  }}
                />
              </div>

              <span style={{ color: '#95346b', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', flexShrink: 0 }}>
                Chief Counsellor
              </span>
              <h2 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '16px' }}>
                Mr. Subhash Wangde
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Subhash Wangde is an Electronics & Telecommunication Engineer from Mumbai University. After working for 22 years in a lucrative corporate career, he chose to follow his passion of transforming lives through mind power training and coaching.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                  <CheckCircle size={16} color="#95346b" /> Personally trained by America's #1 Success Coach - Jack Canfield
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                  <CheckCircle size={16} color="#95346b" /> Author of International Best-Selling Book "Small Steps, Big Growth"
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                  <CheckCircle size={16} color="#95346b" /> DMIT Certified Family & Career Counsellor
                </div>
              </div>
              <Link to="/about" className="btn-outline">
                Read Full Biography <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>Latest Insights & Blog</h2>
            <p>Read our educational articles on mind techniques, student success, and stress management.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '24px',
              marginBottom: '36px',
            }}
          >
            {recentPosts.map((post) => (
              <div key={post.id} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748b', marginBottom: '8px' }}>
                  <Calendar size={14} color="#95346b" />
                  <span style={{ fontWeight: 600 }}>{formatBlogDate(post.date)}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>{post.summary}</p>
                <Link to="/blog" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#95346b', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Read Full Article <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" className="btn-outline">
              Visit Blog Page <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '50px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '12px' }}>
            Ready to Begin Your Success Journey?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', marginBottom: '24px' }}>
            Contact us today to inquire about our upcoming public workshops, corporate training sessions, or DMIT family counseling.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '12px 32px' }}>
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        .home-hero-section {
          min-height: calc(100dvh - 76px);
          display: flex;
          align-items: center;
        }

        .home-hero-image img {
          max-height: min(72dvh, 680px);
          object-fit: cover;
          object-position: center top;
        }

        @media (max-width: 1024px) {
          .home-hero-section {
            min-height: auto;
            padding: 52px 0 !important;
          }

          .home-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .founder-story-grid {
            grid-template-columns: 1fr !important;
          }

          .home-hero-image img {
            max-height: none;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }

          .home-hero-section {
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
