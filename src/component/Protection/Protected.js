import React, { useContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import configure from "../BaseUrl";
import { CommonContext } from '../CommonContext';

export default function Protected(props) {
    const {sendMoney, setToken, sendExposer, sendLive, sendProfit, Token} = useContext(CommonContext)
    let {Comp} = props
    let navigate = useNavigate();
    const [valid, setValid]=useState(true)
    const [token, settoken]=useState()
    const [API, setAPI] = useState(false)
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('protect'));
        // console.log(data.token)
        if(data === null || data === undefined || valid === false){
                navigate('/login')
        }else{
            settoken(data.token)
            checkUser(data.token)
        }
    },[token])

    let checkUser = async(hash) => {
    if(hash !== undefined && hash !== null && !API){
        setAPI(true);
        // console.log(hash)
      let config = {
        method: 'post',
        url: configure.SERVER_URL + 'users/checkToken',
        headers: {
            'Content-Type': 'application/json',
            token: hash,
        },
    };

    await axios.request(config)
        .then((res) => {
            // console.log(res.data)
            if(res.data.status){
                if(res.data.data.userType !== 7){
                setValid(res.data.status)
                console.log('Auth Successfull')
                setToken(hash)
                sendMoney(res.data.data.balance)
                sendExposer(res.data.exp)
                sendLive(res.data.live)
                sendProfit(res.data.pl)
                // console.log(res.data.data)
                }else{
                localStorage.clear();
                navigate('/logout')
                }
            }else{
              localStorage.clear();
                navigate('/logout')
            }
        })
        .catch((error) => {
            console.log(error);
            navigate('/logout')
        });
    }
    // console.log('else')
    }

    if(API){
        setTimeout(() => {
            setAPI(false)
        }, 2000);
    }
    // console.log(valid)
  return (  
        <Comp />
  )
}
