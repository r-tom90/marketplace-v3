import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const UniqueNFTs = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <section
      className="flex h-screen w-screen flex-col items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary via-black/70 to-primary
    "
    >
      <div className="flex max-w-5xl flex-col items-center justify-center">
        <div className="mt-28 text-2xl font-bold md:text-5xl">
          The Great Hunt: Find the Golden Tweeter among 1000 MuskATears!
        </div>
        <p className="mx-2 mt-16 text-start text-xs font-medium italic text-darkGray md:my-2 md:text-center md:text-sm">
          Be the ultimate treasure hunter and seize the glory by being the first
          to uncover the legendary Golden Tweeter and claim your grand prize!
        </p>
      </div>
      <div className="hidden md:flex">
        <div className="mt-8 overflow-x-scroll" ref={emblaRef}>
          <div className="flex">
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/test1.png"
                alt="tweeterNFT"
                width={400}
                height={400}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/test2.png"
                alt="tweeterNFT"
                width={400}
                height={400}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            {/* <div className="min-w-full  flex-grow ">Slide 2</div>
          <div className="min-w-full  flex-grow ">Slide 3</div> */}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="mt-4 overflow-x-scroll" ref={emblaRef2}>
          <div className="flex">
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/logo0.png"
                alt="test0"
                width={400}
                height={400}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/logo1.png"
                alt="test1"
                width={400}
                height={400}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueNFTs;
