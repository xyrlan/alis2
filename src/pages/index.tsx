import { ProjectSection } from '@/src/components/home/ProjectSection';
import { HeroSection } from '@/src/components/home/HeroSection';
import { InfiniteScrollingCarousel } from '@/src/components/home/InfiniteScrollingCarousel';
import { MoreAboutSection } from '@/src/components/home/MoreAboutSection';
import { Seo } from '@/src/components/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Produtora audiovisual em Brasília. Filmes institucionais, comerciais para TV e streaming, documentários e conteúdo para redes sociais com olhar cinematográfico."
        path="/"
      />
      <div className="h-full">
        <h1 className="sr-only">
          Alis Filmes — Produtora Audiovisual em Brasília
        </h1>
        <HeroSection />
        <InfiniteScrollingCarousel />
        <ProjectSection />
        <MoreAboutSection />
      </div>
    </>
  );
}
