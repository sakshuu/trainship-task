import React from 'react'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import {  Home, Login, Register, Table, Testinomial } from './pages';
import {  MyNavbar } from './components';
import "./assets/css/index.css"

const App = () => {
  return <>
     <BrowserRouter>
     <Routes>
    <Route path='/' element={<MyNavbar/>}>
    <Route index element={<Home/>}/>
    <Route path='/table' element={<Table/>}/>
    <Route path='/test' element={<Testinomial/>} />
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    </Route>
    <Route path='*' element={<h1>Page Not Found</h1>} />
     </Routes>
     </BrowserRouter>
  </>
}

export default App