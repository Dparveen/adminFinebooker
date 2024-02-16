import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import configure from "./BaseUrl";
import { CommonContext } from './CommonContext';
// let baseUrl = "http://localhost:6600/api/users";
export default function Login() {
    const {insertUser, setToken, sendMoney } = useContext(CommonContext);
    const [username, setUsername]=useState('');
    const [pass, setPass]=useState('');
    const [Error, setError]=useState(false);
    const [errorMsg, setErrorMsg]=useState('Invalid username or password');
    let navigate = useNavigate();
    useEffect(()=>{
        // console.log(configure.SERVER_URL)
        let data = localStorage.getItem('protect')
        // console.log(data)
        if(data !== null){
                // console.log("data",data)
                navigate('/')
        }
    })
    let login = async (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        if(username === null || username ===""){
            setError(true);
            setErrorMsg("Please Enter a username");
        }else if(pass === null || pass ===""){
            setError(true);
            setErrorMsg("Please Enter Password");
        }else{
        let data = JSON.stringify({
            username: username,
            pass: pass
          });
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: configure.SERVER_URL+'auth/adminlogin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            
            if(response.data.status === true){
            setError(true)
            setErrorMsg(response.data.msg)
            localStorage.setItem('protect', JSON.stringify(response.data.auth))
            setToken(response.data.auth.token)
            // console.log(response.data.data,response.data.auth.token)
            localStorage.setItem('userDetails', JSON.stringify(response.data.data))
            insertUser(response.data.data)
            sendMoney(response.data.data.balance)
            navigate('/');
            }else{
            setError(true)
            setErrorMsg(response.data.msg)
            }
          })
          .catch((error) => {
            console.log(error);
          });
          
      }
    }

    setTimeout(() => {
        setError(false);
    }, 10000);

  return (
    <div className="container-fluid position-relative d-flex p-0">
       {/* <Loader />         */}
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <form onSubmit={(e)=>login(e)} >
                    <div className="bg-secondary p-4 p-sm-5 my-4 mx-3" style={{borderRadius: '3%',borderWidth: '1px 3px 3px 3px',borderColor: '#e0be07',borderStyle: 'groove'}}>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <Link to="/" className="">
                                <h3 className="text-primary">Admin Bazziii365</h3>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <p><span className="h5" style={{color:'#ff9e00'}}>Welcome to Baaziii365! 👋</span><br />
                            <span style={{color:'#139900', fontWeight:'600'}}>Please sign-in to your account and start the adventure</span></p>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="Input" placeholder="User ID" onChange={(e)=>setUsername(e.target.value)} />
                            <label htmlFor="floatingInput" style={{color:'yellow'}}>User ID</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="Password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            {/* <a href="/">Forgot Password</a> */}
                        </div>
                        {Error === true ? <p className="text-center mb-0 text-white h4">{errorMsg}</p> : ""}
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} id="login">Sign In</button>
                        {/* <p className="text-center mb-0">Don't have an Account? <Link to="/">Sign Up</Link></p> */}
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
