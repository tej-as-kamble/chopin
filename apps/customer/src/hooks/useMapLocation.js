import { useState } from "react";

const useMapLocation = (initial) => {
  const [latLng, setLatLng] = useState(initial);
  return [latLng, setLatLng];
};

export default useMapLocation;
