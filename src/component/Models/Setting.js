import React, { useEffect, useState } from "react";

export default function Setting(props) {
    const [CricMaxOdd,setCricMaxOdd]=useState('');
    const [CricMinOdd,setCricMinOdd]=useState('');
    const [CricMaxSess,setCricMaxSess]=useState('');
    const [CricMinSess,setCricMinSess]=useState('');
    const [CricMaxProfit,setCricMaxProfit]=useState('');
    const [CricSessionDelay,setCricSessionDelay]=useState('');
    const [CricOddDelay,setCricOddDelay]=useState('');
    const [CricMinBetExpo,setCricMinBetExpo]=useState('');
    const [CricMaxBetExpo,setCricMaxBetExpo]=useState('');
    const [CricMatchComm,setCricMatchComm]=useState('');
    const [CricSessComm,setCricSessComm]=useState('');
    const [CricBookComm,setCricBookComm]=useState('');
    const [CricWinnBet,setCricWinnBet]=useState('');

    const [SoccMaxOdd,setSoccMaxOdd]=useState('');
    const [SoccMinOdd,setSoccMinOdd]=useState('');
    const [SoccMaxSess,setSoccMaxSess]=useState('');
    const [SoccMinSess,setSoccMinSess]=useState('');
    const [SoccMaxProfit,setSoccMaxProfit]=useState('');
    const [SoccSessionDelay,setSoccSessionDelay]=useState('');
    const [SoccOddDelay,setSoccOddDelay]=useState('');
    const [SoccMinBetExpo,setSoccMinBetExpo]=useState('');
    const [SoccMaxBetExpo,setSoccMaxBetExpo]=useState('');
    const [SoccMatchComm,setSoccMatchComm]=useState('');
    const [SoccSessComm,setSoccSessComm]=useState('');
    const [SoccBookComm,setSoccBookComm]=useState('');
    const [SoccWinnBet,setSoccWinnBet]=useState('');

    const [TennMaxOdd,setTennMaxOdd]=useState('');
    const [TennMinOdd,setTennMinOdd]=useState('');
    const [TennMaxSess,setTennMaxSess]=useState('');
    const [TennMinSess,setTennMinSess]=useState('');
    const [TennMaxProfit,setTennMaxProfit]=useState('');
    const [TennSessionDelay,setTennSessionDelay]=useState('');
    const [TennOddDelay,setTennOddDelay]=useState('');
    const [TennMinBetExpo,setTennMinBetExpo]=useState('');
    const [TennMaxBetExpo,setTennMaxBetExpo]=useState('');
    const [TennMatchComm,setTennMatchComm]=useState('');
    const [TennSessComm,setTennSessComm]=useState('');
    const [TennBookComm,setTennBookComm]=useState('');
    const [TennWinnBet,setTennWinnBet]=useState('');

    const [RaceMaxOdd,setRaceMaxOdd]=useState('');
    const [RaceMinOdd,setRaceMinOdd]=useState('');
    const [RaceMaxSess,setRaceMaxSess]=useState('');
    const [RaceMinSess,setRaceMinSess]=useState('');
    const [RaceMaxProfit,setRaceMaxProfit]=useState('');
    const [RaceSessionDelay,setRaceSessionDelay]=useState('');
    const [RaceOddDelay,setRaceOddDelay]=useState('');
    const [RaceMinBetExpo,setRaceMinBetExpo]=useState('');
    const [RaceMaxBetExpo,setRaceMaxBetExpo]=useState('');
    const [RaceMatchComm,setRaceMatchComm]=useState('');
    const [RaceSessComm,setRaceSessComm]=useState('');
    const [RaceBookComm,setRaceBookComm]=useState('');
    const [RaceWinnBet,setRaceWinnBet]=useState('');
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
    <div className="modal" id="setting">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title text-dark" style={{display:'flex'}}>User Setting : <p className='text-success'>{props.data}</p></h6>
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
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMaxOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMinOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMaxSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setCricMinSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMaxProfit(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricSessionDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricOddDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setCricMinBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMaxBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricMatchComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricSessComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setCricBookComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setCricWinnBet(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />



            <div className="row">
              <p className="h5 text-dark">Soccer</p>
              <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMaxOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMinOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMaxSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setSoccMinSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMaxProfit(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccSessionDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccOddDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setSoccMinBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMaxBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccMatchComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccSessComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setSoccBookComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setSoccWinnBet(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />
            
            <div className="row">
              <p className="h5 text-dark">Tennis</p>
              <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMaxOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMinOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMaxSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setTennMinSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMaxProfit(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennSessionDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennOddDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setTennMinBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMaxBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennMatchComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennSessComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setTennBookComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setTennWinnBet(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Winning Amount Bet</label>
                        </div>
                </div>
            </div>
            <hr />
            <div className="row">
              <p className="h5 text-dark">Hourse Racing</p>
              <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMaxOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMinOdd(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Odd Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMaxSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Session Stack</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setRaceMinSess(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Session Stack</label>
                        </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMaxProfit(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Profit</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceSessionDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceOddDelay(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Odds Delay</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setRaceMinBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Min Exposer Bet</label>
                        </div>
                </div>
              </div>
          <div className="row">
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMaxBetExpo(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Max Exposer Bet</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceMatchComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Match Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceSessComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Session Comission</label>
                        </div>
                </div>
                <div className="col">
                        <div className="form-floating mb-4">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Number" onChange={(e)=>{setRaceBookComm(e)}} />
                            <label htmlFor="floatingPassword" style={{color:'yellow'}}>Bookmaker Market Comission</label>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <div className="form-floating mb-4" style={{width: '23%'}}>
                            <input type="number" className="form-control" id="floatingPassword" placeholder="number" onChange={(e)=>{setRaceWinnBet(e)}} />
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
