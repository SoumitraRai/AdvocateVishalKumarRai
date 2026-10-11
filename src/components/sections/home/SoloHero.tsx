import Link from "next/link";
import Image from "next/image";
import { attorneyProfile } from "@/data/attorney";
import { siteConfig } from "@/data/siteConfig";

export default function SoloHero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#0c2444] text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(201,170,110,0.24),transparent_38%),linear-gradient(135deg,#0c2444_0%,#102f51_58%,#07182d_100%)]" />
      <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full border border-[#c9aa6e]/20" />
      <div className="absolute -right-10 top-40 -z-10 h-56 w-56 rounded-full border border-[#c9aa6e]/10" />

      <div className="container mx-auto grid min-h-[680px] items-center gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
        <div className="max-w-3xl hero-fade-up">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9aa6e]">
            {siteConfig.heroEyebrow}
          </p>
          <h1 id="hero-title" className="mb-7 text-5xl font-bold leading-[1.08] text-white md:text-7xl">
            {siteConfig.heroTitle}
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-8 text-white md:text-xl">
            {siteConfig.heroDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`tel:${attorneyProfile.phoneNumbers[0]}`}
              className="inline-flex items-center justify-center rounded-lg bg-[#c9aa6e] px-7 py-4 font-semibold text-[#0c2444] shadow-lg transition hover:bg-[#e6d7b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c2444]"
            >
              {siteConfig.phoneCta}
              <span aria-hidden="true" className="ml-3 text-lg">→</span>
            </Link>
            {/* The primary CTA now handles direct calls; the duplicate phone link is intentionally removed. */}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white hero-fade-up hero-fade-up-delay">
            <span>Personal attention</span>
            <span>Clear communication</span>
            <span>Strategic preparation</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm hero-float lg:ml-auto">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#c9aa6e]/30" />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#173b60] p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl bg-[#e9e2d5]">
              <Image
                src={attorneyProfile.image}
                alt={`${attorneyProfile.name}, ${attorneyProfile.role}`}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="px-3 pb-3 pt-5">
              <p className="font-playfair text-2xl font-semibold text-white">{attorneyProfile.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#c9aa6e]">{attorneyProfile.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
