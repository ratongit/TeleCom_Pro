import React from 'react';
import useDatabase from '../Hooks/useDatabase';

const Task = ({ site }) => {

  const { alltasks ,impactSite,alarm } = useDatabase();

  console.log(impactSite)

  const alarms =  impactSite.filter(Sites => <>
  {
    Sites.siteDown ? Sites.siteDown : Sites.dcLow 
} 
  </>)
console.log(alarms)

  const {siteCode, siteDown, dcLow,  outage } = site



  // if(alarm===siteDown) {
  //   console.log('hello')
  //     } else if (alarm===dcLow) {
  //   console.log(`hi`) 
  //    } else {
  //   console.log('hihello')
  //   }


  return (
    <thead className='font-normal border-y-[10px] bordertask '>

      <tr className='h-14 darktheme1 md:text-lg taskline'>

        <th className='ps-9 flex gap-[6px] items-center' >

          <div className='w-3 h-3 bg-red-600 center  rounded-full  '>

          </div>
          <div>
            {siteCode}
          </div>
        </th>

        <th className='max-sm:hidden'>
          {alarm}

          
          

        </th>

        <th className='max-md:hidden '>{site?.priority || 'KPI'}</th>

        <th>outage</th>

        <th>More</th>

      </tr>
    </thead>
  );
}

export default Task;








