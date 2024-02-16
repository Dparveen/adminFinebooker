import axios from 'axios';
import React, { useEffect, useState } from 'react'
import configure from '../BaseUrl.json'
export default function AccountStatement(props) {
    const [statement, setstatement]=useState([]);
    const [API, setAPI] = useState(false)
    useEffect(() =>{
        let user = localStorage.getItem('userDetails');
        let auth = JSON.parse(localStorage.getItem('protect'));
        console.log(auth.token, props)
        getStatement(auth.token, props.data);
    },[props])

    const getStatement =async(token, user) =>{
        if(!API){
            setAPI(true)
            let data = JSON.stringify({
              username:user,
            });
            let config = {
              method: 'post',
              url: configure.SERVER_URL+'users/statementUser',
              headers: { 
                'Content-Type': 'application/json',
                token:token,
              },
              data
            };
            
            axios.request(config)
            .then((res) => {
              console.log(res.data)
                        if (res.data.status) {
                            setstatement(res.data.data)
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    }).finally(()=>{
                      setAPI(false)
                    })
                  }
    }

  return (
                    <div className="modal" style={{maxWidth:'100%'}} id="AccountStatement">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title text-dark" style={{display:'flex'}}>Account Statement fo User : <p className='text-success'>{props.data}</p></h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                            <table className="table table-dark">
                    {statement.length > 0 ?
                    <>
                        <thead>
                            <tr>
                                <th scope="col">to User</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Type</th>
                                <th scope='col'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {statement.map((user, i)=>
                            <tr key={i}>
                                <td>{user.toUser}</td>
                                <td>{user.amount}</td>
                                {/* <td>{user.transectionType === 'Credit' ? <button type="button" className="btn btn-outline-success m-1" title="Deposit and Withdraw Money" >{user.transectionType}</button> : <button type="button" className="btn btn-outline-danger m-1" title="Deposit and Withdraw Money" >{user.transectionType}</button>}</td> */}
                                <td>{user.fromUser ? <button type="button" className="btn btn-outline-primary m-1" title="Deposit and Withdraw Money" >Debit</button> : <button type="button" className="btn btn-outline-warning m-1" title="Deposit and Withdraw Money" >Credit</button> }</td>
                                <td>{new Date(user.createdAt).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",}) + ' ' +new Date(user.createdAt).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",})}</td>
                            </tr>
                        )}
                        </tbody>
                        </>
                        : <thead><tr><th className="text-center">Transaction not found</th></tr></thead>}
                    </table>
                            </div>
                            </div>
                        </div>
                    </div>
  )
}
