// import React from "react";
// import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const offices = [
//     { id: "v1", coordinates: [24.484895, 91.792589], label: "MB Office" },
//     { id: "v2", coordinates: [24.2838580, 91.4535397], label: "HG Office" },
//     { id: "v3", coordinates: [24.5131951, 91.3571917], label: "BNC Office" },
//     { id: "v4", coordinates: [24.5958979, 91.1125367], label: "HG Office" },
// ];

// const sites = [
//     { coordinates: [24.2787, 91.53426], label: "HGBBL22" },
//     { coordinates: [24.31375, 91.525229], label: "HGBBL23" },
//     { coordinates: [24.341225, 91.53937], label: "HGBBL24" },
//     { coordinates: [24.33819, 91.55772], label: "HGBBL25" },
//     { coordinates: [24.295, 91.76695], label: "MBSML18" },
//     { coordinates: [24.2937, 91.5388], label: "HGBBL26" },
// ];

// // Function to assign vehicles to the nearest site
// const assignVehiclesToSites = (offices, sites) => {
//     const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
//         const toRad = (deg) => (deg * Math.PI) / 180;
//         const R = 6371; // Radius of the Earth in km
//         const dLat = toRad(lat2 - lat1);
//         const dLon = toRad(lon2 - lon1);
//         const a =
//             Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(toRad(lat1)) *
//                 Math.cos(toRad(lat2)) *
//                 Math.sin(dLon / 2) *
//                 Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         return R * c;
//     };

//     const remainingSites = [...sites];
//     const assignments = offices.map((office) => {
//         if (remainingSites.length === 0) {
//             return { vehicle: office.id, site: null }; // No sites left
//         }

//         // Find the nearest unvisited site
//         const nearestSite = remainingSites.reduce(
//             (closest, site) => {
//                 const distance = haversineDistance(office.coordinates, site.coordinates);
//                 return distance < closest.distance ? { site, distance } : closest;
//             },
//             { site: null, distance: Infinity }
//         );

//         if (nearestSite.site) {
//             remainingSites.splice(remainingSites.indexOf(nearestSite.site), 1); // Mark site as visited
//             return { vehicle: office.id, site: nearestSite.site };
//         }

//         return { vehicle: office.id, site: null }; // No valid site found
//     });

//     return assignments;
// };

// const RoutePlanner = () => {
//     const assignments = assignVehiclesToSites(offices, sites);

//     console.log("Vehicle Assignments:", assignments);

//     return (
//         <div>
//             <h1>Route Planner</h1>
//             <ul>
//                 {assignments.map(({ vehicle, site }, index) => (
//                     <li key={index}>
//                         {vehicle} {site ? `s${index + 1} ${site.label}` : "No movement required"}
//                     </li>
//                 ))}
//             </ul>

//             <MapContainer
//                 style={{ height: "600px", width: "100%" }}
//                 center={offices[0].coordinates}
//                 zoom={10}
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />

//                 {/* Render office markers */}
//                 {offices.map((office, index) => (
//                     <Marker key={index} position={office.coordinates}>
//                         <Tooltip permanent>{office.label} ({office.id})</Tooltip>
//                     </Marker>
//                 ))}

//                 {/* Render site markers */}
//                 {sites.map((site, index) => (
//                     <Marker key={index} position={site.coordinates}>
//                         <Tooltip permanent>{site.label}</Tooltip>
//                     </Marker>
//                 ))}
//             </MapContainer>
//         </div>
//     );
// };

// export default RoutePlanner;




























import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RoutePlanner = () => {
  // Define coordinates for the sites
  const sites = [
    // [40.748817, -73.985428], // New York
    // [34.052235, -118.243683], // Los Angeles
    // [41.878113, -87.629799],
    [24.2787, 91.53426],
    [24.31375, 91.525229], 
    [24.341225, 91.53937], 
   [ 24.33819,	91.55772],
   [24.2937,	91.5388]
  ];

  // Define the polyline options
  const polylineOptions = {
    color: 'blue',    // Line color
    weight: 4,        // Line thickness
    opacity: 0.7,     // Line opacity
  };

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
      center={sites[0]} // Center the map on the first site
      zoom={4}          // Set an appropriate zoom level
    >
      {/* OpenStreetMap tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Draw the polyline connecting the sites */}
      <Polyline positions={sites} pathOptions={polylineOptions} />

      {/* Add markers for each site */}
      {sites.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>Location {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RoutePlanner;
