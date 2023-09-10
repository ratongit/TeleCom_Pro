import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Component/ContextApi/AuthProniders';
import { useParams } from 'react-router-dom';


const StartTask = () => {

    const taskId = useParams()

    const [serviceFind, setServiceFind] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:5001/alltask/${taskId.id}`)
        .then(res=> res.json())
        .then(data=> setServiceFind(data))
    },[])
    
    console.log(serviceFind)

    return (
        <div>

            
        </div>
    );
};

export default StartTask;