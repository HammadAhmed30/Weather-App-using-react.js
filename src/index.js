import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // return(
  <React.StrictMode>
    <div
      className="main-cnt"
      style={{
        // display: "table",
        // position: "absolute",
        width: "100vw",
        height: window.innerHeight,
        // height: "100vh",
        overflow: "hidden",
      }}
    >
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'jquery';
// import 'popper.js/dist/umd/popper'
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import Navbar from './App.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//      <React.Fragment>
//       <Navbar/>

//     </React.Fragment>
//   </React.StrictMode>

// );
// reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
