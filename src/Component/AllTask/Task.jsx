
import React, { useContext, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthProniders';
import { faCaretSquareUp, faCaretUp, faEllipsisV, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  const { _id, task_name, task_giver, task_id, description, deadline, priority, category, status, img, task_performer, budget } = task;

  const { taskId, setTaskId,set_Idtast } = useContext(AuthContext)
  const [show, setShow] = useState(true)

  const handleDetail = () => {
    setTaskId(task_id)
  }
  const handleDetails = () => {
    if (task_id) {
      setShow(!show)
    }
  }
  return (
    <>
      <tr onClick={handleDetails} className={`darktheme1 h-24`}>
        <td className='ps-10'>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={task_giver?.image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{task_giver?.name}</div>
              <div className="text-sm opacity-50">{task_giver?.country}</div>
            </div>
          </div>
        </td>
        <td className='max-sm:hidden'>
          {task_name}
          <br />
          <span className="badge badge-ghost badge-sm bg2 w-36 h-6 lg:mt-2 max-md:hidden border-slate-600">{category}</span>
        </td>
        <td className='max-md:hidden'>{deadline}</td>
        <td >{status}</td>
        <td onClick={handleDetail}>
          <FontAwesomeIcon icon={faEllipsisV} className='w-12 h-5'></FontAwesomeIcon>
        </td>
      </tr>



      {taskId === task_id && <tr className={`bg2 ${show ? '' : 'hidden'} md:h-60 text-lg -mt-40`} >
        {/* {taskId === task_id && <tr className={`bg2  md:h-60 text-lg -mt-40`} > */}
        <td colSpan="5"  >
          <div className="py-4 border-b-[1px] border-gray-600 "><strong>Description :</strong> {description}</div>
          <div className='flex flex-wrap  justify-between   py-4'>
            <div className='max-md:hidden'> <strong>Email : </strong> {task_giver?.email}</div>
            <div className='flex gap-5 me-6 '>
              <div className='mb-2'>
                <strong>Budget : </strong> ${budget}</div>
              {status === 'done' ? <div> <strong className=''>Complited by : </strong>  <span className=' text-green-300 font-semibold '> {task_performer.name}</span></div> :
                <div> <strong> Due Time : </strong> 10 Days</div>

              }

              <div>{status === 'to do' && <div><Link to={`/StartTask/${_id}`}> <button className='btn btn-sm w-28 border-blue-300 hover:bg-slate-700  bg2 border'>Start task </button> </Link></div>}

                {status === 'doing' &&
                  <div> <strong className=''> Working by : </strong>  <span className=' text-cyan-500 font-semibold '> {task_performer.name}</span>
                  </div>}

              </div>



            </div>
          </div>
        </td>


      </tr>
      }
    </>
  );
};

export default Task;








