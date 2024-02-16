import React, { useEffect, useState } from "react";

export default function Setting() {
    const [statement, setstatement]=useState([]);

    useEffect(() =>{
        // let user = localStorage.getItem('userDetails');
        // let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth.token)
    },[])
  return (
    <div className="modal" id="setting">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark">User Setting</h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
              <div className="row">
              <p className="h5 text-dark">Cricket</p>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />



            <div className="row">
              <p className="h5 text-dark">Soccer</p>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />
            
            <div className="row">
              <p className="h5 text-dark">Tennis</p>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />
            <div className="row">
              <p className="h5 text-dark">Tennis</p>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
          </div>
          <div className="modal-footer">
          <button
              type="button"
              className="btn btn-warning"
            >
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
