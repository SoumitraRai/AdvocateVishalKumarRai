import Disclaimer from '@/components/ui/Disclaimer';
import type { Metadata } from 'next';
import {
  Roboto,
  Playfair_Display,
  Cormorant_Garamond,
  Montserrat,
  Lora,
  Merriweather,
} from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';

/* ---------- Fonts ---------- */
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['serif'],
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  preload: false,
});

const lora = Lora({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  preload: false,
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  preload: false,
});

/* ---------- Metadata ---------- */
export const metadata: Metadata = {
  title: 'Vishal Kumar Rai | Independent Legal Counsel',
  description:
    'Vishal Kumar Rai is an independent legal counsel and Advocate of the Supreme Court of India serving clients across New Delhi, Noida, Lucknow, and Patna.',
  keywords:
    'Vishal Kumar Rai, independent legal counsel, Supreme Court of India, corporate litigation, insolvency, arbitration, employment law, RERA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${lora.variable} ${merriweather.variable} antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        <link rel="preload" href="/assets/images/logo.png" as="image" />
        <link rel="preload" href="/assets/images/logo-light.png" as="image" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className="font-montserrat text-black bg-white selection:bg-gray-200 selection:text-black">
        <ScrollProgress />
        {/* Global legal disclaimer */}
        <Disclaimer />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[101] focus:bg-primary focus:text-white focus:p-4 focus:m-4"
        >
          Skip to content
        </a>

        <div className="flex flex-col min-h-screen">
          <Header />

          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>

          <Footer />

          <BackToTop />

          <div
            id="page-transition"
            className="fixed inset-0 bg-primary z-[100] opacity-0 pointer-events-none"
          >
            <div className="h-full flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-accent/20 rounded-sm animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/images/logo-light.jpeg"
                    alt="Vishal Kumar Rai"
                    width={40}
                    height={40}
                    className="animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
