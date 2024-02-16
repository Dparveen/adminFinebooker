import React, { useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl"
export default function ViewUser(props) {
const [user, setuser] = useState([]);
const [token, settoken] = useState('');
  useEffect(() =>{

      let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      settoken(auth.token);
      // console.log(token, props.data)
      checkUser(props.data, auth.token);
  },[props])

  let checkUser=(username,token) => {
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
            });
  }
  useEffect(() => {
    const viewUserElement = document.getElementById('viewUser');
    if (viewUserElement) {
      viewUserElement.click();
    }
  }, [user]);
  return (
    <div className="modal" id="viewUser">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h6 className="modal-title text-dark" style={{display:'flex'}}>User Details regarding: <p className='text-success'>{props.data}</p></h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div className="modal-body">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              
              placeholder={user && user.username}
              defaultValue={user && user.username}
            />
            <label htmlFor="floatingInput" style={{ color: "yellow" }}>
            {user && user.username}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              
              placeholder={user && user.fullname}
              defaultValue={user && user.fullname}
            />
            <label htmlFor="floatingInput" style={{ color: "yellow" }}>
              {user && user.fullname}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input type='text' defaultValue={user && user.userType === 1 ? "Super Master":user && user.userType  === 2 ? "Master":user && user.userType === 3 ? "Super Admin":user && user.userType === 4 ? "Admin":user && user.userType === 5 ? "Super Agent":user && user.userType === 6 ? "Agent":"User"} className='form-control' />
            <label htmlFor="floatingInput" style={{ color: "yellow" }}>
              User Type
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              defaultValue={user && user.hash}
            />
            <label htmlFor="floatingInput" style={{ color: "yellow" }}>
              Password
            </label>
          </div>
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
