/**
 * Intersection Observer based scroll animations
 * Lightweight utility for revealing elements on scroll without external dependencies
 */

export const initScrollAnimations = (): void => {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately reveal all elements if not supported
    document.querySelectorAll('[class*="scroll-"]').forEach((element) => {
      element.classList.add('revealed');
    });
    return;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: stop observing once revealed for better performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Start animation slightly before element enters viewport
    }
  );

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale'
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

/**
 * Clean up scroll animations observer
 */
export const cleanupScrollAnimations = (): void => {
  // This will be called on component unmount if needed
  // For now, observer cleanup happens automatically when elements are unobserved
};
