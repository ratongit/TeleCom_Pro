export const findShortestRoute = (sites) => {
    // Helper function to calculate the distance between two points
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
        return R * c; // Distance in km
    };

    const visited = [];
    const unvisited = [...sites];
    let current = unvisited.shift(); // Start from the first site
    visited.push(current);

    while (unvisited.length > 0) {
        // Find the nearest unvisited point
        let nearest = unvisited.reduce(
            (closest, site) => {
                const distance = haversineDistance(current.coordinates, site.coordinates);
                return distance < closest.distance ? { site, distance } : closest;
            },
            { site: null, distance: Infinity }
        );

        current = nearest.site;
        visited.push(current);
        unvisited.splice(unvisited.indexOf(current), 1);
    }

    return visited;
};
