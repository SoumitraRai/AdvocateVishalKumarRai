import Link from 'next/link';

export const metadata = {
  title: 'Consultation Request Received | Vishal Kumar Rai',
  description: 'Confirmation of a consultation request submitted to the office of Vishal Kumar Rai.',
};

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#f6f3ed] px-6 py-20">
      <section className="w-full max-w-2xl border border-[#dcd8d0] bg-white px-6 py-12 text-center shadow-sm sm:px-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a783b]">
          Consultation request received
        </p>
        <h1 className="mb-5 font-playfair text-4xl font-semibold text-[#111111] sm:text-5xl">
          Thank you for contacting the office.
        </h1>
        <p className="mx-auto max-w-xl text-base leading-7 text-[#67635c] sm:text-lg">
          Your message has been received and will be reviewed with care. The office will respond
          using the contact details you provided.
        </p>
        <p className="mt-5 text-sm leading-6 text-[#67635c]">
          Please do not send confidential or time-sensitive information through this form. For an
          immediate response, contact the office directly by phone or WhatsApp.
        </p>
        <Link
          href="/#home"
          className="mt-8 inline-flex border border-[#c9aa6e] bg-black px-6 py-3 font-semibold text-[#f5f1e9] transition hover:bg-[#c9aa6e] hover:text-black"
        >
          Return to the website
        </Link>
      </section>
    </main>
  );
}