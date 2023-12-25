import React, { useContext, useState } from 'react';
import AuthProniders, { AuthContext } from '../ContextApi/AuthProniders';
import Navbar from '../Shearing Component/Navbar/Navbar';
import logo from './../../assets/Octopus/businesslogo.png'
import login from './../../assets/Octopus/logIn.png'
import register from './../../assets/Octopus/register.png'
import logout from './../../assets/Octopus/logOut.png'
import alltask from './../../assets/Octopus/all task1.png'
import todo from './../../assets/Octopus/todo.webp'
import done from './../../assets/Octopus/done.png'
import doing from './../../assets/Octopus/doing.png'
import favourite from './../../assets/Octopus/savecard.png'
import home from './../../assets/Octopus/home-removebg-preview.png'
import serviceicone from './../../assets/Octopus/serviceIcone.png'
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaServicestack } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import useDatabase from '../Hooks/useDatabase';


const Dashborad = () => {
  
  const {show,auth} = useContext(AuthContext)

  const handleLogOut=()=>{
    signOut(auth)
  }


  return (
    <div>
      
      <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-start">


    <Navbar></Navbar>
    <Outlet></Outlet>

  
  </div> 
  <div className={`drawer-side max-lg:mt-16  max-lg:opacity-100 z-50`}>
    <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
    <ul className={`menu p-4   w-64 border-e-2  min-h-full darktheme1 broder-left  text-base-content ${show ? 'hidden': 'block'}`}>
      

<div className='max-lg:hidden items-center flex relative w-[272px] h-16 -ms-8 py-[33px] -mt-5 darktheme1  '>
<img src={logo} className='w-40 max-md:w-32  ' alt="" />
<h3 className={`text-3xl font-semibold text-indigo-200 -ms-10   ${show ? 'hidden': 'block'}`}>
            <span className='text-indigo-400 text-4xl'>O</span>
            <span >c</span>
            <span>t</span>
            <span>o</span>
            <span className='text-yellow-400'>P</span>
            <span className='text-yellow-200'>u</span>
            <span className='text-yellow-200'>s</span>
        </h3>
</div>

      <li ><a className='dashBoard-li' href='/'>
        <img src={home} className='icons' alt="" /> Home
        </a></li>
      <li ><a className='dashBoard-li' href='/alltask'>
      <img src={alltask} className='icons h-10' alt="" />
        All Task
        </a></li>
      <li ><a className='dashBoard-li' href='/doing'>
        <img src={doing} className='icons' alt="" />Doing
        </a></li>
      <li ><a className='dashBoard-li' href='/done'>
        <img src={done} className='icons' alt="" />Done
        </a></li>
      <li ><a className='dashBoard-li' href='/services'>
      <img src={todo} className='icons h-10' alt="" /> To do
        </a></li>

      <li ><a className='dashBoard-li' href='/services'>
      <img src={serviceicone} className='icons' alt="" /> Services 
        </a></li>
        
              <li><a className='dashBoard-li' href='/favourite'>
                <img src={favourite} className='icons' alt="" />Favourite  
                </a></li>
                
{
  !auth?.currentUser?.email &&
<>
      <li ><a className='dashBoard-li' href='/signup '>
        <img src={register} className='icons' alt="" />Sing Up 
        </a></li>
      <li ><a className='dashBoard-li' href='/login '>
        <img src={login} className='icons' alt="" />Log In 
        </a></li>
        </>
      }

{
  auth?.currentUser?.email &&
      <li onClick={()=>handleLogOut()}  ><a className='dashBoard-li' href='/login '>
        <img src={logout} className='icons' alt="" />Log out 
        </a></li>
}

    </ul>
  
  </div>
</div>
      
    </div>
  );
};

export default Dashborad;

