import { useEffect, useState } from "react";

const AddressForm = ({ latLng, onSave, existing, onCancel }) => {
  const [label, setLabel] = useState(existing?.label || "");
  const [address, setAddress] = useState(existing?.address || "");
  const [mapAddress, setMapAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSave({
      id: existing?.id || Date.now().toString(),
      label,
      address,
      lat: latLng.lat,
      lng: latLng.lng,
      available: true,
      isDefault: existing?.isDefault || false,
    });
  };


  useEffect(() => {
    if (!latLng) return;

    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latLng.lat}&lon=${latLng.lng}&format=json`
        );
        const data = await res.json();
        setMapAddress(data.display_name);
      } catch (err) {
        console.error("Failed to fetch address", err);
      }
    };

    fetchAddress();
  }, [latLng]);

  return (
    <form className="address-form" onSubmit={submitHandler}>
      <h3>{existing ? "Edit Address" : "Add Address"}</h3>

      <input
        value={mapAddress}
        id="ad-cant-change"
      />

      <input
        placeholder="Label (Home / Work)"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />

      <textarea
        placeholder="Full Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <button className="primary-btn" type="submit">
        {existing ? "Update Address" : "Save Address"}
      </button>
      <button className="primary-btn cancel" onClick={() => onCancel()}>
        Cancel
      </button>
    </form>
  );
};

export default AddressForm;
