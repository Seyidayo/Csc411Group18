import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Step1 extends Component {
    render(){
        return(
            <div>
                <ul className="progress_bar">
                    <li className="active">Received</li>
                    <li>Work in Progress</li>
                    <li>Completed</li>
                    <li>Delivered</li>
                </ul>
            </div>
        )
    }
}

class Step2 extends Component {
    render(){
        return(
            <div>
                <ul className="progress_bar">
                    <li className="active">Received</li>
                    <li className="active">Work in Progress</li>
                    <li>Completed</li>
                    <li>Delivered</li>
                </ul>
            </div>
        )
    }
}

class Step3 extends Component {
    render(){
        return(
            <div>
                <ul className="progress_bar">
                    <li className="active">Received</li>
                    <li className="active">Work in Progress</li>
                    <li className="active">Completed</li>
                    <li>Delivered</li>
                </ul>
            </div>
        )
    }
}

class Step4 extends Component {
    render(){
        return(
            <div>
                <ul className="progress_bar">
                    <li className="active">Received</li>
                    <li className="active">Work in Progress</li>
                    <li className="active">Completed</li>
                    <li className="active">Delivered</li>
                </ul>
            </div>
        )
    }
}

function change(x) {
    if(x === "Received Request"){
        return <Step1 />
    }

    else if(x === "Repair in Progress"){
        return <Step2 />
    }

    else if(x === "Completed"){
        return <Step3 />
    }

    else if(x === "Delivered"){
        return <Step4 />
    }
}

export const CartDetails = ({ CartProps }) => {
    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Problem</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartProps.map((cartdets, index) =>
                            <tr key={index}>
                                <td>{cartdets.device}</td>
                                <td>{cartdets.problem}</td>
                                <td>{cartdets.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export const RepairDetails = ({ CartProps }) => {
    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Problem</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartProps.map((cartdets, index) =>
                            <tr key={index}>
                                <td>{cartdets.device}</td>
                                <td>{cartdets.problem}</td>
                                <td>{change(cartdets.stage)}</td>
                                {/* <td>{cartdets.stage}</td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export const AllRepairDetails = ({ CartProps }) => {
    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Device Name</th>
                        <th>Problem</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartProps.map((cartdets, index) =>
                            <tr key={index}>
                                <td>{cartdets.username}</td>
                                <td>{cartdets.device}</td>
                                <td>{cartdets.problem}</td>
                                <td>{change(cartdets.stage)}</td>
                                
                                <td><Link to={'/update/' + cartdets._id} className="btn btn-primary">Edit</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}