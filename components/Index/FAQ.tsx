import React, { useState } from "react";

type FAQType = {
  question: string;
  answer: string;
};

type DropdownProps = {
  faq: FAQType;
};

const Dropdown = ({ faq }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="my-4">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={toggleOpen}
      >
        <h3 className="text-start text-lg font-semibold md:text-xl">
          {faq.question}
        </h3>
        <div className="transform transition-transform">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 15.66l7.07-7.07a1.25 1.25 0 10-1.77-1.77l-5.3 5.3-5.3-5.3a1.25 1.25 0 10-1.77 1.77L10 15.66z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.97 6.47a1.25 1.25 0 011.76-1.8l6.5 6a1.25 1.25 0 010 1.8l-6.5 6a1.25 1.25 0 11-1.76-1.8l5.24-4.67-5.24-4.63z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="ml-4 mt-2 text-start text-gray-500">{faq.answer}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  const FAQs = [
    {
      question: "When will the NFTs be available?",
      answer: "NFTs will be available in July 2023.",
    },
    {
      question: "How can I buy the NFTs?",
      answer:
        "There will be three stages: A Whitelist (Free Mint), Public Sale with MUSK, and Public Sale with ETH.",
    },
    {
      question: "How do I get whitelisted?",
      answer:
        "To get whitelisted, you need to buy and hold at least 100 million $MUSK tokens. A snapshot will be taken and announced.",
    },
    {
      question: "What are the utilities?",
      answer:
        "Initial utilities include shared passive income from 50% of accumulated fees from secondary NFT sales and future Marketplace sales. In-game features are planned for the future.",
    },
    {
      question: "How many MuskATears can I mint?",
      answer:
        "For the whitelist, there is an initial mint of one MuskATears per address. In the Public Sale, you can mint as many MuskATears NFTs as you want per wallet.",
    },
    {
      question: "How can I get on the whitelist?",
      answer:
        "To get on the whitelist, you can follow the competition in our twitter or by holding 100m MUSK tokens in your wallet.",
    },
    {
      question: "What is the cost to mint the NFTs?",
      answer:
        "The cost to mint the NFTs during the 1st stage of the Public Sale phase will be 34,500,000 MUSK per NFT and 0.02 ETH per NFT for the 2nd stage.",
    },
    {
      question: "What happens if I find the Tweeter and Elon NFT?",
      answer:
        "If you find the Tweeter and Elon, there will be a prize coming your way.",
    },
    {
      question: "What will happen to the funds raised?",
      answer:
        "The funds raised will be used to burn the majority of MUSK, add up to 50% of raised ETH to the Liquidity Pool, and allocate the remaining ETH for development, supporting the growth of MUSK and the MuskATears NFT project.",
    },
  ];

  return (
    <section
      className="flex h-full w-screen flex-col items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
      from-primary via-black/70 to-primary md:h-screen
    "
    >
      <div className="mt-28 text-2xl font-bold md:text-5xl">FAQ</div>
      <div className="mx-auto mt-12 w-full max-w-2xl px-4 md:w-[600px] md:px-0">
        {FAQs.map((faq, index) => (
          <Dropdown key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
