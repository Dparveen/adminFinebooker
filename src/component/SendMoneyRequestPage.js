import React, { useContext, useEffect, useMemo, useState } from 'react'
import SendMoney from './Models/SendMoney'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import configure from './BaseUrl'
export default function SendMoneyRequestPage() {
    const [sendlist, setsendlist] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        if (auth) {
            getSendUserList(auth.token)
        }
    }, [])

    const getSendUserList = (auth) => {
        if (!loading) {
            setLoading(true);
            let config = {
                url: configure.SERVER_URL + 'wallet/sendMoney/' + auth,
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

    return (
        <>
            <SideBar />
            <div className="content">
                <Header />
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <h6 className="mb-4">Send Monay</h6>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist" >
                                <button className="nav-link active" id="nav-home-tab" style={{ width: '50%' }} data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">REQUEST</button>
                                <button className="nav-link" id="nav-profile-tab" style={{ width: '50%' }} data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab"
                                    aria-controls="nav-profile" aria-selected="false">HISTORY</button>
                            </div>
                        </nav>
                        <div className="tab-content pt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="bg-secondary h-100">
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Trns. ID</th>
                                                <th scope="col">Date</th>
                                                <th scope='col'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {console.log(Reclist)} */}
                                            {sendlist.map((data, i) =>
                                                <tr key={i}>
                                                    <th scope="row">{i+1}</th>
                                                    <td>{data.requestFrom}</td>
                                                    <td>{data.amount}</td>
                                                    <td>{data.transectionId}</td>
                                                    <td>{data.createdAt.toString().slice(8,10)+"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                                    <td>
                                        <button type="submit" className="btn btn-success m-2" >Accept</button>
                                        <button type="submit" className="btn btn-danger m-2" >Reject</button>
                                        </td>
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
                                                    <th scope="col">Trans. ID</th>
                                                    <th scope="col">Date</th>
                                                    <th scope='col'>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sendlist.map((data, i) =>
                                                    <tr key={i} >
                                                        <th scope="row">{i+1}</th>
                                                        <td>{data.requestFrom}</td>
                                                        <td>{data.amount}</td>
                                                        <td>{data.transectionId}</td>
                                                        <td>{data.createdAt.toString().slice(8,10)+"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                                        <td>{data.status === 0 ? 'Pending':''}{data.status === 1 ? 'Amount Sent to user wallet':''}{data.status === 2 ? 'Rejected':''}{data.review && data.review !== '' ? <p>{data.review}</p>:''}</td>
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
