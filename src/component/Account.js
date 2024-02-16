import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import AccountList from './components/AccountList'
import { useParams } from 'react-router-dom'

export default function Account() {
    let params = useParams();
    const [search, setSearch] = useState();
    useEffect(()=>{
        setSearch(params.type);
        console.log(params.type);
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
            <AccountList data={search} />
        </div>
        <Footer />
    </>
  )
}
