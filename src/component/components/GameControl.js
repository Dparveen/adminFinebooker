import React from 'react'

export default function GameControl() {
  return (
    <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Control Game</h6>
                        <div className="btn-group" role="group">
                                <button type="button" className="btn btn-danger">InPlay</button>
                                <button type="button" className="btn btn-warning">Today</button>
                                <button type="button" className="btn btn-success">Tomorrow</button>
                            </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{borderColor: '#fff'}}>
                        <thead><h6 className="mb-0"><i className="fas fa-baseball-ball"></i> Cricket</h6></thead>
                            <tbody>
                                <tr>
                                    <td><h6 style={{color:'yellow'}}>Team1 / team 2 </h6><span style={{color:'white'}}>Status according to button</span></td>
                                    <td>
                                    <button type="button" className="btn btn-success m-1">1.00</button> <button type="button" className="btn btn-warning m-1">1.25</button>
                                    <button type="button" className="btn btn-success m-1">1.20</button> <button type="button" className="btn btn-warning m-1">1.50</button>
                                    <button type="button" className="btn btn-success m-1">1.40</button> <button type="button" className="btn btn-warning m-1">1.90</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{borderColor: '#fff'}}>
                            <thead><h6 className="mb-0"><i className="fas fa-futbol"></i> SOCCER</h6></thead>
                            <tbody>
                                <tr>
                                    <td><h6 style={{color:'yellow'}}>Team1 / team 2 </h6><span style={{color:'white'}}>Status according to button</span></td>
                                    <td>
                                    <button type="button" className="btn btn-success m-1">1.00</button> <button type="button" className="btn btn-warning m-1">1.25</button>
                                    <button type="button" className="btn btn-success m-1">1.20</button> <button type="button" className="btn btn-warning m-1">1.50</button>
                                    <button type="button" className="btn btn-success m-1">1.40</button> <button type="button" className="btn btn-warning m-1">1.90</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0" style={{borderColor: '#fff'}}>
                            <thead><h6 className="mb-0"><i className="fas fa-table-tennis"></i> Tennis</h6></thead>
                            <tbody>
                                <tr>
                                    <td><h6 style={{color:'yellow'}}>Team1 / team 2 </h6><span style={{color:'white'}}>Status according to button</span></td>
                                    <td>
                                    <button type="button" className="btn btn-success m-1">1.00</button> <button type="button" className="btn btn-warning m-1">1.25</button>
                                    <button type="button" className="btn btn-success m-1">1.20</button> <button type="button" className="btn btn-warning m-1">1.50</button>
                                    <button type="button" className="btn btn-success m-1">1.40</button> <button type="button" className="btn btn-warning m-1">1.90</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  )
}
