import React, { useEffect } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import BookMakerList from './components/BookMakerList'

export default function BookMakerControl() {
    useEffect(()=>{
        
    },[])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <BookMakerList />
            {/* <Games /> */}
        </div>
        <Footer/>
    </div>
  )
}
