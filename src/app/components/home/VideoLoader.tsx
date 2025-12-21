'use client';

import { useRef, ReactNode } from 'react';

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
}

export function VideoLoader({
  src,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  children,
}: VideoLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        preload="true"
        loop={loop}
        playsInline={playsInline}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30">{children}</div>
    </div>
  );
}
