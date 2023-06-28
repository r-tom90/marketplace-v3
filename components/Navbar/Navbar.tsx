import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const address = useAddress();

  const links = [
    // { title: "Buy", href: "buy" },
    // { title: "Sell", href: "sell" },
    { title: "Claim", href: "claim" },
    // { title: "MuskATears", href: "mint" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="fixed left-0 top-0 z-50 w-full items-center justify-center bg-transparent py-2 backdrop-blur-sm backdrop-filter sm:py-1 ">
      <nav className="mx-4 flex max-w-7xl justify-between xl:mx-auto">
        <div className="flex w-full justify-between">
          <Link
            href="/"
            className="flex w-24 cursor-pointer content-start items-center gap-4 opacity-70 hover:opacity-100"
          >
            <Image
              src="/logo1.png"
              width={70}
              height={70}
              alt="Marketplace sample logo"
              className="h-14 w-14 sm:h-16 sm:w-16"
            />
          </Link>
          <div className="hidden text-center text-lg font-semibold uppercase md:flex">
            <div className="mx-auto ml-1 flex items-center space-x-0">
              {links.map((link: any) => (
                <Link
                  key={link}
                  href={`/${link.href}`}
                  className="px-6 py-3 hover:text-brightYellow"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden w-full items-center justify-end md:flex">
            <ConnectWallet theme="dark" btnTitle="Connect " />
            {address && (
              <Link className="px-2 py-3 md:px-6" href={`/profile/${address}`}>
                <Image
                  className="mt-1.5 transition-all duration-150 ease-in-out hover:cursor-pointer hover:opacity-80"
                  src="/user-icon.png"
                  width={35}
                  height={35}
                  alt="Profile"
                />
              </Link>
            )}
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-twitterBlue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <nav className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2 text-base font-medium text-white sm:px-3">
          <Link
            className="flex justify-around rounded-md bg-lightGray/10 px-3 py-2 hover:text-yellow-700"
            href={`/profile/${address}`}
          >
            <ConnectWallet theme="dark" btnTitle="Connect " />
            <Image
              className="my-auto transition-all duration-150 ease-in-out hover:cursor-pointer hover:opacity-80"
              src="/user-icon.png"
              width={35}
              height={35}
              alt="Profile"
              onClick={handleLinkClick}
            />
          </Link>
          {links.map((link: any) => (
            <Link
              key={link}
              href={`/${link.href}`}
              onClick={handleLinkClick}
              className="block rounded-md px-3 py-2 text-start text-base hover:bg-white/10 hover:text-brightYellow sm:text-center sm:text-lg"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
