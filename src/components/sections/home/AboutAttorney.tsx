import Image from 'next/image';
import { attorneyProfile } from '@/data/attorney';

export default function AboutAttorney() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-[#f8f5ef] py-24 md:py-32"
    >
      <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border border-[#c9aa6e]" />
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
            <Image
              src={attorneyProfile.image}
              alt={`Portrait of ${attorneyProfile.name}`}
              width={640}
              height={800}
              className="h-[460px] w-full rounded-xl object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a783b]">
            About the attorney
          </p>
          <h2 id="about-title" className="mb-6 text-4xl font-bold text-[#0c2444] md:text-5xl">
            A direct, prepared approach to your legal matter.
          </h2>
          <p className="mb-5 text-lg leading-8 text-slate-700">{attorneyProfile.bio}</p>
          <blockquote className="mb-8 border-l-2 border-[#c9aa6e] pl-5 font-playfair text-2xl italic leading-9 text-[#0c2444]">
            “{attorneyProfile.philosophy}”
          </blockquote>

          <div className="grid gap-6 border-t border-slate-200 pt-7 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-base font-semibold uppercase tracking-[0.12em] text-[#9a783b]">
                Bar admission
              </h3>
              <p className="text-slate-700">{attorneyProfile.barAdmissions.join(' · ')}</p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold uppercase tracking-[0.12em] text-[#9a783b]">
                Serving clients in
              </h3>
              <p className="text-slate-700">{attorneyProfile.serviceAreas.join(' · ')}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {attorneyProfile.addresses.map(address => (
              <span
                key={address}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {address}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
