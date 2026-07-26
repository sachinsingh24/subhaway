import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

const AssessmentQuiz = ({ onSelectProgram }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState(null);

  const questions = [
    {
      title: 'What is your primary focus or challenge right now?',
      options: [
        {
          label: 'I want to double my business revenue and free up personal time',
          program: 'Mind Power Unlimited for Public',
          desc: 'Our Mind Power Unlimited workshop is tailor-made for Business Owners & Solopreneurs to clear limiting beliefs and scale income.',
        },
        {
          label: 'My child needs better focus, memory, exam confidence & career clarity',
          program: 'Super Student Unlimited',
          desc: 'Super Student Unlimited empowers students with memory techniques, exam stress control, and cellular transformation.',
        },
        {
          label: 'I face high stress, burnouts, insomnia, or physical fatigue',
          program: 'Stress Free Living Workshop',
          desc: 'Stress Free Living teaches Emotional Freedom Techniques (EFT), Power Naps, and subconscious healing.',
        },
        {
          label: 'I want to discover my child’s or my own true inborn talents & brain style',
          program: 'One-on-One Family Counselling using DMIT',
          desc: 'DMIT fingerprint scientific testing reveals your 8 inborn intelligences and ideal career roadmap.',
        },
        {
          label: 'I lead a corporate team facing pressure, attrition, and target demands',
          program: 'Unleash the Power Within for Corporates',
          desc: 'Unleash the Power Within aligns team dynamics, unlocks creative problem solving, and boosts employee motivation.',
        },
      ],
    },
  ];

  const handleSelectOption = (option) => {
    setResult(option);
    setCurrentStep(1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setResult(null);
  };

  return (
    <section className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-gold">
            <HelpCircle size={14} /> Interactive Finder
          </div>
          <h2>
            Find Your <span className="text-gradient">Ideal Transformation</span> Path
          </h2>
          <p>Answer 1 quick question to receive a personalized program recommendation tailored to your goal.</p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            background: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
          }}
        >
          {currentStep === 0 ? (
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0b132b', marginBottom: '24px' }}>
                {questions[0].title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {questions[0].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    style={{
                      textAlign: 'left',
                      padding: '18px 24px',
                      borderRadius: '16px',
                      background: '#f1f5f9',
                      border: '2px solid transparent',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00b4d8';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{opt.label}</span>
                    <ArrowRight size={18} color="#00b4d8" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <CheckCircle size={36} />
              </div>

              <span className="badge badge-primary" style={{ marginBottom: '12px' }}>
                Recommended Program
              </span>

              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0b132b', marginBottom: '12px' }}>
                {result.program}
              </h3>

              <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px auto', lineHeight: 1.6 }}>
                {result.desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={handleReset} className="btn-secondary" style={{ gap: '8px' }}>
                  <RotateCcw size={16} /> Re-take Finder
                </button>
                <button
                  onClick={() => onSelectProgram(result.program)}
                  className="btn-primary"
                >
                  <Sparkles size={16} /> Get Consult & Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssessmentQuiz;
