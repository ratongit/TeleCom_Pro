import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const RoutePlanner = () => {
  const [directions, setDirections] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapRef = useRef(null);

  // Example coordinates (site lat-long)
  const sites = [
    { lat: 40.748817, lng: -73.985428 }, // New York
    { lat: 34.052235, lng: -118.243683 }, // Los Angeles
    { lat: 41.878113, lng: -87.629799 }  // Chicago
  ];

  // Google Maps API Key
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  // Function to calculate the shortest route
  const calculateRoute = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    const origin = sites[0]; // First site as origin
    const destination = sites[sites.length - 1]; // Last site as destination
    const waypoints = sites.slice(1, sites.length - 1).map(site => ({
      location: site,
      stopover: true
    }));

    const request = {
      origin,
      destination,
      waypoints,
      travelMode: window.google.maps.TravelMode.DRIVING
    };

    DirectionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  };

  // Run the route calculation when the map is loaded
  useEffect(() => {
    if (mapLoaded) {
      calculateRoute();
    }
  }, [mapLoaded]);

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onLoad={() => setMapLoaded(true)} // Mark map as loaded
    >
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={sites[0]} // Center map on first site
        zoom={5}
        onLoad={map => mapRef.current = map} // Store map reference
      >
        {directions && (
          <DirectionsRenderer directions={directions} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default RoutePlanner;
