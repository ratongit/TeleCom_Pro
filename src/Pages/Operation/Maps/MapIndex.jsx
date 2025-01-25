import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup , Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useDatabase from '../../../Component/Hooks/useDatabase';
import { Label } from 'recharts';
import homeIcon from '../../../assets/house-icon.png'


// Define custom marker icons
const redIcon = new L.Icon({
  iconUrl:'https://i.postimg.cc/W3B3Vwrn/b6e559e8545ab076c443fff33bce4cd1-t-removebg-preview.png',
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCELOH4qUb5Xk96d6aUphDlRoRC6VHUuS09A&s',
  shadowSize: [41, 41],
});

const yellowIcon = new L.Icon({

  iconUrl:'https://i.postimg.cc/vBdLmfWQ/transparent-call-center-service-icon-antenna-icon-6004cc5bd5e979-7623655016109271958762-removebg-pre.png',
  iconSize: [40, 50],
  iconAnchor: [14, 52],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [40, 55],
});
const officeIcon = new L.Icon({
  
  iconUrl:'https://cdn4.iconfinder.com/data/icons/home3/102/Untitled-25-512.png',
  iconSize: [40, 50],
  iconAnchor: [14, 52],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// const MapIndex = ({allmatchedSite}) => {
  
  const MapIndex = ({office,officeLocation,zoom}) => {
    // console.log(office);

    const site=office.map((data)=>({
      coords: [data.lat, data.long], // Use lat and lng for coordinates
      label: data.siteCode, // Use siteCode as the label
      icon: data.priority === 'KPI Site' ? yellowIcon : redIcon,
    }))

// site.map(data=>console.log(data))

  // const sites = [
  //   { coords: [24.2787, 91.53426], label: 'Site 1', icon: redIcon },
  //   { coords: [24.31375, 91.525229], label: 'Site 2', icon: yellowIcon },
  //   { coords: [24.341225, 91.53937], label: 'Site 3', icon: redIcon },
  //   { coords: [24.33819, 91.55772], label: 'Site 4', icon: yellowIcon },
  //   { coords: [24.2937, 91.5388], label: 'Site 5', icon: redIcon },
  // ];

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
        center={officeLocation} // Center the map on the first site
        zoom={zoom}                // Set an appropriate zoom level
      >
        {/* OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Draw the polyline connecting the sites */}
        <Polyline
          positions={site.map((site) => site.coords)} // Extract coordinates from sites
          pathOptions={polylineOptions}
        />

        {/* Add markers with custom colors */}
        {site.map((site, index) => (<>
          <Marker key={index + 1} position={officeLocation} icon={officeIcon} > </Marker>
          <Marker key={index} position={site.coords} icon={site.icon} >
            <Tooltip className="custom-tooltip bg-transparent" permanent direction="top"  offset={[10, -50]}opacity={0.7}>Start: {site.label}</Tooltip>   {/* Site code */}
            <div className='bg-slate-600'>
            <Popup>{site.label}</Popup>
            </div>
          </Marker>
          </>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapIndex;
