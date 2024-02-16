import React from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import MatchdataControl from './components/ControlMatch'

export default function Mcontrol() {

  let params = useParams();
  // console.log(params.id)
  // const length = window.location.pathname.split("/").length;
    let query = params.id;
    // console.log(length, query);
  return (
    <>
        <SideBar />
        <div className="content">
            <Header />
            {/* <Notification /> */}
            {/* <Container /> */}
            {/* <div style={{display: 'flex',position: 'fixed', marginLeft: '70%'}}><button class="btn btn-warning m-1 text-dark" data-bs-toggle="modal" data-bs-target="#addGame">Add Sports</button></div> */}
            <MatchdataControl filter={query}/>
            {/* <Games /> */}
            {/* <UserList /> */}
        </div>
        {/* <AddSports /> */}
        <Footer />
    </>
  )
}