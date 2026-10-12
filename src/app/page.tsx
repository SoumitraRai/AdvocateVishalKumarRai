import SoloHero from '@/components/sections/home/SoloHero';
import AboutAttorney from '@/components/sections/home/AboutAttorney';
import PremiumContactForm from '@/components/ui/PremiumContactForm';
import { attorneyProfile } from '@/data/attorney';
import { practiceAreas } from '@/data/siteConfig';

export default function Home() {
  return (
    <>
      <SoloHero />
      <AboutAttorney />

      <section
        id="practice-areas"
        aria-labelledby="practice-areas-title"
        className="scroll-mt-20 bg-black py-16 text-white md:py-20"
      >
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a783b]">
              How I can help
            </p>
            <h2
              id="practice-areas-title"
              className="mb-4 text-3xl font-bold text-white md:text-4xl"
            >
              Focused counsel, built around your matter.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              A focused practice means your matter receives careful attention from the first
              conversation through the next decisive step.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {practiceAreas.map(area => (
              <details
                key={area.number}
                className="practice-card group h-[160px] self-start overflow-hidden rounded-2xl border border-white/20 bg-black p-5 transition hover:border-[#c9aa6e] hover:shadow-lg sm:h-[144px] sm:p-6 lg:h-[136px]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 outline-none marker:hidden [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-2">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="font-playfair text-xl text-[#c9aa6e]">{area.number}</span>
                    <span className="h-px w-6 shrink-0 bg-[#c9aa6e]/60" />
                    <span className="text-lg font-semibold leading-tight text-white sm:text-xl">
                      {area.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c9aa6e] text-lg font-light text-[#9a783b] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/15 pt-4 text-sm leading-6 text-white/70">
                  {area.summary}
                </p>
              </details>
            ))}
            <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1 lg:col-start-2">
              <a
                href="#contact"
                className="practice-cta group inline-flex items-center justify-center rounded-lg border border-[#c9aa6e] bg-black px-6 py-3 font-semibold !text-[#f5f1e9] shadow-md transition hover:-translate-y-0.5 hover:bg-[#c9aa6e] hover:!text-black"
              >
                <span className="!text-[#f5f1e9] group-hover:!text-black">Discuss your matter</span>
                <span aria-hidden="true" className="ml-2 !text-[#c9aa6e] group-hover:!text-black">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials temporarily hidden until the section is ready for release.
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="scroll-mt-20 bg-[#102f51] py-14 text-white md:py-20"
      >
        <div className="container mx-auto px-6 lg:px-10">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#c9aa6e]">
            Client perspective · One lawyer. Clear accountability. Thoughtful advocacy.
          </p>
          <h2
            id="testimonials-title"
            className="mb-10 text-center text-4xl font-bold text-white md:text-5xl"
          >
            Trust is built one matter at a time.
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
      */}

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-20 bg-[#f8f5ef] py-24 md:py-32"
      >
        <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a783b]">
              Request a consultation
            </p>
            <h2 id="contact-title" className="mb-6 text-4xl font-bold text-[#0c2444] md:text-5xl">
              Tell me what you are facing.
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              Share a few details about your legal matter and your preferred way to reach you. Your information will be handled with strict confidentiality, subject to applicable law, and protected in accordance with applicable advocate–client privilege and professional confidentiality obligations and our Privacy Policy.
            </p>
            <div className="space-y-4 border-t border-slate-200 pt-6 text-slate-700">
              <p>
                <strong className="text-[#0c2444]">Phone:</strong>{' '}
                {attorneyProfile.phoneNumbers.join(' / ')}
              </p>
              <p>
                <strong className="text-[#0c2444]">Email:</strong>{' '}
                <a
                  className="text-[#9a783b] hover:underline"
                  href={`mailto:${attorneyProfile.email}`}
                >
                  {attorneyProfile.email}
                </a>
              </p>
              <p>
                <strong className="text-[#0c2444]">Locations:</strong>{' '}
                {attorneyProfile.serviceAreas.join(' · ')}
              </p>
              <div>
                <strong className="text-[#0c2444]">Offices:</strong>
                <ul className="mt-2 space-y-2">
                  {attorneyProfile.addresses.map(address => (
                    <li key={address}>{address}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              <p>
                Prefer an immediate response?{' '}
                <a
                  href="https://wa.me/919650682586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#9a783b] underline underline-offset-2"
                >
                  Chat on WhatsApp
                </a>{' '}
                or call directly at{' '}
                <a href="tel:+919650682586" className="font-semibold text-[#9a783b]">
                  +91-9650682586
                </a>{' '}
                /{' '}
                <a href="tel:+919873880107" className="font-semibold text-[#9a783b]">
                  +91-9873880107
                </a>.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <PremiumContactForm variant="primary" showTitle={false} fullWidth />
          </div>
        </div>
      </section>
    </>
  );
}
