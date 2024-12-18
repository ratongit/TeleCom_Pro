import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Component/ContextApi/AuthProniders";
import { Text } from "recharts";
import './../../SignUp/SignUp.css'
import './Route.css'

const RoutePlan = () => {

    const {setUser} = useContext(AuthContext)

    // const auth= getAutt(app)
    const [impactSites, setImpactSites] = useState([]); // Initial array

    // console.log(impactSites)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(
            // auth,
            siteDown,dcLow
        )
        console.log(impactSites)


        if (siteDown.trim() || dcLow.trim()) {

            // Add siteDown and dcLow to myInpactSites
            setImpactSites((prevSites) => [
              { siteDown: siteDown.toUpperCase(), dcLow: dcLow.toUpperCase() },...prevSites,
            ]);
            // Clear the input fields
            setSiteDown("");
            setDcLow("");
          }
        }
        



const [name, setName] = useState('');
const [password, setpassword] = useState('');
const [email, setEmail] = useState('');
const [dcLow, setDcLow] = useState('');
const [siteDown, setSiteDown] = useState('');
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
    setDcLow(event.target.value);
};

const handleInput3 = (event) => {
    setSiteDown(event.target.value);
};

const handleInput4 = (event) => {
    if (!inputAnimation2) {
        setInputAnimation2(!inputAnimation2);
    }
    if (siteDown === '') {
        setInputAnimation2(!inputAnimation2);
    }
};

const handleInput6 = (event) => {
    if (!inputAnimation3) {
        setInputAnimation3(!inputAnimation3);
    }
    if (dcLow === '') {
        setInputAnimation3(!inputAnimation3);
    }
};




// New Code End 

  return (

    <div className="overflow-hidden darktheme1 w-[92%] h-[350px] lg:h-[260px] my-10 rounded-md  bg-opacity-10   z-30 g-transparent
    mx-0 ">


        <form onSubmit={onSubmit}  className=' pt-6 relative  bg-opacity-10 h-96 ' >



                <div className="text-center mx-0 ">
                    <h2 className='font-bold text-3xl text-blue-300 my-1 lg:-ms-20 xl:ps-2'>Impact Site</h2>
                </div>

            <div className="card-container">



                <div className="sign-up-card md:ps-40 ">

                   <div className="lg:flex lg:gap-28 lg:-mb-10 lg:-mr-[10px] ">


                        <div className="input-container ">
                            <input
                                value={siteDown}
                                onKeyUp={handleInput4}
                                onChange={handleInput3}
                                className={`form-input ${inputAnimation2 && 'input-animation'}`}
                                type="text"
                                id="inputField2"
                                // required
                            />
                            <label className='input-text impact-input darktheme1' htmlFor="inputField2">Site Down</label>
                        </div>

                        <div className="input-container">
                            <input
                                value={dcLow}
                                onKeyUp={handleInput6}
                                onChange={handleInput5}
                                className={`form-input ${inputAnimation3 && 'input-animation'}`}
                                type="Text"
                                name='DC low Site'
                                id="inputField3"
                                // required
                            />
                            <label className='input-text impact-input darktheme1' htmlFor="inputField3">Dc Low</label>
                        </div>

                        </div>

                        <div className="  input-container lg:w-3/4 ">
                            <input className=' btn hover:opacity-80 font-bold bg-opacity-70 btn-success lg:ms-0 ' type="submit" value='Add Inpact site list' />
                        </div>

                    </div>

            </div>


        </form>




    </div>


  );

};

export default RoutePlan

