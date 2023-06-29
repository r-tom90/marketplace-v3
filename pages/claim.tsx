import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";

import Swal from "sweetalert2";
import {
  MediaRenderer,
  Web3Button,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useTotalCirculatingSupply,
  useTotalCount,
} from "@thirdweb-dev/react";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import { ethers } from "ethers";

const Claim = () => {
  const address = useAddress();
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useContractMetadata(contract);

  const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } =
    useActiveClaimConditionForWallet(contract, address);

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalCount(contract);

  const { data: totalClaimed, isLoading: isTotalClaimedLoading } =
    useTotalCirculatingSupply(contract);

  const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0");

  const [claimQuantity, setClaimQuantity] = useState(1);

  const increment = () => {
    if (claimQuantity < maxClaimable) {
      setClaimQuantity(claimQuantity + 1);
    }
  };
  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

  const { data: claimInelegibility, isLoading: isClaimInelegibilityLoading } =
    useClaimIneligibilityReasons(contract, {
      walletAddress: address || "",
      quantity: claimQuantity,
    });

  const handleUnavailable = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry, this feature is currently unavailable!",
    });
  };

  // // ! Executed to allow for users to know real address
  // useEffect(() => {
  //   Swal.fire({
  //     // title: "Before you view continue: Contract address is ",
  //     icon: "warning",
  //     html:
  //       "<b>3.45 Million MUSK</b> will be required to claim your NFT: " +
  //       "</br>" +
  //       "</br>" +
  //       '<a href="https://app.uniswap.org/#/swap?outputCurrency=0x9d04ceaae75ddbf2ba93c0abe670899120d20e1f" target="blank"><b>Click Here</b></a> ',
  //     width: 600,
  //     padding: "3em",
  //     color: "#fff",
  //     background: "#fff url(/hero-gradient.png)",
  //     backdrop: `
  //       rgba(255,255,255,0.3)
  //     `,
  //   });
  // }, []);

  // // ! Executed to allow for users to know real address
  // useEffect(() => {
  //   Swal.fire({
  //     // title: "Before you view continue: Contract address is ",
  //     icon: "warning",
  //     html:
  //       "<b>0.025 ETH</b> will be required to claim your NFT: " +
  //       "</br>" +
  //       "</br>" +
  //       '<a href="https://app.uniswap.org/#/swap?outputCurrency=0x9d04ceaae75ddbf2ba93c0abe670899120d20e1f" target="blank"><b>Click Here</b></a> ',
  //     width: 600,
  //     padding: "3em",
  //     color: "#fff",
  //     background: "#fff url(/hero-gradient.png)",
  //     backdrop: `
  //       rgba(255,255,255,0.3)
  //     `,
  //   });
  // }, []);

  return (
    <section className="mx-auto mt-20 h-full w-full">
      {/* <section className=""> */}
      {/* <div className="absolute h-[74px] w-full bg-black" /> */}
      <div className="flex justify-center">
        <iframe
          src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.ipfs-public.thirdwebcdn.com/?contract=0x213162F3d4FbeC2dB1dEb4666c4d16cF6ab14A7B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%7D&primaryColor=purple"
          width="600px"
          height="600px"
          className="max-w-full rounded-lg"
          frameBorder="0"
        ></iframe>
      </div>
      {/* <div className="flex w-full justify-center">
        <div className="m-4 flex max-w-[420px] flex-col rounded-lg bg-darkGray p-4 text-center md:mx-auto md:max-w-[800px] md:flex-row md:justify-center md:text-start">
          {!isContractMetadataLoading && (
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-shrink-0">
                <MediaRenderer
                  className="rounded-lg"
                  src={contractMetadata?.image}
                />
              </div>
              <div className="md:ml-8">
                <h1 className="text-2xl md:text-4xl">
                  {contractMetadata.name}
                </h1>
                <p className="mt-2 text-xs italic text-lightGray md:text-sm">
                  {contractMetadata.description}
                </p>
                {!isActiveClaimPhaseLoading ? (
                  <div className="mt-2 text-base">
                    <p className="font-bold">
                      Claim Phase:{" "}
                      <span className="font-normal text-lightGray">
                        {activeClaimPhase?.metadata?.name}
                      </span>
                    </p>
                    <p className="font-bold">
                      Price:{" "}
                      <span className="font-normal text-lightGray">
                        {ethers.utils?.formatUnits(activeClaimPhase?.price!)}{" "}
                        {ethers.utils?.formatUnits(activeClaimPhase?.price!) >=
                        "0.02"
                          ? "MUSK"
                          : "ETH"}
                      </span>
                    </p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
                {!isTotalSupplyLoading && !isTotalClaimedLoading ? (
                  <p className="font-bold">
                    Claimed:{" "}
                    <span className="font-normal text-lightGray">
                      {totalClaimed?.toNumber()}/{totalSupply?.toNumber()}
                    </span>
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
                {address ? (
                  !isClaimInelegibilityLoading ? (
                    claimInelegibility?.length! > 0 ? (
                      claimInelegibility?.map((reason) => (
                        <p key={reason}>{reason}</p>
                      ))
                    ) : (
                      <div className="">
                        <p className="font-bold">
                          You are eligible to claim.{" "}
                          <span className="font-normal text-lightGray">
                            {`(Max claimable: ${maxClaimable})`}
                          </span>
                        </p>
                        <div className="text-center">
                          <div className="my-1 flex justify-center ">
                            <button
                              className="mr-1 rounded border bg-lightGray px-2 hover:bg-lightGray/75"
                              onClick={decrement}
                            >
                              -
                            </button>
                            <div className="flex items-center justify-center ">
                              <input
                                className="rounded py-0.5 text-center"
                                type="number"
                                value={claimQuantity}
                              />
                            </div>
                            <button
                              className="ml-1 rounded border bg-lightGray px-2 hover:bg-lightGray/75"
                              onClick={increment}
                            >
                              +
                            </button>
                          </div>
                          <Web3Button
                            contractAddress={NFT_COLLECTION_ADDRESS}
                            action={(contract) =>
                              contract.erc721.claim(claimQuantity)
                            }
                          >
                            Claim NFT
                          </Web3Button>
                        </div>
                      </div>
                    )
                  ) : (
                    <p>Loading...</p>
                  )
                ) : (
                  <p>Connect your wallet to claim</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default Claim;
