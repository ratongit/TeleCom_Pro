import React, { useContext, useEffect, useState } from 'react';
import Task from './Task';
import './Task.css';
import { AuthContext } from '../ContextApi/AuthProniders';
import useDatabase from '../Hooks/useDatabase';

// import useShowAll from '../Hooks/useShowAll';

const AllTask = () => {

  const { activeTaskId, handleDetails, setActiveTaskId  } = useContext(AuthContext)


    const {MatchImpactSites, Mb,Bnc,Hg,Jri }=useDatabase()
    const { alltasks ,impactSite } = useDatabase();

  const { sites } = useDatabase();
  sites.map((site) => (site.siteDown))






  return (
    <div className="overflow-x-auto darktheme1 w-[92%]  my-10 rounded-md  ">
      <h1 className=' my-3 md:my-5 center '>
        Impact Site List
      </h1>

      <table className="table darktheme1 font-mono ">
        <thead >

          <tr className='h-14 darktheme1 md:text-lg   '>

            <th className='ps-10' >
              Site Code
            </th>

            <th className='max-sm:hidden'>
              Alarm Name
            </th>
            <th>Priority</th>
            <th className='max-md:hidden '>Outage</th>
            <th>More</th>
          </tr>

        </thead>


          {
            MatchImpactSites.map((site, index) => <Task key={site?._id} site={site} serialNumber={index + 1}></Task>)
          }

        
      </table>

    </div>

  );
};

export default AllTask;