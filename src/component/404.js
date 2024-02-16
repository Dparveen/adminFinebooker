import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function NoPage() {
  return (
    <div className="content1">
            <div className="container-fluid pt-4 px-4">
                <div className="row vh-100 bg-secondary rounded align-items-center justify-content-center mx-0">
                    <div className="col-md-6 text-center p-4">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1 fw-bold">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website!
                            Maybe go to our home page or try to use a search?</p>
                        <Link to="/" className="btn btn-primary rounded-pill py-3 px-5">Go Back To Home</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <Link to="/">Bazziii365</Link>, All Right Reserved. 
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                            {/* Designed By <Link to="https://wa.me/918950528203">Parveen Saini</Link>
                            <br />Distributed By: <Link to="https://wa.me/918950528203" target="_blank">Betfair</Link> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}
