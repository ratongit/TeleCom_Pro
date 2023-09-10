import React, { useContext, useState } from 'react';
import "./Navber.css";
import logo from './../../../assets/Octopus/businesslogo.png'
import ManuIcon from './../../../assets/Octopus/hamber.png'
import ManuEnd from './../../../assets/Octopus/HamberEnd.jpg'
import { AuthContext } from '../../ContextApi/AuthProniders';
import ModalCompo from './Modal/ModalCompo';

const Navbar = () => {

  const [show, setShowDrawer] = useState(true)

  const { Openbox} = useContext(AuthContext)


  return (

    <>

      <div className="navbar darktheme1  z-40 h-[60px] bg-navber pt-1 ">
        <div htmlFor="my-drawer-2" className="navbar-start">
          <div className='max-lg:hidden'>
            {Openbox}

          </div>

          <label htmlFor="my-drawer-2" className='flex gap lg:hidden mt-2 '>

<div className=' w-12 '>

<img  onClick={() => setShowDrawer(!show)}  className={` -me-7  w-14 h-10 rounded-md rotate-180 ${show ?  'hidden':'block' }`} src={ManuEnd} alt=""  />

  <img onClick={() => setShowDrawer(!show)}  className={`border-[1px] -me-7 border-gray-500 w-14 h-10 rounded-md  ${!show ?'hidden':'block' }`} src={ManuIcon} alt="" />

</div>
           

            
            <img src={logo} className='w-40 max-md:w-32 max-md:-mt-7
             max-sm:hidden  -m-5 -mt-11 ' alt="" />
          </label>
        </div>



        <div htmlFor="my-drawer-2" className="navbar-end">
          <img src={logo} className='w-40 max-md:w-32 sm:hidden  -m-5 -mt-6 ' alt="" />
          <ModalCompo></ModalCompo>




















        </div>

      </div>



    </>

  );
};

export default Navbar;
