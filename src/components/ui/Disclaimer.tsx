"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const STORAGE_KEY = "ua_legal_disclaimer_accepted";

const Disclaimer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div
        className={cn(
          "w-[90%] max-w-xl rounded-xl bg-white/90 backdrop-blur-lg border border-black/20 shadow-2xl px-8 py-10 text-center"
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

