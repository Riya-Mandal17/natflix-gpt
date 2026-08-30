import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);

    const toggleSignInForm= () =>{
        setSignIn(!isSignIn);
    };

    return (
        <div className="relative min-h-screen">
            <Header />

            <img className="absolute inset-0 w-full h-full object-cover "
                src="
                        https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_large.jpg"
                alt="background-image" 
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <form className="relative w-3/12 z-10 max-w-md p-12 bg-black  mx-auto top-36 right-0 left-0 text-white opacity-80  flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl p-4 m-6 ">{isSignIn? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn &&  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 mb-4 bg-gray-700 rounded"
                />
                }
                <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full p-4 mb-4 bg-gray-700 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                /> 
                
                <button className="p-4 my-6 bg-red-600 w-full cursor-pointer hover:bg-red-800 rounded-lg">{isSignIn? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer p-4" onClick={toggleSignInForm}>Do you have an account? Sign Up Now</p>
            </form>
        </div>
    );
};

export default Login;
