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
        'fixed left-0 top-0 z-50 w-full border-b transition-all duration-300',
        isSticky
          ? 'border-amber-200 bg-white/95 py-2 shadow-lg backdrop-blur-md'
          : 'border-white/15 bg-[#0b0b0b]/10 py-3 backdrop-blur-[2px] lg:py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className={cn(
                'relative h-25 w-30 shrink-0 overflow-hidden transition-all sm:h-14 sm:w-14',
                isSticky && 'sm:h-25 sm:w-30'
              )}
            >
              <img
                src="/assets/images/logo.png"
                alt="VKR logo"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className={cn(
                  'truncate font-playfair text-[18px] font-semibold tracking-[0.04em] sm:text-[21px]',
                  isSticky ? 'text-[#0c2444]' : 'text-white'
                )}
              >
                {siteConfig.shortName}
              </span>
              <span
                className={cn(
                  'truncate text-[9px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.18em]',
                  isSticky ? 'text-slate-600' : 'text-white/65'
                )}
              >
                {siteConfig.descriptor}
              </span>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-semibold transition hover:text-[#d8b26a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-4',
                  isSticky ? 'text-slate-700 focus-visible:ring-offset-white' : 'text-white/85 focus-visible:ring-offset-[#10100f]'
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                'nav-consult-cta rounded-md px-5 py-3 text-sm font-semibold transition hover:bg-[#cf1735] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa6e] focus-visible:ring-offset-2',
                isSticky
                  ? 'bg-[#0c2444] !text-[#f8f5ef] focus-visible:ring-offset-white'
                  : 'bg-[#f5f1e9] !text-[#151515] focus-visible:ring-offset-[#10100f]'
              )}
            >
              <span className={isSticky ? '!text-white' : '!text-[#151515]'}>Consult now</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
