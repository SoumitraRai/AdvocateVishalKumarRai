"use client";

import Link from "next/link";
import { useState } from "react";
import { attorneyProfile } from "@/data/attorney";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg border-2 border-[#c9aa6e] bg-white p-1.5">
                <img src="/assets/images/logo.png" alt={`${attorneyProfile.name} logo`} className="h-full w-full object-contain" />
              </div>
              <div>
                <h2 className="font-playfair text-xl font-bold tracking-wide text-white">{siteConfig.shortName}</h2>
                <p className="text-xs uppercase tracking-wider text-[#e6d7b6]">{siteConfig.descriptor}</p>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white">Independent legal counsel for clients who value clear advice, careful preparation, and direct communication.</p>
            <div className="mt-6 space-y-2 text-sm text-white">
              {attorneyProfile.phoneNumbers.map((phone) => <a key={phone} href={`tel:${phone}`} className="block !text-white transition hover:!text-[#e6d7b6]">{phone}</a>)}
              <a href={`mailto:${attorneyProfile.email}`} className="block !text-white transition hover:!text-[#e6d7b6]">{attorneyProfile.email}</a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#e6d7b6]">Explore</h3>
            <ul className="space-y-3 text-sm text-white">{siteConfig.navigation.map((link) => <li key={link.href}><a href={link.href} className="!text-white transition hover:!text-[#e6d7b6]">{link.label}</a></li>)}</ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#e6d7b6]">Stay informed</h3>
            <p className="mb-4 text-sm leading-6 text-white">Receive occasional legal insights and updates.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" required placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-lg border border-amber-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#9a783b] focus:ring-2 focus:ring-amber-200" />
              <button type="submit" className="w-full rounded-lg border border-[#c9aa6e] bg-transparent px-5 py-3 text-sm font-semibold text-[#e6d7b6] transition hover:bg-[#c9aa6e] hover:text-[#0c2444]">Subscribe</button>
            </form>
            {submitted && <p className="mt-3 text-xs text-[#e6d7b6]" role="status">Thank you. You have been added to the list.</p>}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black py-6"><div className="container mx-auto px-6 text-center text-sm text-white lg:px-10"><p>© {new Date().getFullYear()} <span className="font-semibold text-white">{attorneyProfile.name}</span> · All rights reserved</p></div></div>
    </footer>
  );
}
