'use client';
import { ProjectSection } from './components/home/ProjectSection';
import { HeroSection } from './components/home/HeroSection';
import { InfiniteScrollingCarousel } from './components/home/InfiniteScrollingCarousel';
import { MoreAboutSection } from './components/home/MoreAboutSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfiniteScrollingCarousel />
      <ProjectSection />
      <MoreAboutSection />
    </div>
  );
}
