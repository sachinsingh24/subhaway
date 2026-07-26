import React, { useState } from 'react';
import { Phone, Mail, Globe, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import pageBanners from '../data/pageBanners';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Mind Power Unlimited for Public',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'How do I register for a workshop or counseling session?',
      a: 'You can submit the contact form on this page or call/WhatsApp us directly at +91 7875506912. Our academy team will provide available dates and registration details.',
    },
    {
      q: 'Who should attend the Mind Power Unlimited workshop?',
      a: 'Business Owners, Solopreneurs, Corporate Professionals, Housewives, Students, and Senior Citizens who wish to remove limiting beliefs and achieve peak success.',
    },
    {
      q: 'What age group is DMIT counseling suitable for?',
      a: 'DMIT fingerprint testing can be conducted for children as young as 3 years old, students, and adults seeking career path clarity.',
    },
    {
      q: 'Do you conduct corporate training sessions on-site at client premises?',
      a: 'Yes, Mr. Subhash Wangde conducts 1-day or 2-day corporate workshops ("Unleash the Power Within") customized for leadership and sales teams on-site across India.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div>
      <PageBanner
        tag="Get in Touch"
        title="Contact Us"
        description="Get in touch with Shubhaway Development Academy for workshop registrations, corporate training, or DMIT family counselling."
        image={pageBanners.contact}
      />

      {/* Main Contact Section */}
      <section className="section section-light">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'start',
            }}
            className="contact-grid"
          >
            {/* Contact Details */}
            <div>
              <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '24px' }}>
                <img
                  src="/images/DSC_9897.jpg"
                  alt="Mr. Subhash Wangde speaking during a live session"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '22px 24px' }}>
                  <span style={{ color: '#95346b', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Meet the Chief Counsellor
                  </span>
                  <h3 style={{ fontSize: '1.45rem', marginTop: '8px', marginBottom: '10px' }}>Mr. Subhash Wangde</h3>
                  <p style={{ fontSize: '0.93rem', color: '#475569', lineHeight: 1.7 }}>
                    Certified Mind Power Expert, success coach, and workshop leader guiding individuals, families, and organisations through practical transformation programs.
                  </p>
                </div>
              </div>

              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>
                Shubhaway Development Academy
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#95346b', fontWeight: 600, marginBottom: '20px' }}>
                Training • Coaching • Consulting • Counselling
              </p>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                We help individuals, students, and organizations achieve Peak Performance and Success through structured mind power systems.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <Phone size={20} color="#95346b" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Phone / WhatsApp</p>
                    <a href="tel:+917875506912" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>+91 7875506912</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <Mail size={20} color="#95346b" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Official Email</p>
                    <a href="mailto:subhash.wangde@gmail.com" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>subhash.wangde@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <Globe size={20} color="#95346b" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Official Website</p>
                    <a href="https://www.subhashwangde.com" target="_blank" rel="noreferrer" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>www.subhashwangde.com</a>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f6e7f1', padding: '18px', borderRadius: '6px', color: '#7c2b59', fontSize: '0.9rem' }}>
                <strong>Chief Counsellor:</strong> Mr. Subhash Wangde (Certified Mind Power Expert, Jack Canfield Trained Success Coach)
              </div>

              <div style={{ marginTop: '28px' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Follow us on social media
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      margin: '0 auto 16px auto',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Thank You, {formData.name}!</h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
                    Your inquiry regarding <strong>{formData.program}</strong> has been received. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', program: 'Mind Power Unlimited for Public', message: '' });
                    }}
                    className="btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '20px' }}>
                    Send Us an Inquiry
                  </h3>

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Program of Interest</label>
                    <select
                      className="form-control"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option value="Mind Power Unlimited for Public">Mind Power Unlimited for Public</option>
                      <option value="Super Student Unlimited">Super Student Unlimited</option>
                      <option value="Unleash the Power Within for Corporates">Unleash the Power Within for Corporates</option>
                      <option value="Stress Free Living Workshop">Stress Free Living Workshop</option>
                      <option value="One-on-One Family Counselling using DMIT">One-on-One Family Counselling using DMIT</option>
                      <option value="Signed Book Order: Small Steps, Big Growth">Book Order: Small Steps, Big Growth</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message / Specific Questions</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Please enter any specific details or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: '800px', margin: '50px auto 0 auto' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#0f172a', textAlign: 'center', marginBottom: '24px' }}>
              Frequently Asked Questions
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      backgroundColor: '#f8fafc',
                      border: 'none',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#0f172a',
                      display: 'flex',
                      justify: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp size={18} color="#95346b" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>
                  {activeFaq === idx && (
                    <div style={{ padding: '16px 20px', fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
