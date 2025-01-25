import React, { useEffect } from 'react'
import MapIndex from './MapIndex';
import useDatabase from '../../../Component/Hooks/useDatabase';

// const MBOffice = ({officeSites,matchedSiteData}) => {
const AllOffice = () => {
  const {MatchImpactSites} = useDatabase([]);

  const officeLocation= [24.484881397500956 , 91.79256366380662]
  const zoom=8

  
  return (
    <MapIndex key= "1" zoom={zoom} office={MatchImpactSites} serialNumber={1} officeLocation={officeLocation}  ></MapIndex>
  )
}

export default AllOffice
