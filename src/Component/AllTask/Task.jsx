import React from 'react';

const Task = ({ site }) => {

  const { siteDown, dcLow, alarm, outage } = site
  // console.log(alarm)


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
            {siteDown || dcLow}
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








