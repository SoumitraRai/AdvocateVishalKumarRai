import { attorneyProfile } from '@/data/attorney';

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
              <div className="space-y-3 font-playfair text-lg leading-[1.2] sm:text-xl">
                <p>
                  {attorneyProfile.bio} His work is grounded in careful preparation, clear
                  communication, and representation shaped around the facts of every matter.
                </p>
                <p>
                  His practice engages civil, constitutional, commercial, and property matters for
                  clients who need a considered legal response and a steady advocate.
                </p>
                <p>Professional engagement is guided by a sustained focus on the client&apos;s objectives.</p>
              </div>

              <blockquote className="mt-6 flex max-w-4xl gap-6 border-l-2 border-[#cf1735] pl-6 font-playfair text-lg font-semibold italic leading-[1.45] text-[#6b6760] sm:text-xl">
                {attorneyProfile.philosophy}
              </blockquote>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-[#dcd8d0] pt-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            <p className="mb-0 text-[10px] uppercase tracking-[0.28em] text-[#6d6962] sm:text-xs">
              Approach to advocacy
            </p>
            <p className="mb-0 max-w-5xl font-playfair text-xl font-semibold italic leading-[1.45] text-[#111111] sm:text-2xl">
              Advocacy is approached as both representation and responsibility. Matters are examined
              within the broader framework of statutory design, constitutional discipline, and
              institutional consequence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
