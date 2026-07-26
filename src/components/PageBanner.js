import React from 'react';

const PageBanner = ({
  tag,
  title,
  description,
  image,
  align = 'center',
  actions = null,
}) => {
  const isCentered = align === 'center';

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: isCentered ? 'center' : 'flex-start',
        }}
      >
        <div
          style={{
            maxWidth: isCentered ? '820px' : '760px',
            width: '100%',
            padding: '88px 0',
            textAlign: isCentered ? 'center' : 'left',
          }}
        >
          {tag ? (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255,255,255,0.16)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {tag}
            </span>
          ) : null}

          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2.2rem, 4vw, 3.35rem)',
              lineHeight: 1.12,
              marginBottom: description ? '14px' : '0',
            }}
          >
            {title}
          </h1>

          {description ? (
            <p
              style={{
                color: '#dbeafe',
                fontSize: '1.02rem',
                lineHeight: 1.75,
                maxWidth: isCentered ? '760px' : '680px',
                margin: isCentered ? '0 auto' : '0',
              }}
            >
              {description}
            </p>
          ) : null}

          {actions ? (
            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                justifyContent: isCentered ? 'center' : 'flex-start',
                marginTop: '28px',
              }}
            >
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
