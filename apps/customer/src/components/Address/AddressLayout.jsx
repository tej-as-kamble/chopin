import { useState } from "react";
import BaseMap from "@/components/Map/BaseMap";
import AddressPanel from "./AddressPanel";
import "./address.css";

const AddressLayout = ({
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  source,
}) => {
  const [mode, setMode] = useState("view");
  const [latLng, setLatLng] = useState({
    lat: selectedAddress.lat,
    lng: selectedAddress.lng,
  });
  const [locationConfirmed, setLocationConfirmed] = useState(false);

  return (
    <div className="address-layout">
      <div className="address-map">
        <BaseMap
          mode={mode}
          latLng={latLng}
          onLocationChange={setLatLng}
          onConfirm={() => setLocationConfirmed(true)}
        />
      </div>

      <div className="address-panel">
        <AddressPanel
          addresses={addresses}
          setAddresses={setAddresses}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          setLatLng={setLatLng}
          mode={mode}
          setMode={setMode}
          latLng={latLng}
          locationConfirmed={locationConfirmed}
          setLocationConfirmed={setLocationConfirmed}
          source={source}
        />
      </div>
    </div>
  );
};

export default AddressLayout;
