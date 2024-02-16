import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import configure from "../BaseUrl";
import { Link } from 'react-router-dom';

export default function MatchList() {
  const [SportsData, setSportsData] = useState([]);
  const [Sport, setSport] = useState('');
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
        //   console.log('api',response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  const onButton = useMemo(() => (eventType, name) => {
    
    if (token && !loading) {
      setLoading(true);

      // let data = JSON.stringify({
      //   eventType: eventType
      // });

      let config = {
        url: configure.SERVER_URL + 'game/' + eventType + '/sports',
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
            setSeriesData(response.data.data);
            console.log('Sports Filter', response.data);
            update === false ? setUpdate(true) : setUpdate(false);
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
  }, [token, loading]);

  const radioBtn = useMemo(() => (status, comp, match) => {
    if (token && !loading) {
      setLoading(true);

      let data = JSON.stringify({
        comp: comp,
        status: status
      });
// console.log(status,comp, match)
      let config = {
        url: configure.SERVER_URL + 'game/match/update/'+match+'',
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
            setMatchData(response.data.data);
            // console.log('Button api');
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token, loading, update]);
//   console.log("match",MatchData)
  const gamePlay = useMemo(() => {
    // {console.log(MatchData)}
    return MatchData.map((matches, i) => (
      <tr key={i} className='text-warning'>
            <td>{i + 1}</td>
            <td className="h6 text-warning">{matches.eventName}{matches.eventId} <br /> <span className="text-primary">{matches.eventCountry}</span></td>
            <td>
              {matches.status === 1 ? (
                <i className="fa fa-check-circle text-success"></i>
              ) : (
                <i className='fas fa-ban text-danger'></i>
              )}
            </td>
            <td>
              {matches.status === 1 ?
                <i className='fas fa-ban text-danger' onClick={() => radioBtn(0, matches.CompetitionID, matches.eventId)}></i>
                : <i className='fas fa-check-circle text-success' onClick={() => radioBtn(1, matches.CompetitionID, matches.eventId)}></i>
              }
            </td>
      </tr>
    ));
  }, [SportsData, radioBtn]);

  const Sports = useMemo(() => (val,data)=>{
    // console.log(val)
        setSport(val);
        setMatchData([]);
        setseriesName('Please Select Series')
        const event = data.filter((e) => e.eventType === Number(val));
        // console.log(event[0],val,token);
        event.length === 0 || event[0].name === undefined? setgameName(''): setgameName(event[0].name);
            setLoading(true);
            let config = {
              url: configure.SERVER_URL + 'game/' + val + '/sports',
              headers: {
                'Content-Type': 'application/json',
                token: token
              },
            };
      
            const axiosConfig = {
              headers: config.headers,
            //   maxRedirects: 0
            };
      
            axios.post(config.url, axiosConfig)
              .then((response) => {
                if (response.data.status === true) {
                  setSeriesData(response.data.data);
                //   console.log('Sports Filter', response.data);
                  update === false ? setUpdate(true) : setUpdate(false);
                }
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => {
                setLoading(false);
              });
  },[])

  const SeriesFun = useMemo(() => (val,ser, spo)=>{
    // setSport(val);
    const event = ser.filter((e) => e.competitionID === Number(val));
    // console.log(event[0],val,ser,spo);
    event.length === 0 || event[0].competitionName === undefined? setseriesName(''): setseriesName(event[0].competitionName);
        setLoading(true);
        // let data = JSON.stringify({
        //     eventId: spo
        //   });
        let config = {
          url: configure.SERVER_URL + 'game/' + val + '/match',
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        };
  
        const axiosConfig = {
          headers: config.headers,
        //   maxRedirects: 0
        };
  
        axios.post(config.url, axiosConfig)
          .then((response) => {
            if (response.data.status === true) {
              setMatchData(response.data.data);
              console.log('Match Filter', response.data);
              update === false ? setUpdate(true) : setUpdate(false);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
    // console.log(Sport, val)
},[])

  const games = SportsData.map((game, index) =>
    <option key={index} value={game.eventType}>{game.name}</option>
  );

  const Series =
  <>
  {SeriesData.length !== 0 ?
  <>
  {/* {console.log(SeriesData)} */}
  <div className="form-floating mb-3">
  <select className="form-select" required  type="select" value={serise} onChange={(e)=>SeriesFun(e.target.value,SeriesData, Sport)}>
                {SeriesData.map((series, index) =>
                        <option key={index} value={series.competitionID}>{series.competitionName}</option>
        )}
              </select>
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>{seriesName}</label>
</div>
  </>
  :<></>}
  </>
  
  return (
    <div className="container-fluid pt-4 px-4">
      <nav>
      <div className="form-floating mb-3">
              <select className="form-select" required  type="select" value={Sport} onChange={(e)=>Sports(e.target.value, SportsData)}>
              <option value="">Please Select Sports</option>
                {games}
              </select>
              <label htmlFor="floatingInput" style={{ color: "yellow" }}>{gameName || 'Please Select Sports'}</label>
              {/* {Sport === "" ? <p className="h6 text-danger">Please Select Sports</p>:''} */}
              </div>
              {Series}
        {/* <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {games}
        </div> */}
      </nav>
      <h5 className='h5 text-light'>Match Control of Sports Name : <u className='text-warning'>{gameName}
       { '  / Series Name :'+ seriesName}</u></h5>
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
          <thead className='h5 text-warning'>
            <tr>
              <th>Sr.</th>
              <th>Match Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                MatchData.length !== 0 ? gamePlay : <tr><td>No Competition Found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
