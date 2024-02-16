import React, { useContext, useEffect, useMemo, useState } from 'react'
import SendMoney from './Models/SendMoney'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import { CommonContext } from './CommonContext'
import axios from 'axios'
import configure from './BaseUrl'
export default function WithdrawPage() {
    const { sendMoney, balance, exposer } = useContext(CommonContext);
    const [sendlist, setsendlist] = useState([])
    const [Reclist, setReclist] = useState([])
    const [Status, setStatus] = useState(0);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        if (auth) {
            getSendUserList(auth.token)
            getRecUserList(auth.token)
        }
    }, [])

    const getSendUserList = (auth) => {
        if (!loading) {
            setLoading(true);
            let config = {
                url: configure.SERVER_URL + 'wallet/in/' + auth,
                headers: {
                    'Content-Type': 'application/json',
                    token: auth
                },
            };

            const axiosConfig = {
                headers: config.headers,
                // maxRedirects: 0
            };
            axios.post(config.url, axiosConfig)
                .then((response) => {
                    // console.log(response.data)
                    if (response.data.status === true) {
                        setsendlist(response.data.data);
                        //   console.log('Button api');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const getRecUserList = (auth) => {
        if (!loading) {
            setLoading(true);
            let config = {
                url: configure.SERVER_URL + 'wallet/out/' + auth,
                headers: {
                    'Content-Type': 'application/json',
                    token: auth
                },
            };

            const axiosConfig = {
                headers: config.headers,
                // maxRedirects: 0
            };
            axios.post(config.url, axiosConfig)
                .then((response) => {
                    // console.log(response.data)
                    if (response.data.status === true) {
                        setReclist(response.data.data);
                        //   console.log('Button api');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <>
            <SideBar />
            <div className="content">
                <Header />
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <h6 className="mb-4">Wallet</h6>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist" >
                                <button className="nav-link active" id="nav-home-tab" style={{ width: '50%' }} data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Amount IN</button>
                                <button className="nav-link" id="nav-profile-tab" style={{ width: '50%' }} data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab"
                                    aria-controls="nav-profile" aria-selected="false">Amount OUT</button>
                            </div>
                        </nav>
                        <div className="tab-content pt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="bg-secondary h-100">
                                    <form className="d-none d-md-flex ms-4" style={{ width: 'fit-content' }}>
                                        <div className="form-floating mb-3 m-2"><input type="number" className="form-control" id="floatingInput" placeholder="Enter Chips Amount" /><label htmlFor="floatingInput" style={{ color: 'yellow' }}>Enter Chips Amount</label></div>
                                        <button type="submit" className="btn btn-warning m-2" >Withdraw Request</button>
                                    </form>
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {console.log(Reclist)} */}
                                            {Reclist.map((data, i) =>
                                                <tr key={i}>
                                                    <th scope="row">{i+1}</th>
                                                    <td>{data.fromUser}</td>
                                                    <td>{data.amount}</td>
                                                    <td>{
                                                    data.status === 1 ? <button type="button" className="btn btn-outline-success m-1" title="Send and Withdraw Money" >Credit(From User)</button> 
                                                    :data.status === 3 ?<button type="button" className="btn btn-outline-warning m-1" title="Deposit and Withdraw Money" >Credit(Game Bet Winning)</button>
                                                    :''}</td>
                                                    <td>{data.createdAt.toString().slice(8,10)+"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                                    {/* <td>
                                        <button type="button" className="btn btn-square btn-outline-warning m-1" title="Deposit and Withdraw Money" style={{width: '30px',height: '30px'}} data-bs-toggle="modal" data-bs-target="#sendMoney"><i className="far fa-money-bill-alt" ></i></button>
                                        </td> */}
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="bg-secondary">
                                        <table className="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">To User</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sendlist.map((data, i) =>
                                                    <tr key={i} >
                                                        <th scope="row">{i+1}</th>
                                                        <td>{data.toUser}</td>
                                                        <td>{data.amount}</td>
                                                        <td>{
                                                    data.status === 1 ? <button type="button" className="btn btn-outline-warning m-1" title="Send and Withdraw Money" >Debit(Transfer to User)</button> 
                                                    :data.status === 2 ?<button type="button" className="btn btn-outline-success m-1" title="Waiting" >Debit(Account Transfer)</button>
                                                    :data.status === 3 ?<button type="button" className="btn btn-outline-danger m-1" title="Deposit and Withdraw Money" >Debit(Game Bet)</button>
                                                    :''}</td>
                                                        <td>{data.createdAt.toString().slice(8,10)+"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SendMoney /> */}
            </div>
            <Footer />
        </>
    )
}
