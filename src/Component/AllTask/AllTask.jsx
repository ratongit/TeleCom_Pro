import React, { useContext, useEffect, useState } from 'react';
import Task from './Task';
import './Task.css';
import { AuthContext } from '../ContextApi/AuthProniders';
import useDatabase from '../Hooks/useDatabase';
import useShowAll from '../Hooks/useShowAll';
const AllTask = () => {

  const { activeTaskId, handleDetails, setActiveTaskId} = useContext(AuthContext)


  const {alltasks} = useDatabase()

  const { showAll ,handleShow , array}=useShowAll(alltasks)
  
  return (
    <div className="overflow-x-auto darktheme1 w-[92%]  my-10 rounded-md  ">
     <h1 className=' my-3 md:my-5 center '>
            ALL Projects ( <span className='text-blue-300 text-[18px]'>All Task : {alltasks?.length}</span> )
           </h1>
      <table className="table darktheme1  ">
        {/* head */}
        <thead >
          <tr className='h-14 darktheme1 md:text-lg   '>

            <th className='ps-10' >Client</th>
            <th className='max-sm:hidden'>Task Name</th>
            <th className='max-md:hidden '>Date Line</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>

        {
          array.map((task, index) => <Task key={task?.task_id} task={task} serialNumber={index + 1}></Task>)
        }


      </table>

<div className='text-center my-3'>
  <button  onClick={()=>handleShow()} className='bg2 border px-32 py-1 rounded-md hover:bg-slate-700 '> {!showAll?<>Show All </>:<>Show Less</>}</button>
</div>

    </div>

  );
};

export default AllTask;