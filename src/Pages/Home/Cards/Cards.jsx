import React, { useContext } from 'react';
import './../Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faFileContract, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../Component/ContextApi/AuthProniders';
import useDatabase from '../../../Component/Hooks/useDatabase';


const Card = () => {
    const {Pending,Doing,Done }=useDatabase()

    const {  status,setStatus } = useContext(AuthContext)
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 w-[95%] mx-auto'>



                <div>
                    <div className='homePageCard     text-center gap-4'>
                        <div className='flex justify-between  text-center my-3 mb-4 w-[80%] mx-auto'>
                            <div className='w-14 h-14   rounded-md '>
                                <FontAwesomeIcon icon={faFileContract} className='text-cyan-200 w-14 h-14 mt-1' />
                            </div>
                            <div>
                                <h3 className='text-white  ms-2 min-w-[100px] overflow-hidden  '>
                                    Total Task
                                </h3>
                                <div className='text-white   ms-3 mt-1'>263</div>
                            </div>
                        </div>
                        <div onClick={()=>setStatus('all-task')} className='btn bg-transparent text-cyan-400 w-[80%] px-10 pt-1 hover:bg-slate-700 hover:text-blue-300 border-gray-500 hover:border-blue-500'>Datials</div>
                    </div>
                </div>

                <div>
                    <div className='homePageCard     text-center gap-4'>
                        <div className='flex justify-between  text-center my-3 mb-4 w-[80%] mx-auto'>
                            <div className='w-14 h-14   rounded-md '>
                                <FontAwesomeIcon icon={faFileCircleCheck} className='text-green-400 w-14 h-14 mt-1' />
                            </div>
                            <div>
                                <h3 className='text-white  ms-2 min-w-[100px] overflow-hidden '>
                                Done task
                                </h3>
                                <div className='text-white   ms-3 mt-1'>{Done.length}</div>
                            </div>
                        </div>
                        <div  onClick={()=>setStatus('done')} className='btn bg-transparent text-cyan-400 w-[80%] px-10 pt-1 hover:bg-slate-700 hover:text-blue-300 border-gray-500 hover:border-blue-500'>Datials</div>
                    </div>
                </div>

                <div>
                    <div className='homePageCard     text-center gap-4'>
                        <div className='flex justify-between  text-center my-3 mb-4 w-[80%] mx-auto'>
                            <div className='w-14 h-14   rounded-md '>
                                <FontAwesomeIcon icon={faFileSignature} className='text-yellow-200 w-14 h-14 mt-1' />
                            </div>
                            <div>
                                <h3 className='text-white  ms-2 min-w-[100px] overflow-hidden '>
                                    To Do List
                                </h3>
                                <div className='text-white   ms-3 mt-1'>{Pending.length}</div>
                            </div>
                        </div>
                        <div  onClick={()=>setStatus('panding')} className='btn bg-transparent text-cyan-400 w-[80%] px-10 pt-1 hover:bg-slate-700 hover:text-blue-300 border-gray-500 hover:border-blue-500'>Datials</div>
                    </div>
                </div>

                <div>
                    <div className='homePageCard     text-center gap-4'>
                        <div className='flex justify-between  text-center my-3 mb-4 w-[80%] mx-auto'>
                            <div className='w-14 h-14   rounded-md '>
                                <FontAwesomeIcon icon={faFileContract} className='text-blue-400 w-14 h-14 mt-1' />
                            </div>
                            <div>
                                <h3 className='text-white -ms-1   min-w-[100px] overflow-hidden '>
                                Doing Task
                                </h3>
                                <div className='text-white   ms-3 mt-1'>{Doing.length}</div>
                            </div>
                        </div>
                        <div  onClick={()=>setStatus('doing')} className='btn bg-transparent text-cyan-500 w-[80%] px-10 pt-1 hover:bg-slate-700 hover:text-blue-300 border-gray-500 hover:border-blue-500'>Datials</div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default Card;