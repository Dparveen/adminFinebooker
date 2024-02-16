import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import configure from "../BaseUrl";
import { Link } from 'react-router-dom';

export default function BookMakerList() {
    const [SportsData, setSportsData] = useState([]);
    const [SeriesData, setSeriesData] = useState([]);
    const [matchData, setMatchData] = useState([]);
    const [marketData, setMarketData] = useState([]);

    const [token, setToken] = useState("");
    const [gameName, setGameName] = useState('');
    const [seriesName, setSeriesName] = useState('');
    const [matchName, setMatchName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('protect'));
        // console.log(auth)
        setToken(auth.token);
        getSports(auth.token);
    }, []);
    // console.log(token)
    let getSports = useMemo(() => (tkn) => {
        if(!loading){
            setLoading(true);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: configure.SERVER_URL + 'game/list',
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
                    // console.log('api', response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            }).finally(()=>{
                setLoading(false)
            })
            let config1 = {
                method: 'post',
                maxBodyLength: Infinity,
                url: configure.SERVER_URL + 'game/event/list',
                headers: {
                    'Content-Type': 'application/json',
                    token: tkn
                },
            };
            const axiosConfig1 = {
                headers: config.headers,
                //   maxRedirects: 0
            };
            axios
                .post(config1.url, axiosConfig1)
                .then((response) => {
                    if (response.data.status === true) {
                        setMarketData(response.data.data);
                        // console.log('api', response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                }).finally(()=>{
                    setLoading(false)
                })
        }
    }, [])



    const Sports = (event, data) => {
        // console.log(event, data)
        if(event){
        const eName = data.filter((e) => e.eventType === Number(event));
        setGameName(eName[0].name);
        if (!loading) {
            setSeriesData([])
            setSeriesName('');
            setLoading(true)
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: configure.SERVER_URL + 'game/' + event + '/sports',
                headers: {
                    'Content-Type': 'application/json',
                    token: token
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
                        setSeriesData(response.data.data);
                        // console.log('api', response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setLoading(false);
                })
        }
        }else{
            setGameName('');
            setSeriesData([])
            setSeriesName('');
            setMarketData([]);
        }
    }

    const Events = (event, data) => {
        if(event){
        const eName = data.filter((e) => e.competitionID === Number(event));
        setSeriesName(eName[0].competitionName);
        // console.log(event, eName)

        if (!loading) {
            setLoading(true)
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: configure.SERVER_URL + 'game/' + event + '/match',
                headers: {
                    'Content-Type': 'application/json',
                    token: token
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
                        setMatchData(response.data.data);
                        // console.log('api', response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setLoading(false);
                })
        }
    }else{
        setMatchData([])
        setSeriesName('');
        setMatchName('');
    }
    }

    const Match = (match, data) => {
        if(match){
        const eName = data.filter((e) => e.eventId === Number(match));
        setMatchName(eName[0].eventName);
        // console.log(match, data, eName);

        if (!loading) {
            setLoading(true)
            // setMatchData([])
            // setMatch('');
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: configure.SERVER_URL + 'game/' + match + '/event',
                headers: {
                    'Content-Type': 'application/json',
                    token: token
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
                        setMarketData(response.data.data);
                        console.log('api', response.data.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setLoading(false);
                })
        }
    }else{
            setMatchName('');
        }
    }


    const radioBtn = (status, marketId) => {
        console.log(status, marketId)
    }
    
    const gamePlay =
    marketData.map((matches, i) => (
            <tr key={i} className='text-warning'>
                <td>{i + 1}</td>
                {/* {console.log(matches)} */}
                <td className="h6 text-warning">{matches.marketName} / {matches.marketId}  <span className="text-primary">{matches.marketStartTime}</span></td>
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
                        <i className='fas fa-ban text-danger' onClick={() => radioBtn(0, matches.marketId)}></i>
                        : <i className='fas fa-check-circle text-success' onClick={() => radioBtn(1, matches.marketId)}></i>
                    }
                </td>
            </tr>
        ));

    const games = SportsData.map((game, i) =>
        <>
            {/* {console.log(SportsData)} */}
            <option key={i} value={game.eventType}>{game.name}</option>
        </>
    );

    const serieses = SeriesData.map((game, i) =>
    <>
        {/* {console.log(SeriesData)} */}
        <option key={i} value={game.competitionID}>{game.competitionName}</option>
    </>
);

const matches = matchData.map((match, i) =>
<>
    {/* {console.log(matchData)} */}
    <option key={i} value={match.eventId}>{match.eventName}</option>
</>
);

    const listComp =
            <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
                    <thead className='h5 text-warning'>
                        <tr>
                            <th>Sr.</th>
                            <th>Match Name</th>
                            <th>Runners</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log('SeriesData',SeriesData.length)} */}
                        {
                            marketData.length > 0 ? gamePlay : <tr><td>No Competition Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="col-sm-12 col-xl-12">
                <div className="bg-secondary rounded p-4">
                    <h6 className="mb-4">Book Maker Control</h6>
                    <nav>
                    <div className='row'>
                    <div className="col-sm-12 col-xl-3">
                        <select className="form-select" required type="select" onChange={(e) => Sports(e.target.value, SportsData)}>
                            <option value="">Please Select Sports</option>
                            {games}
                        </select>
                        <label htmlFor="floatingInput" style={{ color: "yellow" }}>{gameName || 'Please Select Sports'}</label>
                    </div>
                    {SeriesData.length > 0
                    ?
                    <div className="col-sm-12 col-xl-3">
                        <select className="form-select" required type="select"  onChange={(e) => Events(e.target.value, SeriesData)}>
                            <option value="">Please Select Sports</option>
                            {serieses}
                        </select>
                        <label htmlFor="floatingInput" style={{ color: "yellow" }}>{seriesName || 'Please Select Series'}</label>
                    </div>
                    :
                    ""
                    }
                    {matchData.length > 0
                    ?
                    <div className="col-sm-12 col-xl-3">
                        <select className="form-select" required type="select" onChange={(e) => Match(e.target.value, matchData)}>
                            <option value="">Please Select Match</option>
                            {matches}
                        </select>
                        <label htmlFor="floatingInput" style={{ color: "yellow" }}>{matchName || 'Please Select Match'}</label>
                    </div>
                    :
                    ""
                    }
                    </div>
                    </nav>
                    <div className="d-flex align-items-start">
                        <div className="tab-content" id="v-pills-tabContent">
                            {listComp}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
