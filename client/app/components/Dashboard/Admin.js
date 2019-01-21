import React, { Component } from 'react';

import { deleteFromStorage } from '../../utils/storage'
import { AllRepairDetails } from '../Branches/cart'
class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: this.props.userDetails,
            email: '',
            allRepairs: []
        }

        this.onLogOutClick = this.onLogOutClick.bind(this);
    }

    componentDidMount() {
        const { token, email, allRepairs } = this.state;

        fetch('/api/account/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token
            })
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({
                    email: json.email,
                    message: json.message,
                });
            }
        });

        fetch('/api/account/alldetails')
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        allRepairs: json.allRepairs
                    });
                }
            });
    }

    onLogOutClick() {

        const { token } = this.state;

        fetch('/api/account/signout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: token
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    deleteFromStorage('the_fix_app');
                    window.location.reload();
                } else {
                    alert('Unsuccessful Log Out')
                }
            });

    }

    render() {
        const { email, allRepairs } = this.state;
        return (
            <div>
                <div className="nav-menu fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-light navbar-expand-lg">
                                    {/* <Link className="navbar-brand" to="/device">18 DOT</Link> */}
                                    <p className="me-text">Welcome {email}</p>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                    <div className="collapse navbar-collapse" id="navbar">
                                        <ul className="navbar-nav ml-auto">
                                            <li><button className="btn btn-dark" onClick={this.onLogOutClick}>LOG OUT</button></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <AllRepairDetails CartProps={allRepairs} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;