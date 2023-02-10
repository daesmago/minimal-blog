import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0XUjXt7Ff1Kun8FO_I_V5v6H_ze42FRc",
    authDomain: "react-minimal-blog.firebaseapp.com",
    projectId: "react-minimal-blog",
    storageBucket: "react-minimal-blog.appspot.com",
    messagingSenderId: "661158614789",
    appId: "1:661158614789:web:bd3502e4f5448c0d0f496c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
