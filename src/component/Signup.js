import React from 'react'
import Loader from './components/Loader'

export default function Signup() {
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <Loader />
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3" style={{borderRadius: '3%',borderWidth: '1px 3px 3px 3px',borderColor: '#e0be07',borderStyle: 'groove'}}>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <a href="index.html" className="">
                                <h3 className="text-primary">Bazziii365</h3>
                            </a>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" />
                            <label htmlFor="floatingText" style={{color:'yellow'}}>Sponcer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" />
                            <label htmlFor="floatingText" style={{color:'yellow'}}>Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" style={{color:'yellow'}}>Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            {/* <a href="/">Forgot Password</a> */}
                        </div>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}}>Sign Up</button>
                        <p className="text-center mb-0">Already have an Account? <a href="/">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
