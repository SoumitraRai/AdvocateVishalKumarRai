export default function AboutAttorney() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-[#f6f3ed] px-6 py-10 text-[#67635c] sm:px-10 md:py-14 lg:px-16"
    >
      <div className="container mx-auto px-0">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between text-[5px] uppercase tracking-[0.3em] text-[#6d6962] sm:text-xs">
            <p className="mb-0 flex items-center gap-4">
              <span className="h-px w-9 bg-[#cf1735]" />
              <span>Professional practice</span>
            </p>
            <span className="hidden text-[#b6b1a8] sm:block">02 / 04</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            <div className="border-b border-[#dcd8d0] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
              <h2
                id="about-title"
                className="mb-0 font-playfair text-4xl font-semibold leading-none tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl"
              >
                Overview
              </h2>
            </div>

            <div className="max-w-5xl">
              <h3 className="mb-2 font-playfair text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl">
                Advocate Vishal Kumar Rai
              </h3>
              <div className="space-y-4 text-justify font-playfair text-lg leading-[1.42] sm:text-xl">
                <p>
                  Advocate Vishal Kumar Rai is an independent legal counsel with over nine years of
                  experience in Civil and Criminal Litigation, Corporate and Commercial Disputes,
                  Corporate Advisory, Employment and Labour Laws, Banking, Finance and Insurance,
                  Arbitration, Insolvency &amp; Bankruptcy
                </p>
                <p>
                  He advises individuals and businesses across Delhi, Noida, Lucknow, Patna, and
                  other parts of India, providing litigation support and retainership-based legal
                  advisory services.
                </p>
                <p>
                  Combining strategic legal representation with practical, business-focused advice,
                  he helps clients protect their rights, manage legal risks, resolve disputes, and
                  make informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-[#dcd8d0] pt-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            <p className="mb-0 text-[10px] uppercase tracking-[0.28em] text-[#6d6962] sm:text-xs">
              Approach to advocacy
            </p>
            <blockquote className="mb-0 max-w-5xl border-l-2 border-[#cf1735] pl-5 text-justify font-playfair text-lg font-medium italic leading-[1.5] text-[#111111] sm:text-xl">
              “
              Good advocacy relies on thorough preparation, clear legal strategy, and a direct
              understanding of what my clients need to achieve. I focus on spotting risks early,
              building evidence-backed arguments, and choosing the right route forward, resolving
              disputes practically where possible, and advocating decisively in court when necessary.
              Every matter is handled with precision, integrity, and an unyielding commitment to
              protecting my client&apos;s position.
              ”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
