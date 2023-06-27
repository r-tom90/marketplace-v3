import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

// import { useSelector } from "react-redux";
// import { StoreState } from "../store/store";

export default function Buy() {
  // const nftCollectionAddress = useSelector((state: StoreState) => state.nftCollectionAddress?.nftCollectionAddress);

  // const { contract } = useContract(nftCollectionAddress);

  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  // const { data, isLoading } = useNFTs(contract);

  // ! Also allow for pagination

  const { data, isLoading, error } = useNFTs(contract, {
    // For example, to only return the first 50 NFTs in the collection
    count: 692,
    start: 0,
  });

  return (
    <Container maxWidth="lg">
      <div className="mx-0 xl:mx-16">
        <h1>Buy NFTs</h1>
        <p>Browse which NFTs are available from the collection.</p>
        <p className="text-xs italic text-lightGray/50">
          Note: Some NFTs have not yet been claimed. Click the CLAIM button
          above.
        </p>
      </div>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}
