import React from 'react';
import { X, CheckCircle, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';

const ProgramModal = ({ program, onClose, onSelectProgram }) => {
  if (!program) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(11, 19, 43, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
          position: 'relative',
          padding: '36px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f172a',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <span className="badge badge-primary" style={{ marginBottom: '12px' }}>
            {program.category}
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0b132b', marginTop: '8px' }}>
            {program.title}
          </h3>
          <p style={{ color: '#00b4d8', fontWeight: 600, fontSize: '1.05rem', marginTop: '4px' }}>
            {program.subtitle}
          </p>
        </div>

        {/* Key Attributes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            background: '#f8fafc',
            padding: '16px 20px',
            borderRadius: '16px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={20} color="#4f46e5" />
            <div>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Target Audience</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>{program.audience}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={20} color="#10b981" />
            <div>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Format & Duration</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>{program.duration}</p>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0b132b', marginBottom: '12px' }}>
            Program Overview
          </h4>
          <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.6 }}>
            {program.fullDescription}
          </p>
        </div>

        {/* Core Topics Covered */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0b132b', marginBottom: '16px' }}>
            What You Will Learn / Outcomes
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {program.highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: '#ffffff',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <CheckCircle size={18} color="#00b4d8" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.925rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '12px 24px' }}>
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectProgram(program.title);
            }}
            className="btn-primary"
            style={{ padding: '12px 28px' }}
          >
            <Sparkles size={16} /> Enroll / Inquire Now <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
