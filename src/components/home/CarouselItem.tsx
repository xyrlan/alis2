import Image from 'next/image';

interface CarouselItemProps {
  image: string;
}
export const CarouselItem = ({ image }: CarouselItemProps) => {
  return (
    <div className="relative overflow-hidden h-[80px] min-w-[80px]  rounded-xl flex justify-center items-center grayscale-100">
      <Image src={image} alt={`image`} fill className="object-contain" />
    </div>
  );
};
