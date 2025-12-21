import { SERVICES_DATA } from '../../consts/services';

export const MoreAboutSection = () => {
  return (
    <div className="sticky top-0">
      <div className="h-[75vh] w-full bg-black z-10 px-6 pt-56 pb-28">
        <div className="text-start ">
          <p className="text-white tracking-tighter text-6xl font-bold selection:bg-white selection:text-black">
            We’re a videography studio driven by a love for cinematic
            storytelling and intentional filmmaking. From brand films and
            commercials to weddings and editorial pieces, we bring a crafted,
            artful approach to every frame.
          </p>
          <div className="grid grid-cols-12 border-t border-white/30 pt-2 mt-16 tracking-tight font-semibold ">
            <div className="col-span-6">
              <span className="font-league-gothic tracking-wide text-lg">
                SERVICES
              </span>
            </div>
            <div className="col-span-5 space-y-1">
              {SERVICES_DATA.slice(0, 3).map((service) => (
                <div key={service.name}>
                  <span className="">{service.name}</span>
                </div>
              ))}
            </div>
            <div className="col-span-1 space-y-1 text-right">
              {SERVICES_DATA.slice(3, 6).map((service) => (
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
