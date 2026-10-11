'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/ui/Carousel';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Client review',
      role: 'Verified client',
      quote:
        'Clear explanations, careful preparation, and responsive communication made each step of the matter easier to understand.',
      imageSrc: '/assets/images/testimonials/client-1.jpg',
    },
    {
      id: 2,
      name: 'Client review',
      role: 'Verified client',
      quote:
        'The advice was practical and focused on the issues that mattered most. I always knew what the next step would be.',
      imageSrc: '/assets/images/testimonials/client-2.jpg',
    },
    {
      id: 3,
      name: 'Client review',
      role: 'Verified client',
      quote:
        'A thoughtful and disciplined approach from the first conversation through the preparation of the matter.',
      imageSrc: '/assets/images/testimonials/client-3.jpg',
    },
  ];

  // Create testimonial cards with modern design
  const testimonialCards = testimonials.map(testimonial => (
    <div key={testimonial.id} className="relative group">
      {/* Main card - Dark elegant design */}
      <div className="relative rounded-xl border-2 border-[#c9aa6e] bg-gradient-to-br from-[#1a3a5c]/80 via-[#0c2444]/70 to-[#1a3a5c]/80 p-5 shadow-[0_8px_32px_rgba(201,170,110,0.15)] backdrop-blur-sm transition-all duration-500 sm:p-8 md:p-10 hover:shadow-[0_12px_48px_rgba(201,170,110,0.25)]">
        {/* Ambient glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#c9aa6e]/20 via-transparent to-[#c9aa6e]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Gold accent corners */}
        <div className="absolute top-0 left-0 w-16 h-16 z-10">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9aa6e] to-transparent"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#c9aa6e] to-transparent"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 z-10">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#c9aa6e] to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-[#c9aa6e] to-transparent"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] rounded-xl pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9aa6e' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm20 2a18 18 0 100 36 18 18 0 000-36z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Quote Icon */}
          <div className="mb-4 sm:mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#c9aa6e] to-[#e6d7b6] shadow-lg sm:h-12 sm:w-12">
              <svg
                className="h-5 w-5 text-[#0c2444] sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="mb-6 border-0 bg-transparent p-0 sm:mb-8">
            <p className="text-lg font-light leading-relaxed tracking-wide text-white sm:text-xl">
              {testimonial.quote}
            </p>
          </blockquote>

          {/* Star Rating and Verified Badge */}
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#c9aa6e]/30 pb-5 sm:mb-6 sm:pb-6">
            <div className="flex shrink-0 gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-[#c9aa6e] sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* Verified badge with label */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] font-medium text-white sm:text-xs">Verified Client</span>
              <div className="rounded-full bg-gradient-to-br from-[#c9aa6e] to-[#e6d7b6] p-1.5 shadow-lg sm:p-2">
                <svg
                  className="h-3.5 w-3.5 text-[#0c2444] sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Author Info with enhanced card */}
          <div className="flex items-center px-1 sm:p-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9aa6e] to-[#e6d7b6] rounded-full blur-md opacity-60"></div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#c9aa6e] shadow-lg sm:h-14 sm:w-14">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="ml-3 min-w-0 flex-1 sm:ml-4">
              <h4 className="mb-0.5 text-base font-bold leading-tight text-white sm:text-lg">
                {testimonial.name}
              </h4>
              <p className="text-xs font-semibold text-[#c9aa6e] sm:text-sm">{testimonial.role}</p>
            </div>
            {/* Company/Role icon */}
            <div className="ml-auto">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c9aa6e]/20 sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-[#c9aa6e] sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9aa6e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9aa6e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9aa6e]/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 text-center sm:mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c9aa6e]"></div>
            <span className="text-[#c9aa6e] uppercase tracking-[0.3em] text-xs font-bold">
              Testimonials
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c9aa6e]"></div>
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white sm:text-lg">
            Trusted by businesses and individuals across India for exceptional legal services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mx-auto mb-5 max-w-5xl">
          <Carousel
            itemsPerView={1}
            spacing={20}
            autoplay={true}
            autoplayInterval={8000}
            disableOnInteraction={false}
            loop={true}
            showIndicators={true}
            showNavigation={true}
            carouselId="testimonial-carousel"
            className="testimonial-carousel"
          >
            {testimonialCards}
          </Carousel>
        </div>

        {/* Trust Badge */}
        <div className="mx-auto mt-5 max-w-4xl border-t border-white/10 pt-5 text-center sm:mt-7 sm:pt-6">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            <div className="flex flex-col items-center gap-1 px-2 sm:flex-row sm:justify-center sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9aa6e] shadow-lg sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-white sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="font-playfair text-lg font-bold text-white sm:text-2xl">100+</div>
                <div className="text-[10px] leading-tight text-white sm:text-sm">
                  Satisfied Clients
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 px-2 sm:flex-row sm:justify-center sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9aa6e] shadow-lg sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-white sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <div className="font-playfair text-lg font-bold text-white sm:text-2xl">5.0</div>
                <div className="text-[10px] leading-tight text-white sm:text-sm">Client Rating</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 px-2 sm:flex-row sm:justify-center sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c9aa6e] shadow-lg sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-white sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="font-playfair text-lg font-bold text-white sm:text-2xl">5+</div>
                <div className="text-[10px] leading-tight text-white/60 sm:text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
