import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MatchDeclare() {
  const [matchData, setmatchData] = useState([]);
  const [urlParams, seturlParams] = useState("cricket");
  const [urlid, setid] = useState("");
  const [videoframe, setvideoframe]= useState("");
  let params = useParams();
  // console.log(params);
  useEffect(() => {
    seturlParams(params.id);
    setid(params.game);
    getMatch(params);
  }, []);

  // setTimeout(
  //   () => getMatch(), 
  //   2000
  // );
  let getMatch = async (params) => {
    await axios
      .get(
        "https://www.victoryexch.com/get-events-by-time-frame-for-sport/inplay"
      )
      .then((res) => {
        if (res.data) {
          //   const event = res.data.events.filter((e) => e.slug === query);
          //   console.log(res.data.events,urlid);
          const event = res.data.events.filter((e) => e.slug === params.game);
          // console.log(event[0].events);
          var result = event[0].events.filter((obj) => {
            return obj.market_id === params.id;
          });
          // console.log(result);
          setmatchData(result);
          //   showMYTableHtml(setgameData);
          setvideoframe("https://nlivetv.lagaikhaipro.com/rtv.php?eventId="+matchData[0].event_id+"&t="+Date.now().toString().slice(0,10)+" ");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // setrealTime((Date.now().toString()).slice(0,10))
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <SideBar />
      <div className="content">
        <Header />
        {matchData.length === 0 || matchData[0].league_name === undefined ? (
          ""
        ) : (
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-12 col-xl-9">
                <div className="bg-secondary rounded p-4">
                  <h6 style={{ color: "yellow", fontSize: 30 }}>
                    {matchData === undefined ? (
                      "League Name"
                    ) : (
                      <>
                        {matchData[0].runners[0] +
                          " V/S " +
                          matchData[0].runners[1]}
                        <br />{" "}
                        <span style={{ color: "green", fontSize: 15 }}>
                          {" "}
                          ({matchData[0].league_name})
                        </span>
                      </>
                    )}
                  </h6>
                </div>
                <hr />
                <div className="bg-secondary rounded p-4">
                  <h6 style={{ color: "yellow", fontSize: 30 }}>Live TV</h6>
                </div>
                <iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="100%" height="220" scrolling="auto" src={videoframe}></iframe>
                <hr />
                <div className="bg-secondary rounded p-4">
                  <h6
                    className="mb-4"
                    style={{ color: "yellow", fontSize: 30 }}
                  >
                    Match Odds
                  </h6>
                  <table className="table">
                    <thead>
                      <tr className="h6" style={{ color: "yellow" }}>
                        <th scope="col" colSpan={2}>
                          #
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          Back
                        </th>
                        <th scope="col">Lay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {console.log("data", matchData[0].data)}
                        {matchData[0].data !== undefined &&
                          matchData[0].data !== null &&
                          matchData[0].data.runners.map((run, i) => (
                            <tr>
                              <th scope="row" colSpan={2} className="h6">
                                {matchData[0].runners[i]}
                              </th>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-success m-1"
                                >
                                  {run.ex.availableToBack.length === 0 ||
                                  run.ex.availableToBack[0] === undefined ||
                                  run.ex.availableToBack[0].price === undefined
                                    ? "-"
                                    : run.ex.availableToBack[0].price}
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning m-1"
                                >
                                  {run.ex.availableToLay.length === 0 ||
                                  run.ex.availableToLay[0] === undefined ||
                                  run.ex.availableToLay[0].price === undefined
                                    ? "-"
                                    : run.ex.availableToLay[0].price}
                                </button>
                              </td>
                            </tr>
                          ))}
                      </>
                    </tbody>
                  </table>
                </div>
                {matchData[0].data.runners[0] === undefined && matchData[0].data.runners[0].ex.availableToBack[1] === undefined?''
                :
                <>
                <hr />
                <div className="bg-secondary rounded p-4">
                  <h6
                    className="mb-4"
                    style={{ color: "yellow", fontSize: 30 }}
                  >
                    Bookmaker
                  </h6>
                  <table className="table">
                    <thead>
                      <tr className="h6" style={{ color: "yellow" }}>
                        <th scope="col" colSpan={2}>
                          #
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          Back
                        </th>
                        <th scope="col">Lay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {console.log("data", matchData[0].data)}
                        {matchData[0].data !== undefined &&
                          matchData[0].data !== null &&
                          matchData[0].data.runners.map((run, i) => (
                            <tr>
                              <th scope="row" colSpan={2} className="h6">
                                {matchData[0].runners[i]}
                              </th>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-success m-1"
                                >
                                  {run.ex.availableToBack.length === 0 ||
                                  run.ex.availableToBack[1] === undefined ||
                                  run.ex.availableToBack[1].price === undefined
                                    ? "-"
                                    : run.ex.availableToBack[1].price}
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning m-1"
                                >
                                  {run.ex.availableToLay.length === 0 ||
                                  run.ex.availableToLay[1] === undefined ||
                                  run.ex.availableToLay[1] ===  undefined
                                    ? "-"
                                    : run.ex.availableToBack[1].price}
                                </button>
                              </td>
                            </tr>
                          ))}
                      </>
                    </tbody>
                  </table>
                </div>
                </>
                }
                {matchData[0].data.runners[0] === undefined && matchData[0].data.runners[0].ex.availableToBack[2] === undefined?''
                :
                <>
                <hr />
                <div className="bg-secondary rounded p-4">
                  <h6
                    className="mb-4"
                    style={{ color: "yellow", fontSize: 30 }}
                  >
                    Fancy
                  </h6>
                  <table className="table">
                    <thead>
                      <tr className="h6" style={{ color: "yellow" }}>
                        <th scope="col" colSpan={2}>
                          #
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          Back
                        </th>
                        <th scope="col">Lay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {console.log("data", matchData[0], Date.now().toString().slice(0,10))}
                        {matchData[0].data !== undefined &&
                          matchData[0].data !== null &&
                          matchData[0].data.runners.map((run, i) => (
                            <tr>
                              <th scope="row" colSpan={2} className="h6">
                                {matchData[0].runners[i]}
                              </th>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-success m-1"
                                >
                                  {run.ex.availableToBack.length === 0 ||
                                  run.ex.availableToBack[2] === undefined ||
                                  run.ex.availableToBack[2].price === undefined
                                    ? "-"
                                    : run.ex.availableToBack[2].price}
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning m-1"
                                >
                                  {run.ex.availableToLay.length === 0 ||
                                  run.ex.availableToLay[2] === undefined ||
                                  run.ex.availableToLay[2].price === undefined
                                    ? "-"
                                    :run.ex.availableToLay[2].price}
                                </button>
                              </td>
                            </tr>
                          ))}
                      </>
                    </tbody>
                  </table>
                </div>
                </>
                }
              </div>

              <div className="col-sm-12 col-xl-3">
                <div className="bg-secondary rounded h-100 p-4">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Bet Slip
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Open Bets
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      bet form and amount / bet number
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >List of running bets
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
