import React, { useEffect, useState } from 'react'

export default function SetButtonValue( props ) {
  const [btnInput, setbtnInput] =useState(100)
  const [btnInput1, setbtnInput1] =useState(100)
  const [btnInput2, setbtnInput2] =useState(100)
  const [btnInput3, setbtnInput3] =useState(100)
  const [btnInput4, setbtnInput4] =useState(100)
  const [btnInput5, setbtnInput5] =useState(100)
  const [btnInput6, setbtnInput6] =useState(100)
  const [btnInput7, setbtnInput7] =useState(100)
  const [btnInput8, setbtnInput8] =useState(100)
  const [btnInput9, setbtnInput9] =useState(100)

  const [btnInput10, setbtnInput10] =useState(100)
  const [btnInput11, setbtnInput11] =useState(100)
  const [btnInput12, setbtnInput12] =useState(100)
  const [btnInput13, setbtnInput13] =useState(100)
  const [btnInput14, setbtnInput14] =useState(100)
  const [btnInput15, setbtnInput15] =useState(100)
  const [btnInput16, setbtnInput16] =useState(100)
  const [btnInput17, setbtnInput17] =useState(100)
  const [btnInput18, setbtnInput18] =useState(100)
  const [btnInput19, setbtnInput19] =useState(100)
  const [token, setToken]=useState('');

  useEffect(() =>{
      // let user = localStorage.getItem('userDetails');
      let auth = JSON.parse(localStorage.getItem('protect'));
      if(auth){
      setToken(auth.token);
      }
      // console.log(token, props.data)
  },[])

  let Save = () => {
    
  }
  return (
    <div className="modal" id="buttonValue">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Set Button Value of <p className='text-success'>{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
              
              <div className="row">
                <div className="col"><label className="h6 text-dark">Set Button 1</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput} onChange={(e) => setbtnInput(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                            
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 2</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput1} onChange={(e) => setbtnInput1(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 3</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput2} onChange={(e) => setbtnInput2(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 4</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput3} onChange={(e) => setbtnInput3(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 5</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput4} onChange={(e) => setbtnInput4(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 6</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput5} onChange={(e) => setbtnInput5(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col"><label className="h6 text-dark">Set Button 7</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput6} onChange={(e) => setbtnInput6(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                            
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 8</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput7} onChange={(e) => setbtnInput7(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 9</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput8} onChange={(e) => setbtnInput8(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 10</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput9} onChange={(e) => setbtnInput9(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 11</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput10} onChange={(e) => setbtnInput10(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 12</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput11} onChange={(e) => setbtnInput11(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col"><label className="h6 text-dark">Set Button 13</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput12} onChange={(e) => setbtnInput12(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                            
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 14</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput13} onChange={(e) => setbtnInput13(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 15</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput14} onChange={(e) => setbtnInput14(e.target.value)} className="form-control" id="floatingPassword" placeholder="number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                <div className="col"><label className="h6 text-dark">Set Button 16</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput15} onChange={(e) => setbtnInput15(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 17</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput16} onChange={(e) => setbtnInput16(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
                
                <div className="col"><label className="h6 text-dark">Set Button 18</label>
                        <div className="form-floating mb-4">
                            <input type="number" value={btnInput17} onChange={(e) => setbtnInput17(e.target.value)} className="form-control" id="floatingPassword" placeholder="Number" />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Set Button Value</label>
                        </div>
                </div>
              </div>
          </div>
          <div className="modal-footer">
          <button
              type="button"
              className="btn btn-warning"
              onClick={()=>{Save()}}
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
  )
}
