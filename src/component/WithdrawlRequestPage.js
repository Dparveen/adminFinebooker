import React, { useContext, useEffect, useMemo, useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import configure from './BaseUrl'
import WithdrawalRequest from './Models/WithdrawalRequest'
export default function WithdrawRequestPage() {
    const [Reclist, setReclist] = useState([])
    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState('');
    const [userType, setUserType]=useState();
    const [Status, setStatus]=useState(0);
    const [ID, setId]=useState();
    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        if (auth) {
            getRecUserList(auth.token)
        }
    }, [])
    const getRecUserList = (auth) => {
        if (!loading) {
            setLoading(true);
            let config = {
                url: configure.SERVER_URL + 'wallet/withdrawal/' + auth,
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

    const update = async(data)=>{
            setReclist(data);
    }

    const statusSet =(sts) =>{
        switch (sts) {
            case 1:
                return <p className="text-success" >Success</p>;
            case 2:
                return <p className="text-primary">Rejected</p>; 
            default:
                return <p className="text-warning " >Pending</p>;
        }
    }

    return (
        <>
            <SideBar />
            <div className="content">
                <Header />
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <h6 className="mb-4">Withdrawal Request</h6>
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
                                        <tr className='text-warning text-center' style={{fontSize:'small'}}>
                                                <th scope="col" >Type</th>
                                                <th scope="col" >Amount</th>
                                                <th scope='col' >Details</th>
                                                <th scope='col' >Transaction ID</th>
                                                <th scope='col' >Response</th>
                                                <th scope='col' >Date</th>
                                                <th scope='col'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {console.log(Reclist)} */}
                                            {Reclist.map((data, i) =>
                                                data.status === 0 && <tr key={data._id} style={{fontSize:'small'}} className='btn-info text-white text-center'>
                                                <td>{data.pType === undefined ? <span>DPST</span>:<span>WDRL</span>}</td>
                                                <td>{data.amount}</td>
                                                <td>{data.pType === undefined 
                                                    ? <></>
                                                    : <>{data.pType === 1
                                                            ?<><span>{data.ahn}</span><br /><span>{data.an}</span><br /><span>{data.ic}</span><br /><span>{data.ui}</span><br /><span>{data.m}</span></>
                                                            :<><span>{data.wa}</span><br /><span>{data.m}</span></>
                                                        }
                                                    </>
                                                    }</td>
                                                <td>{data.transectionId}</td>
                                                <td>{data.comment !== undefined ? <>{data.comment}</> : <></>}</td>
                                                <td>{data.createdAt.toString().slice(8,10) +"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                                <td>
                                                <button type="button" className="btn btn-square btn-outline-success m-1" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#Withdrawalrequest" value={data.requestFrom} onClick={(e) => { setSelect(data.requestFrom); setUserType('accept'); setId(data._id); setStatus(1) }}  ><i className='fa fa-check'></i></button>
                                                <button type="button" className="btn btn-square btn-outline-danger m-1" style={{ width: '30px', height: '30px' }} data-bs-toggle="modal" data-bs-target="#Withdrawalrequest" value={data.requestFrom} onClick={(e) => { setSelect(data.requestFrom); setUserType('reject'); setId(data._id); setStatus(2)}} ><i className='fa fa-ban'></i></button>
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
                            <tr className='text-warning text-center' style={{fontSize:'small'}}>
                                <th scope="col" >Type</th>
                                <th scope="col" >Amount</th>
                                <th scope='col' >Details</th>
                                <th scope='col' >Transaction ID</th>
                                <th scope='col' >Response</th>
                                <th scope='col' >Date</th>
                                <th scope='col' >Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Reclist.map((user, i)=>
                            <tr key={user._id} style={{fontSize:'small'}} className='btn-info text-white text-center'>
                                <td>{user.pType === undefined ? <span>DPST</span>:<span>WDRL</span>}</td>
                                <td>{user.amount}</td>
                                <td>{user.pType === undefined 
                                    ? <></>
                                    : <>{user.pType === 1
                                            ?<><span>{user.ahn}</span><br /><span>{user.an}</span><br /><span>{user.ic}</span><br /><span>{user.ui}</span><br /><span>{user.m}</span></>
                                            :<><span>{user.wa}</span><br /><span>{user.m}</span></>
                                        }
                                    </>
                                    }</td>
                                <td>{user.transectionId}</td>
                                <td>{user.comment !== undefined ? <>{user.comment}</> : <></>}</td>
                                <td>{user.createdAt.toString().slice(8,10) +"/"+user.createdAt.toString().slice(5,7)+"/"+user.createdAt.toString().slice(0,4)}</td>
                                <td>{statusSet(user.status)}</td>
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
            <WithdrawalRequest data={select} Type={userType} ID={ID} update={update} status={Status} />
            <Footer />
        </>
    )
}
