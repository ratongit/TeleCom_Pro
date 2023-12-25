
import React, {useContext, useState } from 'react';
import './SignUp.css'
import google from './../../assets/Octopus/google.png'
import github from './../../assets/Octopus/git.png'
import facebook from './../../assets/Octopus/Facebook.webp'
import { AuthContext } from '../../Component/ContextApi/AuthProniders';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../Component/FireBase/Firebase.config';
import Swal from 'sweetalert2'


const SignUp = () => {

    const { updateUseProfite } = useContext(AuthContext)
    const auth = getAuth(app)

    // console.log(auth)
    const googleSingIn = () => {
        return signInWithPopup(auth, GoogleAuthProvider)
    }
    
    const handleSignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
        }



    const onSubmit = async (event) => {
        event.preventDefault();
        const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
        }
    
        createUser(email,password,auth)
        .then(result => {
          const loggedUser = result.user;
          const saveUserProfile = {name: name,email:email}
          updateUseProfite(name)
          .then(()=>{
            const saveUser = {name:name,email:email}

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign up has successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            
        })
        updateProfile(auth.currentUser, {
             photoURL:img
    })
    })};
    
    


    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [inputAnimation, setInputAnimation] = useState(false);  
    const [inputAnimation2, setInputAnimation2] = useState(false);
    const [inputAnimation3, setInputAnimation3] = useState(false);
    const [inputAnimation4, setInputAnimation4] = useState(false);

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
    const handleInput7= (event) => {
        setImg(event.target.value)
    };
    const handleInput8 = (event) => {
        if (!inputAnimation4) {
            setInputAnimation4(!inputAnimation4);
        }
        if (img === '') {
            setInputAnimation4(!inputAnimation4);
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
        <div className=' my-8 md:mt-6 flex justify-center items-center bg-opacity-10  relative w-[65%] z-30 sm:w-[55%] md:w-[50%] lg:w-[40%] xl:w-[35%] bg-transparent'>



            <form onSubmit={onSubmit} className='bg-gray-600  pt-6  h-[550px] bg-transParent  rounded-sm shadow-sm shadow-slate-600 bg-opacity-10 relative' >

                <div className='w-32 h-32 z-40 bg-blue-400 rounded-[50%] -top-16 -left-16 bg-opacity-50 absolute '></div>
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
                            <label className='input-text' htmlFor="inputField4"> Name</label>
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

                        <div className="input-container ">
                            <input
                                value={img}
                                onKeyUp={handleInput8}
                                onChange={handleInput7}
                                className={`form-input ${inputAnimation4 && 'input-animation'}`}
                                type="text"
                                id="inputField2"
                              
                            />
                            <label className='input-text' htmlFor="inputField2"> ImageURL</label>
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

                            <img  onClick={handleSignInWithGoogle} src={google} alt="" className='w-8 hover:bg-black rounded-full' />
                            <img src={facebook} alt="" className='w-8' />
                            <img src={github} alt="" className='w-8 bg-white rounded-[50%] ' />


                        </div>
                    </div>

                </div>
 <div className='mx-auto flex justify-center relative top-[430px]'>
<a href="/login">
<h3 className='center uppercase text-[13px] '>already have an account ?
<span className='text-blue-400 border-none hover:bg-transparent cursor-pointer hover:text-green-300 bg-transparent  font-bold underline btn '> Login </span>
</h3>
</a>  </div>  
            </form>
        </div>
    );
};

export default SignUp;


