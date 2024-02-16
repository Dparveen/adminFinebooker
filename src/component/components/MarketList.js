import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import configure from "../BaseUrl";
import { Link } from 'react-router-dom';

export default function MarketList() {
    const [SportsData, setSportsData] = useState([]);
    const [EventId, setEventId] = useState('');
    const [serise, setseries] = useState('');
    const [SeriesData, setSeriesData] = useState([]);
    const [MatchData, setMatchData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [gameName, setgameName] = useState('Please Select Sports')
    const [seriesName, setseriesName] = useState('Please Select Series')

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        setToken(auth.token);
        getSports(auth.token);
    }, []);
    // console.log(token)
    let getSports = useMemo(() => (tkn) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: configure.SERVER_URL + 'game/market/list',
            headers: {
                'Content-Type': 'application/json',
                token: tkn
            },
        };
        const axiosConfig = {
            headers: config.headers,
            //   maxRedirects: 0
        };
        axios
            .post(config.url, axiosConfig)
            .then((response) => {
                if (response.data.status === true) {
                    setSportsData(response.data.data);
                    //   console.log('api',response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    const onButton = (eventId, name) => {
        // console.log(eventId, name)
        setgameName(name)
        if (token && !loading) {
            setLoading(true);

            // let data = JSON.stringify({
            //   eventType: eventType
            // });

            let config = {
                url: configure.SERVER_URL + 'game/' + eventId + '/event',
                headers: {
                    'Content-Type': 'application/json',
                    token: token
                },
                // data: data
            };

            const axiosConfig = {
                headers: config.headers,
                // maxRedirects: 0
            };

            axios.post(config.url, axiosConfig)
                .then((response) => {
                    if (response.data.status === true) {
                        // console.log('Sports Filter', response.data.data, name);
                        setSeriesData(response.data.data)
                        setEventId(eventId)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
            //   console.log(eventType)
        }
    }

    const radioBtn = (status, eventId, marketId) => {
        // console.log(status, eventId, marketId);
        if (token && !loading) {
            setLoading(true);

            let data = JSON.stringify({
                eventId: eventId,
                status: status
            });
            // console.log(status,comp, match)
            let config = {
                url: configure.SERVER_URL + 'game/market/update/' + marketId,
                headers: {
                    'Content-Type': 'application/json',
                    token: token
                }
            };

            const axiosConfig = {
                headers: config.headers,
                // maxRedirects: 0
            };
            axios.post(config.url, data, axiosConfig)
                .then((response) => {
                    if (response.data.status === true) {
                        setSeriesData(response.data.data);
                        // console.log('Button api', response.data.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }
    //   console.log("match",MatchData)
    const gamePlay =
        SeriesData.map((matches, i) => (
            <tr key={i} className='text-warning'>
                <td>{i + 1}</td>
                {/* {console.log(matches)} */}
                <td className="h6 text-warning">{matches.marketName} / {matches.marketId} <br /> <span className="text-primary">{matches.marketStartTime}</span></td>
                {matches.runners === undefined || matches.runners.length === 0
                    ? <td className="h6 text-warning">No runner found</td>
                    : <td className="h6 text-warning">
                        {matches.runners.map((runner, j) =>
                            <><span key={j} className="text-primary">{runner.runnerName} / {runner.selectionId}</span><br /></>
                        )}
                    </td>
                }
                <td>
                    {matches.status === 1 ? (
                        <i className="fa fa-check-circle text-success"></i>
                    ) : (
                        <i className='fas fa-ban text-danger'></i>
                    )}
                </td>
                <td>
                    {/* {console.log(matches.status)} */}
                    {matches.status === 1 ?
                        <i className='fas fa-ban text-danger' onClick={() => radioBtn(0, EventId, matches.marketId)}></i>
                        : <i className='fas fa-check-circle text-success' onClick={() => radioBtn(1, EventId, matches.marketId)}></i>
                    }
                </td>
                <td>
                    <Link to={{pathname: "/declare/"+matches.marketId +"/"+ EventId}}><i className='btn btn-success text-white'>Declare</i></Link>
                </td>
            </tr>
        ));

    const games = SportsData.map((game, i) =>
        <>
            {/* {console.log(SportsData)} */}
            {i === 0 ?
                <button key={i} className="nav-link active" id={"v-pills-" + game.eventId + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + game.eventId + ""} type="button" role="tab" aria-controls={"v-pills-" + game.eventId + ""} aria-selected="true" onClick={() => onButton(game.eventId, game.eventName)}>{game.eventName}</button>
                :
                <button key={i} className="nav-link" id={"v-pills-" + game.eventId + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + game.eventId + ""} type="button" role="tab" aria-controls={"v-pills-" + game.eventId + ""} aria-selected="true" onClick={() => onButton(game.eventId, game.eventName)}>{game.eventName}</button>
            }
        </>
    );

    const listComp =
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <h5 className='h5 text-light'>Market Control Event: <u className='text-warning'>{gameName}</u></h5>
            <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
                    <thead className='h5 text-warning'>
                        <tr>
                            <th>Sr.</th>
                            <th>Match Name</th>
                            <th>Runners</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Result Declare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log('SeriesData',SeriesData.length)} */}
                        {
                            SeriesData.length >= 0 ? gamePlay : <tr><td>No Competition Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="col-sm-12 col-xl-12">
                <div className="bg-secondary rounded p-4">
                    <h6 className="mb-4">Market Control</h6>
                    <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            {games}
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            {listComp}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
