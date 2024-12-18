import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "./Service.css"
import useDatabase from '../../Component/Hooks/useDatabase';
// import useShowAll from '../../Component/Hooks/useShowAll';
import useMoreLess from '../../Component/Hooks/useMoreLess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import data from './serviceData'


const Services = () => {


    const { service } = useDatabase()
    const [showModal, setShowModal] = useState(false)
    const [activeCard, setActivecard] = useState(`All Service`)
    const [modalData, setModalData] = useState([])
    const [isHovered, setIsHovered] = useState(false);
    const [nextItems, setNextItems] = useState(6)

    const [cardData, setCardData] = useState([]);


    const Categories = [...new Set(service?.map(project => project?.category))];



    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);

    const handleToModal = (Id) => {
        setShowModal(true)
        setModalData(service?.find(Data => Data?.id === Id))
    }

    let cardNumber=cardData?.length
    const handleMore = () => {
        cardNumber+6
        setNextItems(prev => prev + 6)
    }

    const handleLess = () => {
        if(cardNumber>cardData?.length)

        setNextItems(prev => prev - 3)
    }


    const handleFilter = (categoryfilter) => {
        const filterData = service?.filter(allservice => allservice?.category === categoryfilter)
        setCardData(filterData)
        setActivecard(categoryfilter)
        console.log(filterData)

    }
    const handleAll = () => {
        setCardData(service)
        setActivecard("All Service")
    }


    const handleDetails=Id=>{
        const Detials = service?.find(allservice => allservice?.id === Id)
        
        console.log(Detials)
    }

    return (
        <div>
            <div className="container mb-14  my-5 w-[90%]   mx-auto">

                <div className="mb-7 flex justify-between  sm:mb-0 ">
                    <h3 className='text-3xl font-bold'>Our Service</h3>

                    <button className="border-solid text-[15px] px-4 rounded-lg  border-[1px] border-blue-400  ">  {activeCard} <span className={`${cardData?.length===0 && "hidden"} `}>{cardData?.length}</span></button>
                </div>

                <div className="flex gap-2 w-[100%] flex-wrap max-sm:ps-4 mt-3">
                    <button onClick={() => handleAll()} className="border border-solid text-[18px] px-4 rounded-lg  border-purple-400">All </button>
                    {Categories?.map((item, index) => (<button key={index} onClick={() => handleFilter(item)} className="border border-solid text-[18px] px-4 rounded-lg  border-purple-400"><div >{item}</div></button>
                    ))}
                </div>

                <div className="flex items-center justify-between flex-wrap">


                    <div className="flex items-center gap-7 justify-center flex-wrap  max-sm:mx-3">
                        {(cardData?.length>1)?
                            cardData?.slice(0, nextItems).map((service, index) => (
                                <Link key={index} to={`/service/details/${service?.id}`}>
                                <div key={index}
                                    className='mt-6 overflow-hidden flex  justify-center  items-center  relative w-[300px] max-md:w-[100%] z-30 bg-transparent border rounded-md'>

                                    <div className='h-[260px]  w-[320px]  max-md:w-[100%] max-md:h-[100%] rounded-sm shadow-sm max-md:pb-5 shadow-slate-600 bg-opacity-10 relative '>


                                        <div className="relative">


                                            <div className={`bg2  border px-10 hover:bg-slate-700 btn absolute  top-[35%] left-[32%] opacity-0 hover:opacity-100 btnDetails} `}>Details</div>

                                            <img src={service?.imgUrl} alt="" className="rounded-t-md w-[85%] mx-auto my-5 rounded-md h-[180px]" />
                                            <div className='flex justify-center ms-2 center w-[90%] hover:text-slate-300'>
                                                <p className='-mt-3 h-8 overflow-hidden'>{service?.title}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                </Link>) ):
                            service?.slice(0, nextItems).map((service, index) => (
                                <Link key={index} to={`/service/details/${service?.id}`}>
                                <div key={index}
                                    className='mt-6 overflow-hidden flex  justify-center  items-center  relative w-[300px] max-md:w-[100%] z-30 bg-transparent border rounded-md'>

                                    <div className='h-[260px]  w-[320px]  max-md:w-[100%] max-md:h-[100%] rounded-sm shadow-sm max-md:pb-5 shadow-slate-600 bg-opacity-10 relative '>


                                        <div className="relative">


                                            <div className={`bg2  border px-10 hover:bg-slate-600 btn absolute shadow-lg shadow-blue-400 top-[35%] left-[32%] opacity-0 hover:opacity-100  btnDetails`}>Details</div>

                                            <img src={service?.imgUrl} alt="" className="rounded-t-md w-[85%] mx-auto my-5 rounded-md h-[180px]" />
                                            <div className='flex justify-center ms-2 center w-[90%] hover:text-slate-300'>
                                                <p className='-mt-3 h-8 overflow-hidden'>{service?.title}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div> </Link>))
                            
                        }
                    </div>

                </div>

                {
                    cardData?.length > nextItems ?
                        <div className="text-center mt-5">
                            <button onClick={handleMore} className='bg2 border btn font-bold  rounded-xl font-3xl px-10 ease-in duration-200 hover:bg-slate-700'>See More</button>
                        </div> :
                        <div className="text-center mt-5">
                            <button onClick={handleLess} className={`bg2 border btn font-bold  rounded-xl font-3xl px-10 ease-in duration-200 hover:bg-slate-700 ${cardData?.length > 7 || 'hidden'}`}>See Less</button>
                        </div>
                }

            </div>
        </div>
    );
};

export default Services;