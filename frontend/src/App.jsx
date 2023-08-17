import React from 'react'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { About, Home, Login, Register } from './pages';
import {  MyNavbar } from './components';
import "./assets/css/index.css"

const App = () => {
  return <>
     <BrowserRouter>
     <Routes>
    <Route path='/' element={<MyNavbar/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    </Route>
    <Route path='*' element={<h1>Page Not Found</h1>} />
     </Routes>
     </BrowserRouter>
  </>
}

export default App