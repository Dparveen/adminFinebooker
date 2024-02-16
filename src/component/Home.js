import React, { useContext, useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Container from './components/Container'
import Notification from './components/Notification'
import GameList from './components/GameList'
import Games from './components/Games'
import { CommonContext } from './CommonContext'
export default function Home() {
  // const [bal, setBal]=useState(0);
  // const {sendMoney, balance, exposer } = useContext(CommonContext);
  // useEffect(()=>{
  //   let user = JSON.parse(localStorage.getItem('userDetails'));
  //     console.log(user)
  // },[balance])
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            <GameList />
            <Games />
        </div>
        <Footer/>
    </div>
  )
}
