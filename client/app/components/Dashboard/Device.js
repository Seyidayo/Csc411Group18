import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { deleteFromStorage } from '../../utils/storage'

import NavbarDevice from '../NavigationComponent/NavbarDevice.jsx'
import DeviceList from '../Dashboard/DeviceList.jsx'
import { CartDetails } from './cart'

class Devices extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: this.props.userDetails,
      email: '',
      cardPin: '',
      cardError: '',
      cartItems: []
    }

    this.onLogOutClick = this.onLogOutClick.bind(this);
    this.onCartClick = this.onCartClick.bind(this);

    this.onPayClick = this.onPayClick.bind(this);
    this.onCartDeleteClick = this.onCartDeleteClick.bind(this);

    this.onCardPinChange = this.onCardPinChange.bind(this);
  }

  componentDidMount() {
    const { token, email } = this.state;

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
  }

  onLogOutClick() {
    
    const {token} = this.state;
    
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

  onCartClick(){
    const { cartItems } = this.state;

    fetch('/api/account/cartpull')
    .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.setState({
                    cartItems: json.cartModel
                });
            }
        });
  }

  onPayClick() {
      const { cartItems, cardPin, cardError } = this.state;

      if(cardPin !== "GROUP-18-PIN"){
          this.setState({
              cardError: "Invalid Card Number"
          })
      }

      fetch('/api/account/cartPay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          repair: cartItems
        })
      })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log("Paid For")
        }
      });
      
  }

  onCartDeleteClick() {
      fetch('/api/account/cartdelete')
      .then(res => res.json())
      .then(json => {
          if(json.success) {
              console.log('boom deleted')
          }
      })
  }

  onCardPinChange(event) {
    this.setState({
        cardPin: event.target.value,
        cardError: '',
    })
  }

  render() {
    const {
      email,
      cardPin,
      cardError,
      cartItems,
    } = this.state;

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
                                    <li><button className="btn btn-success btn-login" data-toggle="modal" data-target="#cartModal" onClick={this.onCartClick} >CART</button></li>
                                    <li><button className="btn btn-dark" onClick={this.onLogOutClick}>LOG OUT</button></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                </div>
            </div>

            <div className="modal" id="cartModal">                    
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Cart</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <CartDetails CartProps = {cartItems} />
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer text-center">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-dismiss="#cartModal" data-target = "#pay">Pay</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.onCartDeleteClick}>Delete Cart</button>
                        </div>
                    </div>
                </div>

                <div className="modal" id="pay">                    
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Cart</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/* <!-- Modal body --> */}
                        
                        <div className="modal-body">
                            <p>Enter GROUP-18-PIN</p>
                            <p className="text-center">{cardError}</p>
                            <input type="text" className="modal-input" value={cardPin} onChange={this.onCardPinChange} />
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer text-center">
                            <button type="button" className="btn btn-success" onClick={this.onPayClick}>Pay</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                        </div>

                        

                    </div>
                </div>
                </div>
            </div>

        <DeviceList user={email} />

        {/* <TrackRepair user={email} /> */}
      </div>
    )
  }
}

export default Devices;