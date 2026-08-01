import React from 'react';

const FacebookIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M20.4 3H3.6A.6.6 0 003 3.6v16.8a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6zM8.3 18.3H5.4V9.4h2.9v8.9zM6.9 8.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zm11.4 10.1h-2.9v-4.3c0-1 0-2.4-1.4-2.4s-1.6 1.1-1.6 2.3v4.4H9.5V9.4h2.8v1.2h.1a3 3 0 012.7-1.5c2.9 0 3.5 1.9 3.5 4.4v4.8z" />
  </svg>
);

const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2zm0 18.2a8.1 8.1 0 01-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.6.7-.8.8-.3.2-.5.1a6.7 6.7 0 01-2-1.2 7.3 7.3 0 01-1.4-1.8c-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.2.2-.3a.4.4 0 000-.4c0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4a9.8 9.8 0 003.8 3.4c2.2.9 2.2.6 2.6.6s1.2-.5 1.4-.9.2-.8.1-.9-.2-.2-.4-.3z" />
  </svg>
);

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return Boolean(navigator.userAgentData?.mobile) || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
};

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/subhashwangdebusinesscoach',
    appHref: 'fb://facewebmodal/f?href=https%3A%2F%2Fwww.facebook.com%2Fsubhashwangdebusinesscoach',
    Icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/subhaway',
    appHref: 'instagram://user?username=subhaway',
    Icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/subhshwangde',
    appHref: 'linkedin://in/subhshwangde',
    Icon: LinkedinIcon,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917875506912',
    appHref: 'whatsapp://send?phone=917875506912',
    Icon: WhatsAppIcon,
  },
];

const openMobileSocialLink = (link) => {
  if (typeof window === 'undefined') {
    return;
  }

  const appHref = link.appHref || link.href;
  const browserHref = link.href;
  let fallbackTimer;

  const clearFallback = () => {
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = undefined;
    }

    window.removeEventListener('blur', clearFallback);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('pagehide', clearFallback);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearFallback();
    }
  };

  window.addEventListener('blur', clearFallback);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('pagehide', clearFallback);

  fallbackTimer = window.setTimeout(() => {
    clearFallback();
    window.location.assign(browserHref);
  }, 1200);

  window.location.assign(appHref);
};

export const getSocialLinkProps = (link) => {
  const openViaInstalledApp = isMobileDevice();

  return {
    href: link.href,
    target: openViaInstalledApp ? undefined : '_blank',
    rel: openViaInstalledApp ? undefined : 'noreferrer',
    onClick: (event) => {
      if (!openViaInstalledApp || typeof window === 'undefined') {
        return;
      }

      event.preventDefault();
      openMobileSocialLink(link);
    },
  };
};
