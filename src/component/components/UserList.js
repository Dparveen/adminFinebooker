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
import SendPoint from '../Models/SendPoint';
import BetStatement from '../Models/BetStatement';

export default function UserList() {
    const [select, setSelect] = useState('');
    const [userList, setUserList] = useState([]);
    const [current, setCurrent] = useState('');
    const [token, setToken] = useState('');
    const [userType, setUserType]=useState(0);
    const [API, setAPI] = useState(false)
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('userDetails'));
        let auth = JSON.parse(localStorage.getItem('protect'))
        setCurrent(user);
        setToken(auth.token)
        if (auth.token) {
            // console.log(user.hash_new)
            getUserList(auth.token);
        }
    }, [])

    let getUserList = async (hash) => {
        if(!API){
            setAPI(true)
        let config = {
            method: 'post',
            url: configure.SERVER_URL + 'users/list',
            headers: {
                'Content-Type': 'application/json',
                token: hash,
            },
        };

        axios.request(config)
            .then((res) => {
                if(res.data.status===true){
                // console.log(res.data)
                setUserList(res.data.data)
                }
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
                setAPI(false)
            })
    }
}

    const updateUser = async(d) =>{
            setUserList(d)
    }

    // console.log(current,)
    return (
        <>
            <div className="col-sm-12 col-xl-12">
                <div className="bg-secondary h-100" style={{ padding: '0.5rem !important' }}>
                    <h6 className="mb-4" style={{ paddingTop: '10px', paddingLeft: '10px' }}>Users List</h6>
                    {/* <form className="d-none d-md-flex ms-4" style={{ width: 'fit-content' }}>
                        <input className="form-control bg-dark border-0" type="search" placeholder="Search User" />
                    </form> */}
                    <p style={{ paddingTop: '10px', paddingLeft: '10px', color: 'white' }}>B/L : Betting lock, F/L: Fancy Lock <span className='btn btn-warning m-2 text-dark' title="Add User" data-bs-toggle="modal" data-bs-target="#addUser" style={{float:'right'}} onClick={(e) => { setSelect(current.username); setUserType(current.userType) }}>Add New</span></p>
                    <table className="table table-dark">
                    {userList && userList.length > 0 ?
                    <>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Credit</th> */}
                                <th scope="col">Exposer</th>
                                <th scope="col">P/L</th>
                                <th scope="col">Available</th>
                                {/* <th scope="col">Liability</th> */}
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userList.map((user,i)=>
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{user.fullname}</td>
                                {/* <td>{user.creditAmount}</td> */}
                                <td>{user.exposerAmount}</td>
                                <td>{user.profit_loss}</td>
                                <td>{user.balance}</td>
                                {/* <td>{user.creditAmount}</td> */}
                                <td>
                                    {user.userType !== 7 ? <button type="button" className="btn btn-square btn-outline-warning m-1" title="Add User" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#addUser" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-user-plus" ></i></button>:<button type="button" className="btn btn-square btn-outline-primary m-1" title="Can't Add User" style={{ width: '30px', height: '30px' }} ><i className="fa fa-user-plus" ></i></button> }
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Deposit and Withdraw Money" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#sendMoney" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="far fa-money-bill-alt" ></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Change Password" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#changePassword" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-key"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="View User Details" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#viewUser" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fas fa-address-card"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Lock User" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#userLock" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-lock"></i></button>
                                    <button type="button" className="btn btn-outline-warning m-1" title="Lock Betting" data-bs-toggle="modal" data-bs-target="#betLock" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}>B/L</button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" style={{ width: '30px', height: '30px' }} title="Account Statement" data-bs-toggle="modal" data-bs-target="#AccountStatement" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-list" ></i></button>
                                    <button type="button" className="btn btn-square btn-outline-info m-1" style={{ width: '30px', height: '30px' }} title="Bet Statement" data-bs-toggle="modal" data-bs-target="#BetStatement" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-list" ></i></button>
                                    <button type="button" className="btn btn-outline-warning m-1" title="Lock Fancy" data-bs-toggle="modal" data-bs-target="#fancyLock" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}>F/L</button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Disable User" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#disableUser" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-ban"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Setting" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#setting"><i className="fa fa-cog" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="PartnerShip" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#partnerShip" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="far fa-handshake"></i></button>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Set Button value" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#buttonValue" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-cog fa-spin" ></i></button>
                                    {user.userType === 1 ? <button type="button" className="btn btn-square btn-outline-warning m-1" title="Set Button value" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#sendPoint" value={user.username} onClick={(e) => { setSelect(user.username); setUserType(user.userType) }}><i className="fa fa-money-bill-alt fa-spin" ></i></button> :''}
                                </td>
                            </tr>
                        )}
                        </tbody>
                        </>
                        : <thead><tr><th className="text-center">user found</th></tr></thead>}
                    </table>
                </div>
            </div>
            <NewUser data={select} Type={userType} />
            <SendMoney data={select} Type={userType} fnctn={updateUser} />
            <ChangePassword data={select} Type={userType} />
            <ViewUser data={select} Type={userType} />
            <UserLock data={select} Type={userType} />
            <BetLock data={select} Type={userType} />
            <AccountStatement data={select} Type={userType} />
            <BetStatement data={select} Type={userType} />
            <FancyLock data={select} Type={userType} />
            <DisableUser data={select} Type={userType} />
            <Setting data={select} Type={userType} />
            <PartnerShip data={select} Type={userType} />
            <SetButtonValue data={select} Type={userType} />
            <SendPoint data={select} Type={userType} />
        </>
    )
}
