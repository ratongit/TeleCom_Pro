import { useForm } from 'react-hook-form';
import './../../../Component/AllTask/Task.css'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import './../../../Component/AllTask/Task.css';
import DatePicker from 'react-datepicker';
import useDatabase from '../../../Component/Hooks/useDatabase';
import CostomRoute from './RoutePlanner/CostomRoute';



function InputForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

   
    const [startDate, setStartDate] = useState(new Date()); 

// onSubmit 
    const onSubmit = (data) => {
        
        var alarmName = '';
        
        if (data.siteDown) {
            alarmName = "Site Down";
        } else if (data.dcLow) {
            alarmName = "DC Low";
        }


    
        // Construct the payload
        const submitableData = {
            ...data,         // Spread the form data
            alarm: alarmName,
            
            // Add the dynamic alarmName field
            // selectedDate:`${startDate}`
        };



        console.log('Payload Sent to Server:', submitableData);



    fetch('http://localhost:5000/impactsitepost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitableData),
    })
        .then((res) => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then((response) => {
            if (response.success) {
                alert(response.message);
                reset();
                setStartDate(new Date());
            } else {
                alert(response.message);
            }
        })
        .catch((err) => {
            console.error('Error posting data:', err);
            alert('An error occurred while posting data.');
        });
    

    }




    const Style = {
        margin: "0px !",
        padding: "0px !"
    }




    return (
    <>    
        <div className='center flex flex-col items-center darktheme1 mx-5 md:mx-10 rounded-md mt-10  pt-6 pb-10'>

            <h2 className='font-bold text-3xl text-blue-300 uppercase mb-4'>Impact Site</h2>

            <form style={Style} onSubmit={handleSubmit(onSubmit)} className='m-0 w-full flex justify-center flex-wrap '>

                <div className=' w-full md:w-1/2 max-md:mb-5'>
                    <input className='w-[90%] darktheme2 border rounded-sm h-10 hover:text-green-300 uppercase'
                        id="siteDown"
                        {...register('siteDown')}
                        placeholder="Site Down"
                    />
                </div>

                <div className=' w-full md:w-1/2 '>
                    <input

                        className={`w-[90%] darktheme2 border rounded-sm h-10 hover:text-green-300 uppercase `}
                        id="dcLow"
                        {...register('dcLow', { required: false })}
                        placeholder="DC Low"
                    />


                    <label className='input-text impact-input darktheme1' htmlFor="inputField3">Dc Low</label>



                </div>

                {/* new code start */}


                <div className=' w-full md:w-1/2 mt-4 '>
                    <input

                        className={`w-[90%] darktheme2 border rounded-sm h-10 hover:text-green-300 uppercase `}
                        id="outage"
                        {...register('outage', { required: false })}
                        placeholder="Outage"
                    />


                    <label className='input-text impact-input darktheme1' htmlFor="inputField3">Dc Low</label>



                </div>


                {/* New Dropdown Field */}
                <div className="w-full md:w-1/2 mt-4">
                    <select
                        className="w-[90%] center darktheme2 border rounded-sm h-10 hover:text-green-300"
                        id="priority"
                        {...register('priority', { required: 'Please select an impact level' })}
                    >
                        <option value="kpi">KPI Site</option>
                        <option value="hub">HUB Site</option>
                        <option value="pop">POP Site</option>
                        <option value="platinum">Platinum</option>
                        <option value="nonKpi">Non-KPI</option>
                    </select>
                    <label className="input-text impact-input darktheme1" htmlFor="impactLevel">Impact Level</label>
                    {errors.impactLevel && (
                        <p className="text-red-500 text-sm mt-1">{errors.impactLevel.message}</p>
                    )}
                </div>


                {/* new code end */}

                <button type="submit" className='bg2 border w-[90%] md:w-[95%] px-32 py-[6px] my-4 rounded-md hover:bg-slate-700 hover:border-green-700 font-bold uppercase hover:text-green-300 max-sm:text-[10px] max-sm:h-12'>Add site in impact list </button>

            </form>

        </div>
        </>
    )
}

export default InputForm;
