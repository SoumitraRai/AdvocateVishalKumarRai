"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const STORAGE_KEY = "ua_legal_disclaimer_accepted_session";

const Disclaimer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md sm:p-6">
      <div
        className={cn(
          "my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-xl border border-black/20 bg-white/95 px-5 py-7 text-center shadow-2xl backdrop-blur-lg sm:px-8 sm:py-10"
        )}
      >
        {/* Heading */}
        <h2 className="font-playfair text-3xl font-semibold tracking-wide text-black mb-4">
          Legal Disclaimer
        </h2>

        {/* Body */}
        <p className="font-montserrat text-sm leading-relaxed text-black/70 mb-8">
          The Bar Council of India does not permit advertisement or solicitation by Advocates in any form or manner. By accessing this website, you acknowledge that you are seeking information relating to Advocate Vishal Kumar Rai of your own accord and that there has been no form of solicitation, advertisement, or inducement by him.
        </p>

        {/* CTA */}
        <button
          onClick={handleAccept}
          className="px-8 py-3 border border-black text-black font-montserrat tracking-wide rounded-md bg-white
          hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;

