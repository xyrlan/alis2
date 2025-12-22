'use client';
import { FlipLink } from './FlipLink';
import Image from 'next/image';
import { SOCIAL_ITEMS } from '../consts/social';

export const Footer = () => {
  const text = 'START YOUR STORY';
  const COPYRIGHT_TEXT = "© 2025 Ali's Filmes.";
  return (
    <footer className="h-[40vh] w-full pt-28 px-6 z-20  flex flex-col justify-between items-center relative">
      <div className="w-full flex justify-center items-center uppercase tracking-normal text-9xl select-none leading-26 relative font-league-gothic h-[280px]">
        <Image
          src="/images/border.png"
          alt="border"
          width={2177}
          height={200}
          className="absolute top-0 left-0 h-[18px] scale-x-200"
        />
        <Image
          src="/images/border.png"
          alt="border"
          width={2177}
          height={200}
          className="absolute bottom-0 rotate-180 left-0 h-[18px] scale-x-200"
        />
        <div className="border-b w-fit h-fit">
          <FlipLink href="/" width="10">
            {text}
          </FlipLink>
        </div>
      </div>
      <div className="w-full pt-20 pb-4 flex justify-between leading-3.5 uppercase text-xs tracking-tighter text-gray-400">
        <span className="flex gap-1">
          Designed in
          <span className="text-white">
            <FlipLink href="https://cursor.com">Cursor</FlipLink>
          </span>
          by
          <span className="text-white">
            <FlipLink href="https://xyrlan.com">Xyrlan</FlipLink>
          </span>
        </span>
        <span className="flex gap-4 text-white">
          {SOCIAL_ITEMS.map((social) => (
            <FlipLink href={social.href} key={social.href}>
              {social.name}
            </FlipLink>
          ))}
        </span>
        <span>{COPYRIGHT_TEXT}</span>
      </div>
    </footer>
  );
};
