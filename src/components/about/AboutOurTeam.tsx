import Image from 'next/image';
import { ABOUT_DATA } from '@/src/consts/about';

export const AboutOurTeam = () => {
  return (
    <div className="py-14 md:py-28">
      <div className="space-y-3">
        <h1 className="text-6xl track font-league-gothic">NOSSO TIME</h1>
        <p className="text-gray-400 text-lg tracking-tighter max-w-xl">
          Por trás de cada frame da Alis há um time de contadores de histórias,
          artistas e pensadores visuais que se dedicam à arte do audiovisual.
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {ABOUT_DATA.ourTeam.map((member) => (
          <div key={member.name}>
            <Image
              className="grayscale-100 h-[300px] md:h-[480px] object-cover"
              src={member.image}
              alt={member.name}
              width={480}
              height={480}
            />
            <div className="flex justify-between">
              <h2 className="text-xl font-league-gothic uppercase">
                {member.name}
              </h2>
              <p className="text-gray-400 tracking-tighter">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
