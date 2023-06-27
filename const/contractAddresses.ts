/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Ethereum, Goerli } from "@thirdweb-dev/chains";
export const NETWORK = Ethereum;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x64E91A974981621CdA5a0143aa06084E6eC3b29c"; // Mainnet

// 3. The address of your NFT collection smart contract.
// export const NFT_COLLECTION_ADDRESS =
//   "0xc52B39507e51476289992c86eA4105B2CAAFcED2"; // erc721
export const NFT_COLLECTION_ADDRESS =
  "0x213162F3d4FbeC2dB1dEb4666c4d16cF6ab14A7B"; // erc721

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Ethereum.etherscan to view transactions on the Mainnet.
export const ETHERSCAN_URL = "https://etherscan.io";
