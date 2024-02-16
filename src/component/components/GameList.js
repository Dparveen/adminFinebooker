import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import configure from '../BaseUrl'

export default function GameList(props) {
    const [token, settoken] = useState('')
    const [api, setAPI] = useState(false)
    const [IPC, setIPC] = useState([]);
    const [IPT, setIPT] = useState([]);
    const [IPS, setIPS] = useState([]);
    const [UPC, setUPC] = useState([]);
    const [UPT, setUPT] = useState([]);
    const [UPS, setUPS] = useState([]);
    const [Inplay, setInplay] = useState(true)
//     const isMounted = useRef(true);
//   let intervalId;
//   useEffect(() => {
//     isMounted.current = true;
//     return () => {
//       isMounted.current = false;
//     };
//   }, []);
//   useEffect(() => {
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        if (auth) {
            settoken(auth.token);
            getMatch(auth.token);

        }
    }, []);
    // 


    let getMatch = useMemo(() => async (token) => {
        if (!api && token) {
            setAPI(true);
            let config1 = {
              method: 'post',
              url: configure.SERVER_URL + 'game/home/sports/' + fetch,
              headers: {
                  'Content-Type': 'application/json',
                  token: token,
              }
          };
            await axios.request(config1)
            .then((res) => {
              if (res.data.status) {
                // console.log(res.data.data);
                res.data.data[0] ?  setIPC(res.data.data[0].filter(item => item.GameId === 4)) : setIPC(IPC)
                res.data.data[0] ?  setIPT(res.data.data[0].filter(item => item.GameId === 2)) : setIPT(IPC)
                res.data.data[0] ?  setIPS(res.data.data[0].filter(item => item.GameId === 1)) : setIPS(IPC)
                res.data.data[0] ?  setUPC(res.data.data[1].filter(item => item.GameId === 4)) : setUPC(IPC)
                res.data.data[0] ?  setUPT(res.data.data[1].filter(item => item.GameId === 2)) : setUPT(IPC)
                res.data.data[0] ?  setUPS(res.data.data[1].filter(item => item.GameId === 1)) : setUPS(IPC)
            }            
            })
            .catch((error) => { console.log(error); })
            .finally(() => { setAPI(false); });
        }
    }, [token]);
    // let showMYTableHtml = async (data) => {
    //         console.log(data)
    // }

    // let onButton = async (query) => {
    //     // console.log(query)
    //     // console.log(gameData);
    //     const event = await gameData.filter((e) => e.slug === query);
    //     //   console.log("filtered",event);
    //     setmatchData(event)
    // }
    // console.log(token)
    // let onNewButton = useMemo(() => async (query, name, auth) => {
    //     console.log("object", query,name, auth)
    //     setgameName(name);
    //     if (!api) {
    //         setAPI(true)
    //         let config1 = {
    //             method: 'post',
    //             url: configure.SERVER_URL + 'game/home/sports/' + query,
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 token: token,
    //             }
    //         };
    //         // console.log(config1.url);
    //         await axios.request(config1)
    //             .then((res) => {
    //                 if (res.data.status === true) {
    //                     console.log(res.data)
    //                         setNewmatchData(res.data.data);
    //                         // setMarketData(res.data.Market);
    //                         console.log(res.data);
    //                 }else{
    //                     setNewmatchData([]);
    //                     // setMarketData([]);
    //                 }
    //             })
    //             .catch((error) => { console.log(error) })
    //             .finally(() => { setAPI(false) })
    //         }
    //     // console.log(api)
    // }, [NewmatchData]);
    // const games = gameData.map((game, index) =>
    //     <button className="btn btn-success nav-link m-2" key={index} id="nav-inplay-tab" data-bs-toggle="tab" value={game.slug} data-bs-target="#nav-inplay" type="button" role="tab" aria-controls="nav-inplay" aria-selected="true" onClick={() => onButton(game.slug)}>{game.name}</button>
    // );

    // const newGames = NewgameData.map((game, index) =>
    //     <button className="mt-2 m-1" key={game.eventType} id="nav-inplay-tab" data-bs-toggle="tab" data-bs-target="#nav-inplay" role="tab" aria-controls="nav-inplay" aria-selected="true" onClick={(e) => onNewButton(game.eventType, game.name, token)}>{game.name}</button>
    // );

    // const gamePlay = matchData.map((matches) =>
    //     <>
    //         <div className="tab-pane fade show active" id="nav-inplay" role="tabpanel" aria-labelledby="nav-inplay-tab">
    //             <div className="table-responsive">
    //                 <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
    //                     <thead className="mb-0"><tr><th><span className="h4 mb-4">{matches.slug === 'cricket' ? <i className="fas fa-baseball-ball"></i>
    //                         : matches.slug === 'tennis' ? <i className="fas fa-table-tennis"></i>
    //                             : matches.slug === 'soccer' ? <i className="fas fa-futbol"></i>
    //                                 : matches.slug === 'virtual-sports' ? <i className="fa fa-coffee"></i>
    //                                     : <i className="fas fa-baseball-ball"></i>} {matches.name}</span></th></tr></thead>
    //                     <tbody>
    //                         {matches.events.map((match, i) =>
    //                             <tr key={i}>
    //                                 {match.data === undefined || match.data === null ?
    //                                     <><td><h6 style={{ color: 'yellow' }}>{match.runners[0] + ' VS ' + match.runners[1]}</h6><span style={{ color: 'green' }}>{match.league_name}</span></td>
    //                                         <td className="controlTd">{match.inplay === true ? <button type="button" className="btn btn-success m-1">Inplay</button> : <button type="button" className="btn btn-warning m-1 h3">Up coming <br />{match.event_date.slice(8, 10) + "/" + match.event_date.slice(5, 7) + "/" + match.event_date.slice(0, 4)}</button>}</td>
    //                                         <td >
    //                                             <button type="button" className="btn btn-success btm">-</button> <button type="button" className="btn btn-warning btm">-</button>
    //                                             <button type="button" className="btn btn-success btm">-</button> <button type="button" className="btn btn-warning btm">-</button>
    //                                             <button type="button" className="btn btn-success btm">-</button> <button type="button" className="btn btn-warning btm">-</button>
    //                                         </td></>
    //                                     :
    //                                     <><td>
    //                                         <Link to={{
    //                                             pathname: "/MatchesControl/" + match.market_id + "/" + matches.slug
    //                                         }}><h6 style={{ color: 'yellow' }}>{match.runners[0] + ' VS ' + match.runners[1]}</h6><span style={{ color: 'green' }}>{match.league_name}</span></Link>
    //                                     </td>
    //                                         <td className='controlTd'>{match.inplay === true ? <button type="button" className="btn btn-success m-1">Inplay</button> : <button type="button" className="btn btn-warning m-1 h3">Up coming <br />{match.event_date.slice(8, 10) + "/" + match.event_date.slice(5, 7) + "/" + match.event_date.slice(0, 4)}</button>}</td>
    //                                         <td>
    //                                             <button type="button" className="btn btn-success btm">{match.data.runners[0].ex.availableToBack.length === 0 || match.data.runners[0].ex.availableToBack[0] === undefined || match.data.runners[0].ex.availableToBack[0].price === undefined ? '-' : match.data.runners[0].ex.availableToBack[0].price}</button> <button type="button" className="btn btn-warning btm">{match.data.runners[0].ex.availableToLay.length === 0 || match.data.runners[0].ex.availableToLay[0] === undefined || match.data.runners[0].ex.availableToLay[0].price === undefined ? '-' : match.data.runners[0].ex.availableToLay[0].price}</button>
    //                                             <button type="button" className="btn btn-success btm">{match.data.runners[0].ex.availableToBack.length === 0 || match.data.runners[0].ex.availableToBack[1] === undefined || match.data.runners[0].ex.availableToBack[1].price === undefined ? '-' : match.data.runners[0].ex.availableToBack[1].price}</button> <button type="button" className="btn btn-warning btm">{match.data.runners[0].ex.availableToLay.length === 0 || match.data.runners[0].ex.availableToLay[1] === undefined || match.data.runners[0].ex.availableToLay[1].price === undefined ? '-' : match.data.runners[0].ex.availableToLay[1].price}</button>
    //                                             <button type="button" className="btn btn-success btm">{match.data.runners[0].ex.availableToBack.length === 0 || match.data.runners[0].ex.availableToBack[2] === undefined || match.data.runners[0].ex.availableToBack[2].price === undefined ? '-' : match.data.runners[0].ex.availableToBack[2].price}</button> <button type="button" className="btn btn-warning btm">{match.data.runners[0].ex.availableToLay.length === 0 || match.data.runners[0].ex.availableToLay[2] === undefined || match.data.runners[0].ex.availableToLay[2].price === undefined ? '-' : match.data.runners[0].ex.availableToLay[2].price}</button>
    //                                         </td></>
    //                                 }
    //                             </tr>
    //                         )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </>
    // )
    // const MatchList = MarketData.map((match, i)=>
    //                                     <tr key={i}>
    //                                     {/* {console.log(MarketData)} */}
    //                                         <td>{match.EventID}</td>
    //                                     </tr>
    // )


    // const NewgamePlay =
    //     <>{NewmatchData.length>0 ?
    //         <div className="tab-pane fade show active" id="nav-inplay" role="tabpanel" aria-labelledby="nav-inplay-tab">
    //             <div className="table-responsive">
    //                 <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
    //                     <thead className="mb-0"><tr><th><span className="h4 mb-4">{NewmatchData[0].sportsName}</span></th></tr></thead>
    //                     <tbody>
    //                     {NewmatchData.map((data, i)=>
    //                     <>
    //                         {data.matchData.map((data, i)=>
    //                         <>
    //                         {MarketData.filter((e)=>e.EventID === data.eventId).map((market, i)=>
    //                             <tr key={i}>
    //                                 <td>
    //                                     {data.eventName}
    //                                 </td>
    //                             </tr>
    //                             )}

    //                         </>
    //                         )}

    //                     </>
    //                     )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     :
    //     <div className="tab-pane fade show active" id="nav-inplay" role="tabpanel" aria-labelledby="nav-inplay-tab">
    //             <div className="table-responsive">
    //                 <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
    //                     <thead className="mb-0"><tr><th><span className="h4 mb-4">No data found</span></th></tr></thead>
    //                 </table>
    //             </div>
    //         </div>
    //     }
    //     </>


    // const NewgamePlay = (
    //     <div className="tab-pane fade show active" id="nav-inplay" role="tabpanel" aria-labelledby="nav-inplay-tab">
    //         <span className="h5 mb-4 text-warning">{gameName}</span>
    //         <div className="table-responsive">
    //             <table className="table text-start table-responsive-sm align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
    //                 {/* <thead className="mb-0">
    //                     <tr>
    //                         <th>
    //                             <span className="h4 mb-4">{NewmatchData.length > 0 ? NewmatchData[0].sportsName : 'No data found'}</span>
    //                         </th>
    //                     </tr>
    //                 </thead> */}
    //                 <tbody>
    //                     {NewmatchData.length > 0 ? (
    //                         NewmatchData.map((match, matchIndex) => (
    //                             match.matchData.map((data, dataIndex) => (
    //                                 <>
    //                                 {/* <tr key={marketIndex}>
    //                                         <td>{data.eventName}</td> */}
    //                                 {MarketData.length === 0 ? null
    //                                 :
    //                                 <>
    //                                     {MarketData.filter((market) => market.EventID === data.eventId).map((markets, marketIndex) => (
                                    //         <tr key={marketIndex}>
                                    //             <td>{data.eventName}</td>
                                    //             {/* <td> */}
                                    //                 {/* {markets.marketData.map((real, i)=>
                                    //                     <> */}
                                    //                     <td>
                                    //             <Link to={{pathname: "/MatchesControl/" + markets.marketData[0].marketId + "/" + markets.marketData[0].EventID}}><i className='fa fa-video'></i></Link>
                                    //             </td>
                                    //                     {/* <td>
                                    //                         <span>{real.marketName} </span>
                                    //                         <span>{real.marketId} </span>
                                    //                         <Link to={{pathname: "/MatchesControl/" + real.marketId + "/" + match.competitionID}}><i className='fa fa-video'></i></Link>
                                    //                         <span>{real.marketStartTime} </span>
                                    //                         <span>{real.marketStatus} </span><br />
                                    //                         {real.runners.map((runner) =>
                                    //                             <>
                                    //                                 <span>{runner.runnerName} </span>
                                    //                                 <span>{runner.selectionId} </span>
                                    //                                 <span>{runner.selectionId} </span>
                                    //                                 <br />
                                    //                             </>
                                    //                         )}
                                    //                         </td> */}
                                    //                     {/* </>
                                    //                 )} */}
                                    //             {/* </td> */}
                                                
                                    //             {markets.Session.length===0 
                                    //             ?
                                    //             <td style={{ borderRight: '1px solid #fff' }}>
                                    //                             <button className='btn btn-success m-1'>-</button>
                                    //                             <button className='btn btn-warning m-1'>-</button>
                                    //                         </td>
                                    //             :
                                    //             <td style={{ borderRight: '1px solid #fff' }}>
                                    //                             <button className='btn btn-success m-1'>{markets.Session[0].BackPrice1 || '-'}</button>
                                    //                             <button className='btn btn-warning m-1'>{markets.Session[0].LayPrice1 || '-'}</button>
                                    //                         </td>
                                    //             }
                                                
                                    //         </tr>
                                    //     ))}
                                    //     </>
                                    // }
                                    // </>    
    //                             ))
    //                         ))
    //                     ) : (
    //                         <tr>
    //                             <td>No data found</td>
    //                         </tr>
    //                     )}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // );

    const isToday = (someDate) => {
        const today = new Date();
        return (
          someDate.getDate() === today.getDate() &&
          someDate.getMonth() === today.getMonth() &&
          someDate.getFullYear() === today.getFullYear()
        );
      };
      const isTomorrow = (someDate) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return (
          someDate.getDate() === tomorrow.getDate() &&
          someDate.getMonth() === tomorrow.getMonth() &&
          someDate.getFullYear() === tomorrow.getFullYear()
        );
      };
      const formatDateTime = (dateTime) => {
        const formattedTime = new Date(dateTime).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric"
        });
      
        if (isToday(dateTime)) {
          return <p className='text-danger' style={{fontSize:'small'}}>{`Today ${formattedTime}`}</p>;
        } else if (isTomorrow(dateTime)) {
          return <p className='text-success' style={{fontSize:'small'}}>{`Tomorrow ${formattedTime}`}</p>;
        } else {
          return <p className='text-success' style={{fontSize:'small'}}> {new Date(dateTime).toLocaleDateString("en-US", {day: "numeric",month: "numeric",year: "numeric"})}</p>
        }
      };

      const handelInplay = async() =>{
            setInplay(true)
      }
      const handelUp = async() =>{
        setInplay(false)
      }
    const InPlayMatch = (
      <>
        <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/cricket.png" style={{height:'20px', width:'20px'}} /> Cricket
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {IPC.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {IPC.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {formatDateTime(new Date(runs.marketStartTime))}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price || ' '}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price || ' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price || ' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price || ' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
                  <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/soccer.svg" style={{height:'20px', width:'20px'}} /> Soccer
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {IPS.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {IPS.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {formatDateTime(new Date(runs.marketStartTime))}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price || ' '}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price ||' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price ||' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price ||' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
                  <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/tennis.png" style={{height:'20px', width:'20px'}} /> Tennis
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {IPT.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {IPT.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {formatDateTime(new Date(runs.marketStartTime))}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price ||' '}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price ||' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price || ' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price || ' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
    </>);
    const UpMatch = (
      <>
        <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/cricket.png" style={{height:'20px', width:'20px'}} /> Cricket
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {UPC.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {UPC.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {formatDateTime(new Date(runs.marketStartTime))}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price || ' '}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price || ' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price || ' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price || ' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
                  <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/soccer.svg" style={{height:'20px', width:'20px'}} /> Soccer
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {UPS.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {UPS.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {formatDateTime(new Date(runs.marketStartTime))}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price ||' '}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price ||' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price || ' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price || ' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
                  <table className="table">
                    <thead>
                    <tr className="text-white" style={{ fontSize:'smaller'}}>
                        <th scope="col" style={{ width: "50%" }}>
                        <img src="/img/tennis.png" style={{height:'20px', width:'20px'}} /> Tennis
                        </th>
                        <th scope="col" colSpan={4} style={{ width: "50%" }}>
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {UPT.length === 0
                    ? <tr> <td>No Match Found</td></tr>
                    :
                    <>
                    {UPT.map((runs, i) =>
                          <tr key={i}>
                              <td scope="row" >
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              {runs.inplay && runs.eventName ||  ''}
                              {runs.inplay ? <p className="text-success" style={{fontSize:'10px'}}>Inplay</p>:''}
                              {runs.inplay ? formatDateTime(new Date(runs.marketStartTime)) :''}
                               {/* <p className='text-success' style={{fontSize:'small'}}>{runs.marketStartTime}</p> */}
                              </Link>
                              </td>
                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToBack[0] && runs.oddsRunner[0].ex.availableToBack[0].price || ''}
                                </button></Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[0].ex && runs.oddsRunner[0].ex.availableToLay[0] && runs.oddsRunner[0].ex.availableToLay[0].price ||' '}
                                </button>
                                </Link>
                              </td>


                              <td>
                              <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                              <button
                                  className="btn1 btn-success"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToBack[1] && runs.oddsRunner[1].ex.availableToBack[0].price ||' '}
                                </button>
                                </Link>
                                </td><td>
                                <Link className='text-warning' to={{pathname: "/MatchesControl/" + runs.marketId + "/" + runs.eventID}}>
                                <button
                                  className="btn1 btn-warning"
                                  style={{height:'30px'}}
                                >
                                {runs.oddsRunner[1].ex && runs.oddsRunner[1].ex.availableToLay[1] && runs.oddsRunner[1].ex.availableToLay[1].price || ' '}
                                </button>
                                </Link>
                              </td>
                            </tr>
                    )}
                            
                      </>
                      }
                    </tbody>
                  </table>
    </>);
    // setTimeout(
    //     () => token !== "" || token !== undefined 
    //     ? onNewButton(1, 'Cricket') 
    //     : '', 
    //     5000
    //   );

    //   setTimeout(getMatch(), 1000);
    // console.log(gameData)((Date.now().toString()).slice(0,10))
    return (
        <div className="container-fluid pt-2">
            <div className="bg-secondary text-center rounded">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        {/* {games} */}
                        {/* {newGames} */}
                        <button className="btn btn-outline-success text-white m-1" onClick={handelInplay} >Inplay</button>
                        <button className="btn btn-outline-success text-white m-1" onClick={handelUp}>Upcomming</button>
                    </div>
                </nav>
                <div className="bg-secondary p-2">
                    {/* {gamePlay} */}
                    {Inplay && InPlayMatch}
                    {!Inplay && UpMatch}
                </div>
            </div>
        </div>
    )
}



