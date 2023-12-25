import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from '../Review/Review';
import About from '../AboutUs/About';
import axios from 'axios';



const Developer = () => {


    const taskId = useParams()
    const [tabile, setTabile] = useState(false)
    const [developer, setDeveloper] = useState([])
    const [activeCard, setActivecard] = useState(`All Service`)
    const [cardData, setCardData] = useState(developer);
    const [cardNumber, setCardNumber] = useState(0);
    const [developerBtn, setDeveloperBtn] = useState(false)
    const [serviceFind, setServiceFind] = useState(null)

    const handleFilter = (categoryfilter) => {
        const filterData = developer?.filter(allservice => allservice?.team === categoryfilter)
        setCardNumber(filterData.length)
        setCardData(filterData)
        setActivecard(categoryfilter)
        if (!tabile) {
            setTabile(!tabile)
        }
    }
    const handleAll = () => {
        setCardNumber(developer.length)
        setCardData(developer)
        setActivecard("All Service")
        if (!tabile) {
            setTabile(!tabile)
        }
    }
    useEffect(() => {
        fetch(`https://task-magement-server.vercel.app/alltask/${taskId.id}`)
            .then(res => res.json())
            .then(data => setServiceFind(data))
    }, [])





    const handleStartTask = (data) => {
        fetch('https://task-magement-server.vercel.app/setdeveloper', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({ data }), // Send the data object as JSON
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            if (response.modifiedCount) {
              refetch();
              alert('Congratulations, admin action completed.');
            }
          });

    }



    useEffect(() => {
        fetch(`/developer.json`)
            .then(res => res.json())
            .then(data => setDeveloper(data))
    }, [])
    if (serviceFind?.task_performer?.name === 'Unassigned') {
        if (!developerBtn) {
            setDeveloperBtn(!developerBtn)
        }
    }
    const Categories = [...new Set(developer?.map(project => project?.team
    ))];
    

    return (
        <>

            <div className='w-[95%] flex max-md:flex-col justify-center my-3 mx-auto items-center '>
                <div className='bg2 border  w-[95%] py-5  max-sm:rounded-md  rounded-s-md center h-[540px]'>
                    <div className=' '>
                        <img className='w-[300px] border rounded-md h-[250px] mx-auto' src={serviceFind?.task_giver
                            ?.image_url} alt="" />
                    </div>
                    <h2 className='text-2xl md:text-3xl  font-bold center mt-2 '> {serviceFind?.task_giver
                        ?.name}</h2>
                    <div className='flex justify-center gap-3 mt-2 md:mt-3 flex-wrap'>
                        <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>email  : </span>
                            {serviceFind?.task_giver
                                ?.email}</button><button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>Country  : </span>
                            {serviceFind?.task_giver
                                ?.country}</button>
                    </div>
                    <div className='center'>
                        <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>subscribed Service
                            : </span>
                            {serviceFind?.category}
                        </button>
                        <div className='py-1'>
                            <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900  w-[360px] text-start leading-4 h-[120px]'><span className='font-bold text-indigo-300 '>Requerments : </span>  {serviceFind?.description}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3  mt-1 flex-wrap'>
                        <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>budget
                            : </span>
                            $ {serviceFind?.budget
                            }
                        </button>
                        <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>deadline
                            : </span>
                            {serviceFind?.deadline
                            }
                        </button>
                    </div>
                </div>
                <div className={`bg2 border  w-[95%] py-5  max-sm:rounded-md  rounded-e-md center  h-[540px]`}>
                    <div className=' '>
                        <img className='w-[300px] border rounded-md h-[250px] mx-auto' src={serviceFind?.task_performer
                            ?.image_url} alt="" /></div>
                    <h2 className='text-2xl md:text-3xl  font-bold center mt-2 '> {serviceFind?.task_performer
                        ?.name}</h2>
                    {!developerBtn && <>
                        <div className='flex justify-center gap-3 mt-2 md:mt-3 flex-wrap'>
                            <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>email  : </span>

                                {serviceFind?.task_performer

                                    ?.email}</button><button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>Country  : </span>

                                {serviceFind?.task_performer

                                    ?.country}</button>

                        </div>


                        <div className='center'>
                            <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>role
                                : </span>
                                {serviceFind?.task_performer

                                    ?.role}
                            </button>

                            <div className='py-1'>

                                <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900  w-[360px] text-start leading-4 h-[120px] '><span className='font-bold text-indigo-300 '>SKills  : </span> <br />
                                    <div className='flex flex-wrap gap-3'>
                                        <button className="btn btn-xs border bg2 hover:bg-slate-700">React
                                        </button>

                                        <button className="btn btn-xs border bg2 hover:bg-slate-700">Next.js
                                        </button>

                                        <button className="btn btn-xs border bg2 hover:bg-slate-700">PHP
                                        </button>

                                        <button className="btn btn-xs border bg2 hover:bg-slate-700">MongoDb
                                        </button>
                                        <button className="btn btn-xs border bg2 hover:bg-slate-700">Java
                                        </button>

                                    </div>

                                </button>

                            </div>

                        </div>
                        <div className='flex justify-center gap-3  mt-1 flex-wrap'>
                            <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>Runing Projects
                                : </span>


                                02</button>

                            <button className='bg2 boeder btn btn-xs hover:bg-slate-900 hover:border-emerald-800 border-emerald-900 px-5'> <span className='font-bold text-indigo-300'>Team Member
                                : </span>


                                05 </button>

                        </div>
                    </>}
                    {developerBtn && <>
                        <button className="btn btn-xs border bg2 hover:bg-slate-700">ALl Developer
                        </button>
                        <button className="btn btn-xs border bg2 hover:bg-slate-700">MongoDb
                        </button>
                    </>
                    }
                </div>
            </div>


            <div>
                <div className="container  my-5 w-[95%]  mx-auto">
                    <div className="mb-7 flex justify-between  sm:mb-0 ">
                        <h1 className='mt-5 mb-2 text-3xl font-bold  pb-1 px-5'>Team of Developers & Engneers </h1>
                        <button className="border-solid text-[15px] px-4 rounded-lg  w-[350px] border-[1px] border-blue-400 btn-sm mt-5 ">  {activeCard} <span className={`${cardNumber === 0 && "hidden"} `}>
                            {cardNumber} Mamber
                        </span></button>
                    </div>

                    <div className="flex gap-2 w-[100%] overflow-hidden flex-wrap max-sm:ps-4 mt-3">
                        <button onClick={() => handleAll()} className="border border-solid text-[18px] px-4 rounded-lg  border-purple-400">All </button>
                        {Categories?.map((item, index) => (<button key={index} onClick={() => handleFilter(item)} className="border border-solid text-[18px] px-4 rounded-lg  border-purple-400"><div >{item}</div></button>
                        ))}
                    </div>
                    {!tabile ?

                        <table className='w-[100%] mx-auto my-10'>


                            {
                                developer.map(data =>
                                    <tr className={`darktheme1 h-[100px] `}>
                                        <td className='ps-10'>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={data.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{data.developer
                                                        .name} </div>
                                                    <div className="text-sm opacity-50">{data.developer
                                                        .country} </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' flex flex-col items-center justify-center mt-3 -ms-5'>
                                            <div className="badge badge-ghost badge-sm bg2 px-5 h-6 lg:mt-2 max-md:hidden border-slate-600  "> {data.role}</div>
                                            {/* <span className='text-sm font-bold'>Skill : </span>  */}
                                            <div className='flex items-center mt-3 gap-3 '>
                                                {
                                                    data.skills.slice(0, 3).map(skill =>
                                                        <button className='bg2 max-md:hidden border btn btn-sm center px-2 text-[11px] font-bold hover:bg-slate-800'>{skill}</button>
                                                    )
                                                }
                                            </div>
                                        </td>
                                        <td className='pe-5'>
                                            <button onClick={() => handleStartTask(data)} className='bg2 border btn btn-sm center px-2 text-[13px] font-bold hover:bg-green-900'>seclecte</button>

                                        </td>
                                    </tr>
                                )
                            }
                            

                        </table>

                        : <table className='w-[100%] mx-auto my-10'>

                            {
                                cardData.map(data =>
                                    <tr className={`darktheme1 h-[100px] `}>
                                        <td className='ps-10'>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={data.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{data.developer
                                                        .name} </div>
                                                    <div className="text-sm opacity-50">{data.developer
                                                        .country} </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' flex flex-col items-center justify-center mt-3 -ms-5'>
                                            <div className="badge badge-ghost badge-sm bg2 px-5 h-6 lg:mt-2 max-md:hidden border-slate-600  "> {data.role}</div>
                                            {/* <span className='text-sm font-bold'>Skill : </span>  */}
                                            <div className='flex items-center mt-3 gap-3 '>
                                                {
                                                    data.skills.slice(0, 3).map(skill =>
                                                        <button className='bg2 max-md:hidden border btn btn-sm center px-2 text-[11px] font-bold hover:bg-slate-800'>{skill}</button>
                                                    )
                                                }
                                            </div>
                                        </td>
                                        <td className='pe-5'>
                                            <button onClick={() => handleStartTask(data)} className='bg2 border btn btn-sm center px-2 text-[13px] font-bold hover:bg-green-900'>seclecte</button>

                                        </td>
                                    </tr>
                                )
                            }

                        </table>
                    }
                </div>
            </div>

        </>

        );
        
        }
export default Developer;