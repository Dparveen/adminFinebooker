import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import configure from "../BaseUrl";
import { Link } from 'react-router-dom';

export default function SportsList() {
  const [gameData, setgameData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('protect'));
    if (auth.token) {
      setToken(auth.token);
      getMatch(auth.token);
    }
  }, [update]);

  const radioBtn = useMemo(() => (status, eventType) => {
    if (token && !loading) {
      setLoading(true);

      let data = JSON.stringify({
        eventType: eventType,
        status: status
      });

      let config = {
        url: configure.SERVER_URL + 'game/update/sports',
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
            setgameData(response.data.data);
            // console.log('Button api');
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

  let getMatch = async (tkn) => {
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
          setgameData(response.data.data);
          // console.log('api');
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const gamePlay = useMemo(() => {
    return gameData.map((matches, i) => (
      <tr key={i} className='text-warning'>
        {matches.data === undefined || matches.data === null ? (
          <>
            <td>{i + 1}</td>
            <td className="h6 text-warning">{matches.name}</td>
            <td>
              {matches.status === 1 ? (
                <i className="fa fa-check-circle text-success"></i>
              ) : (
                <i className='fas fa-ban text-danger'></i>
              )}
            </td>
            <td>
              {matches.status === 1 ?
                <i className='fas fa-ban text-danger' onClick={() => radioBtn(0, matches.eventType)}></i>
                : <i className='fas fa-check-circle text-success' onClick={() => radioBtn(1, matches.eventType)}></i>
              }
            </td>
          </>
        ) : (
          ''
        )}
      </tr>
    ));
  }, [gameData, radioBtn]);

  return (
    <div className="container-fluid pt-4 px-4">
      <h5 className='h5 text-warning'>Sports Control</h5>
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{ borderColor: '#fff' }}>
          <thead className='h5 text-warning'>
            <tr>
              <th>Sr.</th>
              <th>Sports Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{gamePlay}</tbody>
        </table>
      </div>
    </div>
  );
}
