import React, { useContext, useState } from 'react';
import "./Navber.css";
// import logo from './../../../assets/Octopus/businesslogo.png'
import logo from './../../../assets/Octopus/TeleCom_Pro_Logo.png'
import { Link } from 'react-router-dom';

import addItem from './../../../assets/Octopus/addCaed.png'
import ManuIcon from './../../../assets/Octopus/hamber.png'
import ManuEnd from './../../../assets/Octopus/HamberEnd.jpg'
import { AuthContext } from '../../ContextApi/AuthProniders';
import ModalCompo from './Modal/ModalCompo';
import useDatabase from '../../Hooks/useDatabase';
import serviceicone from './../../../assets/Octopus/serviceIcone.png'
import home from './../../../assets/Octopus/home-removebg-preview.png'



const Navbar = () => {

  const [show, setShowDrawer] = useState(true)
  const { Openbox, auth } = useContext(AuthContext)



  const { alltasks } = useDatabase()
  const [email, setEmail] = useState(null)

  if (email !== auth?.currentUser?.email) {
    setEmail(auth?.currentUser?.email)
  }

  const filteredData = alltasks?.filter(item => item?.task_giver?.email === email);

  // console.log(filteredData.length)




  // console.log(auth?.currentUser?.photoURL)

  return (

    <>

      <div className="navbar darktheme1  z-40 h-[60px] bg-navber pt-1 ">
        <div htmlFor="my-drawer-2" className="navbar-start">
          <div className='max-lg:hidden'>
            {Openbox}

          </div>

          <label htmlFor="my-drawer-2" className='flex gap lg:hidden mt-2 '>

            <div className=' w-12 '>

              <img onClick={() => setShowDrawer(!show)} className={` -me-7  w-14 h-10 rounded-md rotate-180 ${show ? 'hidden' : 'block'}`} src={ManuEnd} alt="" />

              <img onClick={() => setShowDrawer(!show)} className={`border-[1px] -me-7 border-gray-500 w-14 h-10 rounded-md  ${!show ? 'hidden' : 'block'}`} src={ManuIcon} alt="" />

            </div>



            <img src={logo} className='w-12 max-md:w-12 
             max-sm:hidden ms-3 -mt-1' alt="" />
          </label>
        </div>



        <div htmlFor="my-drawer-2" className="navbar-end me-2">


          <Link to="/">
            <div className='w-12    me-2 rounded-3xl max-sm:hidden relative '>
              <img src={home} className='w-14 h-14 rounded-3xl ' alt="" />
            </div>
            </Link>


          <Link to="/services">
  <div className="w-12 h-14 me-5 rounded-3xl max-sm:hidden relative">
    <img src={serviceicone} className="w-14 h-14 rounded-3xl" alt="" />
  </div>
</Link>

          <Link to="/favourite">
            <div className='w-12 h-14  me-5 rounded-3xl max-sm:hidden relative '>
              <img src={addItem} className='w-14 h-14 rounded-3xl ' alt="" />
              <div className='absolute bg-white text-sm px-1 top-2 right-0 text-black font-semibold rounded-lg '>
                {filteredData.length}
              </div>
            </div>
            </Link>


          {auth?.currentUser?.photoURL &&
            <>
              <div className='w-12 h-14  me-5 rounded-3xl max-sm:hidden '>
                <img src={auth?.currentUser?.photoURL} className='w-14 h-14 rounded-3xl ' alt="" />
              </div>

            </>

          }

          <img src={logo} className='w-12 max-md:w-11 sm:hidden  -m-5 -mt-6 mr-3 ' alt="" />
          <ModalCompo></ModalCompo>
        </div>

      </div>



    </>

  );
};

export default Navbar;
