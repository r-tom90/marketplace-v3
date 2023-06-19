// https://www.youtube.com/watch?v=u_95SPKE6vg

import Image from "next/image";
import React from "react";

type Props = {
  feature: {
    image: string;
    title: string;
    description: string;
  };
};

const CardComponent = ({ feature }: Props) => {
  return (
    <div className="hover:border-1 mx-4 my-2 flex h-[400px] w-[300px] flex-col items-center rounded-xl border border-lightGray bg-primary p-6 shadow-md hover:scale-105 hover:border-brightYellow hover:transition hover:duration-1000 sm:w-[300px]">
      <Image
        src={feature.image}
        alt="image"
        width={300}
        height={300}
        className="h-32 w-32 rounded-full border border-lightGray object-fill "
      />
      <div className="mt-4 text-2xl font-semibold">{feature.title}</div>
      <div className="mt-4 overflow-y-scroll text-center text-base text-gray-500">
        {feature.description}
      </div>
    </div>
  );
};

const CollectionFeatures = () => {
  const FeaturesList = [
    {
      image: "/revenue.png",
      title: "Revenue Sharing",
      description:
        "NFT holders enjoy 50% revenue share from secondary sales and other monetization activities",
    },
    {
      image: "/vip.png",
      title: "Exclusive Access",
      description:
        "NFT holders enjoy exclusive access to events, communities, and content related to our project. Gated access may include special IDO launches and future partnerships.",
    },
    {
      image: "/exclusive.png",
      title: "Airdrops & Rewards",
      description:
        "Enjoy exclusive benefits and surprises as a MuskATears NFT holder, including periodic distributions of additional marketplace sales fees and exclusive NFTs!",
    },
  ];

  return (
    <section className="flex h-full w-screen flex-col items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-black/70 to-primary md:h-screen">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-28 text-2xl font-bold md:text-5xl">
          Collection Features
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-0 md:mt-32 md:flex-row lg:gap-8 xl:gap-28">
          {FeaturesList.map((feature, index) => (
            <CardComponent key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionFeatures;
