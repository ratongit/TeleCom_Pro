
import React, { useContext, useState } from 'react';
import './SignUp.css'
import app from '../../Component/FireBase/Firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../Component/ContextApi/AuthProniders';
import Swal from 'sweetalert2'

const Login = () => {
    const {setUser} = useContext(AuthContext)


    const auth= getAuth(app)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(auth,email,password)
          signInWithEmailAndPassword(auth,email,password)

          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login has been successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
    

    const createUser=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }

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



            <form onSubmit={onSubmit}  className='bg-gray-600  pt-6  h-[360px] bg-transParent  rounded-sm shadow-sm shadow-slate-600 bg-opacity-10 relative' >

                <div className='w-36 h-36 z-40 bg-blue-400 rounded-[50%] -top-16 -left-16 bg-opacity-50 absolute '></div>
                <div className='w-40 h-40 z-40 bg-purple-400 rounded-[50%] -bottom-20 -right-20 bg-opacity-30 absolute '></div>


                <div className="text-center">
                    <h2 className='font-semibold text-blue-300 my-1'>Login</h2>
                </div>
                <div className="card-container ">

                    <div className="sign-up-card ">

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
                            <input className=' btn hover:opacity-80 font-bold bg-opacity-70 btn-success ' type="submit" value='Sign In' />
                        </div>
                    </div>

                </div>

 <div className='mx-auto flex justify-center relative top-[230px]'>
<a href="/signup">
<h3 className='center uppercase text-[13px] '>already have an account ?
<span className='text-blue-400 border-none hover:bg-transparent cursor-pointer hover:text-green-300 bg-transparent  font-bold underline btn '> Sing Up </span>
</h3>
</a>  </div>  

            </form>
        </div>
    );
};

export default Login;


