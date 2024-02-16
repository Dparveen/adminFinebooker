import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import BetLists from './components/BetList'
import { useParams } from 'react-router-dom'

export default function BetList() {
    let params = useParams();
    const [search, setSearch] = useState();
    useEffect(()=>{
        setSearch(params.type);
    },[params.type])
    
  return (
    <>
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            {/* <GameList /> */}
            {/* <Games /> */}
            <BetLists data={search} />
        </div>
        <Footer />
    </>
  )
}
