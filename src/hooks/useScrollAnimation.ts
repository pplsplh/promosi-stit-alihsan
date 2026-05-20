import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
<<<<<<< HEAD
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const children = el.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
    );
=======
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const children = el.querySelectorAll('.animate-on-scroll');
>>>>>>> 3956b7224dc0cd6e8fccd05ef22d6ceca9a1e9fd
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
