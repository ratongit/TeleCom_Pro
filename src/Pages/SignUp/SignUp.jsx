
import React, { useState } from 'react';
import './SignUp.css'
import google from './../../assets/Octopus/google.png'
import github from './../../assets/Octopus/git.png'
import facebook from './../../assets/Octopus/Facebook.webp'


const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    const [inputAnimation, setInputAnimation] = useState(false);
    const [inputAnimation2, setInputAnimation2] = useState(false);
    const [inputAnimation3, setInputAnimation3] = useState(false);

    const handleInput = (event) => {
        setName(event.target.value)
    };
    const handleInput2 = (event) => {
        if (!inputAnimation) {
            setInputAnimation(!inputAnimation);
        }
        if (name === '') {
            setInputAnimation(!inputAnimation);
        }
    };
    const handleInput5 = (event) => {
        setpassword(event.target.value);
    };
    const handleInput3 = (event) => {
        setEmail(event.target.value);
    };
    const handleInput4 = (event) => {
        if (!inputAnimation2) {
            setInputAnimation2(!inputAnimation2);
        }
        if (email === '') {
            setInputAnimation2(!inputAnimation2);
        }
    };
    const handleInput6 = (event) => {
        if (!inputAnimation3) {
            setInputAnimation3(!inputAnimation3);
        }
        if (password === '') {
            setInputAnimation3(!inputAnimation3);
        }
    };


    return (
        <div className=' my-14 md:mt-16 flex justify-center items-center bg-opacity-10  relative w-[65%] z-30 sm:w-[55%] md:w-[50%] lg:w-[40%] xl:w-[35%] bg-transparent'>



            <form className='bg-gray-600  pt-6  h-[460px] bg-transParent  rounded-sm shadow-sm shadow-slate-600 bg-opacity-10 relative' >

                <div className='w-36 h-36 z-40 bg-blue-400 rounded-[50%] -top-16 -left-16 bg-opacity-50 absolute '></div>
                <div className='w-40 h-40 z-40 bg-purple-400 rounded-[50%] -bottom-20 -right-20 bg-opacity-30 absolute '></div>


                <div className="text-center">
                    <h2 className='font-semibold text-blue-300 my-1'>Register Now</h2>
                </div>
                <div className="card-container ">

                    <div className="sign-up-card ">

                        <div className="input-container">
                            <input
                                value={name}
                                onKeyUp={handleInput2}
                                onChange={handleInput}
                                className={` form-input ${inputAnimation && 'input-animation'}`}
                                name='name'
                                type="text"
                                id="inputField1"
                                required
                            />
                            <label className='input-text' htmlFor="inputField1"> Name</label>
                        </div>
                        <div className="input-container ">
                            <input
                                value={email}
                                onKeyUp={handleInput4}
                                onChange={handleInput3}
                                className={`form-input ${inputAnimation2 && 'input-animation'}`}
                                type="text"
                                id="inputField2"
                                required
                            />
                            <label className='input-text' htmlFor="inputField2"> Email</label>
                        </div>

                        <div className="input-container">
                            <input
                                value={password}
                                onKeyUp={handleInput6}
                                onChange={handleInput5}
                                className={`form-input ${inputAnimation3 && 'input-animation'}`}
                                type="password"
                                name='password'
                                id="inputField3"
                                required
                            />
                            <label className='input-text' htmlFor="inputField3">Password</label>
                        </div>

                        <div className="input-container pt-1">
                            <input className=' btn hover:opacity-80 font-bold bg-opacity-70 btn-success ' type="submit" value='Sign Up' />
                        </div>
                        <div className='flex gap-7 input-container justify-center ps-20 '>

                            <img src={google} alt="" className='w-8 ' />
                            <img src={facebook} alt="" className='w-8' />
                            <img src={github} alt="" className='w-8 bg-white rounded-[50%] ' />


                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;


