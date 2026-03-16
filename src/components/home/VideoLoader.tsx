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
}: VideoLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused && autoPlay) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlay]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        preload={preload}
        loop={loop}
        playsInline={playsInline}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30">{children}</div>
    </div>
  );
}
