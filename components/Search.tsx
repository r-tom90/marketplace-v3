import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNftCollectionAddress } from "../store/store";

export default function NftAddressInput() {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(setNftCollectionAddress(address));
  }

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        NFT Collection Address:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
