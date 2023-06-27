import { Button, Reveal } from "../index";

const MuskATearsNFT = () => {
  return (
    <Reveal width="fit-content">
      <section className="mx-auto flex h-full w-screen flex-col items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-black/70 to-primary md:h-screen md:flex-row md:justify-around">
        <div className="mt-24 flex max-w-[300px] flex-col items-start sm:max-w-[400px] md:mt-0 md:max-w-[450px] md:items-center">
          <div className="text-2xl font-bold md:text-5xl">
            MuskATears NFT Collection
          </div>
          <p className="my-4 text-start text-lg font-medium md:text-center md:text-xl">
            Embark on an extraordinary journey in the captivating world of
            MuskATears. Collect one of the 691 unique drawn MuskATears Warriors
            and unlock the potential for passive income with $ETH rewards.
          </p>

          <Button href={"/claim"}>Grab a MuskATear</Button>
        </div>
        <div className="mt-20 flex w-[300px] flex-col items-center justify-center sm:w-[400px] md:mt-0">
          <video className="rounded-xl" autoPlay loop muted playsInline>
            <source src="/tweeterNFT.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-start text-[10px] italic text-white sm:text-darkGray">
            Marketing purposes only. Not representative of MuskATears NFT
            Collection.{" "}
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default MuskATearsNFT;
