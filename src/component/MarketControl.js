import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import MarketList from './components/MarketList'

export default function MarketControl() {
    useEffect(()=>{
        
    },[])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <MarketList />
            {/* <Games /> */}
        </div>
        <Footer/>
    </div>
  )
}
