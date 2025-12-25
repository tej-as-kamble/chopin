import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapPin } from "react-icons/fa";
import { renderToString } from "react-dom/server";

const locationPinIcon = L.divIcon({
    html: renderToString(
        <FaMapPin size={36} color="#dc2626" />
    ),
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});

const LocationHandler = ({ enabled, onChange }) => {
    useMapEvents({
        click(e) {
            if (enabled) onChange(e.latlng);
        },
    });
    return null;
};

const RecenterMap = ({ latLng }) => {
    const map = useMap();

    useEffect(() => {
        if (latLng?.lat && latLng?.lng) {
            map.setView([latLng.lat, latLng.lng], map.getZoom(), {
                animate: true,
            });
        }
    }, [latLng, map]);

    return null;
};

const BaseMap = ({ latLng, onLocationChange, onConfirm, mode }) => {
    const selectable = mode === "add" || mode === "edit";

    const useCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                onLocationChange({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            (err) => {
                console.error(err);
                alert("Unable to fetch current location");
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
            }
        );
    };


    return (
        <MapContainer
            center={[latLng.lat, latLng.lng]}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution="© OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <RecenterMap latLng={latLng} />

            <LocationHandler enabled={selectable} onChange={onLocationChange} />

            <Marker
                position={[latLng.lat, latLng.lng]}
                draggable={selectable}
                icon={locationPinIcon}
                eventHandlers={{
                    dragend: (e) => {
                        onLocationChange(e.target.getLatLng());
                    },
                }}
            />

            {selectable && (
                <>
                    <button
                        className="map-confirm-btn current"
                        onClick={useCurrentLocation}
                    >
                        Use Current Location
                    </button>
                </>
            )}
        </MapContainer>
    );
};

export default BaseMap;
