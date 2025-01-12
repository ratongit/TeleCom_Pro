import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup , Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useDatabase from '../../../Component/Hooks/useDatabase';

// Define custom marker icons
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// const MapIndex = ({allmatchedSite}) => {
  
  const MapIndex = () => {
    const { allSiteInfo, impactSite,impactMPSite } = useDatabase([]);

impactMPSite.map(data=>console.log(data))


  const sites = [
    { coords: [24.2787, 91.53426], label: 'Site 1', icon: redIcon },
    { coords: [24.31375, 91.525229], label: 'Site 2', icon: yellowIcon },
    { coords: [24.341225, 91.53937], label: 'Site 3', icon: redIcon },
    { coords: [24.33819, 91.55772], label: 'Site 4', icon: yellowIcon },
    { coords: [24.2937, 91.5388], label: 'Site 5', icon: redIcon },
  ];

  // Define the polyline options
  const polylineOptions = {
    color: 'blue', // Line color
    weight: 96,     // Line thickness
    opacity: 1,  // Line opacity
  };

  return (
    <div className="container mb-14 my-5 w-[90%] mx-auto">
      <MapContainer
        style={{ height: '400px', width: '100%' }}
        center={sites[0].coords} // Center the map on the first site
        zoom={12}                // Set an appropriate zoom level
      >
        {/* OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Draw the polyline connecting the sites */}
        <Polyline
          positions={sites.map((site) => site.coords)} // Extract coordinates from sites
          pathOptions={polylineOptions}
        />

        {/* Add markers with custom colors */}
        {sites.map((site, index) => (
          <Marker key={index} position={site.coords} icon={site.icon}>
            <Tooltip permanent>Start: </Tooltip>   {/* Site code */}
            <Popup>{site.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapIndex;
