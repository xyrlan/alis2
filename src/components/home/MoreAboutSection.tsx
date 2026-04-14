import { SERVICES_DATA } from '@/src/consts/services';
import Link from 'next/link';
import { trackEvent } from '@/src/lib/analytics';

export const MoreAboutSection = () => {
  return (
    <div className="sticky bg-background top-0">
      <div className="min-h-[60vh] w-full z-10 px-6 pt-56 pb-28 flex justify-center">
        <div className="text-start max-w-440">
          <p className="tracking-tighter text-2xl md:text-4xl lg:text-6xl font-bold ">
{'Somos uma produtora audiovisual que transforma ideias em narrativas potentes. Contamos hist\u00F3rias com prop\u00F3sito, est\u00E9tica e estrat\u00E9gia \u2014 da cria\u00E7\u00E3o ao p\u00F3s, nos envolvemos em cada etapa para construir conte\u00FAdos que conectam marcas ao seu p\u00FAblico de forma aut\u00EAntica. Seja para campanhas, lan\u00E7amentos ou v\u00EDdeos institucionais, nosso olhar \u00E9 cinematogr\u00E1fico e nosso foco \u00E9 um s\u00F3: fazer cada projeto voar longe.'}
          </p>
          <Link
            href="/contato"
            className="inline-block mt-10 border-b border-white/60 pb-1 font-league-gothic tracking-wide text-2xl uppercase hover:border-white transition-colors"
            onClick={() =>
              trackEvent('cta_contato_click', { location: 'more_about' })
            }
          >
{'Eternize seu prop\u00F3sito'}
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-12 border-t border-white/30 pt-2 mt-10 md:mt-16 tracking-tighter font-semibold ">
            <div className="col-span-1 md:col-span-6 mb-2 md:mb-0">
              <span className="font-league-gothic tracking-wide text-lg">
{'SERVI\u00C7OS'}
              </span>
            </div>
            <div className="col-span-1 md:col-span-4 space-y-1.5">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <div key={service.name}>
                  <span className="">{service.name}</span>
                </div>
              ))}
            </div>
            <div className="col-span-1 md:col-span-2 space-y-1.5 text-left mt-1.5 md:mt-0">
              {SERVICES_DATA.slice(4, 8).map((service) => (
                <div key={service.name}>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
