import React, { useEffect } from 'react'
import MapIndex from './MapIndex';
import useDatabase from '../../../Component/Hooks/useDatabase';

// const MBOffice = ({officeSites,matchedSiteData}) => {
const BncOffice = () => {
  const {Jri} = useDatabase([]);

  const officeLocation= [24.524686, 91.363976]
  const zoom=11

  
  return (
    <MapIndex key= "1" zoom={zoom} office={Jri} serialNumber={1} officeLocation={officeLocation}  ></MapIndex>
  )
}

export default BncOffice
