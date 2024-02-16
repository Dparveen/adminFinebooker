import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate } from "react-router-dom";
import { CommonContext } from '../CommonContext';

export default function Header() {
    const {toggleMenu, balance, exposer, Live, profit } = useContext(CommonContext);
    const toggle = () => {
    // Call the sendMoney function with a new balance value
        toggleMenu(); // Example: Send 100 as the new balance
    };
    const [userData, setuserData] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        let user = localStorage.getItem('userDetails');
        // console.log("localuser", user)
        if (user === undefined || user === "" || user === null) {
            navigate('/logout');
        } else {
            setuserData(JSON.parse(user));
        }
    }, [ balance, exposer, Live, profit ]);
    
    // console.log(userData)
    return (
        <>
          <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0" style={{ background: 'linear-gradient(90deg, rgb(5 71 11) 0%, #ffc107 50%, rgb(13 73 11) 100%)' }}>
            <button type="button" className="btn btn-lg btn-lg-square btn-primary m-1 control" onClick={() => toggle()}>
              <i className="fa fa-bars"></i>
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="h6" title="Balance">
              <i className="fa fa-wallet"></i> : $ {balance.toString().slice(0, 7)}
            </Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="h6" title="Exposer">
              <i>Exp</i> : {exposer || 0}
            </Link>
            {userData.userType === 1 ? <>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/" className="h6" title="Profit">
              <i>P/L</i> : {profit || 0}
            </Link>
            <span style={{ marginLeft: 'auto' }}>
              <Link to="/" className="h6" title="Online" style={{ color: 'white' }}>
                <i>Online</i> : {Live || 0}
              </Link>
            </span></>
                :''}
            <div className="navbar-nav align-items-center">
              <div className="nav-item dropdown">
                {/* Dropdown Menu */}
              </div>
              <div className="nav-item dropdown">
                {/* Dropdown Menu */}
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <img className="rounded-circle me-lg-2" src="/img/user.jpg" alt="" style={{ width: '40px', height: '40px', borderStyle: 'solid', borderColor: '#fff' }} />
                  <span className="d-none d-lg-inline-flex" style={{ color: 'white' }}>{userData.fullname}</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                  <Link to="/" className="dropdown-item"><i className="fa fa-user me-2"></i> My Profile</Link>
                  <Link to="/" className="dropdown-item">
                    {/* <i className="fa fa-th me-2"></i> */}
                    <i className="fa fa-key me-2"></i>
                    Change Password</Link>
      
                  <Link to="/logout" className="dropdown-item"><i className="fa fa-power-off me-2"></i> Log Out</Link>
                </div>
              </div>
            </div>
          </nav>
        </>
      )
    }      