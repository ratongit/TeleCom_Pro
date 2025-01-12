
import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RouteDisplay = ({ vehicle, route }) => {
    if (!route || route.length === 0) {
        return (
            <div>
                <h2>{vehicle.id}</h2>
                <p>No route assigned for this vehicle.</p>
            </div>
        );
    }

    const startPosition = vehicle.currentLocation;
    const destination = route[0].coordinates;

    return (
        <div>
            <h2>{vehicle.id}</h2>
            <p>Assigned to: {route[0].label}</p>

            <MapContainer
                style={{ height: "400px", width: "600px" }}
                center={startPosition}
                zoom={12}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={startPosition}>
                    <Tooltip permanent>Start: {vehicle.id}</Tooltip>
                </Marker>
                <Marker position={destination}>
                    <Tooltip permanent>Destination: {route[0].label}</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default RouteDisplay;










































































































// import React from "react";
// import { MapContainer, TileLayer, Polyline, Marker, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const RouteDisplay = ({ route }) => {
//     // Check if route data is available
//     if (!route || route.length === 0) {
//         return <p>No route data available to display.</p>;
//     }

//     // Extract coordinates
//     const coordinates = route.map((site) => site.coordinates);

//     return (
//         <div>
//             <h2>Shortest Route</h2>
//             <ul>
//                 {route.map((site, index) => (
//                     <li key={index}>
//                         Step {index + 1}: {site.label} ({site.coordinates[0]}, {site.coordinates[1]})
//                     </li>
//                 ))}
//             </ul>

//             <MapContainer style={{ height: "600px", width: "800px" }} center={coordinates[0]} zoom={13}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Polyline positions={coordinates} color="blue" />
//                 {route.map((site, index) => (
//                     <Marker key={index} position={site.coordinates}>
//                         <Tooltip permanent>{site.label}: Step {index + 1}</Tooltip>
//                     </Marker>
//                 ))}
//             </MapContainer>
//         </div>
//     );
// };

// export default RouteDisplay;
