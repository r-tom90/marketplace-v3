import {
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useMetadata,
} from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import Skeleton from "../components/Skeleton/Skeleton";

import Swal from "sweetalert2";

const Mint = () => {
  const MAX_NFT = 69;
  const address = useAddress();
  // const tokenId = 0; // the tokenId to look up
  // const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);

  const { data: metadata, isLoading: isLoadingMetadata } =
    useMetadata(contract);

  const { data: totalSupply, isLoading: isLoadingTotalSupply } =
    useContractRead(contract, "totalSupply", [0]);

  const { mutateAsync, isLoading, error } = useContractWrite(contract, "claim");

  const handleUnavailable = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry, this feature is currently unavailable!",
    });
  };

  // const handleClaim = async (contract: any) => contract.erc1155.claim(0, 1);
  const handleClaim = async (contract: any) => contract.erc721.claim(0, 1);

  return (
    <Container maxWidth="lg">
      <div>
        <h1>Mint NFTs</h1>
        <p>Browse which NFTs are available to mint.</p>
      </div>
      <div>
        {isLoadingMetadata ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <MediaRenderer src={(metadata as { image?: string })?.image} />
        )}
      </div>
      {/* <div>
        {isLoadingMetadata ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <MediaRenderer src={(metadata as { image?: string })?.image} />
        )}
      </div> */}
      <div>
        {isLoadingMetadata ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <h1>{(metadata as { name?: string })?.name}</h1>
        )}
      </div>
      <div>
        {isLoadingMetadata ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <p>{(metadata as { description?: string })?.description}</p>
        )}
      </div>
      <div>
        {isLoadingTotalSupply ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <p>
            {totalSupply?.toNumber()}/{MAX_NFT}
          </p>
        )}
      </div>
      {address ? (
        <Web3Button
          contractAddress={NFT_COLLECTION_ADDRESS}
          // action={handleClaim}
          action={(contract) => contract.erc721.claim(0, 1)}
          // action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Claim
        </Web3Button>
      ) : (
        <p>Please connect your wallet to claim</p>
      )}
    </Container>
  );
};

export default Mint;
