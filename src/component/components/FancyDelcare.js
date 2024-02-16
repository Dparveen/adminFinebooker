import React, {useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl"
export default function FancyDeclareModel({props}) {
const [token, settoken] = useState('');
const [isStatus, setisStatus]=useState(false)
const [rsp, setRsp]=useState('');
const [Input, setInput] = useState(0)
  useEffect(() =>{
      console.log("props data",props)
      setInput(0)
        // console.log(JSON.stringify(props))
      let user = JSON.parse(localStorage.getItem('userDetails'));
      let auth = JSON.parse(localStorage.getItem('protect'));
      settoken(auth)
  },[props])

  let declareNow = async(pro,token) =>{
    console.log(pro, token, Input)
    if(Input === 0 || Input === ''){
        setRsp('Enter runs in number')
        setisStatus(true)
        return
    }
    let data = {control:pro[0], type:pro[1], value:pro[2],event:pro[3], unique:pro[4], run:Input }
    let config = {
        method: 'post',
        url: configure.SERVER_URL + 'game/control/fancy',
        headers: {
            'Content-Type': 'application/json',
            token: token,
        },
        data: data
    };
    console.log(config)
    axios.request(config)
        .then((res) => {
          console.log(res.data)
            // if(res.data.status){
            //     setFancyData(res.data.fancy);
            //     setBmData(res.data.bm);
            //     setOddsData(res.data.odds)
            // }
            setTimeout(() => {
                document.getElementById('BetNow').click();
              }, 1000);
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
            
        })
  }

  if(isStatus){
    setTimeout(()=>{
      setisStatus(false)
      setRsp('')
  }, 2000)
  }
  return (
    <div className="modal model-my" id="BetNow">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-warning">
          <h4 className="modal-title text-dark">Declare Fancy Result</h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
          
        </div>
        <div className="modal-body bg-secondary">
            <p className='text-success'>{props[5]}</p>
            <hr />
            {isStatus ? <p className='text-danger'>{rsp}</p>:''}
          <input className='form-group' type='number' placeholder='Run' onChange={(e)=>setInput(e.target.value)} value={Input} /><button type="button" className="btn btn-secondary btn-outline-warning m-1" style={{float:'right'}} onClick={()=>declareNow(props, token)}>Declare</button>
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
