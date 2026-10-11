'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/utils/cn';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  spacing?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  disableOnInteraction?: boolean;
  showIndicators?: boolean;
  showNavigation?: boolean;
  className?: string;
  carouselId?: string;
  loop?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 3,
  spacing = 30,
  autoplay = false,
  autoplayInterval = 5000,
  disableOnInteraction = false,
  showIndicators = true,
  showNavigation = true,
  className,
  carouselId = 'carousel',
  loop = true,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerView);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(React.Children.count(children) / itemsPerView)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive breakpoints
  const breakpoints = {
    1024: { itemsPerView: itemsPerView }, // Desktop
    768: { itemsPerView: Math.min(itemsPerView, 2) }, // Tablet
    0: { itemsPerView: 1 }, // Mobile
  };

  // Handle responsive behavior
  const updateVisibleItems = useCallback(() => {
    let items = itemsPerView;

    if (window.innerWidth >= 1024) {
      items = breakpoints[1024].itemsPerView;
    } else if (window.innerWidth >= 768) {
      items = breakpoints[768].itemsPerView;
    } else {
      items = breakpoints[0].itemsPerView;
    }

    setVisibleItems(items);
    setTotalPages(Math.ceil(React.Children.count(children) / items));

    // Adjust current page if it exceeds new total pages
    if (currentPage >= Math.ceil(React.Children.count(children) / items)) {
      setCurrentPage(Math.max(0, Math.ceil(React.Children.count(children) / items) - 1));
    }
  }, [children, currentPage, itemsPerView]);

  // Setup resize handler
  useEffect(() => {
    updateVisibleItems();

    const handleResize = () => {
      updateVisibleItems();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateVisibleItems]);

  // Navigation functions
  const goToNextPage = useCallback(() => {
    if (isAnimating) return;

    if (!autoplay) {
      setUserInteracted(true);
    }

    setIsAnimating(true);

    setCurrentPage(prev => {
      if (prev === totalPages - 1) {
        return loop ? 0 : totalPages - 1;
      }
      return prev + 1;
    });

    // Clear animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, loop, totalPages, autoplay]);

  const goToPrevPage = useCallback(() => {
    if (isAnimating) return;

    setUserInteracted(true);
    setIsAnimating(true);

    setCurrentPage(prev => {
      if (prev === 0) {
        return loop ? totalPages - 1 : 0;
      }
      return prev - 1;
    });

    // Clear animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, loop, totalPages]);

  const goToPage = useCallback(
    (page: number) => {
      if (isAnimating || page === currentPage) return;

      setUserInteracted(true);
      setIsAnimating(true);
      setCurrentPage(page);

      // Clear animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating, currentPage]
  );

  // Handle autoplay
  useEffect(() => {
    // Clean up any existing timer
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    // Only set up autoplay if enabled and not disabled by user interaction
    if (autoplay && (!disableOnInteraction || !userInteracted)) {
      autoplayTimerRef.current = setInterval(() => {
        // Direct state update instead of calling goToNextPage to avoid animation flags
        setCurrentPage(prev => {
          const next = prev === totalPages - 1 ? (loop ? 0 : prev) : prev + 1;
          return next;
        });
      }, autoplayInterval);
    }

    // Clean up on unmount or when dependencies change
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [
    autoplay,
    autoplayInterval,
    disableOnInteraction,
    userInteracted,
    totalPages,
    loop,
    carouselId,
  ]);

  // Render child items with proper widths
  const renderItems = () => {
    return React.Children.map(children, (child, index) => {
      const itemWidth = `calc(${100 / visibleItems}% - ${(spacing * (visibleItems - 1)) / visibleItems}px)`;
      return (
        <div
          className="transition-all duration-500 ease-in-out flex h-full"
          style={{
            flex: `0 0 ${itemWidth}`,
            minWidth: itemWidth,
            marginRight: index < children.length - 1 ? `${spacing}px` : 0,
          }}
        >
          <div className="flex flex-col w-full h-full">{child}</div>
        </div>
      );
    });
  };

  // Calculate transform for track
  const getTrackTransform = () => {
    if (!trackRef.current) return 'translateX(0%)';

    const itemWidth = 100 / visibleItems;
    const gapWidth = (spacing / (trackRef.current.clientWidth / 100)) * visibleItems;
    const moveX = currentPage * (visibleItems * (itemWidth + gapWidth));

    return `translateX(-${moveX}%)`;
  };

  return (
    <div
      className={cn('w-full relative flex flex-col', className)}
      data-autoplay={autoplay.toString()}
    >
      {/* Carousel container */}
      <div className="relative my-4 flex-grow flex flex-col sm:my-6">
        {/* Navigation buttons */}
        {showNavigation && (
          <>
            <button
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-primary text-white shadow-md transition-all hover:scale-110 hover:bg-accent sm:left-0 sm:h-12 sm:w-12"
              onClick={goToPrevPage}
              aria-label={`Previous ${carouselId} items`}
              aria-controls={`${carouselId}-track`}
              disabled={isAnimating || (!loop && currentPage === 0)}
            >
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-primary text-white shadow-md transition-all hover:scale-110 hover:bg-accent sm:right-0 sm:h-12 sm:w-12"
              onClick={goToNextPage}
              aria-label={`Next ${carouselId} items`}
              aria-controls={`${carouselId}-track`}
              disabled={isAnimating || (!loop && currentPage === totalPages - 1)}
            >
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </>
        )}

        {/* Carousel track */}
        <div
          className="mx-0 flex overflow-hidden sm:mx-16"
          ref={trackRef}
          role="region"
          aria-label={`${carouselId} carousel`}
          aria-roledescription="carousel"
        >
          <div
            id={`${carouselId}-track`}
            className="flex transition-transform duration-500 ease-in-out w-full h-full"
            style={{ transform: getTrackTransform() }}
            aria-live="polite"
          >
            {renderItems()}
          </div>
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && totalPages > 1 && (
        <div className="mt-3 flex justify-center gap-2.5 sm:mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                currentPage === index
                  ? 'bg-accent scale-125 opacity-100'
                  : 'bg-gray-300 hover:bg-gray-400 opacity-70 hover:opacity-100'
              )}
              onClick={() => goToPage(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      )}

      {/* Debug element */}
      {process.env.NODE_ENV !== 'production' && (
        <div style={{ display: 'none' }}>
          Current slide: {currentPage}, Total: {totalPages}, Autoplay: {autoplay.toString()}
        </div>
      )}
    </div>
  );
};
