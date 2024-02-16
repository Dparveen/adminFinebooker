import React, { useEffect, useState } from 'react'
import configure from "../BaseUrl.json"
import axios from 'axios';
export default function ChangePassword(props) {
  const [Password, setPassword]=useState('');
  const [user, setuser] = useState('');
  const [token, settoken] = useState('');
  const [password, setpassword] = useState('');
  const [Error, setError] = useState('');
  const [ErrorStatus, setErrorStatus] = useState(false)
  const [API, setAPI] = useState(false)
  // console.log(props)
  useEffect(() =>{
      let user = localStorage.getItem('userDetails');
      setuser(user)
      let auth = JSON.parse(localStorage.getItem('protect'));
      settoken(auth.token)
      checkUser(props.data, auth.token)
  },[props])
  let checkUser=(username,token) => {
    if(!API){
      setAPI(true)
    let data = JSON.stringify({
      username: username,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'users/find',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data
    };
    
    axios.request(config)
    .then((res) => {
      console.log(res.data)
            if(res.data.status){ setuser(res.data.user[0])}
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
              setAPI(false)
            })
          }
  }
  // console.log(props.data)
  let changePassword = () => {
    if(!props.data || props.data === '' || Password === '' || Password.length < 8){
      setErrorStatus(true)
      setError("Auth failed");
      return;
    }
    if(!API){
    let data = JSON.stringify({
      pass:Password,
      userName:props.data
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'auth/changePassword',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      setError(response.data.msg);
      setErrorStatus(true)
      setTimeout(() => {
        document.getElementById('changePassword').click();
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    }).finally(()=>{
      setAPI(false)
    })
  }
}

  if(ErrorStatus){ setTimeout(() => {
    setErrorStatus(false);
    setError('');
  }, 2000)}

  return (
    <div className="modal" id="changePassword">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h6 className="modal-title text-dark" style={{display:'flex'}}>Change User Password: <p className='text-success'>{props.data}</p></h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div className="modal-body">
          <p className='text-success'>Password: {user && user.hash || ''}</p>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              
              placeholder="Enter Password"
              defaultValue={Password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <label htmlFor="floatingInput" style={{ color: "yellow" }}>
              Enter Password
            </label>
          </div>
          {ErrorStatus ? <span>{Error}</span>:''}
          <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{changePassword()}}>Change Password</button>
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
  )
}
