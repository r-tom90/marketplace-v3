import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of the store
export type StoreState = {
  nftCollectionAddress: string;
};
const initialState: StoreState = {
  nftCollectionAddress: "0xc52B39507e51476289992c86eA4105B2CAAFcED2",
};

// Define a slice that handles the "SET_NFT_COLLECTION_ADDRESS" action
const nftCollectionAddressSlice = createSlice({
  name: "nftCollectionAddress",
  initialState,
  reducers: {
    setNftCollectionAddress(state, action: PayloadAction<string>) {
      state.nftCollectionAddress = action.payload;
    },
  },
});

// Export the setNftCollectionAddress action creator function
export const { setNftCollectionAddress } = nftCollectionAddressSlice.actions;

// Create the Redux store using configureStore
export const store = configureStore({
  reducer: {
    nftCollectionAddress: nftCollectionAddressSlice.reducer,
  },
});
