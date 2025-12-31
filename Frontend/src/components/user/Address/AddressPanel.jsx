import { useNavigate } from 'react-router-dom';
import AddressForm from "./AddressForm";

const AddressPanel = ({
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  setLatLng,
  mode,
  setMode,
  latLng,
  setLocationConfirmed,
  source,
}) => {

  const navigate = useNavigate();
  const handleSelect = (addr) => {
    setLatLng({
      lat: addr.lat,
      lng: addr.lng,
    });
    setSelectedAddress(addr);
    setMode("view");
  };

  const handleDelete = (id) => {
    const filtered = addresses.filter((a) => a.id !== id);
    setAddresses(filtered);
    if (selectedAddress.id === id && filtered.length) {
      setSelectedAddress(filtered[0]);
    }
  };

  const handleMakeDefault = (id) => {
    const updated = addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    setAddresses(updated);
    setSelectedAddress(updated.find((a) => a.id === id));
  };

  return (
    <>
      <h2>Your Addresses</h2>

      {mode === "view" &&
        addresses.map((addr) => (
          <div
            key={addr.id}
            className={`address-card ${addr.id === selectedAddress.id ? "active" : ""
              }`}
            onClick={() => handleSelect(addr)}
          >
            <strong>
              {addr.label} {addr.isDefault && "⭐"}
            </strong>
            <p>{addr.address}</p>

            <span
              className={`address-badge ${addr.available ? "available" : "unavailable"
                }`}
            >
              {addr.available
                ? "Service available"
                : "Service not available"}
            </span>

            <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
              <button
                className="secondary-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setMode("edit");
                  setLocationConfirmed(true);
                }}
              >
                Edit
              </button>

              <button
                className="secondary-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(addr.id);
                }}
              >
                Delete
              </button>

              {!addr.isDefault && (
                <button
                  className="secondary-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMakeDefault(addr.id);
                  }}
                >
                  Make Default
                </button>
              )}
            </div>
          </div>
        ))}

      {mode === "view" && (
        <button className="primary-btn" onClick={() => { setMode("add"); setLocationConfirmed(true) }}>
          Add New Address
        </button>
      )}

      {(mode === "add" || mode === "edit") && (
        <p className="map-info-text">
          📍 Select location on map or use current location
        </p>
      )}

      {(mode === "add" || mode === "edit") && (
        <AddressForm
          latLng={latLng}
          existing={mode === "edit" ? selectedAddress : null}
          onSave={(addr) => {
            if (mode === "edit") {
              setAddresses(
                addresses.map((a) => (a.id === addr.id ? addr : a))
              );
            } else {
              setAddresses([...addresses, addr]);
            }
            setMode("view");
            setLocationConfirmed(false);
          }}
          onCancel={() => {
            setMode("view");
            setLocationConfirmed(false);
          }}
        />
      )}

      {source === "order" && mode === "view" && (
        <button
          className="primary-btn"
          onClick={() => navigate('/order/place/c1')}
        >
          Deliver to this address
        </button>
      )}
    </>
  );
};

export default AddressPanel;
