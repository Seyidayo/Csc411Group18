import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavbarDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: this.props.user,
    }
  }

  render() {
   
    const {
      userEmail,
    } = this.state;
   
    return (
      <div>
        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-light navbar-expand-lg">
                  <Link className="navbar-brand" to="/device">18 DOT</Link> 
                  <p className="text-right">Welcome {userEmail} </p>
                  {/* <a className="navbar-brand" href="index.html">18 DOT</a>  */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                      <button className="btn btn-success btn-login" >CART</button>
                      <button data-toggle="modal" data-target="#signup_page" className="btn btn-dark ">LOG OUT</button>
                    </ul>

                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarDevice;