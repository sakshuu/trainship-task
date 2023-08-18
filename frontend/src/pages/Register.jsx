import React, { useState } from 'react'
import  logo from "./../assets/img/logo.jpeg";
import  Mobile_login  from "./../assets/img/Mobile_login.jpg";
import { register } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signIn, setsignIn] = useState({
    name:"",
    email:"",
    password:"",
    cPassword:""
})
  return  <>
  <div className="container-fluid mt-4 ">
        <div className="row p-2">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={Mobile_login} className="img-signup d-md-inline d-none d-sm-none" alt=""/>
            </div>
          <div className="col-md-6 col-sm-12">
            <div className="d-block justify-content-center gap-2 m-4">
            <div className="d-flex justify-content-center"><img  src={logo} className="logo" alt=""/></div>
            <h4 className="text-center mt-2">Signup </h4>
            </div>
            <div className="card-body">
                <div>
                  <label htmlFor="name" className="form-label">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={signIn.name}
                    onChange={e => setsignIn({ ...signIn, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="form-label">First Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={signIn.email}
                    onChange={e => setsignIn({...signIn, email: e.target.value})}
                    placeholder="Enter Your Email"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    value={signIn.password}
                    onChange={e => setsignIn({...signIn, password: e.target.value})}
                    placeholder="Enter Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a password.</div>
                </div>
                <div className="mt-2">
                  <label htmlFor="cpassword" className="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="text"
                    className="form-control"
                    id="cpassword"
                    value={signIn.cPassword}
                    onChange={e => setsignIn({...signIn, cPassword: e.target.value})}
                    placeholder="Confirm Your Password"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please Recheck Your Password.
                  </div>
                </div>
                <button type="button" onClick={e => {dispatch(register(signIn))
              navigate("/")  
              }
                } className="btn btn-primary w-100 mt-3">
                  Signup
                </button>
                <p className="text-center mt-3">
                  Already Have Account? <a href="/login">Login</a>
                </p>
              </div>
          </div>
        </div>
      </div>
  </>
}

export default Register