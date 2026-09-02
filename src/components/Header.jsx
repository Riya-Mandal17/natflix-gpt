import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };
    return (
        <div className="absolute  p-5 w-full left-5 z-10 bg-linear-to-b from-black flex justify-between">
            <img
                className="w-36"
                src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
                alt="logo"
            />

            {user && <div className="flex gap-8 p-2">
                <button onClick={handleSignout} className="font-semibold w-20 text-white bg-red-700 rounded shadow">
                    Sign out
                </button>
                <img
                    
                    className="w-12 h-12 bg-transparent rounded-4xl"
                    src={user?.photoURL}
                    alt="user-icon"
                />
            </div>} 
        </div>
    );
};

export default Header;
