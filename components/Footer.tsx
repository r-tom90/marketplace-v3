import Link from "next/link";
import Image from "next/image";

import { BsTwitter, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  const muskContractAddress = "0x9d04ceaae75ddbf2ba93c0abe670899120d20e1f";
  const marketplaceContractAddress =
    "0x64E91A974981621CdA5a0143aa06084E6eC3b29c";

  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className=" text-lightGray">
      <div className="mx-auto max-w-7xl px-4 py-4 text-sm font-medium md:text-lg">
        <section className="block items-center justify-between pb-2 sm:flex">
          <p className="text-start">
            Get connected with us in our Social Birdhouse:
          </p>
          <div className="flex space-x-6 pt-2 sm:pt-0">
            <Link
              href="https://twitter.com/MuskATears"
              className="hover:text-twitterBlue"
              target="blank"
            >
              <BsTwitter />
            </Link>
            <Link
              href="https://t.me/MuskATearsChat"
              className="hover:text-telegramBlue"
              target="blank"
            >
              <BsTelegram />
            </Link>
            {/* // ! Disabled for now, since*/}
            {/* <Link
              href="https://discord.gg/JDZUGcAP"
              className="hover:text-discordPurple"
              target="blank"
            >
              <BsDiscord />
            </Link> */}
            <Link
              href="mailto:MuskATears@proton.me"
              className="hover:text-darkGray"
              target="blank"
            >
              <MdEmail />
            </Link>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-8 border-t border-charcoal pt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <section className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3">
            <Link href="https://www.muskatears.com" target="blank" className="">
              <div className="flex w-full cursor-pointer items-center">
                <Image
                  className="h-14 w-auto grayscale filter hover:filter-none"
                  src="/logo1.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <h3 className="ml-2 font-semibold uppercase">MUSK token</h3>
              </div>
            </Link>
            <p className="text-start lg:text-center">
              Unleash the MuskATears Universe with{" "}
              <span className="font-semibold text-brightYellow">$MUSK</span> and
              exclusive NFTs, forging a censorship-free realm of creativity and
              freedom. Join the journey today!
            </p>
          </section>
          <section className="col-span-1 text-start sm:col-span-2 sm:text-center md:col-span-2 lg:col-span-1">
            <h3 className="mb-1 font-semibold uppercase">Useful Links</h3>
            <ul className="font-normal">
              <li className="mb-1">
                <a
                  href={`https://etherscan.io/token/${muskContractAddress}`}
                  target="blank"
                  className="hover:text-brightYellow"
                >
                  $MUSK Contract Address
                </a>
              </li>
              <li className="mb-1">
                <a
                  href={`https://etherscan.io/token/${marketplaceContractAddress}`}
                  target="blank"
                  className="hover:text-brightYellow"
                >
                  Marketplace Contract Address
                </a>
              </li>
              <li className="mb-1">
                <a
                  href={`https://app.uniswap.org/#/tokens/ethereum/${muskContractAddress}`}
                  target="blank"
                  className="hover:text-brightYellow"
                >
                  Trade $MUSK
                </a>
              </li>
            </ul>
          </section>
          <section className="col-span-1 text-start sm:col-span-2 sm:text-center md:col-span-2 lg:col-span-1">
            <h3 className="mb-1 font-semibold uppercase">MuskAVerse</h3>
            <ul className="font-normal">
              <li className="mb-1">
                <a
                  href="https://muskatears.com/"
                  target="blank"
                  className="hover:text-brightYellow"
                >
                  MuskATears Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://docs.muskatears.com/"
                  target="blank"
                  className="hover:text-brightYellow"
                >
                  Muskapedia
                </a>
              </li>
            </ul>
          </section>
        </div>
        <section className="mt-4 border-t border-charcoal pt-4 text-sm font-normal">
          <p className="text-start lg:text-center">
            © {currentYear} MuskATears. All rights reserved.
          </p>
          <p className="mt-2 text-start lg:text-center">
            Disclaimer: MuskATears is a meme token and should not be taken
            seriously. Always do your own research before investing in any
            cryptocurrency.
            <br />
          </p>
          <p className="mt-2 text-start italic lg:text-center">
            MuskATears NFT Marketplace was built with the{" "}
            <Link
              className="inline-block cursor-pointer bg-gradient-to-r from-pink-600 to-violet-700 bg-clip-text font-semibold text-transparent"
              href="https://thirdweb.com"
              target="blank"
            >
              Thirdweb
            </Link>{" "}
            SDK
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
