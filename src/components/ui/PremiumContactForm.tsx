'use client';

import { useState } from 'react';

interface ContactFormProps {
  variant?: 'primary' | 'secondary';
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export const PremiumContactForm: React.FC<ContactFormProps> = ({
  variant = 'primary',
  showTitle = true,
  title = 'Contact Us',
  subtitle = 'Complete the form below and Advocate Vishal Kumar Rai will be in touch shortly.',
  fullWidth = false,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error('The form submission was not accepted.');
      }

      window.location.assign('/contact-success');
    } catch {
      setSubmitError('We could not send your message. Please try again or contact the office directly.');
      setIsSubmitting(false);
    }
  }

  function handleWhatsApp(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;

    if (!form || !form.reportValidity()) return;

    const formData = new FormData(form);
    const message = [
      'Hello Advocate Vishal Kumar Rai,',
      '',
      `Name: ${formData.get('name') ?? ''}`,
      `Email: ${formData.get('email') ?? ''}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Practice area: ${formData.get('subject') ?? ''}`,
      '',
      'Matter details:',
      `${formData.get('message') ?? ''}`,
    ].join('\n');

    window.open(
      `https://wa.me/919650682586?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  const formClasses =
    variant === 'primary'
      ? 'rounded-lg border border-black bg-white p-6 shadow-xl md:p-8'
      : 'rounded-lg bg-white p-6 md:p-8';
  const inputClasses =
    'w-full rounded-md border border-black px-4 py-3 text-black transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/30';
  const buttonClasses =
    'w-full rounded-md bg-black py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-gray-800';

  return (
    <div className={fullWidth ? 'w-full' : 'mx-auto max-w-2xl'}>
      {showTitle && (
        <div className="mb-8 text-center">
          <h2 className="font-playfair text-2xl font-bold text-black md:text-3xl">{title}</h2>
          <p className="mt-2 font-montserrat text-black">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={formClasses}>
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''}
        />

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input type="text" id="name" name="name" required placeholder="Your full name" className={inputClasses} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com" className={inputClasses} />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number" className={inputClasses} />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-black">
              Subject <span className="text-red-500">*</span>
            </label>
            <select id="subject" name="subject" required defaultValue="" className={inputClasses}>
              <option value="">Select a topic</option>
              <option value="Corporate Litigation & Commercial Advisory">Corporate Litigation &amp; Commercial Advisory</option>
              <option value="Banking, IBC & Insolvency">Banking, IBC &amp; Insolvency</option>
              <option value="Employment & Labour Laws">Employment &amp; Labour Laws</option>
              <option value="Arbitration & ADR">Arbitration &amp; ADR</option>
              <option value="Real Estate & RERA">Real Estate &amp; RERA</option>
              <option value="Regulatory Compliance & Insurance">Regulatory Compliance &amp; Insurance</option>
              <option value="Other Legal Matter">Other Legal Matter</option>
            </select>
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-black">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" className={inputClasses} />
        </div>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        {submitError && (
          <p role="alert" className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {submitError}
          </p>
        )}
        <button type="submit" disabled={isSubmitting} className={`${buttonClasses} disabled:cursor-not-allowed disabled:opacity-60`}>
          {isSubmitting ? 'Sending securely...' : 'Send Message'}
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="mt-3 w-full rounded-md border border-[#9a783b] bg-[#f6f3ed] py-3 text-center font-medium text-[#111111] transition-colors duration-300 hover:bg-[#c9aa6e]"
        >
          Send via WhatsApp
        </button>

        <p className="mt-4 text-center text-xs text-black">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="font-medium text-black hover:underline">Privacy Policy</a>.
        </p>
      </form>

    </div>
  );
};

export default PremiumContactForm;
