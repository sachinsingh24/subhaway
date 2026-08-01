import emailjs from '@emailjs/browser';

const emailJsConfig = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
};

const missingEmailJsConfig = Object.entries(emailJsConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

export const isEmailJsConfigured = missingEmailJsConfig.length === 0;

export const sendContactInquiry = async ({ name, phone, email, program, message, source }) => {
  if (!isEmailJsConfigured) {
    const configurationError = new Error('EmailJS is not configured.');
    configurationError.code = 'EMAILJS_NOT_CONFIGURED';
    throw configurationError;
  }

  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.templateId,
    {
      name,
      phone,
      email: email || 'Not provided',
      program,
      message: message || 'No additional message provided.',
      submitted_at: submittedAt,
    },
    {
      publicKey: emailJsConfig.publicKey,
      limitRate: {
        id: source,
        throttle: 10000,
      },
    }
  );
};
