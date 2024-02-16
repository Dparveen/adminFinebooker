import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl"
import {useNavigate } from 'react-router-dom'
import { CommonContext } from "../CommonContext";
export default function SendMoneyRequest( props) {
  const {sendMoney, balance, exposer } = useContext(CommonContext);
  const [chips, setChips]=useState(0);
  const [remark, setRemark]=useState('');
  const [token, setToken]=useState('');
  const [Alert, setAlert]=useState(false)
  const [AlertMsg, setAlertMsg]=useState('');
  const [user , setUser]=useState('');
  const [API, setAPI] = useState(false)
  // let navigate = useNavigate();
  useEffect(() =>{
      let user = JSON.parse(localStorage.getItem('userDetails'));
      setUser(user);
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token)
  },[props])
// console.log(props.data)
  let Deposit = async () =>{
    // console.log(token, chips,props.data,remark )
    if(chips === 0 || props.data.length === ""){
      setAlert(true)
      setAlertMsg("Please enter amount grater than 0");
      setTimeout(() => {
        setAlert(false)
      }, 5000);
}else if(chips > user.balance){
    setAlert(true)
      setAlertMsg("Low balance please recharge");
      setTimeout(() => {
        setAlert(false)
      }, 5000);
}
else{
  if(!API){
    setAPI(true)
    let data = JSON.stringify({
      
      remark: remark,
      chips: chips,
      toUser:props.data,
    });
    let config = {
      method: 'post',
      url: configure.SERVER_URL+'users/deposit',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data : data
    };
    
    axios.request(config)
    .then((res) => {
      console.log(res.data)
                if (res.data.status === true) {
                    setAlert(true)
                    setAlertMsg(res.data.msg);
                    props.fnctn(res.data.user)
                    sendMoney(res.data.data);
                    // localStorage.setItem('userDetails',JSON.stringify(res.data.data))
                    setTimeout(() => {
                      setAlert(false)
                    }, 5000);
                }else{
                  setAlert(true)
                  setAlertMsg(res.data.msg);
                  setTimeout(() => {
                    setAlert(false)
                    // navigate('/logout')
                  }, 5000);
                }
                setTimeout(() => {
                  document.getElementById('sendMoney').click();
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
              setAPI(false)
            })
          }
        }
      }
  let Withdrawl = async () =>{
    if(!API){
      setAPI(true)
    let data = JSON.stringify({
      remark: remark,
      chips: chips,
      toUser:props.data,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'users/withdrawl',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data : data
    };
    
    axios.request(config)
    .then((res) => {
      console.log(res.data)
                if (res.data.status) {
                    setAlert(true)
                    setAlertMsg(res.data.msg);
                    setTimeout(() => {
                      setAlert(false)
                    }, 5000);
                }else{
                  setAlert(true)
                  setAlertMsg(res.data.msg);
                  setTimeout(() => {
                    setAlert(false)
                  }, 5000);
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
    <div className="modal" id="Withdrawalrequest">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Deposit / Withdraw Chips to <p className='text-success'>{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            {/* <div className="d-flex align-items-center justify-content-center mb-3">
              <p>
                <span className="h5" style={{ color: "#ff9e00" }}>
                  Welcome to Finebooker! 👋
                </span>
                <br />
                <span style={{ color: "#139900", fontWeight: "600" }}>
                  Please sign-in to your account and start the adventure
                </span>
              </p>
            </div> */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Enter Chips Amount"
                value={chips}
                required=""
                onChange={(e)=>{setChips(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Chips Amount
              </label>
            </div>
            
            <div className="form-floating mb-3">
              <textarea
              style={{ height: "auto"}}
                type="text"
                rows={8}
                className="form-control"
                id="floatingInput"
                placeholder="Remarks"
                onChange={(e)=>{setRemark(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Remarks
              </label>
            </div>
            <button type="submit" className="btn btn-success py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{Deposit()}}>Deposit</button>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{Withdrawl()}}>Withdraw</button>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
      {Alert === true ? 
        <div className="alert alert-light" role="alert" style={{ position: 'absolute', top: '15px', right: '30px', width: "25%",}}>{AlertMsg}</div>
      : null}
    </div>
  )
}
