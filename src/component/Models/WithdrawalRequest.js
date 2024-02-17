import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import configure from "../BaseUrl"
import { CommonContext } from "../CommonContext";
export default function WithdrawalRequest( props) {
  const {sendMoney, balance, exposer } = useContext(CommonContext);
  const [remark, setRemark]=useState('');
  const [token, setToken]=useState('');
  const [Alert, setAlert]=useState(false)
  const [AlertMsg, setAlertMsg]=useState('');
  const [user , setUser]=useState('');
  const [API, setAPI] = useState(false)
  // let navigate = useNavigate();
  useEffect(() =>{
      let user = JSON.parse(localStorage.getItem('userDetails'));
      setUser(user);
      let auth = JSON.parse(localStorage.getItem('protect'));
      setToken(auth.token);
      setRemark('');
  },[props])
  let Deposit = async () =>{
    
    if(remark === '' || remark.length === 0){
      setAlert(true);
      setAlertMsg('Please Enter some resion / UTR number regarding responce');
      return;
    }
    // console.log('first', remark, props.ID)
  if(!API){
    setAPI(true)
    let data = JSON.stringify({
      remark: remark,
      id:props.ID,
      status:props.status
    });
    let config = {
      method: 'post',
      url: configure.SERVER_URL+'users/withdrawlResponce',
      headers: { 
        'Content-Type': 'application/json',
        token:token,
      },
      data : data
    };
    
    axios.request(config)
    .then((res) => {
      console.log(res.data)
                if (res.data.status === true) {
                    setAlert(true)
                    setAlertMsg(res.data.msg);
                    props.update(res.data.data)
                }else{
                  setAlert(true)
                  setAlertMsg(res.data.msg);
                }
                setTimeout(() => {
                  document.getElementById('Withdrawalrequest').click();
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
              setAPI(false)
            })
          }
      }

      if(Alert){
        setTimeout(() => {
          setAlert(false);
          setAlertMsg('');
        }, 2000);
      }
  return (
    <div className="modal" id="Withdrawalrequest">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>Withdrawl Response &nbsp;<p className='text-success'>{props.data}</p></h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">            
            <div className="form-floating mb-3">
              <textarea
              style={{ height: "auto"}}
                type="text"
                rows={8}
                className="form-control"
                id="floatingInput"
                placeholder="Remarks"
                value={remark}
                onChange={(e)=>{setRemark(e.target.value)}}
              />
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                Enter Resion OR UTR number
              </label>
            </div>
            <button type="submit" className="btn btn-success py-3 w-100 mb-4" style={{boxShadow: '2px 2px #a48625'}} onClick={()=>{Deposit()}}>Submit</button>
          </div>
        </div>
      </div>
      {Alert === true ? 
        <div className="alert alert-light" role="alert" style={{ position: 'absolute', top: '15px', right: '30px', width: "25%",}}>{AlertMsg}</div>
      : null}
    </div>
  )
}
