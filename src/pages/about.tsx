import { Seo } from '@/src/components/Seo';
import { AboutHero } from '@/src/components/about/AboutHero';
import { AboutStory } from '@/src/components/about/AboutStory';
// Reativar quando chegarem as fotos reais do time
// import { AboutOurTeam } from '@/src/components/about/AboutOurTeam';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre"
        description="A Alis é uma produtora audiovisual de Brasília que cria filmes com alma e direção — mais de 4 anos de mercado, 1000+ peças produzidas e 50+ parceiros atendidos."
        path="/about"
      />
      <div className="flex flex-col items-center justify-center px-6 ">
        <div className="max-w-440">
          <AboutHero />
          <AboutStory />
          {/* <AboutOurTeam /> */}
        </div>
      </div>
    </>
  );
}
