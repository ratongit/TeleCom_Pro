import React, { useEffect } from 'react'
import MapIndex from './MapIndex';
import useDatabase from '../../../Component/Hooks/useDatabase';

// const MBOffice = ({officeSites,matchedSiteData}) => {
const MBOffice = () => {
  const { allSiteInfo, impactSite,impactMPSite } = useDatabase([]);

  impactMPSite.map(data=>console.log(data))
  
  return (
    <MapIndex mbOffice={impactMPSite} ></MapIndex>
  )
}

export default MBOffice
