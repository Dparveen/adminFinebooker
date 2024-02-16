import React, { useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl";
import NewUser from '../Models/NewUser'
import SendMoney from '../Models/SendMoney'
import ChangePassword from '../Models/ChangePassword'
import ViewUser from '../Models/ViewUser'
import UserLock from '../Models/UserLock'
import BetLock from '../Models/BetLock'
import AccountStatement from '../Models/AccountStatement'
import FancyLock from '../Models/FancyLock'
import DisableUser from '../Models/DisableUser'
import Setting from '../Models/Setting'
import PartnerShip from '../Models/PartnerShip'
import SetButtonValue from '../Models/SetButtonValue'

export default function AccountList(props) {
    // console.log("t type",props.data)
    const [select, setSelect] = useState('');
    const [userList, setUserList] = useState([]);
    const [current, setCurrent] = useState('');
    const [token, setToken] = useState('');
    const [reqTime, setreqTime]=useState('all');
    const [API, setAPI] = useState(true)
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('userDetails'));
        let auth = JSON.parse(localStorage.getItem('protect'))
        setCurrent(user);
        setToken(auth.token)
        if (auth.token) {
            // console.log(user.hash_new)
            getUserList(auth.token);
        }
        if(props.data !== undefined){
            setreqTime(props.data)
        }
    }, [])

    let getUserList = async (hash) => {
        if(API){
            setAPI(true)
        let config = {
            method: 'post',
            url: configure.SERVER_URL + 'users/transaction',
            headers: {
                'Content-Type': 'application/json',
                token: hash,
            },
        };

        axios.request(config)
            .then((res) => {
                // console.log(res.data.data)
                setUserList(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
                setAPI(false)
            })
        }
    }


    // console.log(userList)
    return (
        <>
            <div className="col-sm-12 col-xl-12">
                <div className="bg-secondary h-100" style={{ padding: '0.5rem !important' }}>
                    <h6 className="mb-4" style={{ paddingTop: '10px', paddingLeft: '10px' }}>Account Statement</h6>
                    <form className="d-none d-md-flex ms-4" style={{ width: 'fit-content' }}>
                        <input className="form-control bg-dark border-0" type="search" placeholder="Search User" />
                    </form>
                    {/* <p style={{ paddingTop: '10px', paddingLeft: '10px', color: 'white' }}>B/L : Betting lock, F/L: Fancy Lock</p> */}
                    <table className="table table-dark">
                    {userList && userList.length > 0 ?
                    <>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">to User</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Type</th>
                                <th scope='col'>Transaction ID</th>
                                <th scope='col'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userList.map((user, i)=>
                            <tr key={i}>
                                <th scope="row" key={i}>{i+1}</th>
                                <td>{user.toUser}</td>
                                <td>{user.amount}</td>
                                {/* <td>{user.transectionType === 'Credit' ? <button type="button" className="btn btn-outline-success m-1" title="Deposit and Withdraw Money" >{user.transectionType}</button> : <button type="button" className="btn btn-outline-danger m-1" title="Deposit and Withdraw Money" >{user.transectionType}</button>}</td> */}
                                <td>{user.fromUser === current.username ? <button type="button" className="btn btn-outline-primary m-1" title="Deposit and Withdraw Money" >Debit</button> : <button type="button" className="btn btn-outline-warning m-1" title="Deposit and Withdraw Money" >Credit</button> }</td>
                                <td>{user.transectionId}</td>
                                <td>{user.createdAt.toString().slice(8,10) +"/"+user.createdAt.toString().slice(5,7)+"/"+user.createdAt.toString().slice(0,4)}</td>
                            </tr>
                        )}
                        </tbody>
                        </>
                        : <thead><tr><th className="text-center">user found</th></tr></thead>}
                    </table>
                </div>
            </div>
            <NewUser data={select} />
            <SendMoney data={select} />
            <ChangePassword data={select} />
            <ViewUser data={select} />
            <UserLock data={select} />
            <BetLock data={select} />
            <AccountStatement data={select} />
            <FancyLock data={select} />
            <DisableUser data={select} />
            <Setting data={select} />
            <PartnerShip data={select} />
            <SetButtonValue data={select} />
        </>
    )
}
