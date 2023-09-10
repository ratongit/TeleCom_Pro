import React from 'react';

const UpdateTask = () => {
    const categoryOptions = ["Selcet A Category","Web Development", "App Development", "Graphics Design"];
    const handleCreateTask=(event)=>{
       
        event.preventDefault()
        const form = event.target
        const name = form.name.value 
        const category = form.category.value 
        const price = form.price.value 
        const date = form.date.value 
        const email = form.email.value 
        const details = form.details.value 
        const priroty = form.priroty.value 
        console.log(name,category,price,date,email,date,details,priroty)

    }
    return (
        <div className=" py-7 my-6 rounded-xl px-8 min-h-screen bg-base-200">
                   
        <h1 className="text-2xl text-center font-bold"> Create Job Task </h1>

            <form  onSubmit={handleCreateTask}>
          <div className="flex gap-8">
          <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Job Name</span>
                </label>
                <input type="text" placeholder="Enter Job Name"  name='name' className="input input-bordered" />
                
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
               
               {/* <input  type="text" name='catagory' className="input input-bordered " /> */}
          
               <select name="category" className="select select-bordered">
                {categoryOptions.map((option, index) => (
                    <option key={index} name='category' value={option} >
                        {option}
                    </option>
                ))}
            </select>
             {/* {passwordInput} */}
              
            </div>
          </div>
           <div className="flex gap-8">
           <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Type Your Name"
                
                className="input input-bordered" />
             {/* {passwordInput} */}
                
            </div>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
             {/* {passwordInput} */}
                
            </div>
           </div>
           <div className="flex gap-8">
           <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Country</span>
                </label>
                <input type="text" name='country' placeholder="Type Your Country"
                
                className="input input-bordered" />
             {/* {passwordInput} */}
                
            </div>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Job Submition</span>
                </label>
                <input type="text" name='priroty' placeholder="Argent" className="input input-bordered" />
             {/* {passwordInput} */}
                
            </div>
           </div>
           <div className="flex gap-8">
           <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="price" name='price' placeholder="Enter Your Buget"
                
                className="input input-bordered" />
             {/* {passwordInput} */}
                
            </div>
            <div className="form-control w-1/2">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input  type="date" name='date' className="input text-black input-bordered" />
             {/* {passwordInput} */}
                
            </div>
           </div>

         <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Job Details</span>
                </label>
                <input type="text" name='details'  placeholder="Enter Job Details" className="input input-bordered " />
             {/* {passwordInput} */}
                
            </div>
            <div className="form-control mt-6">
           <input type="submit" value="Create Job Task"  className="btn btn-primary"/>
            </div>
           
            </form>
        </div>
    );
};

export default UpdateTask;