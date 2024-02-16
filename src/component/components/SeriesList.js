import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import configure from "../BaseUrl";
import { Link } from 'react-router-dom';

export default function SeriesList() {
  const [SportsData, setSportsData] = useState([]);
  const [SeriesData, setSeriesData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameName, setgameName] = useState('Cricket')

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('protect'));
    if (auth.token) {
      setToken(auth.token);
      getSports(auth.token);
    }
  }, []);

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
      maxRedirects: 0
    };
    axios
      .post(config.url, axiosConfig)
      .then((response) => {
        if (response.data.status === true) {
          setSportsData(response.data.data);
          console.log('api');
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  const onButton = useMemo(() => (eventType, name) => {
    setgameName(name);
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
        maxRedirects: 0
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
      console.log(eventType)
    }
  }, [token, loading]);

  const radioBtn = useMemo(() => (status, eventType, EventTypeID) => {
    if (token && !loading) {
      setLoading(true);

      let data = JSON.stringify({
        eventType: eventType,
        status: status
      });

      let config = {
        url: configure.SERVER_URL + 'game/update/competition/'+EventTypeID,
        headers: {
          'Content-Type': 'application/json',
          token: token
        },
        data: data
      };

      const axiosConfig = {
        headers: config.headers,
        maxRedirects: 0
      };

      axios.post(config.url, data, axiosConfig)
        .then((response) => {
          if (response.data.status === true) {
            setSeriesData(response.data.data);
            console.log('Button api');
            update === false ? setUpdate(true) : setUpdate(false);
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
  const gamePlay = useMemo(() => {
    return SeriesData.map((matches, i) => (
      <tr key={i} className='text-warning'>
        {matches.data === undefined || matches.data === null ? (
          <>
            <td>{i + 1}</td>
            <td className="h6 text-warning">{matches.competitionName} <br /> <span className="text-primary">{matches.competitionRegion}</span></td>
            <td>
              {matches.status === 1 ? (
                <i className="fa fa-check-circle text-success"></i>
              ) : (
                <i className='fas fa-ban text-danger'></i>
              )}
            </td>
            <td>
              {matches.status === 1 ?
                <i className='fas fa-ban text-danger' onClick={() => radioBtn(0, matches.competitionID, matches.EventTypeID)}></i>
                : <i className='fas fa-check-circle text-success' onClick={() => radioBtn(1, matches.competitionID, matches.EventTypeID)}></i>
              }
            </td>
          </>
        ) : (
          ''
        )}
      </tr>
    ));
  }, [SportsData, radioBtn]);


  const games = SportsData.map((game, index) =>
    <button className="btn btn-success nav-link m-2" key={index} id="nav-inplay-tab" data-bs-toggle="tab" value={game.name} data-bs-target="#nav-inplay" type="button" role="tab" aria-controls="nav-inplay" aria-selected="true" onClick={() => onButton(game.eventType, game.name)}>{game.name}</button>
  );
  return (
    <div className="container-fluid pt-4 px-4">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {games}
        </div>
      </nav>
      <h5 className='h5 text-light'>Series Control of <u className='text-warning'>{gameName}</u></h5>
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
          <thead className='h5 text-warning'>
            <tr>
              <th>Sr.</th>
              <th>Series Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {console.log(SeriesData)}
            {
              SeriesData.length !== 0 ? gamePlay : <tr><td>No Competition Found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
