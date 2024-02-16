import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const [loader, setLoader]=useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
        const localStorage = window.localStorage;
        localStorage.clear();
        setTimeout(() => {
          setLoader(false);
        }, 5000);
        
  },[])
  return (
    <>
    {loader === true ?
    <div className='text-center'>
        <img src="https://file.mockplus.com/image/2018/04/81010689-081f-4d4c-bbbc-f2040e98e994.gif" className="img-responsive" style={{width:'60%'}}></img>
    </div>
        : navigate('/login') }
    </>
  )
}