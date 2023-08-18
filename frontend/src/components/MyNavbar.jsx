import React from 'react'
import { Link, Outlet} from "react-router-dom";
import Footer from './Footer';

const MyNavbar = () => {
  return (<>
<nav className="navbar navbar-expand-lg bg-nav navbar-light p-2">
        <div className="container">
            <Link to="/" className="navbar-brand">Navigation Bar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                                        
                    <Link to="/" className="nav-link active" ><i class="bi bi-house-add-fill p-2"></i>  Home</Link>
                    <Link to="/table" className="nav-link active" ><i class="bi bi-table"></i>  Table</Link>
                    <Link to="/test" className="nav-link" ><i class="bi bi-yelp"></i> Testinomial</Link>
                    <Link to="/signup" className="nav-link" ><i class="bi bi-person p-2"></i> SignUp</Link>
                    <Link to="/login" className="nav-link" ><i class="bi bi-person p-2"></i> Login</Link>
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