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
      className="flex h-full w-screen flex-col items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary via-black/70 to-primary md:h-screen
    "
    >
      <div className="flex max-w-5xl flex-col items-center justify-center">
        <div className="mt-28 text-2xl font-bold md:text-5xl">
          The Great Hunt: Find Elon and Tweeter among 691 MuskATears!
        </div>
        <p className="mx-2 mt-16 text-start text-xs font-medium italic text-darkGray md:my-2 md:text-center md:text-sm">
          Be the ultimate treasure hunter and seize the glory by being the first
          to uncover the legendary Elon and Tweeter to claim your grand prize!
        </p>
      </div>
      <div className="hidden md:flex">
        <div className="mt-8 overflow-x-scroll" ref={emblaRef}>
          <div className="flex">
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/Slide1.png"
                alt="MuskATearsNfts1"
                width={1000}
                height={1000}
                className="mx-auto h-full w-[75%] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/Slide2.png"
                alt="MuskATearsNfts2"
                width={1000}
                height={1000}
                className="mx-auto h-full w-[75%] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/Slide3.png"
                alt="MuskATearsNfts3"
                width={1000}
                height={1000}
                className="mx-auto h-full w-[75%] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full  flex-grow ">
              <Image
                src="/Slide4.png"
                alt="MuskATearsNfts4"
                width={1000}
                height={1000}
                className="mx-auto h-full w-[75%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="mt-4 overflow-x-scroll" ref={emblaRef2}>
          <div className="flex">
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/L1.png"
                alt="MuskATears NFT"
                width={1000}
                height={1000}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/L2.png"
                alt="MuskATears NFT"
                width={1000}
                height={1000}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/L3.png"
                alt="MuskATears NFT"
                width={1000}
                height={1000}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/L4.png"
                alt="MuskATears NFT"
                width={1000}
                height={1000}
                className="mx-auto h-full max-w-[400px] object-cover"
              />
            </div>
            <div className="max-h-[400px] min-w-full flex-grow">
              <Image
                src="/L5.png"
                alt="MuskATears NFT"
                width={1000}
                height={1000}
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
