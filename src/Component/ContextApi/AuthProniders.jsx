import { createContext, useEffect, useState } from "react";
import { FaOutdent } from "react-icons/fa";

import logo from './../../assets/TeleCom_Pro_Logo.png'

import ManuEnd from './../../assets/Octopus/HamberEnd.jpg'
import ManuIcon from './../../assets/Octopus/Hamber.png'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../FireBase/Firebase.config";


export const AuthContext = createContext(null);


const AuthProniders = ({ children }) => {


const auth =getAuth(app)
// console.log(auth)

const [loading, setLoading] = useState(true)


const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

}

const updateUseProfite = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name
    })
}



const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}


const logOut = () => {
    return signOut(auth);
}


// observe auth state change

const [userEmail, setUserEmail] = useState(null)

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {

        setLoading(false);
    });
    return () => {
        unsubscribe();
    }

}, [])

    const [show, setShowDrawer] = useState(false)
    const Openbox = <div onClick={() => setShowDrawer(!show)} className="flex mt-2 max-lg:hidden ms-5 ">
        <label htmlFor="my-drawer-2" className=" "><FaOutdent className='border-[1px] border-gray-500 w-14 h-10 py-2 rounded-md opacity-70 hover:opacity-100' style={{ fontSize: '40px' }}></FaOutdent>
            <div className=' w-10 h-4 '>
                <img onClick={() => setShowDrawer(!show)} className={` -me-7  w-14 h-10 rounded-md rotate-180 ${show ? 'hidden' : 'block'}`} src={ManuEnd} alt="" />
                <img onClick={() => setShowDrawer(!show)} className={`border-[1px] -me-7 border-gray-500 w-14 h-10 rounded-md  ${!show ? 'hidden' : 'block'}`} src={ManuIcon} alt="" />
            </div>

        </label>
        <img src={logo} className={`w-12 m-5 -mt-1 opacity-90 hover:opacity-100 ${show ? 'block' : 'hidden'}`} alt="" />
        <h3 className={`text-3xl font-semibold -ms-5 text-indigo-200  opacity-90 hover:opacity-100  ${show ? 'block' : 'hidden'}`}>
        <span className='text-indigo-500 text-4xl'>T</span>
            <span className='text-indigo-400' >e</span>
            <span className='text-indigo-300'>l</span>
            <span className='text-indigo-200'>e</span>
            <span className='text-purple-400'>C</span>
            <span className='text-purple-300'>o</span>
            <span className='text-purple-200'>m</span>

        </h3>

    </div>
    const [taskId, setTaskId] = useState(90);
    const [status, setStatus] = useState('all-task');

    const authInfo = {
        Openbox,
        show,
        setTaskId,
        taskId,
        status,
        setStatus,
        updateUseProfite,
        auth,
        logOut,

    }

    return (

        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>

    )

}

export default AuthProniders;