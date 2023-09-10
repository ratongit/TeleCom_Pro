import React, { useContext, useState } from 'react';
import AuthProniders, { AuthContext } from '../ContextApi/AuthProniders';
import Navbar from '../Shearing Component/Navbar/Navbar';
import logo from './../../assets/Octopus/businesslogo.png'
import home from './../../assets/Octopus/home-removebg-preview.png'
import { Outlet } from 'react-router-dom';


const Dashborad = () => {
  
  const {show} = useContext(AuthContext)


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
        <img src={home} className='icons' alt="" /> All Task
        </a></li>
      <li ><a className='dashBoard-li' href='/doing'>
        <img src={home} className='icons' alt="" />Doing
        </a></li>
      <li ><a className='dashBoard-li' href='/done'>
        <img src={home} className='icons' alt="" />Done
        </a></li>
      <li ><a className='dashBoard-li' href='/services'>
        <img src={home} className='icons' alt="" />Services 
        </a></li>
      <li ><a className='dashBoard-li' href='/signup '>
        <img src={home} className='icons' alt="" />Sing Up 
        </a></li>
      <li ><a className='dashBoard-li' href='/login '>
        <img src={home} className='icons' alt="" />Log In 
        </a></li>
        
    </ul>
  
  </div>
</div>
      
    </div>
  );
};

export default Dashborad;

















// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const Dashboad = () => {
//     return (
// <div className="drawer lg:drawer-open ">
//   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content flex flex-col items-center justify-center">
//     {/* Page content here */}
// <Outlet></Outlet>



  
//   </div> 
//   <div className="drawer-side  max-lg:mt-16 ">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       {/* Sidebar content here */}

//       <li className=' mb-4 text-2xl font-semibold'>  Dash Board </li>
//       <Link to='/Charts'><li  className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Admin </li></Link>
// <li className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Profile</li>
// <li className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Aprove Task</li>
// <li className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Pandding tesk</li>
// <li className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Add New Tast </li>
// <li className="text-lg uppercase leading-10 text-gray-700  font-semibold hover:bg-zinc-300 rounded-xl px-3 ">Grouth Report</li>

//     </ul>
  
//   </div>
// </div>

//     );
// };

// export default Dashboad;












// import React, { useState } from 'react';
// // import Navbar from '../Navbar/Navbar';
// // import './Dashboard.css';
// // import DashBoardMainContent from './DashBoardContent';
// import { Outlet } from 'react-router-dom';

// const Dashboard = () => {
//   const [dashboardVisible, setDashboardVisible] = useState(true);
//   const [dashboardVisibl] = useState(true);

//   const DashBoardMainConten= <>
//   <h1>hello</h1>
//   </>

//   // const toggleDashboardContent = () => {
//   //   setDashboardVisible(!dashboardVisibl)
//   // };

//   // const dashboardContent = (<> <DashBoardMainContent></DashBoardMainContent> </>);

//   return (
//     <>
//       <div className='sm:hidden '>
//         {/* <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} /> */}
//       </div>

//       <div className={`drawer ${dashboardVisible ? 'drawer-open ' : ''} `}>
//         <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={dashboardVisible} />
//         <div className="drawer-content">

//           <div className='max-sm:hidden'>
//             {/* <Navbar toggleDashboard={() => setDashboardVisible(!dashboardVisible)} dashboardVisible={dashboardVisible} /> */}
//           </div>

//           {/* <div onClick={toggleDashboardContent}>
//             {!dashboardVisible && (<ul className='ps-32 max-md:hidden max-sm:-ms-28'>{dashboardContent}</ul>)}
//             {dashboardVisible && (<ul className='max-md:hidden max-sm:-ms-40'> {dashboardContent}</ul>)}
//           </div>
//           */}

// <Outlet></Outlet>
//         </div>

//         <div className="drawer-side border-e-[1px] border-gray-700">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-64 max-sm:w-48  h-full  bg-navber text-white">
//             <hr className='absolute border-[1px] border-gray-700 w-72  -ms-12  mt-[56px] max-sm:hidden' />
          
//             {/* <DashBoardMainContent></DashBoardMainContent> */}
//             {DashBoardMainConten}

//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
