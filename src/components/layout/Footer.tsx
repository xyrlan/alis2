'use client';
import { FlipLink } from './FlipLink';
import Image from 'next/image';
import { SOCIAL_ITEMS } from '@/src/consts/social';
import { trackEvent } from '@/src/lib/analytics';

export const Footer = () => {
  const text = 'ETERNIZE SEU PROPÓSITO';
  const COPYRIGHT_TEXT = '© 2025 Alis Filmes.';
  return (
    <footer className="h-auto min-h-[30vh] md:h-[40vh] w-full pt-12 md:pt-28 px-6 -z-10 bg-background flex flex-col justify-between items-center fixed bottom-0">
      <div className="w-full flex justify-center items-center uppercase tracking-normal text-4xl md:text-7xl lg:text-9xl select-none leading-tight md:leading-26 relative font-league-gothic h-auto md:h-[280px]">
        <Image
          src="/images/border.png"
          alt="border"
          width={2177}
          height={200}
          className="absolute top-0 left-0 h-[18px] scale-x-200 hidden md:block"
        />
        <Image
          src="/images/border.png"
          alt="border"
          width={2177}
          height={200}
          className="absolute bottom-0 rotate-180 left-0 h-[18px] scale-x-200 hidden md:block"
        />
        <div className="border-b w-fit h-fit">
          <FlipLink
            href="/contato"
            width="10"
            onClick={() => trackEvent('cta_contato_click', { location: 'footer' })}
          >
            {text}
          </FlipLink>
        </div>
      </div>
      <div className="w-full pt-8 md:pt-20 pb-4 flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-between leading-3.5 uppercase text-xs tracking-tighter text-gray-400">
        <span className="flex gap-1">
          Designed in
          <span className="text-white">
            <FlipLink
              href="https://cursor.com"
              onClick={() =>
                trackEvent('external_link_click', {
                  url: 'https://cursor.com',
                  location: 'footer',
                })
              }
            >
              Cursor
            </FlipLink>
          </span>
          by
          <span className="text-white">
            <FlipLink
              href="https://xyrlan.com"
              onClick={() =>
                trackEvent('external_link_click', {
                  url: 'https://xyrlan.com',
                  location: 'footer',
                })
              }
            >
              Xyrlan
            </FlipLink>
          </span>
        </span>
        <span className="flex gap-4 text-white">
          {SOCIAL_ITEMS.map((social) => (
            <FlipLink
              href={social.href}
              key={social.href}
              onClick={() =>
                trackEvent('social_click', {
                  network: social.name.toLowerCase(),
                  location: 'footer',
                })
              }
            >
              {social.name}
            </FlipLink>
          ))}
        </span>
        <span>{COPYRIGHT_TEXT}</span>
      </div>
    </footer>
  );
};
