import './OrderMap.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

import { FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import { SectionHeader } from '@chopin/ui-web';



const createLeafletIcon = (iconComponent, specificClass, size) => {

  const iconHtml = renderToStaticMarkup(
    <div className={`map-icon-wrapper ${specificClass}`}>
      {iconComponent}
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-leaflet-icon',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

const OrderMap = () => {
  const restaurantPos = [12.9716, 77.5946];
  const customerPos = [12.9650, 77.6050];
  const driverPos = [12.9690, 77.5990];


  const restaurantIcon = createLeafletIcon(<IoFastFood />, 'icon-restaurant', 35);
  const customerIcon = createLeafletIcon(<FaHome />, 'icon-customer', 35);
  const driverIcon = createLeafletIcon(<MdDeliveryDining />, 'icon-driver', 45);

  return (
    <>
      <SectionHeader heading="Live Tracking" icon={<FaMapMarkedAlt />} />
      <div className="map-container">
        <MapContainer
          center={[12.9680, 77.6000]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors © CARTO"
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />

          <Marker position={restaurantPos} icon={restaurantIcon}>
            <Popup><b>Restaurant</b><br />Preparing your food.</Popup>
          </Marker>

          <Marker position={driverPos} icon={driverIcon}>
            <Popup><b>Rider</b><br />On the way!</Popup>
          </Marker>

          <Marker position={customerPos} icon={customerIcon}>
            <Popup><b>You</b><br />Approximate delivery area.</Popup>
          </Marker>


        </MapContainer>
      </div>
    </>
  );
};

export default OrderMap;