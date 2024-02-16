import axios from 'axios';
import React, { useEffect, useState } from 'react'
import configure from '../BaseUrl.json'
export default function BetStatement(props) {
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
              url: configure.SERVER_URL+'game/statementUserBet',
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
                            setstatement(res.data.bets)
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
                    <div className="modal" style={{maxWidth:'100%'}} id="BetStatement">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title text-dark" style={{display:'flex'}}>Bet Statement fo User : <p className='text-success'>{props.data}</p></h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                            <table className="table table-dark">
                    {statement && statement.length > 0 ?
                    <>
                        <thead>
                            <tr style={{fontSize:'small'}} className='text-warning text-center'>
                                <th scope="col">Bet On</th>
                                <th scope="col">Liability</th>
                                <th scope="col">Type</th>
                                <th scope="col">P/L</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {statement.map((user, i)=>
                            <tr key={i} className='text-success' style={{fontSize:'small'}}>
                                <td>{user.odds}</td>
                                <td>{user.liblity}</td>
                                <td>{user.betType}</td>
                                <td>{user.profit}</td>
                                <td>{user.result}</td>
                                <td>{new Date(user.createdAt).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",}) + ' ' +new Date(user.createdAt).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",})}</td>
                            </tr>
                        )}
                        </tbody>
                        </>
                        : <thead><tr><th className="text-center">Bet not found</th></tr></thead>}
                    </table>
                            </div>
                            </div>
                        </div>
                    </div>
  )
}
