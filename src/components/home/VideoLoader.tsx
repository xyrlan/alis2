'use client';

import { useRef, useEffect, ReactNode } from 'react';

type Backdrop = 'none' | 'blur' | 'black' | 'background';

interface VideoLoaderProps {
  src: string;
  poster?: string;
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
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  children,
  preload = 'none',
  overlayClassName = 'bg-black/30',
  backdrop = 'none',
}: VideoLoaderProps & { overlayClassName?: string; backdrop?: Backdrop }) {
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
  }, [autoPlay, backdrop]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${
        backdrop === 'black' ? 'bg-black' : ''
      } ${backdrop === 'background' ? 'bg-background' : ''}`}
    >
      {backdrop === 'blur' && (
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
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        preload={preload}
        loop={loop}
        playsInline={playsInline}
        className={`w-full h-full ${
          backdrop !== 'none' ? 'relative object-contain' : 'object-cover'
        }`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`}>{children}</div>
    </div>
  );
}
