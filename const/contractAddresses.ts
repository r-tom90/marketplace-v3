/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Ethereum, Mumbai, Goerli } from "@thirdweb-dev/chains";
export const NETWORK = Goerli;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xe88eBC6316CF32e94E7D89C8f30679fC7a56F23C";

// 3. The address of your NFT collection smart contract.
// export const NFT_COLLECTION_ADDRESS =
//   "0x977032f177512F2273Ba5208F616982001fc3682"; // erc1155
export const NFT_COLLECTION_ADDRESS =
  "0xc52B39507e51476289992c86eA4105B2CAAFcED2";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
// export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
export const ETHERSCAN_URL = "https://goerli.etherscan.io";
