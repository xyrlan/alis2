import Head from 'next/head';
import { ProjectSection } from '@/src/components/home/ProjectSection';
import { HeroSection } from '@/src/components/home/HeroSection';
import { InfiniteScrollingCarousel } from '@/src/components/home/InfiniteScrollingCarousel';
import { MoreAboutSection } from '@/src/components/home/MoreAboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alis Filmes - Home</title>
        <meta
          name="description"
          content="Ali's Filmes - Audiovisual Production"
        />
      </Head>
      <div className="h-full">
        <HeroSection />
        <InfiniteScrollingCarousel />
        <ProjectSection />
        <MoreAboutSection />
      </div>
    </>
  );
}
