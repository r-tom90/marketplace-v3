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
      <div className="flex w-full justify-center">
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
                    <p>Claim Phase: {activeClaimPhase?.metadata?.name}</p>
                    <p>
                      Price:{" "}
                      {/* {ethers.utils?.formatUnits(activeClaimPhase?.price!)}{" "}
                      {ethers.utils?.formatUnits(activeClaimPhase?.price!) >=
                      "0.02"
                        ? "MUSK"
                        : "ETH"} */}
                    </p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
                {!isTotalSupplyLoading && !isTotalClaimedLoading ? (
                  <p>
                    Claimed: {totalClaimed?.toNumber()}/
                    {totalSupply?.toNumber()}
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
                        <p>
                          You are eligible to claim.{" "}
                          {`(Max claimable: ${maxClaimable})`}
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
      </div>
    </section>
  );
};

export default Claim;
