import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData, { getServiceById } from '../data/servicesData';
import PageBanner from '../components/PageBanner';
import pageBanners from '../data/pageBanners';

// This page renders the services overview grid at /services.
// Each individual service now has its own dedicated, uniquely-designed page
// (see src/pages/services/*). The :serviceId route only reaches here for an
// unknown id, in which case we show a friendly "not found" state.
const ServicesPage = () => {
  const { serviceId } = useParams();
  const isUnknownService = serviceId && !getServiceById(serviceId);

  if (isUnknownService) {
    return (
      <div>
        <PageBanner
          tag="Services"
          title="Service not found"
          description="The service page you requested is not available right now. You can still explore the full services overview."
          image={pageBanners.services}
          actions={
            <Link to="/services" className="btn-primary">
              Back to All Services <ArrowRight size={16} />
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        tag="Training and Counselling"
        title="Services and Programs"
        description="Explore every Shubhaway Development Academy service in one place. The services dropdown links directly to each service page, and this overview helps visitors compare all offerings quickly."
        image={pageBanners.services}
      />

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Choose the service that fits your goal</h2>
            <p>Each program has its own dedicated page, focus area, and learning journey. Start here to compare them side by side.</p>
          </div>

          <div
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: '24px',
            }}
          >
            {servicesData.map((service) => (
              <div key={service.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', backgroundColor: '#f8fafc' }}
                />

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '0.78rem', color: service.accentColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {service.category}
                    </span>
                    <h3 style={{ fontSize: '1.22rem', marginTop: '10px', marginBottom: '10px' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7 }}>{service.homeSummary}</p>
                  </div>

                  <div style={{ display: 'grid', gap: '10px' }}>
                    <div style={{ padding: '12px 14px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <span style={{ display: 'block', fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Ideal for
                      </span>
                      <span style={{ display: 'block', marginTop: '6px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.55 }}>
                        {service.audience}
                      </span>
                    </div>
                    <div style={{ padding: '12px 14px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <span style={{ display: 'block', fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Format
                      </span>
                      <span style={{ display: 'block', marginTop: '6px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.55 }}>
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to={service.path} className="btn-outline" style={{ padding: '10px 16px', fontSize: '0.88rem' }}>
                      View page
                    </Link>
                    <Link to="/contact" className="btn-primary" style={{ padding: '10px 16px', fontSize: '0.88rem' }}>
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
