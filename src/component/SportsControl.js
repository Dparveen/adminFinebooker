import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import SportsList from './components/SportsList'

export default function SportsControl() {
    useEffect(()=>{
        
    },[])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <SportsList />
            {/* <Games /> */}
        </div>
        <Footer/>
    </div>
  )
}
