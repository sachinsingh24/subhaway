import React, { useState } from 'react';
import { Phone, Mail, Globe, Send, CheckCircle2, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const ContactSection = ({ selectedProgramFromState }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgramFromState || 'Mind Power Unlimited for Public',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Who can attend the Mind Power Unlimited workshop?',
      a: 'Business People, Solopreneurs, Corporate Professionals, Housewives, Students, and Senior Citizens. Anyone who wants to achieve peak performance, eliminate stress, and double their success.',
    },
    {
      q: 'What is DMIT and how does it help my child?',
      a: 'DMIT (Dermatoglyphics Multiple Intelligence Test) analyzes fingerprint patterns to decode your child’s inborn 8 types of intelligence, brain hemisphere dominance, and ideal learning & career paths.',
    },
    {
      q: 'Are the workshops held online or offline?',
      a: 'We conduct both offline live classroom workshops across cities as well as interactive online webinars and 1-on-1 personal coaching sessions.',
    },
    {
      q: 'How does Mr. Subhash Wangde coach corporate teams?',
      a: 'Through customized 1-day or 2-day workshops ("Unleash the Power Within"), focusing on employee alignment, sales mastery, leadership decision making, and stress elimination.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2>
            Start Your <span className="text-gradient">Success Journey</span> Today
          </h2>
          <p>Have questions or want to register for our upcoming workshop? Reach out directly to our academy team.</p>
        </div>

        {/* Form and Contact Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '48px',
            marginBottom: '72px',
          }}
          className="contact-grid"
        >
          {/* Contact Details Column */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>
              Shubhaway Development Academy
            </h3>
            <p style={{ color: '#00b4d8', fontWeight: 600, fontSize: '1.05rem', marginBottom: '24px' }}>
              The Success Curve for your Business & Life
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              We are committed to helping you unleash your highest inner potential. Contact us for training programs, executive coaching, or DMIT family counseling.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <a
                href="tel:+917875506912"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0,180,216,0.12)',
                    color: '#00b4d8',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Call / WhatsApp</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0b132b' }}>+91 7875506912</p>
                </div>
              </a>

              <a
                href="mailto:subhash.wangde@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(124, 58, 237, 0.12)',
                    color: '#7c3aed',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Official Email</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0b132b' }}>subhash.wangde@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.subhashwangde.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                  }}
                >
                  <Globe size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Website</p>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0b132b' }}>www.subhashwangde.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    margin: '0 auto 24px auto',
                  }}
                >
                  <CheckCircle2 size={44} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0b132b', marginBottom: '12px' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '28px' }}>
                  Your inquiry for <strong>{formData.program}</strong> has been received. Mr. Subhash Wangde’s team will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', program: 'Mind Power Unlimited for Public', message: '' });
                  }}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0b132b', marginBottom: '4px' }}>
                  Reserve Your Spot / Inquiry
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2-col">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Select Program or Service
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '1rem',
                      outline: 'none',
                      background: '#ffffff',
                    }}
                  >
                    <option value="Mind Power Unlimited for Public">Mind Power Unlimited for Public</option>
                    <option value="Super Student Unlimited">Super Student Unlimited</option>
                    <option value="Unleash the Power Within for Corporates">Unleash the Power Within for Corporates</option>
                    <option value="Stress Free Living Workshop">Stress Free Living Workshop</option>
                    <option value="One-on-One Family Counselling using DMIT">One-on-One Family Counselling using DMIT</option>
                    <option value="Signed Book Order: Small Steps, Big Growth">Book Order: Small Steps, Big Growth</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Message / Special Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '16px' }}>
                  <Send size={18} /> Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0b132b', textAlign: 'center', marginBottom: '32px' }}>
            Frequently Asked Questions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#ffffff',
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '20px 24px',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#0b132b',
                  }}
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} color="#00b4d8" /> : <ChevronDown size={20} color="#64748b" />}
                </button>

                {activeFaq === idx && (
                  <div style={{ padding: '20px 24px', color: '#475569', lineHeight: 1.7, fontSize: '0.975rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
