'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface VideoLoaderProps {
  src: string;
  className?: string;
  videoClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  children?: ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  onLoad?: () => void;
  onError?: () => void;
  preload?: 'none' | 'metadata' | 'auto';
}

export function VideoLoader({
  src,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  children,
  preload = 'none',
  overlayClassName = 'bg-black/30',
  blurBackdrop = false,
}: VideoLoaderProps & { overlayClassName?: string; blurBackdrop?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = Array.from(container.querySelectorAll('video'));
    const observer = new IntersectionObserver(
      ([entry]) => {
        videos.forEach((video) => {
          if (entry.isIntersecting) {
            if (video.paused && autoPlay) {
              video.play().catch(() => {});
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlay, blurBackdrop]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {blurBackdrop && (
        <video
          src={src}
          autoPlay={autoPlay}
          muted
          preload={preload}
          loop={loop}
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl brightness-[0.3]"
        />
      )}
      <video
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        preload={preload}
        loop={loop}
        playsInline={playsInline}
        className={`w-full h-full ${
          blurBackdrop ? 'relative object-contain' : 'object-cover'
        }`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`}>{children}</div>
    </div>
  );
}
