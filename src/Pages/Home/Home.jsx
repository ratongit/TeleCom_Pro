import React, { useContext } from 'react';
import Card from './Cards/Cards';
import Doing from '../../Component/AllTask/Doing';
import { AuthContext } from '../../Component/ContextApi/AuthProniders';
import Done from '../../Component/AllTask/Done';
import AllTask from '../../Component/AllTask/AllTask';
import Pending from '../../Component/AllTask/Pending';
import Services from '../Service/Service';
import BarChart from './BerChart';
import CardBarChart from './BerChart';
import LineChart from './lineChart';
import Banner from './Banner';
import VideoPlayer from './VideoPlayer';
import RoutePlan from '../Operation/RoutePlan/RoutePlan';
import InputForm from '../Operation/RoutePlan/Input';
import RoutePlanner from '../Operation/RoutePlan/RoutePlanner/RoutePlaner';
const Home = () => {

    const { status } = useContext(AuthContext)
    let alltasks = false
    let doing = false
    let done = false
    let pending = true

    if (status === "all-task") {
        alltasks = true
        done = false
        doing = false
        pending = false

    } else if (status === "doing") {
        alltasks = false
        doing = true
        done = false
        pending = false
    } else if (status === "done") {
        alltasks = false
        doing = false
        pending = false
        done = true
    } else if (pending === 'pending ') {
        alltasks = false
        doing = false
        pending = true
        done = false
    }

    return (

        <div>

            {/* <InputForm></InputForm> */}

            <div className='w-full h-full mx-auto'>

                <div className={`w-full flex justify-center `}>
                    <VideoPlayer></VideoPlayer>
                </div>



                <div className={`w-full flex justify-center `}>
                    <RoutePlanner></RoutePlanner>
                </div>


                <div className={`w-full flex justify-center `}>
                    <Banner></Banner>
                </div>




                {/* 
            <div className={`w-full flex justify-center `}>
            <RoutePlan></RoutePlan>
            </div> */}

                <Card></Card>


                <InputForm></InputForm>


                <div className={`${alltasks || 'hidden'} w-full flex justify-center `}>
                    <AllTask></AllTask>
                </div>
                <div className={`${done || 'hidden'} w-full flex justify-center `}>
                    <Done></Done>
                </div>
                <div className={`${doing || 'hidden'} w-full flex justify-center `}>
                    <Doing></Doing>
                </div>
                <div className={`${!pending && 'hidden'} w-full flex justify-center `}>
                    <Pending></Pending>
                </div>

                <CardBarChart></CardBarChart>
                <LineChart></LineChart>
            </div>
        </div>
    );
};

export default Home;