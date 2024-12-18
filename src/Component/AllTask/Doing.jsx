import React from 'react';
import useDatabase from '../Hooks/useDatabase';
import Task from './Task';

const Doing = () => {
    const {Doing}=useDatabase()
    return (
        <div className="overflow-x-auto darktheme1 w-[92%] my-10 rounded-md  ">
           
           <h1 className='center my-3 md:my-5 '>
            Developing Projects ( <span className='text-blue-400 text-[18px]'>Doing Task : {Doing.length}</span> )
           </h1>
            <table className="table darktheme1  ">
                <thead >
                    <tr className='h-14 darktheme1 md:text-lg  '>

                        <th className='ps-10' >Client</th>
                        <th className='max-sm:hidden'>Job</th>
                        <th className='max-md:hidden '>Date Line</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <thead >
                    <tr className='h-14 darktheme1 md:text-lg  '>

                        <th className='ps-10' >Client</th>
                        <th className='max-sm:hidden'>Job</th>
                        <th className='max-md:hidden '>Date Line</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>


{/* 
                {
                    Doing.map((task, index) => <Task key={task.task_id} task={task} serialNumber={index + 1}></Task>)
                } */}


            </table>



        </div>
    );
};

export default Doing;