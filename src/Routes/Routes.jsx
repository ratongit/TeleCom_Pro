import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashborad from "../Component/Dashboard/Dashborad";
import Home from "../Pages/Home/Home";
import AllTask from "../Component/AllTask/AllTask";
import UpdateTask from "../Component/UpdateTask/UpdateTask";
import TaskCreate from "../Component/TaskCreate/TaskCreate";
import Doing from "../Component/AllTask/Doing";
import Done from "../Component/AllTask/Done";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/SignUp/Login";
import Services from "../Pages/Service/Service";
import Details from "../Pages/Service/Details/Details";
import SubscribeService from "../Pages/Service/Subscribe/SubscribeService";
import StartTask from "../Pages/StartTask/StartTask";
import Favourite from "../Pages/Favourite/Favourite";
import Developer from "../Pages/AllDeveloper/Developer";
import MapIndex from "../Pages/Operation/Maps/MapIndex";
// import MapboxExample from "../Pages/Operation/Maps/Map";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: ([
        {
          path:'/',
         element:<Dashborad></Dashborad>,
         children: ([
          {
            path:'/',
           element:<Home></Home>
          }, 
          {
            path:'/alltask',
            element:<AllTask></AllTask>
          },
          {
            path:'/doing',
            element:<Doing></Doing>
          },
          {
            path:'/done',
            element:<Done></Done>
          },
          {
            path:'/map',
            // element:<MapboxExample></MapboxExample>
            element:<MapIndex></MapIndex>
          },
          {
            path:'/services',
            element:<Services></Services>
          },
          {
            path:'/service/details/:id',
            element:<Details></Details>
          },
          {
            path:'/StartTask/:id',
            element:<StartTask></StartTask>
          },
          {
            path:'/service/details/Subscribe/:id',
            element:<SubscribeService></SubscribeService>
          },
          {
            path:'/createTask',
            element:<TaskCreate></TaskCreate>
          },
          {
            path:'/developer',
            element:<Developer></Developer>
          },
          {
            path: '/updatetask',
            element: <UpdateTask></UpdateTask>
          },
          {
            path: '/signup',
            element:<SignUp></SignUp>
          },
          {
            path: '/login',
            element:<Login></Login>
          },
          
          {
            path: '/favourite',
            element:<Favourite></Favourite>
          },
          
          
        ])
        },
       
        
      ])
    },
  ]);

  export default router
  