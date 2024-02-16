import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SendMoney from './Models/SendMoney'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import configure from "./BaseUrl"
export default function SendMoneyPage() {
    const [T_type, setT_type] = useState(0);
    const [transaction, settransaction] = useState([])
    const [token, setToken]=useState('')
    const [username, setUsername]=useState('')
    const [chips, setChips]=useState(0)
    useEffect(()=>{
        let auth = JSON.parse(localStorage.getItem('protect'));
        setToken(auth.token);
        // console.log(auth.token)
        if(auth.token){
            console.log(auth.token)
        getMoneyTx(auth.token);
        }
    },[])
    
    let getMoneyTx= ()=>{
        let config = {
            method: 'post',
            url: configure.SERVER_URL + 'users/transaction',
            headers: {
                'Content-Type': 'application/json',
                token: token,
            },
        };
        // console.log(config)
        axios.request(config)
            .then((res) => {
                console.log("sadjk",res.data.data)
                settransaction(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

  return (
    <>
        <SideBar />
        <div className="content">
            <Header />
        <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary h-100" style={{padding: '0.5rem !important'}}>
                            <h6 className="mb-4" style={{paddingTop: '10px', paddingLeft: '10px'}}>Send Money</h6>
                            <form className="d-none d-md-flex ms-4" style={{width: 'fit-content'}}>
                            <div className="form-floating mb-3 m-2"><input type="number" className="form-control" placeholder="Enter User ID" onChange={(e)=>{setUsername(e.target.value)}} /><label htmlFor="floatingInput" style={{color: 'yellow'}}>Enter User ID</label></div> 
                            <div className="form-floating mb-3 m-2"><input type="number" className="form-control"  placeholder="Enter Chips Amount" onChange={(e)=>{setChips(e.target.value)}} /><label htmlFor="floatingInput" style={{color: 'yellow'}}>Enter Chips Amount</label></div>
                            <button type="submit" className="btn btn-warning m-2" >Send Chips</button>
                            </form>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {transaction.map((data, i)=>
                                    <tr key={i}>
                                        <th scope="row">{i+1}</th>
                                        <td>{data.toUser}</td>
                                        <td>{data.amount}</td>
                                        <td><button type="button" className="btn btn-outline-danger m-1" title="Deposit and Withdraw Money" >{data.transectionType}</button></td>
                                        <td>{data.createdAt.toString().slice(8,10) +"/"+data.createdAt.toString().slice(5,7)+"/"+data.createdAt.toString().slice(0,4)}</td>
                                        {/* <td>
                                        <button type="button" className="btn btn-square btn-outline-warning m-1" title="Deposit and Withdraw Money" style={{width: '30px',height: '30px'}} data-bs-toggle="modal" data-bs-target="#sendMoney"><i className="far fa-money-bill-alt" ></i></button>
                                        </td> */}
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <SendMoney /> */}
                    </div>
        <Footer />
    </>
  )
}
