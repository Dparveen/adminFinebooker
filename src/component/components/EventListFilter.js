import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import configure from '../BaseUrl.json'

export default function EventListFilter(props) {
  const [Auth, setAuth] = useState({});
  // console.log(props.filter)
  const [marketData, setmarketData]=useState([])
  const [Name, setName] = useState('Cricket')
  const [API, setAPI] = useState(false)
  
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
    setmarketData([])
    let auth = JSON.parse(localStorage.getItem('protect'));
    console.log(auth)
    if (auth) {
        getEvents(auth);
        setAuth(auth);
    }
    
    
    const intervalId = setInterval(() => {
      getEvents(auth);
    }, 5000);
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
    //  console.log(param, id)
    if(!API){
        setAPI(true)
    let data = JSON.stringify({eventType:parseInt(param.id), competitionID:param.event})
    let config = {
        method: 'post',
        url: configure.SERVER_URL + 'game/MatchList',
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
              setName(res.data.name);
              // setmatchData(res.data.MatchData)
              res.data.MarketData && setmarketData(res.data.MarketData)
            }
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
          setAPI(false)
        })
    }
}
// const getMarketId =(id)=>{
//     let out = marketData.find(mid => mid.EventID === id);
//     return out.marketId;
// }

if(API){
  setTimeout(() => {
    setAPI(false)
  }, 5000);
}
const Events = () => {
  return marketData.map((match, i) => (
    <tr key={i} className='btn-info' style={{fontSize: 'small'}}>
      <td><Link className="text-success" to={`/MatchesControl/${match.EventID}/${match.marketId}`} >{match.runners[0].runnerName || ''} / {match.runners[1].runnerName || ''}</Link></td>
      <td><Link  className="text-success" to={`/MatchesControl/${match.EventID}/${match.marketId}`} >{match.marketName}</Link></td>
      <td className="text-success">{new Date(match.openDate).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",}) +" " + new Date(match.openDate).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",})}</td>
    </tr>
  ));
};
  return (
    <div className="col-sm-12 col-xl-12">
        <div className="bg-secondary h-100" style={{ padding: '0.5rem !important', overflowY: 'auto' }}>
          <h6 className="mb-4" style={{ paddingTop: '10px', paddingLeft: '10px' }}>{Name && Name.competitionName || ''} / { Name && Name.competitionRegion || ''}</h6>
                    <table className="table table-dark table-responsive-sm">
                      <thead className="mb-0">
                        <tr className='text-warning' style={{fontSize: 'small'}}>
                          <td scope='col' >Match Name</td>
                          <td scope="col" >Market</td>
                          <td scope="col" >Last updatedAt</td>
                        </tr>
                      </thead>
                      <tbody>
                      {marketData.length > 0 ? (
                        <Events />
                      ) : (
                        <tr>
                          <td colSpan="3">No events found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
              </div>
            </div>
  );
}
