
import React from "react";
// import RouteDisplay from "./RouteDisplay";

const sites = [
    { coordinates: [24.484895, 91.792589], label: "MB Office" },
    { coordinates: [24.2838580, 91.4535397], label: "HG Office" },
    { coordinates: [24.5131951, 91.3571917], label: "BNC Office" },
    { coordinates: [24.5958979, 91.1125367], label: "HG Office" },
];

const vehicles = [
    { id: "Vehicle 1", currentLocation: [24.2787, 91.53426] },
    { id: "Vehicle 2", currentLocation: [24.31375, 91.525229] },
    { id: "Vehicle 3", currentLocation: [24.341225, 91.53937] },
    { id: "Vehicle 4", currentLocation: [24.33819, 91.55772] },
];

// Function to assign vehicles to the nearest site and calculate routes
const assignVehiclesToSites = (vehicles, sites) => {
    const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
        const toRad = (deg) => (deg * Math.PI) / 180;
        const R = 6371; // Radius of the Earth in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
                Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const unvisitedSites = [...sites];
    const assignments = vehicles.map((vehicle) => {
        if (unvisitedSites.length === 0) {
            return { vehicle, route: [] }; // No movement if no sites remain
        }

        let nearestSite = unvisitedSites.reduce(
            (closest, site) => {
                const distance = haversineDistance(vehicle.currentLocation, site.coordinates);
                return distance < closest.distance ? { site, distance } : closest;
            },
            { site: null, distance: Infinity }
        );

        if (nearestSite.site) {
            unvisitedSites.splice(unvisitedSites.indexOf(nearestSite.site), 1);
            return { vehicle, route: [nearestSite.site] };
        }

        return { vehicle, route: [] }; // No movement if no valid site is found
    });

    return assignments;
};

const MultiVehicleRoutePlanner = () => {
    const vehicleAssignments = assignVehiclesToSites(vehicles, sites);

    console.log("Vehicle Assignments:", vehicleAssignments);

    return (
        <div>
            <h1>Multi-Vehicle Route Planner</h1>
            {/* {vehicleAssignments.map(({ vehicle, route }) => (
                <RouteDisplay key={vehicle.id} vehicle={vehicle} route={route} />
            ))} */}
        </div>
    );
};

export default MultiVehicleRoutePlanner;




























































// import React from "react";
// import RouteDisplay from "./RouteDisplay";

// const sites = [
//     { coordinates: [24.2787, 91.53426], label: "HGBBL22" },
//     { coordinates: [24.31375, 91.525229], label: "HGBBL23" },
//     { coordinates: [24.341225, 91.53937], label: "HGBBL24" },
//     { coordinates: [24.33819, 91.55772], label: "HGBBL25" },
//     { coordinates: [24.295, 91.76695], label: "MBSML18" },
//     { coordinates: [24.2937, 91.5388], label: "HGBBL26" },
// ];

// // Office Location 

// // Function to find the shortest route
// export const findShortestRoute = (sites) => {
//     const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
//         const toRad = (deg) => (deg * Math.PI) / 180;
//         const R = 6371; // Radius of the Earth in km
//         const dLat = toRad(lat2 - lat1);
//         const dLon = toRad(lon2 - lon1);
//         const a =
//             Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(toRad(lat1)) *
//             Math.cos(toRad(lat2)) *
//             Math.sin(dLon / 2) *
//             Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         return R * c; // Distance in km
//     };

//     const visited = [];
//     const unvisited = [...sites];
//     if (unvisited.length === 0) return visited;

//     let current = unvisited.shift(); // Start from the first site
//     visited.push(current);

//     while (unvisited.length > 0) {
//         let nearest = unvisited.reduce(
//             (closest, site) => {
//                 const distance = haversineDistance(current.coordinates, site.coordinates);
//                 return distance < closest.distance ? { site, distance } : closest;
//             },
//             { site: null, distance: Infinity }
//         );

//         if (nearest.site) {
//             current = nearest.site;
//             visited.push(current);
//             unvisited.splice(unvisited.indexOf(current), 1);
//         }
//     }

//     return visited;
// };

// const ParentComponent = () => {
//     const shortestRoute = findShortestRoute(sites);
//     console.log("Shortest route calculated:", shortestRoute);

//     return (
//         <div>
//             <h1>Route Planner</h1>
//             <RouteDisplay route={shortestRoute} />
//         </div>
//     );
// };

// export default ParentComponent;
