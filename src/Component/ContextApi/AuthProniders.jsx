import { createContext, useState } from "react";
import { FaOutdent } from "react-icons/fa";
import logo from './../../assets/Octopus/businesslogo.png'
import ManuEnd from './../../assets/Octopus/HamberEnd.jpg'
import ManuIcon from './../../assets/Octopus/Hamber.png'

export const AuthContext = createContext(null);



const AuthProniders = ({ children }) => {

    const [show, setShowDrawer] = useState(false)


    const Openbox = <div onClick={() => setShowDrawer(!show)} className="flex mt-2 max-lg:hidden ms-5 ">
        <label htmlFor="my-drawer-2" className=" "><FaOutdent className='border-[1px] border-gray-500 w-14 h-10 py-2 rounded-md opacity-70 hover:opacity-100' style={{ fontSize: '40px' }}></FaOutdent>
            <div className=' w-10 h-4 '>
                <img onClick={() => setShowDrawer(!show)} className={` -me-7  w-14 h-10 rounded-md rotate-180 ${show ? 'hidden' : 'block'}`} src={ManuEnd} alt="" />
                <img onClick={() => setShowDrawer(!show)} className={`border-[1px] -me-7 border-gray-500 w-14 h-10 rounded-md  ${!show ? 'hidden' : 'block'}`} src={ManuIcon} alt="" />
             </div>


        </label>
        <img src={logo} className={`w-40 max-md:w-32 max-md:-mt-7  -m-5 -mt-10 opacity-90 hover:opacity-100 ${show ? 'block' : 'hidden'}`} alt="" />
        <h3 className={`text-3xl font-semibold -ms-5 text-indigo-200  opacity-90 hover:opacity-100  ${show ? 'block' : 'hidden'}`}>
            <span className='text-indigo-400 text-4xl'>O</span>
            <span >c</span>
            <span>t</span>
            <span>o</span>
            <span className='text-yellow-400'>P</span>
            <span className='text-yellow-200'>u</span>
            <span className='text-yellow-200'>s</span>

        </h3>

    </div>

const [taskId,setTaskId] = useState(90);


const [status,setStatus] = useState('all-task');



    const authInfo = {
        Openbox,
        show,
        setTaskId,
        taskId,
        status,
        setStatus

    }

    return (

        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>

    )

}

export default AuthProniders;