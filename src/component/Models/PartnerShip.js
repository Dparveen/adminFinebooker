import React, { useEffect, useState } from "react";

export default function PartnerShip(props) {
  const [cricket, setCricket]=useState(0);
  const [soccer, setSoccer]=useState(0);
  const [tennis, setTennis]=useState(0);
  const [token, setToken]=useState('');

  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      // console.log(auth.token, props.data)
  },[])
  let Submit = () => {
    console.log(token, props.data)
  }
  return (
    <div className="modal" id="partnerShip">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Partnership Setting with <p className="text-success">{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <p className="h5 text-dark">Cricket<span style={{float:'right', fontSize: '12px'}}>My Partnership:  {cricket}</span></p>
              <div className="col">
                <div className="form-floating mb-4">
                  <input
                    type="number"
                    className="form-control"                    
                    placeholder="number"
                    value={cricket}
                    onChange={(e)=>{setCricket(e.target.value)}}
                  />
                  <label htmlFor="floatingPassword" style={{ color: "yellow" }}>
                    Max Odd Stack
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="h5 text-dark">Soccer<span style={{float:'right', fontSize: '12px'}}>My Partnership:  {soccer}</span></p> 
              <div className="col">
                <div className="form-floating mb-4">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="number"
                    value={soccer}
                    onChange={(e)=>{setSoccer(e.target.value)}}
                  />
                  <label htmlFor="floatingPassword" style={{ color: "yellow" }}>
                    Max Odd Stack
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="h5 text-dark">Tennis <span style={{float:'right', fontSize: '12px'}}>My Partnership:  {tennis}</span></p>
              <div className="col">
                <div className="form-floating mb-4">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="number"
                    value={tennis}
                    onChange={(e)=>{setTennis(e.target.value)}}
                  />
                  <label htmlFor="floatingPassword" style={{ color: "yellow" }}>
                    Max Odd Stack
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" onClick={(e)=>{Submit()}}>
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
