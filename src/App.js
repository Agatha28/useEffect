import React, {useEffect, useState} from "react";
import { useForm } from "./useForm";
import {Hello} from "./Hello";
import { useFetch } from "./useFetch";


const App = () => {
  const [values, handleChange] =  useForm({
  email: "", 
  password: "", 
  firstName: ""});

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
    );
  const {data,loading} = useFetch(`http://numbersapi.com/43/${count}/trivia`);

  useEffect(() =>{
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  

  //const [showHello, setShowHello] = useState(true);
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


  return (
  <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c+1)}>increment</button>
      <>
     
      <input name="email" value = {values.email} onChange = {handleChange}/>
      <input name="firstName" placeholder="fisrtname" value = {values.firstName} onChange = {handleChange}/>
      <input 
      type= "password" 
      name="password" 
      value = {values.password}
      onChange = {handleChange}
          />
        </>
  </div>
  );
};




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
