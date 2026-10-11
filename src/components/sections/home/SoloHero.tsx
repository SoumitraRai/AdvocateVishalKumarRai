import Image from 'next/image';
import { attorneyProfile } from '@/data/attorney';
import { siteConfig } from '@/data/siteConfig';

export default function SoloHero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate -mt-16 min-h-screen overflow-hidden bg-[#10100f] text-white sm:-mt-20"
    >
      <Image
        src="/assets/images/heroimage.png"
        alt={`${attorneyProfile.name}, ${attorneyProfile.role}`}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,9,9,0.78)_0%,rgba(8,9,9,0.48)_42%,rgba(8,9,9,0.12)_78%),linear-gradient(0deg,rgba(8,9,9,0.82)_0%,transparent_34%,rgba(8,9,9,0.32)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#12110f]/10 mix-blend-multiply" />

      <div className="container relative mx-auto flex min-h-screen flex-col justify-between px-6 pb-6 pt-28 sm:px-10 sm:pb-8 sm:pt-32 lg:px-16">
        <div className="max-w-4xl hero-fade-up">
          <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cf1735] sm:text-xs">
            <span className="h-px w-8 bg-[#cf1735] sm:w-12" />
            <span>{siteConfig.heroEyebrow}</span>
          </div>
          <h1 id="hero-title" className="hero-name-reveal max-w-5xl font-playfair text-[clamp(6rem,18vw,15rem)] font-bold uppercase leading-[0.68] tracking-[-0.06em] text-[#f5f1e9]">
            <span className="block">V<span>I</span>shal</span>
            <span className="block">Kumar</span>
            <span className="flex items-end gap-4 sm:gap-8">
              <span>Rai</span>
              <span className="hero-adv-block">
                <span>ADV.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/25 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm text-xs uppercase tracking-[0.16em] text-white/70 sm:text-sm">
            <p className="mb-1 font-semibold text-white">{attorneyProfile.role}</p>
            <p className="mb-0">New Delhi · Lucknow · India</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 sm:gap-x-12">
            <div>
              <p className="mb-0 font-roboto text-3xl font-bold leading-none text-[#f5f1e9] sm:text-4xl">01</p>
              <p className="mt-2 mb-0 text-[9px] uppercase tracking-[0.18em] text-white/55">Focused counsel</p>
            </div>
            <div>
              <p className="mb-0 font-roboto text-3xl font-bold leading-none text-[#f5f1e9] sm:text-4xl">02</p>
              <p className="mt-2 mb-0 text-[9px] uppercase tracking-[0.18em] text-white/55">Clear advice</p>
            </div>
            <div className="hidden sm:block">
              <p className="mb-0 font-roboto text-3xl font-bold leading-none text-[#f5f1e9] sm:text-4xl">03</p>
              <p className="mt-2 mb-0 text-[9px] uppercase tracking-[0.18em] text-white/55">Steady advocacy</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-4 hidden items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/50 [writing-mode:vertical-rl] sm:flex">
          <span className="h-10 w-px bg-white/30" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
