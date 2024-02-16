import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import configure from '../BaseUrl.json'

export default function GameListFilter(props) {
  // console.log(props.filter)
  const [Auth, setAuth] = useState({});
  const [matchCount, setmatchCount] = useState([]);
  const [matchData, setmatchData] = useState([]);
  const [Name, setName] = useState('Cricket')
  const [API, setAPI] = useState(false);
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
    setmatchCount([]);
    setmatchData([]);
    let auth = JSON.parse(localStorage.getItem('protect'));
    setAuth(auth);
    getEvents(param.id, auth);

    const intervalId = setInterval(() => {
      getEvents(param.id, auth);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [param.id]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);



  const getEvents = async(id, auth) =>{
    //  console.log(param, id, auth)
    if(!API){
      setAPI(true);
    let data = JSON.stringify({eventType:parseInt(id)})
    let config = {
        method: 'post',
        url: configure.SERVER_URL + 'game/EventList',
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
              setmatchData(res.data.EventData)
              setmatchCount(res.data.matchCount)
            }
            
        })
        .catch((error) => {
            console.log(error);
        }).finally(()=>{
          setAPI(false)
        })
      }
}
const Events = () => {
  return matchData.map((match, i) => (
    <tr key={i} className='btn-info text-success' style={{fontSize: 'small'}}>
      <td><Link className="text-success" to={`/Games/${match.EventTypeID}/${match.competitionID}`} >{match.competitionName}</Link></td>
      <td >{matchCount[i]}</td>
      <td><Link  className="text-success" to={`/Games/${match.EventTypeID}/${match.competitionID}`} >{match.competitionRegion}</Link></td>
      <td><Link  className="text-success" to={`/Games/${match.EventTypeID}/${match.competitionID}`} >{match.marketCount}</Link></td>
      <td >{new Date(match.createdAt || match.updatedAt).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric",}) +" " + new Date(match.createdAt || match.updatedAt).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",})}</td>
    </tr>
  ));
};

 
  return (
    <div className="col-sm-12 col-xl-12">
        <div className="bg-secondary h-100" style={{ padding: '0.5rem !important', overflowY: 'auto' }}>
          <h6 className="mb-4" style={{ paddingTop: '10px', paddingLeft: '10px' }}>{Name}</h6>
                    <table className="table table-dark table-responsive-sm">
                      <thead className="mb-0">
                        <tr className='text-warning' style={{fontSize: 'small'}}>
                          <td scope='col' >Event Name</td>
                          <td scope="col" >Matches</td>
                          <td scope="col" >Country</td>
                          <td scope="col" >MarketCount</td>
                          <td scope="col" >Last updatedAt</td>
                        </tr>
                      </thead>
                      <tbody>
                      {matchData.length > 0 ? (
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
