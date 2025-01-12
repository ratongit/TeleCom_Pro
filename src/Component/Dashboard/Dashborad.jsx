import React, { useContext, useState } from 'react';
import AuthProniders, { AuthContext } from '../ContextApi/AuthProniders';
import Navbar from '../Shearing Component/Navbar/Navbar';
import { Link } from 'react-router-dom';

// import logo from './../../assets/Octopus/businesslogo.png'

import logo from "./../../assets/TeleCom_Pro_Logo.png"

import login from './../../assets/Octopus/logIn.png'

import map from './../../assets/Tower_map.png'
import serviceIcone from './../../assets/Octopus/serviceIcone.png'

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

  const { show, auth } = useContext(AuthContext)

  const handleLogOut = () => {
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
          <ul className={`menu p-4   w-64 border-e-2  min-h-full darktheme1 broder-left  text-base-content ${show ? 'hidden' : 'block'}`}>


            <div className='max-lg:hidden items-center flex relative w-[272px] h-16 -ms-8 py-[33px] -mt-5 darktheme1  '>
              <img src={logo} className='w-14 max-md:w-14 mx-11 ' alt="" />
              <h3 className={`text-3xl font-semibold  -ms-10   ${show ? 'hidden' : 'block'}`}>
                <span className='text-indigo-500 text-4xl'>T</span>
                <span className='text-indigo-400' >e</span>
                <span className='text-indigo-300'>l</span>
                <span className='text-indigo-200'>e</span>
                <span className='text-purple-400'>C</span>
                <span className='text-purple-300'>o</span>
                <span className='text-purple-200'>m</span>

              </h3>
            </div>

            <li >
              <Link className='dashBoard-li' to='/'>
                <img src={home} className='icons' alt="" /> Home
              </Link>
            </li>

            <li >
              <Link className='dashBoard-li' to='/alltask'>
                <img src={alltask} className='icons h-10' alt="" />
                All Task
              </Link>
            </li>

            <li >
              <Link className='dashBoard-li' to='/doing'>
                <img src={doing} className='icons' alt="" />Doing
              </Link>
            </li>
            <li >
              <Link className='dashBoard-li' to='/done'>
                <img src={done} className='icons' alt="" />Done
              </Link>
            </li>
            <li >
              <Link className='dashBoard-li' to='/services'>
                <img src={todo} className='icons h-10' alt="" /> To do
              </Link>
            </li>

            <li >
              <Link className='dashBoard-li' to='/map'>
                <img src={map} className='icons' alt="" /> Map
              </Link>
            </li>
            <li >
              <Link className='dashBoard-li' to='/services'>
                <img src={serviceIcone} className='icons' alt="" /> Services
              </Link>
            </li>

            <li>
              <Link className='dashBoard-li' to='/favourite'>
                <img src={favourite} className='icons' alt="" />Favourite
              </Link>
            </li>

            {
              !auth?.currentUser?.email &&
              <>
                <li >
                  <Link className='dashBoard-li' to='/signup '>
                    <img src={register} className='icons' alt="" />Sing Up
                  </Link>
                </li>
                <li >
                  <Link className='dashBoard-li' to='/login '>
                    <img src={login} className='icons' alt="" />Log In
                  </Link>
                </li>
              </>
            }

            {
              auth?.currentUser?.email &&
              <li onClick={() => handleLogOut()}  >
                <Link className='dashBoard-li' to='/login '>
                  <img src={logout} className='icons' alt="" />Log out
                </Link>
              </li>
            }

          </ul>

        </div>
      </div>

    </div>
  );
};

export default Dashborad;

