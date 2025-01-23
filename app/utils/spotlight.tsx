import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/app/utils/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  ease?: string;
  smoothing?: number;
};

export function Spotlight({
  className,
  size = 200,
  ease = "power2.out",
  smoothing = 0.025
}: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.parentElement;
    if (!parent || !spotlightRef.current) return;

    parent.style.position = 'relative';
    parent.style.overflow = 'hidden';

    gsap.set(spotlightRef.current, { opacity: 0 });

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!spotlightRef.current) return;

      currentPosition.current.x = lerp(
        currentPosition.current.x,
        mousePosition.current.x,
        smoothing
      );
      currentPosition.current.y = lerp(
        currentPosition.current.y,
        mousePosition.current.y,
        smoothing
      );

      gsap.set(spotlightRef.current, {
        x: currentPosition.current.x,
        y: currentPosition.current.y,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = parent.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - left - size / 2,
        y: e.clientY - top - size / 2
      };
    };

    const handleMouseEnter = () => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 1,
          duration: 0.6,
          ease
        });
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.6,
          ease
        });
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [size, ease, smoothing]);

  return (
    <div ref={containerRef}>
      <div
        ref={spotlightRef}
        className={cn(
          'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl',
          'from-text-gray to-text-white',
          className
        )}
        style={{
          width: size,
          height: size
        }}
      />
    </div>
  );
}

export default Spotlight;