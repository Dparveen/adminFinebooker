import React from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'

export default function Direct() {
  return (
    <>
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            {/* <GameList /> */}
            {/* <Games /> */}
            <UserList />
        </div>
        <Footer />
    </>
  )
}
