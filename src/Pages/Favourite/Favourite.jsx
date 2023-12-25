import React, { useContext, useState } from 'react';
import useDatabase from '../../Component/Hooks/useDatabase';
import { AuthContext } from '../../Component/ContextApi/AuthProniders';


const Favourite = () => {

   const {alltasks} = useDatabase()
   const { auth } = useContext(AuthContext)

const [email,setEmail]=useState(null)

if(email!== auth?.currentUser?.email){
   setEmail(auth?.currentUser?.email)
 }

 const filteredData = alltasks?.filter(item => item?.task_giver?.email === email);
 
   console.log(filteredData)
   console.log(auth)
   console.log(email)



    return (

<div className='mb-10'>

   <h1 className='center my-5'>Marked Service Card</h1> 

{ filteredData.map(data=> 
   
   
   
   <div className='w-full'>
 <table className='w-[90%] mx-auto'>
           <tr  className={`darktheme1`}>
        <td className='overflow-hidden w-40  '>
              <div className="mask">
               {
                  data.task_img===''?
                     <img src={"https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0" }/>
                     :
                     <img  className='overflow-hidden w-40 h-40' src={data?.task_img} />
                     
                     
                  }



          </div>
        </td>
        <td className='max-sm:hidden w-[60%] px-8 text-sm overflow-hidden'>
    {data.description}
        </td>
        <td  className='btn bg2  border-blue-400 me-2 mt-14 hover:bg-slate-700 hover:text-white max-md:hidden'>${data.budget}</td>
        <td  className='btn bg2  border-blue-400 border-[1px] mt-14 hover:bg-slate-700 hover:text-white max-sm:mx-3'>Payment </td>
      </tr>

           </table> 


        </div>

        )}
</div>
    );
};

export default Favourite;