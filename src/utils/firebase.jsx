// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYha8hA97KcQZp6fIY1VJi3YGwqAw1qmQ",
  authDomain: "netflixgpt-d3a21.firebaseapp.com",
  projectId: "netflixgpt-d3a21",
  storageBucket: "netflixgpt-d3a21.firebasestorage.app",
  messagingSenderId: "900983224080",
  appId: "1:900983224080:web:69c31e42165f1eeb40d795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();