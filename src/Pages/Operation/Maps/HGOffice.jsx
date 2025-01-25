import React, { useEffect } from 'react'
import MapIndex from './MapIndex';
import useDatabase from '../../../Component/Hooks/useDatabase';

// const MBOffice = ({officeSites,matchedSiteData}) => {
const HGOffice = () => {
  const {Hg} = useDatabase([]);

  const officeLocation= [24.31719534013579, 91.44214544073057]
  const zoom=9

  
  return (
    <MapIndex key= "1" zoom={zoom} office={Hg} serialNumber={1} officeLocation={officeLocation}  ></MapIndex>
  )
}

export default HGOffice
