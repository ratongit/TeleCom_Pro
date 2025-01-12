import React, { useState, useEffect } from 'react';

const CostomRoute = () => {
  // Input Site Codes with Multiple Keys
  const ImpactSiteFromInput = [
    {"_id": {"$oid": "676194663a440c879fb698ad"}, "siteDown": "GPHGCNR005", "dcLow": "GPMBJRI043", "outage": "", "priority": "kpi", "alarm": "Site Down"},
    {"_id": {"$oid": "676194663a440c879fb698ae"}, "siteDown": "GPHGAZM001", "dcLow": "MBSDR28", "outage": "", "priority": "kpi", "alarm": "Site Down"}
  ];

  // Array of All Data Information
  const alldataInformation = [
    {
      "_id": { "$oid": "67606c04dcb08ce482b8c39f" },
      "siteCode": "GPMBJRI043",
      "areaName": "Rania",
      "gpCode": "HGAJK1",
      "lat": { "$numberDouble": "24.52881" },
      "long": { "$numberDouble": "91.21947" },
      "region": "Sylhet",
      "e.coZone": "Moulvibazar",
      "maintenacePointName": "BNC",
      "transportMode": "Car",
      "siteDistanceFrom(MP)": { "$numberInt": "25" },
      "travelTimeFrom(MP)": "1:30:00"
    },
    {
      "_id": { "$oid": "67606c04dcb08ce482b8c39f" },
      "siteCode": "GPHGCNR005",
      "areaName": "Rania",
      "gpCode": "HGAJK1",
      "lat": { "$numberDouble": "24.52881" },
      "long": { "$numberDouble": "91.21947" },
      "region": "Sylhet",
      "e.coZone": "Moulvibazar",
      "maintenacePointName": "BNC",
      "transportMode": "Car",
      "siteDistanceFrom(MP)": { "$numberInt": "25" },
      "travelTimeFrom(MP)": "1:30:00"
    },
    {
      "_id": { "$oid": "67606c04dcb08ce482b8c39f" },
      "siteCode": "GPHGAZM001",
      "areaName": "Rania",
      "gpCode": "HGAJK1",
      "lat": { "$numberDouble": "24.52881" },
      "long": { "$numberDouble": "91.21947" },
      "region": "Sylhet",
      "e.coZone": "Moulvibazar",
      "maintenacePointName": "BNC",
      "transportMode": "Car",
      "siteDistanceFrom(MP)": { "$numberInt": "25" },
      "travelTimeFrom(MP)": "1:30:00"
    },
    {
      "_id": { "$oid": "67606c04dcb08ce482b8c3a0" },
      "siteCode": "MBSDR28",
      "areaName": "Dharmapasha",
      "gpCode": "MBS123",
      "lat": { "$numberDouble": "24.72654" },
      "long": { "$numberDouble": "90.94785" },
      "region": "Sunamganj",
      "e.coZone": "Moulvibazar",
      "maintenacePointName": "MB",
      "transportMode": "Bike",
      "siteDistanceFrom(MP)": { "$numberInt": "15" },
      "travelTimeFrom(MP)": "0:45:00"
    }
    // Add more objects if needed
  ];

  // State to hold matched site data
  const [matchedSiteData, setMatchedSiteData] = useState([]);

  useEffect(() => {
    // Collect all site codes from both "siteDown" and "dcLow" fields
    const siteCodes = ImpactSiteFromInput.flatMap(input => [input.siteDown, input.dcLow]);

    // Find all site information that matches any site code in the array
    const matchedSites = alldataInformation.filter((site) =>
      siteCodes.includes(site.siteCode)
    );
    //  setMatchedSiteData(matchedSites);
  }, [ImpactSiteFromInput, alldataInformation]);

  // State to hold office-wise site codes
  const [bncOffice, setBncOffice] = useState([]);
  const [hgOffice, setHgOffice] = useState([]);
  const [mbOffice, setMbOffice] = useState([]);
  const [jriOffice, setJriOffice] = useState([]);

  useEffect(() => {
    matchedSiteData.forEach((site) => {
      const maintenancePoint = site.maintenacePointName;

      switch (maintenancePoint) {
        case "BNC":
          if (!bncOffice.includes(site.siteCode)) {
            setBncOffice((prev) => [...prev, site.siteCode]);
          }
          break;
        case "HG":
          if (!hgOffice.includes(site.siteCode)) {
            setHgOffice((prev) => [...prev, site.siteCode]);
          }
          break;
        case "MB":
          if (!mbOffice.includes(site.siteCode)) {
            setMbOffice((prev) => [...prev, site.siteCode]);
          }
          break;
        case "JRI":
          if (!jriOffice.includes(site.siteCode)) {
            setJriOffice((prev) => [...prev, site.siteCode]);
          }
          break;
        default:
          break;
      }
    });
  }, [matchedSiteData, bncOffice, hgOffice, mbOffice, jriOffice]);

  // Combine Office Wise Sites into an Object
  const OfficeWiseSites = {
    BNC: bncOffice,
    HG: hgOffice,
    MB: mbOffice,
    JRI: jriOffice
  };

  return (
    <div className="darktheme2 min-h-screen">
      <h1>Matched Site Data</h1>
      <pre>{JSON.stringify(matchedSiteData, null, 2)}</pre>

      <h1>Office Wise Sites</h1>
      <pre>{JSON.stringify(OfficeWiseSites, null, 2)}</pre>
    </div>
  );
};

export default CostomRoute;
