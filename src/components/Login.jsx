import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    

    const handleButtonClick = () => {
        //validate my data

        const msg = checkValidate(
            !isSignIn ? name.current.value : "",
            email.current.value,
            password.current.value,
            isSignIn,
        );
        setErrorMessage(msg);

        if (msg) return;

        //Sign In / Sign Up
        if (!isSignIn) {
            //Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    return updateProfile(user, {
                        displayName: name.current.value,
                    });
                })
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/173079030?s=96&v=4",
                    })
                        .then(() => {
                           navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });

                    
                })
                

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + ": " + errorMessage);
                });
        } else {
            //Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("user");
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setSignIn(!isSignIn);
    };

    return (
        <div className="relative min-h-screen">
            <Header />

            <img
                className="absolute inset-0 w-full h-full object-cover "
                src="
                        https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_large.jpg"
                alt="background-image"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <form
                className="relative w-3/12 z-10 max-w-md p-12 bg-black  mx-auto top-36 right-0 left-0 text-white opacity-80  flex flex-col justify-centere "
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className="font-bold text-3xl p-4 m-6 ">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 mb-4 bg-gray-700 rounded"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="w-full p-4 mb-4 bg-gray-700 rounded"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-600 text-left font-bold p-2 text-lg">
                    {errorMessage}
                </p>
                <button
                    className="p-4 my-6 bg-red-600 w-full cursor-pointer hover:bg-red-800 rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className="cursor-pointer p-4" onClick={toggleSignInForm}>
                    {isSignIn
                        ? "Do you have an account? Sign Up now"
                        : "Have you already an account? Sign In "}
                </p>
            </form>
        </div>
    );
};

export default Login;
