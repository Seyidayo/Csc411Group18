import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateStage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.value,
            Model: [],
            address: '',
            status: ''
        }

        this.onRadioChange = this.onRadioChange.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
    }

    componentDidMount() {
        const { userId, Model, username, address } = this.state;

        fetch('/api/account/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: userId
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        Model: json.userModel,
                        address: json.userAddress
                    })
                }
            })
    }

    onRadioChange(event) {
        this.setState({
            status: event.target.value
        })
    }

    onConfirmClick() {
        const { status, userId } = this.state;

        fetch('/api/account/updatestat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stat : status,
                _id: userId
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                window.location.replace('/')
            }
        })
    }

    onDeleteClick() {
        const { userId } = this.state;

        var x = confirm("Confirm delete?");

        if(x === true){
            fetch('/api/account/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: userId
                })
            }) 
            .then(res => res.json())
            .then(json => {
                if(json.success){
                    window.location.replace('/')
                }
            })
        }
    }

    render() {
        const { Model, userId, address } = this.state;
        return (
            <div>
                <div className="nav-menu fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-light navbar-expand-lg">
                                    {/* <Link className="navbar-brand" to="/device">18 DOT</Link> */}
                                    <p className="me-text">Edit Status</p>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                    <div className="collapse navbar-collapse" id="navbar">
                                        <ul className="navbar-nav ml-auto">
                                            <li><Link to="/" className="btn btn-dark">Back</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="box">
                                    <img src={require('../../images/img.jpg')} alt="User hero" width='100%' height='100%' />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="container">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td><b>Mail</b> </td>
                                                <td>{Model.username}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Address</b></td>
                                                <td>{address}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Device Name</b></td>
                                                <td>{Model.device}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Device Problem</b></td>
                                                <td>{Model.problem}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Repair Stage</b></td>
                                                <td>{Model.stage}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#modalStage">Edit</button>
                                    <button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>
                                </div>

                                <div className="modal" id="modalStage">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            {/* <!-- Modal Header --> */}
                                            <div className="modal-header">
                                                <h4>Repair Status</h4>
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>

                                            {/* <!-- Modal body --> */}
                                            <div className="modal-body">
                                                <form>
                                                    <input type="radio" name="stage" value="Received" onChange={this.onRadioChange} /> Received Request <br/>
                                                    <input type="radio" name="stage" value="Repair in Progress" onChange={this.onRadioChange} /> Repair in Progress <br/>
                                                    <input type="radio" name="stage" value="Completed" onChange={this.onRadioChange} /> Completed<br/>
                                                    <input type="radio" name="stage" value="Delivered" onChange={this.onRadioChange} /> Delivered <br/>
                                                </form>
                                            </div>

                                            {/* <!-- Modal footer --> */}
                                            <div className="modal-footer center">
                                                <button type="button" className="btn btn-success" onClick={this.onConfirmClick} >Confirm</button>
                                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateStage;