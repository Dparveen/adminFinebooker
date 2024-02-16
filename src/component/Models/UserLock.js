import React, { useEffect, useState } from "react";
import axios from "axios";
import configure from  '../BaseUrl.json'
export default function UserLock(props) {
  const [token, setToken]=useState('');
  const [ErrorStatus, setErrorStatus] = useState(false)
  const [Error, setError] = useState()
  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      console.log(auth.token, props.data)
  },[props])
  let LockUser = (user,sts) => {
    // console.log(user, sts)
    let data = JSON.stringify({
      username: user,status:sts
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'users/lock',
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
            setTimeout(() => {
              document.getElementById('userLock').click();
            }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
  }

  if(ErrorStatus){
    setTimeout(() => {
      setErrorStatus(false)
      setError('')
    }, 2000);
  }
  return (
    <div className="modal" id="userLock">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Lock User: <p className='text-success'>{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
             Want to lock the user {props.data}
            </div>
            {ErrorStatus ? <p>{Error}</p>: ''}
            <button
              type="submit"
              className="btn btn-primary py-3 w-100 mb-4"
              style={{ boxShadow: "2px 2px #a48625" }}
              onClick={() => LockUser(props.data,'N')}
            >
              Lock User
            </button>
            <button
              type="submit"
              className="btn btn-success py-3 w-100 mb-4"
              style={{ boxShadow: "2px 2px #a48625" }}
              onClick={() => LockUser(props.data, 'Y')}
            >
              Unlock User
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
