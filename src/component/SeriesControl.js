import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import SeriesList from './components/SeriesList'

export default function SeriesControl() {
    useEffect(()=>{
        
    },[])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <SeriesList />
            {/* <Games /> */}
        </div>
        <Footer/>
    </div>
  )
}
