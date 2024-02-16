import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import MatchList from './components/MatchList'

export default function MatchControl() {
    useEffect(()=>{
        
    },[])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <MatchList />
            {/* <Games /> */}
        </div>
        <Footer/>
    </div>
  )
}
