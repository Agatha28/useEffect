import React, { useState, useRef, useLayoutEffect} from "react";
import { useForm } from "./useForm";
import {Hello} from "./Hello";
import { useMeasure } from "./useMeasure";


const App = () => {
  const [values, handleChange] =  useForm({
  email: "", 
  password: "", 
  firstName: ""});

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

const [rect, inputRef2] = useMeasure([]);



  return (
  <div>
      
      <>
     <button onClick={() => setShowHello(!showHello)}>toggle</button>
     {showHello && <Hello/>}
      <input ref={inputRef} name="email" value = {values.email} onChange = {handleChange}/>
      <input ref={inputRef2} name="firstName" placeholder="fisrtname" value = {values.firstName} onChange = {handleChange}/>
      <input 
      type= "password" 
      name="password" 
      value = {values.password}
      onChange = {handleChange}
          />
          <button onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
          >
            focus
            </button>
        </>
  </div>
  );
};


//useLayoutEffect(() => {
  //console.log(inputRef.current.getBoundingClientRect());
//}, []);
 
  //const [values2, handleChange] =  useForm({firstName: "", lastName: ""});

  //useEffect(() => {
    //const onMouseMove = e => {
    //  console.log(e)
    //}
   // window.addEventListener("mousemove", onMouseMove);

     // return () => {
        //  window.removeEventListener("mousemove", onMouseMove);
     // };
 // }, []);

//useEffect(() => {
  // console.log('mount1')
 //}, [])

 //useEffect(() => {
  //console.log('mount2')
//}, [])

//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
     // <header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
       // <a
         // className="App-link"
         // href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
       // >
         // Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

export default App;
