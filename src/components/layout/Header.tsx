'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { siteConfig } from '@/data/siteConfig';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300',
        isSticky
          ? 'border-amber-200 bg-white/95 py-2 shadow-lg'
          : 'border-amber-100 bg-white/90 py-3 lg:py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className={cn(
                'relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border-2 border-amber-300 bg-gradient-to-br from-amber-100 to-blue-100 p-1.5 shadow-md transition-all sm:h-14 sm:w-14',
                isSticky && 'sm:h-11 sm:w-11'
              )}
            >
              <img
                src="/assets/images/logo.png"
                alt="Dharmikaa Legal logo"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-playfair text-[18px] font-semibold tracking-[0.04em] text-[#0c2444] sm:text-[21px]">
                {siteConfig.shortName}
              </span>
              <span className="truncate text-[9px] uppercase tracking-[0.12em] text-slate-600 sm:text-[10px] sm:tracking-[0.18em]">
                {siteConfig.descriptor}
              </span>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-[#9a783b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-consult-cta rounded-md bg-[#0c2444] px-5 py-3 text-sm font-semibold !text-[#f8f5ef] transition hover:bg-[#173b60] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-2"
            >
              <span className="!text-white">Consult now</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
