import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import configure from '../BaseUrl.json'
import FancyDeclareModel from "./FancyDelcare";
export default function MatchdataControl(props) {
  // console.log(props.filter)
  const [Auth, setAuth] = useState({});
  const [OddsData, setOddsData] = useState({});
  const [BmData, setBmData] = useState([]);
  const [FancyData, setFancyData] = useState([]);
  const [API, setAPI] = useState(false)
  const [AAPI, setAAPI] = useState(false)
  const [select, setSelect]=useState([])
  const param = useParams();
  const isMounted = useRef(true);
  let intervalId;
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setBmData([]);
    setFancyData([]);
    setOddsData({});
    let auth = JSON.parse(localStorage.getItem('protect'))
    getEvents(auth);
    setAuth(auth)
    
    
    const intervalId = setInterval(() => {
      getEvents(param);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [param.event]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getEvents = async(auth) =>{
    //  console.log(param, auth)
    if(!API){
        setAPI(true)
    let data = JSON.stringify(param)
    let config = {
        method: 'post',
        url: configure.SERVER_URL + 'game/MatchData',
        headers: {
            'Content-Type': 'application/json',
            token: auth.token,
        },
        data: data
    };
    axios.request(config)
        .then((res) => {
          console.log(res.data)
            if(res.data.status){
                setFancyData(res.data.fancy);
                setBmData(res.data.bm);
                setOddsData(res.data.odds)
            }
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
          setAPI(false)
        })
    }
}

const control = async(a,b,c,d,e) =>{
  // 'bm','status', 0,param, bm.nat
  console.log(a,b,c,d,e)
  if(!AAPI){
        setAAPI(true)
    let data = {control:a, type:b, value:c,event:d, unique:e }
    let config = {
        method: 'post',
        url: configure.SERVER_URL + 'game/control',
        headers: {
            'Content-Type': 'application/json',
            token: Auth.token,
        },
        data: data
    };
    axios.request(config)
        .then((res) => {
          console.log(res.data)
            // if(res.data.status){
            //     setFancyData(res.data.fancy);
            //     setBmData(res.data.bm);
            //     setOddsData(res.data.odds)
            // }
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
          setAAPI(false)
        })
    }
}

const controlFancyDeclare =async (a,b,c,d,e,f) =>{
  // console.log(a,b,c,d,e)
    setSelect([a,b,c,d,e,f])
}
{/* .overlay {
        z-index: 1;
        margin: 30px;
        opacity: 0.3;
        background: #009938;
      } */}
const BM = () => {
  const data = BmData.sort((a, b) => a.sid - b.sid);
  return data.map((bm, i) => {
    if(bm.s !== 'CLOSED'){
      return (
    <tr key={i} className='btn-info' style={{fontSize: 'small'}}>
      <td className="text-success">{i+1}</td>
      <td className="text-success">{bm.nat}</td>
      <td>
          {bm.s !== "SUSPENDED" ? (
            <div>
              <button className="btn btn-success" style={{ width: '80px' }}>
                {bm.b1}
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-success" style={{ width: '80px' }}>
                {bm.b1}
              </button>
            </div>
          )}
        </td>
        <td>
          {bm.s !== "SUSPENDED" ? (
            <div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
                {bm.l1}
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
                {bm.l1}
              </button>
            </div>
          )}
        </td>

        <td>
        {bm.status !== 0 ? (<button className="btn btn-success" onClick={(e)=>control('bm','status', 0,param, bm.nat )}>Inctive</button>):(<button className="btn btn-danger" onClick={(e)=>control('bm','status', 1,param, bm.nat )}>Active</button>)} &nbsp;&nbsp;
        {bm.s !== "SUSPENDED" ? (<button className="btn btn-info" onClick={(e)=>control('bm','suspand', 0,param, bm.nat )}>Suspand</button>):(<button className="btn btn-danger" onClick={(e)=>control('bm','suspand', 1,param, bm.nat )}>Unsuspand</button>)}&nbsp;&nbsp;
            <button className="btn btn-secondary" onClick={(e)=>control('bm','rollback', 0,param, bm.nat )}>Rollback</button>&nbsp;&nbsp;
            <button className="btn btn-warning" onClick={(e)=>control('bm','declare', 0,param, bm.nat )}>Declare</button></td>
    </tr>
      )} else{return null;}}
  );
};

const Odd = () => {
      if (!OddsData.runners || OddsData.runners.length === 0) {
        return 
      }

    return OddsData.runners.map((ods, i) => {
      if(ods.status !== 'CLOSED'){
        return(
      <tr key={i} className='btn-info text-success' style={{fontSize: 'small'}}>
        <td>{i+1}</td>
        <td>{ods.runnerName} <br /> <span style={{fontSize:'8px'}} className="text-danger">{new Date(OddsData.marketStartTime).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",}) +" " + new Date(OddsData.marketStartTime).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",})}</span></td>
        {/* <td>{OddsData.inplay ? 'true' : 'false'}</td> */}
        <td>
        {ods.status === "ACTIVE" ? (
            <div>
              <button className="btn btn-success" style={{ width: '80px' }}>
              {ods.ex && ods.ex.availableToBack && ods.ex.availableToBack[0].price || '-'}
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-success" style={{ width: '80px' }}>
              {ods.ex && ods.ex.availableToBack && ods.ex.availableToBack[0].price || '-'}
              </button>
            </div>
          )}
          {/* <button className="btn btn-success" style={{width: '80px'}} >{ods.ex && ods.ex.availableToBack && ods.ex.availableToBack[0].price || '-'}</button> */}
        </td>
        <td> 
        {ods.status === "ACTIVE" ? (
            <div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
              {ods.ex && ods.ex.availableToLay && ods.ex.availableToLay[0].price || '-'}
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
              {ods.ex && ods.ex.availableToLay && ods.ex.availableToLay[0].price || '-'}
              </button>
            </div>
          )}
          {/* <button className="btn btn-warning" style={{width: '80px'}} >{ods.ex && ods.ex.availableToLay && ods.ex.availableToLay[0].price || '-'}</button> */}
        </td>
        <td>
        {ods.status !== "SUSPENDED" ? (<button className="btn btn-success" onClick={(e)=>control('odds','status', 0,param, ods.selectionId )}>Inactive</button>):(<button className="btn btn-danger" onClick={(e)=>control('odds','status', 1,param, ods.selectionId )}>Active</button>)} &nbsp;&nbsp;
        {ods.status !== "SUSPENDED" ? (<button className="btn btn-info" onClick={(e)=>control('odds','suspand', 0,param, ods.selectionId )}>Suspand</button>):(<button className="btn btn-danger" onClick={(e)=>control('odds','suspand', 1,param, ods.selectionId )}>Unsuspand</button>)}&nbsp;&nbsp;
            <button className="btn btn-secondary" onClick={(e)=>control('odds','rollback', 0,param, ods.selectionId )}>Rollback</button>&nbsp;&nbsp;
            <button className="btn btn-warning" onClick={(e)=>control('odds','declare', 0,param, ods.selectionId )}>Declare</button> &nbsp;&nbsp;
        {!OddsData.inplay ? <button className="btn btn-secondary" onClick={(e)=>control('odds','clear', 0,param, ods.selectionId )}>Match Clear</button>:<button className="btn btn-success" onClick={(e)=>control('odds','clear', 1,param, ods.selectionId )}>Inplay Match</button>}</td>
      </tr>
        )}else{
          return (<tr><td>No Active Odds Data</td></tr>)
        }
    });
  };
  const Fncy = () => {
    return FancyData[0].session.map((fancy, i) => (
      <tr key={i} className='btn-info text-success' style={{fontSize: 'small'}}>
        <td>{i+1}</td>
        <td>{fancy.RunnerName}</td>

        {/* <td><button className="btn btn-success" style={{width: '80px', height:'46px'}} ><span style={{fontSize:'12px'}}><b>{fancy.BackPrice1 ||'-'}</b></span> <br /><sapn style={{fontSize:'10px'}}>{fancy.BackSize1 || '-'}</sapn></button> </td>
        <td> <button className="btn btn-warning" style={{width: '80px', height:'46px'}} ><span style={{fontSize:'12px'}}><b>{fancy.LayPrice1 ||'-'}</b></span> <br /><sapn style={{fontSize:'10px'}}>{fancy.LaySize1 || '-'}</sapn></button></td> */}
        <td>
          {fancy.GameStatus !== "SUSPENDED" ? (
            <div>
              <button className="btn btn-success" style={{ width: '80px' }}>
              <p>{fancy.LayPrice1 ||' - '} <br />{fancy.LaySize1 || '- '}</p>
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-success" style={{ width: '80px' }}>
              <p>{fancy.LayPrice1 ||' - '} <br />{fancy.LaySize1 || '- '}</p>
              </button>
            </div>
          )}
        </td><td>
          {fancy.GameStatus !== "SUSPENDED" ? (
            <div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
              <p>{fancy.BackPrice1 ||' - '} <br />{fancy.BackSize1 || '- '}</p>
              </button>
            </div>
          ) : (
            <div
              style={{
                zIndex: '1',
                opacity: '0.3',
                width: '80px',
                background: '#4a4a4a',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ color: 'black', fontSize: '10px' }}><b>SUSPENDED</b></p>
              </div>
              <button className="btn btn-warning" style={{ width: '80px' }}>
              <p>{fancy.BackPrice1 ||' - '} <br />{fancy.BackSize1 || '- '}</p>
              </button>
            </div>
          )}
        </td>
        <td style={{ display: 'flex', alignItems: 'center', height:'80px' }}>
        {fancy.MarkStatus !== 'SUSPENDED' ? (<button className="btn btn-success" onClick={(e)=>control('fancy','status', 0,param, fancy.SelectionId )}>Inctive</button>):(<button className="btn btn-danger" onClick={(e)=>control('fancy','status', 1,param, fancy.SelectionId )}>Active</button>)} &nbsp;&nbsp;
        {fancy.GameStatus !== "SUSPENDED" ? (<button className="btn btn-info" onClick={(e)=>control('fancy','suspand', 0,param, fancy.SelectionId )}>Suspand</button>):(<button className="btn btn-danger" onClick={(e)=>control('fancy','suspand', 1,param, fancy.SelectionId )}>Unsuspand</button>)}&nbsp;&nbsp;
            <button className="btn btn-secondary" onClick={(e)=>control('fancy','rollback', 0,param, fancy.SelectionId )}>Rollback</button>&nbsp;&nbsp;
            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#BetNow" onClick={(e)=>controlFancyDeclare('fancy','declare', 0,param, fancy.SelectionId,fancy.RunnerName )}>Declare</button></td>
      </tr>
    ));
  };
  return (
    <div className="col-sm-12 col-xl-12">
        <div className="bg-secondary h-100" style={{ padding: '0.5rem !important', overflowY: 'auto' }}>
          <h6 className="text-white">Odds Market</h6>
                    <table className="table table-dark table-responsive-sm">
                      <thead className="mb-0">
                        <tr className='text-warning' style={{fontSize: 'small'}}>
                        <td style={{ width:'2%'}}>Serial</td>
                          <td scope='col' style={{ width:'10%'}} >Team Name</td>
                          <td scope="col" style={{ width:'0%'}}>Back</td>
                          <td scope="col" style={{ width:'5%'}}>Lay</td>
                          <td scope="col" style={{ width:'40%'}}>Match Control</td>
                        </tr>
                      </thead>
                      <tbody>
                      {OddsData.runners && OddsData.runners.length > 0 ? (
                        <Odd />
                      ) : (
                        <tr>
                          <td colSpan="3">No events found</td>
                        </tr>
                      )}
                    </tbody>
                    </table>
                    <h6 className="text-white">Bookmaker</h6>
                    <table className="table table-dark table-responsive-sm">
                    
                    <thead className="mb-0">
                        <tr className='text-warning' style={{fontSize: 'small'}}>
                        <td style={{ width:'2%'}}>Serial</td>
                          <td scope='col' style={{ width:'10%'}}>Team Name</td>
                          <td scope="col" style={{ width:'0%'}}>Back</td>
                          <td scope="col" style={{ width:'5%'}}>Lay</td>
                          <td scope="col" style={{ width:'40%'}}>Bookmaker Control</td>
                        </tr>
                      </thead>
                    <tbody>
                      {BmData.length > 0 ? (
                        <BM />
                      ) : (
                        <tr>
                          <td colSpan="3">No events found</td>
                        </tr>
                      )}
                    </tbody>
                    </table>
                    <h6 className="text-white">Fancy Market</h6>
                    <table className="table table-dark table-responsive-sm">
                    <thead className="mb-0">
                        <tr className='text-warning' style={{fontSize: 'small'}}>
                          <td style={{ width:'2%'}}>Serial</td>
                          <td scope='col' style={{ width:'10%'}}>Runner Name</td>
                          {/* <td scope="col" >View</td> */}
                          <td scope="col" style={{ width:'0%'}}>No</td>
                          <td scope="col" style={{ width:'5%'}}>Yes</td>
                          <td scope="col" style={{ width:'40%'}}>Fancy Control</td>
                        </tr>
                      </thead>
                    <tbody>
                      {FancyData.length > 0 ? (
                        <Fncy />
                      ) : (
                        <tr>
                          <td colSpan="3">No events found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
              </div>
              <FancyDeclareModel props={select}/>
            </div>
  );
}
