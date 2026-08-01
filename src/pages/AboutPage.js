import React from 'react';
import { CheckCircle, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import pageBanners from '../data/pageBanners';
import SocialLinks from '../components/SocialLinks';

const AboutPage = () => {
  const credentials = [
    'Electronics & Telecommunication Engineer from Mumbai University',
    '22 Years of successful Corporate Leadership experience prior to coaching',
    'Personally trained by America’s #1 Success Coach - Mr. Jack Canfield',
    'Over 4+ years of conducting transformational workshops across India',
    'Touched and empowered over 10,000+ lives across public and corporate sectors',
    'Author of International Best-Selling book "Small Steps, Big Growth"',
  ];

  return (
    <div>
      <PageBanner
        tag="About Shubhaway"
        title="About Us"
        description="Learn about Shubhaway Development Academy, our founder Mr. Subhash Wangde, and our vision to empower millions with practical life-changing tools."
        image={pageBanners.about}
      />

      {/* Academy Overview Section */}
      <section className="section section-light">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <div>
              <span style={{ color: '#95346b', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Established in 2019
              </span>
              <h2 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '16px' }}>
                Shubhaway Development Academy
              </h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                Founded in 2019 by Mr. Subhash Wangde, Shubhaway Development Academy strives to help individuals and business owners achieve their goals, big and small.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                We help small business owners, CEOs, solopreneurs, students, and corporate professionals to understand and unleash their highest potential through mind tools & techniques. This helps them double their business while freeing their time and involvement.
              </p>
              <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '6px', borderLeft: '4px solid #95346b', fontSize: '0.95rem', color: '#334155' }}>
                <strong>Our Conviction:</strong> All humans are equally powerful. The only difference is some have learned how to TAP into their Inner Potential to become successful while others have no idea of how to use this potential.
              </div>
            </div>

            <div>
              <img
                src={pageBanners.about}
                alt="Shubhaway Academy learning and discussion session"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid #cbd5e1' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>Vision & Mission</h2>
            <p>Guiding principles that drive our academy and training programs.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: '24px',
            }}
          >
            {/* Vision */}
            <div className="card" style={{ borderTop: '4px solid #95346b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Eye size={24} color="#95346b" />
                <h3 style={{ fontSize: '1.4rem' }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>
                To inspire, motivate, and empower <strong>10 Million people</strong> to live happier, healthier, and more successful lives by <strong>2032</strong>.
              </p>
            </div>

            {/* Mission */}
            <div className="card" style={{ borderTop: '4px solid #0f172a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Target size={24} color="#0f172a" />
                <h3 style={{ fontSize: '1.4rem' }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>
                To make a difference to the lives of thousands by empowering them with tools and techniques to live happier, healthier & more successful lives through coaching, training, mentoring, and DMIT counseling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Biography */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Founder & Chief Counsellor</h2>
            <p>Mr. Subhash Wangde — Certified Mind Power Trainer & Counsellor</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '40px',
            }}
            className="about-grid"
          >
            <div>
              <img
                src="/images/DSC_9900-1.jpg"
                alt="Mr. Subhash Wangde"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid #cbd5e1' }}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '8px' }}>
                Subhash Wangde
              </h3>
              <p style={{ color: '#95346b', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>
                Certified Mind Power Trainer | Key-note Speaker | Author
              </p>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                Subhash Wangde completed his engineering degree from Mumbai University. He worked for 22 years in senior corporate management roles before giving up his lucrative career to follow his true passion: making a tangible difference in people's lives.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                Above all, he has been personally trained by America’s leading Success Coach, <strong>Mr. Jack Canfield</strong> (co-author of <em>Chicken Soup for the Soul</em> and <em>The Success Principles</em>). He conducts public workshops, corporate training, motivational talks, and DMIT family counseling.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {credentials.map((cred, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle size={16} color="#95346b" style={{ flexShrink: 0 }} />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Connect with us
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Book Highlight Row */}
          <div
            className="card book-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: '24px',
              alignItems: 'center',
              backgroundColor: '#f8fafc',
            }}
          >
            <img
              src="/images/Small_step_Big_growth.jpeg"
              alt="Small Steps, Big Growth Book Cover"
              style={{ width: '100%', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            />
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#95346b', textTransform: 'uppercase' }}>
                International Best-Selling Book
              </span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '4px', marginBottom: '8px' }}>
                SMALL STEPS, BIG GROWTH
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '12px' }}>
                Authored by Subhash Wangde, this book provides actionable step-by-step guidance on how micro daily habits and mind power alignment compound into exponential career, health, and financial growth.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                Inquire Book Copy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid, .book-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
