import React, { useEffect, useState } from "react";

export default function DisableUser(props) {
  const [token, setToken]=useState('');

  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      // console.log(auth.token, props.data)
  },[])
  let LockUser = () => {
    console.log(token, props.data)
  }
  return (
    <div className="modal" id="disableUser">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Disable User: <p className="text-success">{props.data}</p></h6>
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
              Want to Disable the user {props.data}
            </div>
            <button
              type="submit"
              className="btn btn-primary py-3 w-100 mb-4"
              style={{ boxShadow: "2px 2px #a48625" }}
            >
              Disable User
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
