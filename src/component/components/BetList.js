import React, { useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl";

export default function HistoryBet(props) {
    const [betList, setbetList] = useState([]);
    const [current, setCurrent] = useState('');
    const [token, setToken] = useState('');
    const [reqTime, setreqTime]=useState('all');
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
        let config = {
            method: 'post',
            url: configure.SERVER_URL + `game/betlist`,
            headers: {
                'Content-Type': 'application/json',
                token: hash,
            },
        };
        console.log(config)
        axios.request(config)
            .then((res) => {
                console.log(res.data)
                setbetList(res.data.bets)
            })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-secondary h-100" style={{ padding: '0.5rem !important', overflowY: 'auto' }}>
          <h6 className="mb-4" style={{ paddingTop: '10px', paddingLeft: '10px' }}>Bet History</h6>
      <div className='m-4'>
      <form novalidate="" className="row">
        <div  class="col-lg-2 col-6 col-md-4">
        <label className='text-white mb-2'>Sport Type</label>
            <div  class="mb-2 input-group position-relative">
                <select  name="sportName" class="form-select text-white bg-info d-grid">
                    <option  defaultValue="" disabled="" selected="">Sport Type</option>
                </select>
            </div>
        </div>
        <div class="col-lg-2 col-6 col-md-4">
        <label className='text-white mb-2'>Bet Status</label>
            <div  class="mb-2 input-group position-relative">
                <select  name="betType" defaultValue='' class="form-select text-white bg-info d-grid">
                    <option  defaultValue="" disabled="" selected="">Bet Status</option>
                    <option  defaultValue="0">Running</option>
                    <option  defaultValue="1">Final</option>
                    <option  defaultValue="2">Dismiss</option>
                </select>
            </div>
        </div>
        <div  class="col-lg-2 col-6 col-md-3">
        <label className='text-white mb-2'>Bet Date</label>
                        <input  type="date" class="form-control text-white bg-info" />
                        {/* <i  class="far fa-calendar"></i> */}
        </div>
        <div  class="col-lg-2 col-6 col-md-3 ">
        <label className='text-white mb-2'>Game Date</label>
                        <input  type="date" class="form-control text-white bg-info"/>
                        {/* <i  class="far fa-calendar"></i> */}
        </div>
        <div  class="col-lg-2 col-md-3">
            <label className='text-white mb-2'>Action</label><br />
            <button  type="submit" class="btn btn-primary btn-block"> Submit </button></div>
    </form>
      </div>
                    <table className="table table-dark table-responsive-sm">
                    {betList && betList.length > 0 ?
                    <>
                        <thead>
                            <tr className='text-warning' style={{fontSize: 'small'}}>
                                <td scope='col' style={{width:"20%"}}>Date/Time</td>
                                <td scope="col" style={{width:"30%"}}>Nation</td>
                                <td scope="col" style={{width:"8%"}}>Bet</td>
                                <td scope='col' style={{width:"8%"}}>Type</td>
                                <td scope='col' style={{width:"8%"}}>Stack</td>
                                <td scope='col' style={{width:"8%"}}>Liblity</td>
                                <td scope='col' style={{width:"8%"}}>Profit</td>
                                <td scope='col' style={{width:"10%"}}>Result</td>
                            </tr>
                        </thead>
                        <tbody>
                        {betList.map((bet, i)=>
                            <tr key={bet._id} className='btn-info text-success' style={{fontSize: 'small'}}>
                                <td>
                                    {new Date(bet.createdAt).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",}) 
                                        +" " + 
                                    new Date(bet.createdAt).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",})}
                                </td>
                                <td>{bet.odds || bet.fancy || bet.bookmaker}</td>
                                <td>{bet.odds && <span>Odds</span>}
                                    {bet.fancy && <span>Fancy</span>}
                                    {bet.bookmaker && <span>Bookmaker</span>}</td>
                                <td>{bet.betType}</td>
                                <td>{bet.amount}</td>
                                <td>{bet.liblity}</td>
                                <td>{bet.profit}</td>
                                <td>{bet.result}</td>
                            </tr>
                        )}
                        </tbody>
                        </>
                        : <thead><tr><td className="text-center">No bet found</td></tr></thead>}
                    </table>
                </div>
    </div>
  );
}
