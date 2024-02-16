import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function Recharge() {
  const [Status, setStatus] = useState(0);
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <div className="col-sm-12 col-xl-12">
          <div
            className="bg-secondary h-100"
            style={{ padding: "0.5rem !important" }}
          >
            <h6
              className="mb-4"
              style={{ paddingTop: "10px", paddingLeft: "10px" }}
            >
              Recharge Request
            </h6>
            <form
              className="d-none d-md-flex ms-4"
              style={{ width: "fit-content" }}
            >
              <div className="form-floating mb-3 m-2">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Amount"
                />
                <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                  Enter Amount
                </label>
              </div>
              <div className="form-floating mb-3 m-2">
                <select
                  className="form-select"
                  id="floatingInput"
                  type="select"
                >
                  <option value="" className="form-select">Select Payment Type</option>
                  <option value="1" className="input-group-text">Google Pay</option>
                  <option value="2">Phonepe</option>
                  <option value="3">Paytm</option>
                  <option value="4">Wallet</option>
                  <option value="5">Cash Deposit</option>
                  <option value="6">Cheque</option>
                </select>
                <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                  Payment Type
                </label>
              </div>
              <div className="form-floating mb-3 m-2">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Transaction/UTR Number"
                />
                <label htmlFor="floatingInput" style={{ color: "yellow" }}>
                  Transaction/UTR Number
                </label>
              </div>
              <button type="submit" className="btn btn-warning m-2">
                Recharge Wallet
              </button>
            </form>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Transaction Number / UTR</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>John</td>
                  <td>100000</td>
                  <td>Phonepe</td>
                  <td>5441697165145484</td>
                  <td>
                    {Status === 1 ? (
                      <button
                        type="button"
                        className="btn btn-outline-success m-1"
                        title="Deposit and Withdraw Money"
                      >
                        Success
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-danger m-1"
                        title="Deposit and Withdraw Money"
                      >
                        Pending
                      </button>
                    )}
                  </td>
                  <td>20/09/2023</td>
                  {/* <td>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Deposit and Withdraw Money" style={{width: '30px',height: '30px'}} data-bs-toggle="modal" data-bs-target="#sendMoney"><i className="far fa-money-bill-alt" ></i></button>
                                    </td> */}
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>100000</td>
                  <td>Googlepay</td>
                  <td>5441697165145484</td>
                  <td>
                    {Status === 1 ? (
                      <button
                        type="button"
                        className="btn btn-outline-success m-1"
                        title="Deposit and Withdraw Money"
                      >
                        Success
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-danger m-1"
                        title="Deposit and Withdraw Money"
                      >
                        Pending
                      </button>
                    )}
                  </td>
                  <td>20/09/2023</td>
                  {/* <td>
                                    <button type="button" className="btn btn-square btn-outline-warning m-1" title="Deposit and Withdraw Money" style={{width: '30px',height: '30px'}} data-bs-toggle="modal" data-bs-target="#sendMoney"><i className="far fa-money-bill-alt" ></i></button>
                                    </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <SendMoney /> */}
      </div>
      <Footer />
    </>
  );
}
