import React, { useEffect, useState } from 'react'

export default function AddSports() {
  const [sports, setSports]=useState('');
  const [option, setOption]=useState('Y');

  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      // let auth = JSON.parse(localStorage.getItem('protect'));
      // console.log(auth.token)
  },[])

  let addGame = () => {

  }
  return (
    <div className="modal" id="addGame">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark">Add Sports</h6>
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
                
                placeholder="Enter Chips Amount"
                value={sports}
                onChange={(e)=>{setSports(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Sports Name
              </label>
            </div>
            
            <div className="form-floating mb-3">
            <div className="btn-group " role="group">
                                <input type="radio" className="btn-check" name="btnradio" value="Y" checked={setOption('Y')} onChange={(e)=>setOption(e)}  />
                                <label className="btn btn-outline-success" htmlFor="btnradio2">Enable</label>

                                <input type="radio" className="btn-check" name="btnradio" checked={setOption('N')} onChange={(e)=>setOption(e)}   />
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">Disable</label>
                            </div>
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onSubmit={()=>{addGame()}}>Add Sports</button>

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
