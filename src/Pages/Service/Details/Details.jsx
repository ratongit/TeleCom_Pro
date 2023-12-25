import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useDatabase from '../../../Component/Hooks/useDatabase';
import { AuthContext } from '../../../Component/ContextApi/AuthProniders';


import Swal from 'sweetalert2'

const Details = () => {
    const { id } = useParams()
    const { service } = useDatabase()

    const { auth } = useContext(AuthContext)

    const Detials = service?.find(allservice => allservice?.id === id)
   
    // console.log(auth)
    // console.log(Detials)

    const handleAddToCard =(data)=>{
        
        console.log(data)

        const addCard ={
task_id:data?.id,
task_name: data?.title,
task_img: data?.imgUrl,
category: data?.category,
description:data.description,
deadline: auth?.currentUser?.metadata?.lastSignInTime
,
priority:'Medium',
status:'to do',
img:data.auth?.currentUser?.metadata?.photoURL,
task_giver:{
    name: auth?.currentUser?.displayName,
    email: auth?.currentUser?.email,
    country:'USA',
    image_url:auth?.currentUser?.photoURL},
    task_performer:{
        name:"Unassigned",
        email:null,
        country:null,
        image_url:null
    },
    budget: 1300  
}

fetch('https://task-magement-server.vercel.app/addCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(addCard),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Card added');

    })
    .catch((error) => {
      // Handle errors if the request fails
      console.error('Error adding card:', error);
    });


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add Service In Favourite Card',
        showConfirmButton: false,
        timer: 1500
      })


}





    return (
        <div>
            <div className='grid max-w-7xl md:grid-cols-2 mt-4  max-sm:my-20 '>
                <div className='px-5'>
                    <img src={Detials?.imgUrl} className='w-[95%] mx-auto md:h-[500px] rounded-t-lg  sm:rounded-md ' alt="" />
                </div>

                <div className='max-md:px-5 my-auto bg2 border w-[90%] md:w-[96%] h-[100%] px-8  justify-center flex flex-col sm:rounded-md hover:border-gray-700 py-4 mx-auto'>
                    <h1 className='md:text-4xl text-2xl font-semibold'>{Detials?.title
                    } </h1>
                    <h3 className='text-sm font-semibold mt-2'> <span className='uppercase font-bold'>category :  </span>{Detials?.category
                    }</h3>
                    <p className=' text-[20px] mt-3'><span className='uppercase font-bold'>description : </span>
                        {Detials?.description}

                    </p>
                    <p className={` text-[20px] mt-2  gap-1  flex flex-wrap ${Detials?.technologies?.length > 1 || "hidden"}`}><span className='uppercase font-bold me-2'>technologies  : </span>

                        {Detials?.technologies?.map(data => <p key={data?._id} className='bg2 border btn-sm px-3 h-[22px] text-[15px] btn    hover:bg-slate-700'> {data}</p>)
                        }
                    </p>
                    <p className='text-[20px] mt-3  gap-2  flex flex-wrap'><span className='uppercase font-bold me-2  '>Price  : </span>
                        <p className='bg2 border btn-xs px-3 h-[22px] text-[15px] btn hover:bg-slate-700 mt-1'>Basic $500</p>
                        <p className='bg2 border btn-xs px-3 h-[22px] text-[15px] btn hover:bg-slate-700 mt-1'>Standard $900</p>
                        <p className='bg2 border btn-xs px-3 h-[22px] text-[15px] btn hover:bg-slate-700 mt-1'>Premium $1300</p>

                    </p>

                    <div className='flex mt-2 gap-3 justify-center w-[98%] mx-auto'>
                        <button className='bg2 border px-10 py-2 btn-sm hover:bg-slate-700 w-[50%] btn'> Review </button>
                        <button className='bg2 border px-10 py-2 btn-sm btn hover:bg-slate-700 uppercase w-[50%] overflow-hidden '>question </button>

                    </div>
                    <button onClick={()=>handleAddToCard(Detials)}  className='bg2 border-blue-400  mt-3 px-10 py-2 btn hover:bg-slate-700 uppercase hover:text-white w-[100%]'> subscribe the service </button>
                </div>
            </div>
        </div>
    );
};

export default Details;