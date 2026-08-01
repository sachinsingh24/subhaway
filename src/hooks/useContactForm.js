import { useEffect, useState } from 'react';
import { defaultContactProgram } from '../data/contactPrograms';
import { sendContactInquiry } from '../lib/emailjs';

const buildInitialFormData = (program = defaultContactProgram) => ({
  name: '',
  phone: '',
  email: '',
  program,
  message: '',
});

const getContactFormError = (error) => {
  if (error?.code === 'EMAILJS_NOT_CONFIGURED') {
    return 'This form is not configured yet. Add the EmailJS keys and try again.';
  }

  if (error?.status === 429) {
    return 'A message was just sent. Please wait a few seconds and try again.';
  }

  return 'We could not send your inquiry right now. Please try again or contact us by phone or WhatsApp.';
};

export const useContactForm = ({ initialProgram = defaultContactProgram, source }) => {
  const [formData, setFormData] = useState(() => buildInitialFormData(initialProgram));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!initialProgram) return;

    setFormData((currentFormData) => ({
      ...currentFormData,
      program: initialProgram,
    }));
  }, [initialProgram]);

  const updateField = (field, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [field]: value,
    }));

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const resetForm = () => {
    setErrorMessage('');
    setIsSubmitted(false);
    setIsSending(false);
    setFormData(buildInitialFormData(initialProgram));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const nextFormData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      program: formData.program,
      message: formData.message.trim(),
    };

    if (!nextFormData.name || !nextFormData.phone) {
      return;
    }

    setIsSending(true);
    setErrorMessage('');
    setFormData(nextFormData);

    try {
      await sendContactInquiry({
        ...nextFormData,
        source,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setErrorMessage(getContactFormError(error));
    } finally {
      setIsSending(false);
    }
  };

  return {
    errorMessage,
    formData,
    handleSubmit,
    isSending,
    isSubmitted,
    resetForm,
    updateField,
  };
};
