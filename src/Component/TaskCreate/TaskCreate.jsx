// import React from 'react';

import { useState } from "react";

// const TaskCreate = () => {
//     const categoryOptions = ["Selcet A Category","Web Development", "App Development", "Graphics Design"];
//     const handleCreateTask=(event)=>{
       
//         event.preventDefault()
//         const form = event.target
//         const name = form.name.value 
//         const category = form.category.value 
//         const price = form.price.value 
//         const date = form.date.value 
//         const email = form.email.value 
//         const details = form.details.value 
//         const priroty = form.priroty.value 
//         console.log(name,category,price,date,email,date,details,priroty)

//     }
//     return (
//         <div>
//              <div className=" py-7 my-6 rounded-xl px-8 min-h-screen bg-base-200">
                   
//                         <h1 className="text-2xl text-center font-bold"> Create Job Task </h1>

//                             <form  onSubmit={handleCreateTask}>
//                           <div className="flex gap-8">
//                           <div className="form-control w-full">
//                                 <label className="label">
//                                     <span className="label-text">Job Name</span>
//                                 </label>
//                                 <input type="text" placeholder="Enter Job Name"  name='name' className="input input-bordered" />
                                
//                             </div>
//                             <div className="form-control w-full">
//                                 <label className="label">
//                                     <span className="label-text">Category</span>
//                                 </label>
                               
//                                {/* <input  type="text" name='catagory' className="input input-bordered " /> */}
                          
//                                <select name="category" className="select select-bordered">
//                                 {categoryOptions.map((option, index) => (
//                                     <option key={index} name='category' value={option} >
//                                         {option}
//                                     </option>
//                                 ))}
//                             </select>
//                              {/* {passwordInput} */}
                              
//                             </div>
//                           </div>
//                            <div className="flex gap-8">
//                            <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="Type Your Name"
                                
//                                 className="input input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                             <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                            </div>
//                            <div className="flex gap-8">
//                            <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Country</span>
//                                 </label>
//                                 <input type="text" name='country' placeholder="Type Your Country"
                                
//                                 className="input input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                             <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Job Submition</span>
//                                 </label>
//                                 <input type="text" name='priroty' placeholder="Argent" className="input input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                            </div>
//                            <div className="flex gap-8">
//                            <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Price</span>
//                                 </label>
//                                 <input type="price" name='price' placeholder="Enter Your Buget"
                                
//                                 className="input input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                             <div className="form-control w-1/2">
//                                 <label className="label">
//                                     <span className="label-text">Date</span>
//                                 </label>
//                                 <input  type="date" name='date' className="input text-black input-bordered" />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                            </div>

//                          <div className="form-control w-full">
//                                 <label className="label">
//                                     <span className="label-text">Job Details</span>
//                                 </label>
//                                 <input type="text" name='details'  placeholder="Enter Job Details" className="input input-bordered " />
//                              {/* {passwordInput} */}
                                
//                             </div>
//                             <div className="form-control mt-6">
//                            <input type="submit" value="Create Job Task"  className="btn btn-primary"/>
//                             </div>
                           
//                             </form>
//                         </div>
//                     </div>
//     );
// };

// export default TaskCreate;


const TaskCreate = () => {
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    const [inputAnimation, setInputAnimation] = useState(false);
    const [inputAnimation2, setInputAnimation2] = useState(false);
    const [inputAnimation3, setInputAnimation3] = useState(false);

    const handleInput = (event) => {
        setName(event.target.value)
    };
    const handleInput2 = (event) => {
        if (!inputAnimation) {
            setInputAnimation(!inputAnimation);
        }
        if (name === '') {
            setInputAnimation(!inputAnimation);
        }
    };
    const handleInput5 = (event) => {
        setpassword(event.target.value);
    };
    const handleInput3 = (event) => {
        setEmail(event.target.value);
    };
    const handleInput4 = (event) => {
        if (!inputAnimation2) {
            setInputAnimation2(!inputAnimation2);
        }
        if (email === '') {
            setInputAnimation2(!inputAnimation2);
        }
    };
    const handleInput6 = (event) => {
        if (!inputAnimation3) {
            setInputAnimation3(!inputAnimation3);
        }
        if (password === '') {
            setInputAnimation3(!inputAnimation3);
        }
    };


    return (
        <div className=' my-14 md:mt-16 w-[80%] flex justify-center  items-center bg-opacity-10  relative z-30  bg-transparent'>



            <form className='bg-gray-600  pt-6  h-[460px] bg-transParent  rounded-sm shadow-sm shadow-slate-600 bg-opacity-10 relative' >

                <div className='w-36 h-36 z-40 bg-blue-400 rounded-[50%] -top-16 -left-16 bg-opacity-50 absolute '></div>
                <div className='w-40 h-40 z-40 bg-purple-400 rounded-[50%] -bottom-20 -right-20 bg-opacity-30 absolute '></div>


                <div className="text-center">
                    <h2 className='font-semibold text-blue-300 my-1'>Register Now</h2>
                </div>
                <div className="card-container ">

                    <div className="sign-up-card ">

          <div className="flex">
          <div className="input-container">
                            <input
                                value={name}
                                onKeyUp={handleInput2}
                                onChange={handleInput}
                                className={` form-input ${inputAnimation && 'input-animation'}`}
                                name='name'
                                type="text"
                                id="inputField1"
                                required
                            />
                            <label className='input-text' htmlFor="inputField1"> Name</label>
                        </div>
                        <div className="input-container ">
                            <input
                                value={email}
                                onKeyUp={handleInput4}
                                onChange={handleInput3}
                                className={`form-input ${inputAnimation2 && 'input-animation'}`}
                                type="text"
                                id="inputField2"
                                required
                            />
                            <label className='input-text' htmlFor="inputField2"> Email</label>
                        </div>

          </div>
                        <div className="input-container">
                            <input
                                value={password}
                                onKeyUp={handleInput6}
                                onChange={handleInput5}
                                className={`form-input ${inputAnimation3 && 'input-animation'}`}
                                type="password"
                                name='password'
                                id="inputField3"
                                required
                            />
                            <label className='input-text' htmlFor="inputField3">Password</label>
                        </div>

                        <div className="input-container pt-1">
                            <input className=' btn hover:opacity-80 font-bold bg-opacity-70 btn-success ' type="submit" value='Sign Up' />
                        </div>
                        <div className='flex gap-7 input-container justify-center ps-20 '>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default TaskCreate