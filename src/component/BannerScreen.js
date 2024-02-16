import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import configure from './BaseUrl.json'
import axios from "axios";
export default function Banner() {
  const [ImgUrl, setImgUrl] = useState('');
  const [Token, setToken] = useState('');
  const [Banners, setBanners] = useState([]);
  const [Error, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    let Auth = JSON.parse(localStorage.getItem('protect'))
    console.log(Auth)
    setToken(Auth.token)
    getBanner(Auth.token)
  }, [])
  

  const getBanner = async(token)=>{
        // console.log(token)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: configure.SERVER_URL + `banners/${token}`,
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const axiosConfig = {
              headers: config.headers,
              maxRedirects: 0
            };
          axios.get(config.url, axiosConfig)
            .then((response) => {
              if (response.data.status) {
                console.log(response.data.banner.length);
                setBanners(response.data.banner);
              }
            })
            .catch((error) => {
              console.log(error);
            })
  }
  const handelImage = async(e)=>{
    setImgUrl(e)
  }

  const handelBanner= async(e)=>{
    e.preventDefault();
    if(ImgUrl === ''){
        setError(true);
        setErrorMsg('Please paste image url');
        return;
    }
    let config = {
        method: 'post',
        url: configure.SERVER_URL + `uploadBanner/${Token}`,
        headers: {
          'Content-Type': 'application/json',
          maxRedirects: 0
        },
        image:ImgUrl
      };
      axios.post(config.url, config)
        .then((response) => {
          if (response.data.status) {
            console.log(response.data.banner.length);
            setBanners(response.data.banner);
          }
        })
        .catch((error) => {
          console.log(error);
        })
  }

  const handelTrue = async()=>{
    console.log('yes')
  }
  const handelFalse = async()=>{
    console.log('No')
  }
  const handelDelete = async()=>{
    console.log('delete')
  }
  if(Error){
    setTimeout(() => {
        setError(false);
        setErrorMsg('');
    }, 5000);
  }
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <div className="col-sm-12 col-xl-12">
          <div
            className="bg-secondary h-100"
            style={{ padding: "0.5rem !important" }}
          >
            <h6
              className="mb-4"
              style={{ paddingTop: "10px", paddingLeft: "10px" }}
            >
              Banner 
            </h6>
            <form
              className="d-none d-md-flex ms-4"
              style={{ width: "fit-content",display:"flex", flexDirection: 'row' }}
            >
              <div className="form-floating mb-3 m-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Paste Image URL"
                  onChange={(e)=>handelImage(e.target.value)}
                />
                <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                  Banner URL
                </label>
              </div>
              <span style={{paddingTop: '10px'}}>
              {ImgUrl !=='' ? <img className="rounded me-lg-2" src={ImgUrl} alt="" style={{ height: '40px', borderStyle: 'solid', borderColor: '#fff' }} /> : <img className="rounded me-lg-2" src="/image/logo.png" alt="" style={{ height: '40px', borderStyle: 'solid', borderColor: '#fff' }} />}
              </span>
              {Error? <p className="text-warning" style={{marginTop:'13px'}}>{ErrorMsg}</p>:''}
              <button type="submit" className="btn btn-warning m-2" onClick={handelBanner}>
                Upload
              </button>
            </form>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col" className="text-center">Banner</th>
                  <th scope="col" className="text-center">Status</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
              {Banners.length > 0 ? (
  Banners.map((banner, index) => (
    <tr key={index}>
      <td className="text-center">
        <img
          className="rounded me-lg-2"
          src={banner.url}
          alt=""
          style={{ height: '40px', borderStyle: 'solid', borderColor: '#fff' }}
        />
      </td>
      <td className="text-center">
        {banner.status === 1 ? (
          <button
            type="button"
            className="btn btn-outline-success m-1"
            title="Deposit and Withdraw Money"
          >
            Success
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-danger m-1"
            title="Deposit and Withdraw Money"
          >
            Pending
          </button>
        )}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-square btn-outline-warning m-1"
          style={{ width: '35px', height: '35px' }}
        >
          {banner.status === 1 ? (
            <i className='fas fa-ban text-danger' onClick={handelFalse}></i>
          ) : (
            <i className='fas fa-check-circle text-success' onClick={handelTrue}></i>
          )}
        </button>&nbsp; &nbsp;
        <button type="button" className="btn btn-square btn-outline-warning m-1" style={{ width: '35px', height: '35px' }} ><i className='fas fa-trash text-danger' onClick={handelDelete}></i></button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="3">No banners found</td>
  </tr>
)}
              </tbody>
            </table>
          </div>
        </div>
        {/* <SendMoney /> */}
      </div>
      <Footer />
    </>
  );
}
