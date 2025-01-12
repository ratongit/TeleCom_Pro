import React, { useState, useEffect } from 'react';
import useDatabase from '../../../Component/Hooks/useDatabase';

const FoundOfficeMP = () => {
  const { allSiteInfo, impactSite } = useDatabase([]);
  const [matchedSiteData, setMatchedSiteData] = useState([]);
  const [officeSites, setOfficeSites] = useState({ BNC: [], HG: [], MB: [], Juri: [] });

  useEffect(() => {
    if (!impactSite || !allSiteInfo) return;

    const impactSiteCodes = impactSite.flatMap(input => [input.siteDown, input.dcLow]);
    const normalizedSiteCodes = impactSiteCodes.map(code => String(code).toUpperCase());
    const filteredSites = allSiteInfo.filter(site =>
      normalizedSiteCodes.includes(site.siteCode.toUpperCase())
    );

    setMatchedSiteData(filteredSites); // Update state
  }, [impactSite, allSiteInfo]);


  useEffect(() => {
    setOfficeSites(prevState => {
      const newOfficeSites = { ...prevState }; // Clone the previous state
      
      matchedSiteData.forEach(site => {
        const maintenancePoint = site.maintenacePointName;
      // console.log(maintenancePoint)

        if (maintenancePoint in newOfficeSites) {
          if (!newOfficeSites[maintenancePoint].includes(site.siteCode)) {
            newOfficeSites[maintenancePoint].push(site);
          }
        }
      });

      return newOfficeSites; // Update state with modified officeSites
    });
  }, [matchedSiteData]);

  return (
    <div className="darktheme2 min-h-screen">
      <h1>Matched Site Data are</h1>
      {console.log("Filtered Sites:", matchedSiteData)}
      {console.log("Office Sites:", officeSites)}

      {/* <AllSite officeSites={officeSites} matchedSiteData={matchedSiteData}></AllSite> */}
    </div>
  );
};

export default FoundOfficeMP;
















































// import React, { useState, useEffect, useMemo } from 'react';
// import useDatabase from '../../../Component/Hooks/useDatabase';

// const FoundOfficeMP = () => {
//   const { allSiteInfo, impactSite } = useDatabase([]);

//   const filteredSites = [];


//   const [matchedSiteData, setMatchedSiteData] = useState([]);
//   const [officeSites, setOfficeSites] = useState({ BNC: [], HG: [], MB: [], JRI: [] });



//   useEffect(() => {
//     if (!impactSite || !allSiteInfo) return;
//     const impactSiteCodes = impactSite.flatMap(input => [input.siteDown, input.dcLow]);
//     const normalizedSiteCodes = impactSiteCodes.map(code => String(code).toUpperCase());
//     for (let i = 0; i < allSiteInfo.length; i++) {
//       const site = allSiteInfo[i];
//       for (let j = 0; j < normalizedSiteCodes.length; j++) {
//         if (site.siteCode.toUpperCase() === normalizedSiteCodes[j]) {
//           filteredSites.push(site);
//           break; // Exit inner loop once a match is found
//         }
//       }
//     }
//     setMatchedSiteData(filteredSites); // Update state
//   }, [impactSite, allSiteInfo]);


//   useEffect(() => {

//     matchedSiteData.forEach((site) => {
//             const maintenancePoint = site.maintenacePointName;
      
//             switch (maintenancePoint) {
//               case "BNC":
//                 if (!newBncOffice.includes(site.siteCode)) {
//                   newBncOffice.push(site.siteCode);
//                 }
//                 break;
//               case "HG":
//                 if (!newHgOffice.includes(site.siteCode)) {
//                   newHgOffice.push(site.siteCode);
//                 }
//                 break;
//               case "MB":
//                 if (!newMbOffice.includes(site.siteCode)) {
//                   newMbOffice.push(site.siteCode);
//                 }
//                 break;
//               case "JRI":
//                 if (!newJriOffice.includes(site.siteCode)) {
//                   newJriOffice.push(site.siteCode);
//                 }
//                 break;
//               default:
//                 break;
//             }
//           });

//   }, [matchedSiteData]);



//   return (
//     <div className="darktheme2 min-h-screen">
//       <h1>Matched Site Data are</h1>
//       {console.log("Filtered Sites:", matchedSiteData.map(data => data))}
//       {console.log(officeSites)}

//     </div>
//   );
// };

// export default FoundOfficeMP;





















































// import React, { useState, useEffect } from 'react';
// import useDatabase from '../../../Component/Hooks/useDatabase';

// const FoundOfficeMP = () => {
//   const { allSiteInfo, impactSite } = useDatabase();

// console.log(allSiteInfo, impactSite)

//   const [matchedSiteData, setMatchedSiteData] = useState([]);
//   const [bncOffice, setBncOffice] = useState([]);
//   const [hgOffice, setHgOffice] = useState([]);
//   const [mbOffice, setMbOffice] = useState([]);
//   const [jriOffice, setJriOffice] = useState([]);

//   useEffect(() => {
//     // Collect all site codes from both "siteDown" and "dcLow" fields
//     const siteCodes = impactSite.flatMap(input => [input.siteDown, input.dcLow]);

//     // Find all site information that matches any site code in the array
//     const matchedSites = allSiteInfo.filter((site) =>
//       siteCodes.includes(site.siteCode)
//     );
//     setMatchedSiteData(matchedSites);
//   }, [impactSite, allSiteInfo]); // dependencies of useEffect

//   useEffect(() => {
//     const newBncOffice = [];
//     const newHgOffice = [];
//     const newMbOffice = [];
//     const newJriOffice = [];

//     matchedSiteData.forEach((site) => {
//       const maintenancePoint = site.maintenacePointName;

//       switch (maintenancePoint) {
//         case "BNC":
//           if (!newBncOffice.includes(site.siteCode)) {
//             newBncOffice.push(site.siteCode);
//           }
//           break;
//         case "HG":
//           if (!newHgOffice.includes(site.siteCode)) {
//             newHgOffice.push(site.siteCode);
//           }
//           break;
//         case "MB":
//           if (!newMbOffice.includes(site.siteCode)) {
//             newMbOffice.push(site.siteCode);
//           }
//           break;
//         case "JRI":
//           if (!newJriOffice.includes(site.siteCode)) {
//             newJriOffice.push(site.siteCode);
//           }
//           break;
//         default:
//           break;
//       }
//     });

//     // Update state once all matching sites are processed
//     setBncOffice(newBncOffice);
//     setHgOffice(newHgOffice);
//     setMbOffice(newMbOffice);
//     setJriOffice(newJriOffice);
//   }, [matchedSiteData]); // depends on matchedSiteData

//   const OfficeWiseSites = {
//     BNC: bncOffice,
//     HG: hgOffice,
//     MB: mbOffice,
//     JRI: jriOffice
//   };

//   return (
//     <div className="darktheme2 min-h-screen">
//       <h1>Matched Site Data</h1>
//       <pre>{JSON.stringify(matchedSiteData, null, 2)}</pre>

//       <h1>Office Wise Sites</h1>
//       <pre>{JSON.stringify(OfficeWiseSites, null, 2)}</pre>
//     </div>
//   );
// };

// export default FoundOfficeMP;
