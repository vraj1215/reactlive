// import logo from './logo.svg';
import './App.css';

import Navbar from './componant/Navbar';
import Form from './componant/Form'
import About from './componant/About';
import Alert from './componant/Alert'
import React, { useState } from 'react';
// import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

let name = "vraj";
function App() {
  const [mode, setmode] = useState('light');
  const [message, setmessage] = useState(null);
  const showmessage = (msg, ty) => {
    setmessage({
      msg: msg,
      ty: ty
    })
    setTimeout(() => {
      setmessage(null)
    }, 1500);
  }
  //   const togglemode=(m)=>{
  //     // if(m==='info'){
  //     //     setmode("info");
  //     //     document.body.style.background="lightblue";
  //     // }
  //     // else if(m==='light'){
  //     //     setmode("light");
  //     //     document.body.style.background="white";
  //     // }
  //     // else if(m==='dark'){
  //     //     setmode("dark");
  //     //     document.body.style.background="black";
  //     // }
  //     if(mode==='dark')
  //     {setmode("light")
  //         document.body.style.background="white"
  //         // showmessage("abc","success")
  //         setmessage(null)
  //     }
  //     else{setmode("dark");document.body.style.background="black"
  //         showmessage("dark mode enable","success")
  //     }
  //   }
  const [cl, setcl] = useState({ mode: 'light', clr: 'dark', bgc: 'white' })
  // setmode('light')

  let togglemode = {
    light: () => {
      setmode('light')
      document.body.style.background = '#e4f0ed'
      setcl({ mode: 'light', clr: 'dark', bgc: 'white' })
      showmessage("light mode enable","light")
    },
    dark: () => {
      setmode('dark')
      document.body.style.background = 'black'
      setcl({ mode: 'dark', clr: 'light', bgc: '#212528' })
      showmessage("dark mode enable","dark")
    },
    success: () => {
      setmode('success')
      document.body.style.background = '#198773'
      setcl({ mode: 'success', clr: 'warning ', bgc: '#198773' })
      showmessage("green mode enable","success")
    }
  }
  // const router=createBrowserRouter([
  //   {
  //     path:'/'
  //     ,element:<Form mode={mode} sm={showmessage} cl={cl} />
  //   }
  //   ,{
  //     path:'/about',
  //     element:<About cl={cl}></About>
  //   }
  // ])  
  return (
    
    <div className='d'>
      {/* <BrowserRouter> */}
        <Alert msg={message} />
        <div className=' mb-2'><Navbar title='learn' mode={mode} togglemode={togglemode} cl={cl} /></div>
        <Form mode={mode} sm={showmessage} cl={cl} />
        <About cl={cl}></About>
        {/* <Routes>
          <Route exact path='/' element={}/>
          <Route exact path='about' element={}/>
          
        </Routes>
      </BrowserRouter> */}
       
      

      

    </div>

  );
}


export default App;
