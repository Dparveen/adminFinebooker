import axios from "axios";
import React, { useEffect, useState } from "react";
import configure from '../BaseUrl.json'
export default function BetLock(props) {
  const [token, setToken]=useState('');
  const [ErrorStatus, setErrorStatus] = useState(false)
  const [Error, setError] = useState('')
  const [API, setAPI] = useState(false)
  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      console.log(auth.token, props.data)
  },[props])
  let LockUserBet = (user,sts) => {
    // console.log(user, sts)
    if(!API){
      setAPI(true);
    let data = JSON.stringify({
      username: user,status:sts
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'users/betlock',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data
    };
    axios.request(config)
    .then((res) => {
      console.log(res.data)
            setError(res.data.msg)
            setErrorStatus(res.data.status)
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
              setAPI(false)
            })
  }
  }
  if(ErrorStatus){
    setTimeout(() => {
      setErrorStatus(false)
      setError('')
    }, 2000);
  }
  return (
    <div className="modal" id="betLock">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Lock Betting of <p className='text-success'>{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            
            <div className="form-floating mb-3">
              Want to lock betting of the user {props.data}
            </div>
            {ErrorStatus? <p>{Error}</p>:''}
            <button
              type="submit"
              className="btn btn-primary py-3 w-100 mb-4"
              style={{ boxShadow: "2px 2px #a48625" }}
              onClick={() => LockUserBet(props.data, 'N')}
            >
              Lock Betting
            </button>
            <button
              type="submit"
              className="btn btn-success py-3 w-100 mb-4"
              style={{ boxShadow: "2px 2px #a48625" }}
              onClick={() => LockUserBet(props.data, 'Y')}
            >
              Unlock Betting
            </button>
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
    </div>
  );
}
