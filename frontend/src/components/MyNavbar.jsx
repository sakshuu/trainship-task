import React from 'react'
import { Link, Outlet} from "react-router-dom";
import Footer from './Footer';

const MyNavbar = () => {
  return (<>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark p-2">
        <div className="container">
            <Link to="/" className="navbar-brand">SKILLHUB</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                                        
                    <Link to="/" className="nav-link active" > Home</Link>
                    <Link to="/about" className="nav-link" >About</Link>
                    <Link to="/signup" className="nav-link" >SignUp</Link>
                    <Link to="/login" className="nav-link" >Login</Link>
                </div>
                </div>
        </div>
    </nav>
    <Outlet/> 
    <Footer/>   
  </>
  )
}

export default MyNavbar