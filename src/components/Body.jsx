import React, { useEffect } from "react";
import { createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    
    const appRout = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const {uid,displayName,email,photoURL} = user;
                dispatch(addUser({uid,displayName,email,photoURL}));
                
                
            } else {
                dispatch(removeUser);
                
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRout} />
        </div>
    );
};

export default Body;
