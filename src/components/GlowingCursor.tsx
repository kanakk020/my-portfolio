import React, { useEffect, useRef, useState } from 'react';

const GlowingCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktops/laptops with mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    }

    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (glowRef.current) glowRef.current.style.opacity = '1';
      }

      // Check if hovering over clickable/interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
        );
        isHovering = !!interactive;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    // Smooth physics loop with linear interpolation (lerp)
    const render = () => {
      // Ring follows mouse with smooth damping
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      // Update dot position directly for instant response
      if (dotRef.current) {
        const dotScale = isClicking ? 0.6 : isHovering ? 1.4 : 1;
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }

      // Update ring position & size
      if (ringRef.current) {
        const ringScale = isClicking ? 0.8 : isHovering ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ringRef.current.style.borderColor = isHovering
          ? 'rgba(52, 211, 153, 0.9)'
          : 'rgba(16, 185, 129, 0.45)';
        ringRef.current.style.backgroundColor = isHovering
          ? 'rgba(16, 185, 129, 0.2)'
          : 'rgba(16, 185, 129, 0.08)';
      }

      // Update large ambient glow aura
      if (glowRef.current) {
        const glowScale = isHovering ? 1.3 : 1;
        glowRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${glowScale})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      }
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* 1. Large Ambient Radiant Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997] w-24 h-24 rounded-full bg-emerald-500/15 blur-xl -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 will-change-transform"
      />

      {/* 2. Trailing Glass Aura Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-9 h-9 rounded-full border border-emerald-400/50 bg-emerald-500/10 backdrop-blur-[0.5px] -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-opacity duration-200 will-change-transform"
      />

      {/* 3. Center Pinpoint Precision Neon Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-emerald-300 -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-[0_0_8px_#34d399] transition-opacity duration-150 will-change-transform"
      />
    </>
  );
};

export default GlowingCursor;
