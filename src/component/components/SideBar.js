import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CommonContext } from '../CommonContext';

import configure from '../BaseUrl.json'
import axios from 'axios';
export default function SideBar(props) {
    const { Menu} = useContext(CommonContext);
    const [userData, setuserData] =useState([]);
    const [menu, setMenu]=useState("sidebar pe-4 pb-3 ")
    const [EventsData, setEventsData] = useState([])
    useEffect(() => {
        let user = localStorage.getItem('userDetails');
        let auth = JSON.parse(localStorage.getItem('protect'));
        setuserData(JSON.parse(user));
        setMenu("sidebar pe-4 pb-3 "+ Menu);
        if(auth && auth.token){
            getEvents(auth);
        }
        
    },[Menu]);
    
    const getEvents = async(auth) =>{
        console.log(auth)
        let config = {
            method: 'get',
            url: configure.SERVER_URL + 'game/EventsMenu',
            headers: {
                'Content-Type': 'application/json',
                token: auth.token,
            },
        };
        axios.request(config)
            .then((res) => {
                setEventsData(res.data.Event)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const EventsMenu = () =>{
        return EventsData.map((event,i)=>(
            <Link key={i} to={`/matchdetails/${event.eventType}`} className="dropdown-item">{event.name}</Link>
        ))
    }
  return (
    <>
    <div className={menu}>
            <nav className="navbar bg-secondary navbar-dark">
                <Link to="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary">
                    {/* <i className="fa fa-user-edit me-2"></i>  */}
                    Bazziii365</h3>
                </Link>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="/img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">{userData.fullname}</h6>
                        <span>{userData.userType === 1 ? "Super Master"
                                :userData.userType  === 2 ? "Master"
                                :userData.userType === 3 ? "Super Admin"
                                :userData.userType === 4 ? "Admin"
                                :userData.userType === 5 ? "Super Agent"
                                :userData.userType === 6 ? "Agent"
                                :"User"}</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link to="/" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Events</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            {EventsMenu()}
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-dice-d20 me-2"></i>Casino</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Color Play 2 Min</Link>
                            <Link to="/" className="dropdown-item"> <i className="fas fa-dice-d20 me-1"></i> Color Play 1 hour</Link>
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Dragon Tiger</Link>
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Card 32</Link>
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Card 32A</Link>
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Lucky 7</Link>
                            <Link to="/" className="dropdown-item"><i className="fas fa-dice-d20 me-1"></i> Lucky 7A</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-users me-2"></i>Netwotking</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            {/* <Link to="/" className="dropdown-item"><i className="fa fa-user-plus me-1"></i> Add New</Link> */}
                            <Link to="/team" className="dropdown-item"><i className="fa fa-users me-1"></i> Downline</Link>
                            {/* <Link to="/direct" className="dropdown-item"> <i className="fa fa-users me-1"></i> Direct</Link> */}
                            {/* <Link to="/tree" className="dropdown-item"><i className="fa fa-users me-1"></i> Tree View</Link> */}
                        </div>
                    </div>
                    <Link to="/wallet" className="nav-item nav-link"><i className="fa fa-wallet me-2"></i>Wallet</Link>
                        {/* <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-money-bill-alt me-2"></i>Money</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/wallet/credit" className="dropdown-item"><i className="fa fa-wallet me-1"></i> Money In</Link>
                            <Link to="/wallet/debit" className="dropdown-item"><i className="fa fa-wallet me-1"></i> Money Out</Link>
                        </div>
                    </div> */}
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-chalkboard-teacher me-2"></i>Account</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            {/* <Link to="/sendMoney" className="dropdown-item"><i className="fa fa-share me-1"></i> Send Money</Link> */}
                            <Link to="/accountStatement/today" className="dropdown-item"><i className="fa fa-list me-1"></i>Today Statement</Link>
                            <Link to="/accountStatement/all" className="dropdown-item"><i className="fa fa-list me-1"></i>All Statement</Link>
                        </div>
                    </div>
                    {userData.userType === 1?
                    <>
                    <Link to="/banner" className="nav-item nav-link"><i className="	far fa-images me-2"></i>Banner</Link>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-plus me-2"></i>Add Domain</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                        <Link to="/" className="dropdown-item"><i className="fa fa-plus me-1"></i> Add Domain</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> Domain Setting</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> Game Control</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-plus me-2"></i>Add UI</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> DIAMOND UI</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> FINE BOOKER UI</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> LOTUS UI</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> SKY EXCHANGE UI</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-cog me-1"></i> BET BAAZI UI</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-cog me-2"></i>Domain Setting</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/" className="dropdown-item"><i className="fa fa-ban me-1"></i> Block Domain</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-ban me-1"></i> Block Game</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-ban me-1"></i> Block Bet</Link>
                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-cog me-2"></i>Sports Setting</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/sports/control" className="dropdown-item"><i className="fa fa-futbol me-1"></i> Sports Setting</Link>
                            <Link to="/series/control" className="dropdown-item"><i className="fa fa-list-alt me-1"></i> Series Setting</Link>
                            <Link to="/match/control" className="dropdown-item"><i className="fa fa-football-ball me-1"></i> Match Setting</Link>
                            <Link to="/market/control" className="dropdown-item"><i className="fa fa-shopping-cart me-1"></i> Market Setting</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-mobile me-1"></i> APK Setting</Link>
                            <Link to="/bm/control" className="dropdown-item"><i className="fa fa-tasks me-1"></i> Manage Bookmaker</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-tasks me-1"></i> Manage Fancy</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-trash me-1"></i> Clear All Data</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-list-alt me-1"></i> Match Result</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-list-alt me-1"></i> Match Rollback</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-trash me-1"></i> Delete Declared Market</Link>
                        </div>
                    </div>
                    </>
                    : ''}
                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-list me-2"></i>Reports</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/accountStatement/all" className="dropdown-item"><i className="fa fa-list me-1"></i> Statement</Link>
                            <Link to="/betlist" className="dropdown-item"><i className="fa fa-list me-1"></i> Bet History</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-list me-1"></i> Casino Result Report</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-list me-1"></i> Profit & Loss By Match</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-list me-1"></i> Profit & Loss By Upline</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-trash me-1"></i> Delete Bet Report</Link>
                        </div>
                    </div>
                    <Link to="/logout" className="nav-item nav-link"><i className="fa fa-power-off me-2"></i>Logout</Link>
                </div>
            </nav>
        </div>
        </>
  )
}
