import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import the Leaflet library
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComp = ({ latitude, longitude }) => {
  const position = [latitude, longitude];
  let lokasi = 'https://www.google.com/maps/search/?api=1&query='+latitude+','+longitude;
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '70vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={L.Marker.prototype.options.icon = DefaultIcon}>
        <Popup>
          Latitude: {latitude}<br/>
          Longitude: {longitude}<br/>
          <a href={lokasi} target="_blank">Lokasi</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;
