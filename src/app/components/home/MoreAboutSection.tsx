import { SERVICES_DATA } from '../../consts/services';

export const MoreAboutSection = () => {
  return (
    <div className="sticky bg-background top-0">
      <div className="h-[60vh] w-full z-10 px-6 pt-56 pb-28 flex justify-center">
        <div className="text-start max-w-440">
          <p className="tracking-tighter text-6xl font-bold ">
            We’re a videography studio driven by a love for cinematic
            storytelling and intentional filmmaking. From brand films and
            commercials to weddings and editorial pieces, we bring a crafted,
            artful approach to every frame.
          </p>
          <div className="grid grid-cols-12 border-t border-white/30 pt-2 mt-16 tracking-tighter font-semibold ">
            <div className="col-span-6">
              <span className="font-league-gothic tracking-wide text-lg">
                SERVICES
              </span>
            </div>
            <div className="col-span-4 space-y-1.5">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <div key={service.name}>
                  <span className="">{service.name}</span>
                </div>
              ))}
            </div>
            <div className="col-span-2 space-y-1.5 text-left">
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
