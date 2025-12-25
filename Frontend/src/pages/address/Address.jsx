import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AddressLayout from "@/components/Address/AddressLayout";

const DUMMY_ADDRESSES = [
  {
    id: "a1",
    label: "Home",
    lat: 28.6139,
    lng: 77.209,
    address: "Connaught Place, Delhi",
    isDefault: true,
    available: true,
  },
  {
    id: "a2",
    label: "Work",
    lat: 28.5355,
    lng: 77.391,
    address: "Noida Sector 62",
    isDefault: false,
    available: false,
  },
];

const Address = () => {
  const [params] = useSearchParams();
  const source = params.get("from");

  const [addresses, setAddresses] = useState(DUMMY_ADDRESSES);
  const [selectedAddress, setSelectedAddress] = useState(
    DUMMY_ADDRESSES.find((a) => a.isDefault)
  );

  return (
    <AddressLayout
      addresses={addresses}
      setAddresses={setAddresses}
      selectedAddress={selectedAddress}
      setSelectedAddress={setSelectedAddress}
      source={source}
    />
  );
};

export default Address;
