import { useState, useEffect, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);

  // Throttle function to limit scroll event frequency
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Handle scroll with throttling
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Update scroll progress (0 to 1)
      setScrollProgress(documentHeight > 0 ? currentScrollY / documentHeight : 0);
      
      // Update scroll direction
      setScrollDirection(currentScrollY > scrollY ? 'down' : 'up');
      
      // Set scrolling state
      setIsScrolling(true);
    }, 16), // ~60fps
    [scrollY]
  );

  // Debounce function for scroll end detection
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Handle scroll end
  const handleScrollEnd = useCallback(
    debounce(() => {
      setIsScrolling(false);
    }, 150),
    []
  );

  useEffect(() => {
    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScrollEnd, { passive: true });

    // Initialize scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, [handleScroll, handleScrollEnd]);

  // Utility functions for scroll-based animations
  const getScrollBasedValue = (startValue, endValue, threshold = 0.5) => {
    const progress = Math.min(scrollProgress / threshold, 1);
    return startValue + (endValue - startValue) * progress;
  };

  const getElementScrollProgress = (elementRef) => {
    if (!elementRef.current) return 0;
    
    const element = elementRef.current;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    
    const scrollTop = window.scrollY;
    const elementBottom = elementTop + elementHeight;
    
    if (scrollTop + windowHeight < elementTop) return 0;
    if (scrollTop > elementBottom) return 1;
    
    const visibleHeight = Math.min(scrollTop + windowHeight - elementTop, elementHeight);
    return visibleHeight / elementHeight;
  };

  const isElementInView = (elementRef, threshold = 0.1) => {
    if (!elementRef.current) return false;
    
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    return (
      rect.top < windowHeight * (1 - threshold) &&
      rect.bottom > windowHeight * threshold
    );
  };

  // Scroll-based transform utilities
  const getParallaxTransform = (speed = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  const getScaleTransform = (minScale = 0.8, maxScale = 1.2) => ({
    transform: `scale(${getScrollBasedValue(minScale, maxScale)})`,
  });

  const getOpacityTransform = (minOpacity = 0, maxOpacity = 1) => ({
    opacity: getScrollBasedValue(minOpacity, maxOpacity),
  });

  const getRotateTransform = (maxRotation = 360) => ({
    transform: `rotate(${scrollProgress * maxRotation}deg)`,
  });

  // Stagger animation helper
  const getStaggerDelay = (index, baseDelay = 0.1) => {
    return index * baseDelay;
  };

  return {
    // Basic scroll data
    scrollY,
    scrollProgress,
    scrollDirection,
    isScrolling,
    
    // Utility functions
    getScrollBasedValue,
    getElementScrollProgress,
    isElementInView,
    
    // Transform utilities
    getParallaxTransform,
    getScaleTransform,
    getOpacityTransform,
    getRotateTransform,
    
    // Animation helpers
    getStaggerDelay,
  };
};