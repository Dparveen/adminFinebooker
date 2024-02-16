import React, { useEffect, useState } from "react";
import axios from "axios";
import configure from "../BaseUrl"
import {useNavigate } from 'react-router-dom'

export default function NewUser( props ) {
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [fullname, setFullname]=useState('');
  const [remark, setRemark]=useState('');
  const [userType, setUserType]=useState('');
  const [token, setToken]=useState('');
  const [Alert, setAlert]=useState(false)
  const [AlertMsg, setAlertMsg]=useState('');
  const [userTypeList, setUserTypeList]=useState([]);
  const [userData, setUserData]=useState('')
  const [API, setAPI] = useState(false)
  let navigate = useNavigate();
  
  // console.log(props)

  useEffect(() =>{
      setUserData(JSON.parse(localStorage.getItem('userDetails')));
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      // console.log(token, props)
  },[]);
  // let getUserTypeList= async ()=>{
  //   let data = JSON.stringify({
  //     user: props.data
  //   });
  //   console.log(data)
  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: configure.SERVER_URL+'users/userType',
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       token:token,
  //     },
  //     data : data
  //   };
    
  //   await axios.request(config)
  //   .then((res) => {
  //     console.log(res.data)
  //               // if (res.data.status === true) {
  //                   // setAlert(true)
  //                   // setAlertMsg(res.data.msg);
  //                   // setTimeout(() => {
  //                   //   setAlert(false)
  //                   // }, 5000);
  //               // }else{
  //                 // setAlert(true)
  //                 // setAlertMsg(res.data.msg);
  //                 // setTimeout(() => {
  //                 //   setAlert(false)
  //                 //   navigate('/logout')
  //                 // }, 5000);
  //               // }
  //           })
  //           .catch((error) => {
  //               console.log(error);
  //           });
  // }
  let Create = async () =>{
    // console.log("clicked enter data",userType, username, password, fullname, remark, props.data);

    if(username.length < 8 || password.length < 8 || fullname.length === "" || props.data.length === ""){
                  setAlert(true)
                  setAlertMsg("Please fill all required field");
                  setTimeout(() => {
                    setAlert(false)
                  }, 5000);
    }else{
      if(!API){
        setAPI(true)
    let data = JSON.stringify({
      username: username,
      pass: password,
      userType: userType,
      fullname: fullname,
      remark: remark,
      parent: props.data
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: configure.SERVER_URL+'users/register',
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
                    setTimeout(() => {
                      setAlert(false)
                    }, 5000);
                }else{
                  setAlert(true)
                  setAlertMsg(res.data.msg);
                  setTimeout(() => {
                    setAlert(false)
                    navigate('/logout')
                  }, 5000);
                }
                setTimeout(() => {
                  document.getElementById('addUser').click();
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
  return (
    <div className="modal" id="addUser">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Create New User by <p className="text-success">{props.data}</p></h6>
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
                type="text"
                className="form-control"
                
                placeholder="Username"
                value={username}
                required
                onChange={(e)=>{setUsername(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Username / UserID
              </label>
              {username.length >= 8 ? <p className="h6 text-success">Condition Verify {username}</p>
              : username.length > 2 ? <p className="h6 text-danger">Username will be grater than 8 digit</p>
              :<p className="h6 text-danger">Please enter User name</p>}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                
                placeholder="Full Name"
                value={fullname}
                required
                onChange={(e)=>{setFullname(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Full Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <select className="form-select" required  type="select" value={userType} onChange={(e)=>{setUserType(e.target.value)}}>
                <option value="">Select User Type</option>
                {props.Type >= 1 ? '' : <option value="1">Super Master</option>}
                {props.Type >= 2 ? '' : <option value="2">Master</option>}
                {props.Type >= 3 ? '' : <option value="3">Super Admin</option>}
                {props.Type >= 4 ? '' : <option value="4">Admin</option>}
                {props.Type >= 5 ? '' : <option value="5">Super Agent</option>}
                {props.Type >= 6 ? '' : <option value="6">Agent</option>}
                {props.Type >= 7 ? '' : <option value="7">User</option>}
              </select>
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                User Type
              </label>
              {userType === "" ? <p className="h6 text-danger">Please Select User Type</p>
              :
              <p className="h6 text-success">
              {userType === '1' ? "Super Master"
              :userType === '2' ? "Master"
              :userType === '3' ? "Super Admin"
              :userType === '4' ? "Admin"
              :userType === '5' ? "Super Agent"
              :userType === '6' ? "Agent"
              :"User"}</p>
              }
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Password
              </label>
              <p className="h6 text-danger">{password.length <= 7 ? "Password will be min 8 digit":"" }</p>
            </div>
            <div className="form-floating mb-3">
              <textarea
              style={{ height: "auto"}}
                type="text"
                rows={8}
                className="form-control"
                
                placeholder="Remarks"
                value={remark}
                onChange={(e)=>{setRemark(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Remarks
              </label>
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{Create()}}>Create</button>
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
  );
}
