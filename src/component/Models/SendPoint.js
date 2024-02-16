import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl"
import {useNavigate } from 'react-router-dom'
import { CommonContext } from "../CommonContext";
import { useMemo } from 'react';
export default function SendPoint( props) {
  const {sendMoney, balance, exposer } = useContext(CommonContext);
  const [chips, setChips]=useState(0);
  const [remark, setRemark]=useState('');
  const [token, setToken]=useState('');
  const [Alert, setAlert]=useState(false)
  const [AlertMsg, setAlertMsg]=useState('');
  const [user , setUser]=useState('');

  // let navigate = useNavigate();
  useEffect(() =>{
      let user = JSON.parse(localStorage.getItem('userDetails'));
      setUser(user);
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token)
  },[props])
// console.log(props.data)
  let pCreate = async () =>{
    let final = parseFloat(balance)+parseFloat(chips)
    console.log(balance, token, chips, final )
    let data = JSON.stringify({
      amount: final,
    });
    let config = {
      method: 'post',
      url: configure.SERVER_URL+'users/admin/deposit',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data : data
    };
    axios.request(config)
    .then((res) => {
      console.log(res.data.data[0])
                if (res.data.status === true) {
                    setAlert(true)
                    setAlertMsg(res.data.msg);
                    // console.log(res.data)
                    sendMoney(final);
                    // localStorage.setItem('userDetails',JSON.stringify(res.data.data[0]))
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
                  document.getElementById('sendPoint').click();
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        const handelChip = async(e)=>{
          e > 100000 ? setChips(100000) : setChips(e);
        }
  return (
    <div className="modal" id="sendPoint">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark">Create Points</h6>
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
                required=""
                value={chips}
                onChange={(e)=>handelChip(e.target.value)}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Chips Amount
              </label>
            </div>
            <button type="submit" className="btn btn-success py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{pCreate()}}>Create Point</button>
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
