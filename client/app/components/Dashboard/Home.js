import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom'
import { getFromStorage, setInStorage } from '../../utils/storage'

import LandingPage from '../Branches/Intro.jsx'
import InfoPage from '../Branches/Info.jsx'
import Footer from '../FooterComponent/footer.jsx'

import Device from './Device'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',

      signInEmail: '',
      signInPassword: '',
      signInError: '',

      signUpEmail: '',
      signUpPassword: '',
      signUpConfirmPassword: '',
      signUpAddress: '',
      signUpError: '',
    }

    this.onSignInEmailChange = this.onSignInEmailChange.bind(this);
    this.onSignInPasswordChange = this.onSignInPasswordChange.bind(this);

    this.onSignUpEmailChange = this.onSignUpEmailChange.bind(this);
    this.onSignUpPasswordChange = this.onSignUpPasswordChange.bind(this);
    this.onSignUpAddressChange = this.onSignUpAddressChange.bind(this);
    this.onSignUpConfirmPasswordChange = this.onSignUpConfirmPasswordChange.bind(this);

    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }
  
  componentDidMount() {
    const obj = getFromStorage('the_fix_app');
  
    if (obj && obj.token) {
      const { token } = obj
      fetch('/api/account/verify', {
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
              token: json._id,
            });
          } else {
            this.setState({
              token: '',
            })
          }
        });
    }
    else {
      this.setState({
        token: '',
      })
    }
  }

  onSignInClick() {
    const {
      signInEmail,
      signInPassword,
      signInError
    } = this.state;

    if (signInPassword != '' && signInEmail != '') {
      fetch('/api/account/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setInStorage('the_fix_app', { token: json.token })
            this.setState({
              signInError: json.message,
              token: json.token,
            });
            window.location.reload();
          }
          else {
            this.setState({
              signInError: json.message,
              signInEmail: '',
              signInPassword: '',
            })
          }
        });

    } else {
      this.setState({
        signInError: "Invalid Username or Password"
      })
    }

  }

  onSignInEmailChange(event) {
    this.setState({
      signInEmail: event.target.value,
      signInError: ''
    })
  }

  onSignInPasswordChange(event) {
    this.setState({
      signInPassword: event.target.value,
      signInError: ''
    })
  }

  onSignUpEmailChange(event) {
    this.setState({
      signUpEmail: event.target.value,
      signUpError: ''
    })
  }

  onSignUpPasswordChange(event) {
    this.setState({
      signUpPassword: event.target.value,
      signUpError: ''
    })
  }

  onSignUpConfirmPasswordChange(event) {
    this.setState({
      signUpConfirmPassword: event.target.value,
      signUpError: ''
    })
  }

  onSignUpAddressChange(event) {
    this.setState({
      signUpAddress: event.target.value,
      signUpError: ''
    })
  }

  onSignUpClick() {
    const {
      signUpEmail,
      signUpAddress,
      signUpPassword,
      signUpConfirmPassword,
    } = this.state;

    // alert(signUpEmail+' '+ signUpAddress +' '+ signUpPassword+ ' '+ signUpConfirmPassword);

    if (signUpPassword !== signUpConfirmPassword) {
      this.setState({
        signUpError: 'Passwords do not match'
      })
    }
    else {

      // alert(signUpEmail+" "+signUpAddress+" "+ signUpPassword)
      fetch('/api/account/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signUpEmail,
          address: signUpAddress,
          password: signUpPassword,
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              signUpError: json.message,
            });
          }
        });
    }
  }
  
	render() {
    const{
      token,

      signInEmail,
      signInPassword,
      signInError,

      signUpEmail,
      signUpPassword,
      signUpConfirmPassword,
      signUpAddress,
      signUpError,
    
    } = this.state;

    if(!token){
      return (
        <div data-spy="scroll" data-target="#navbar" data-offset="30">
          {/* <Navbar /> */}
          <div>
            <div className="nav-menu fixed-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <nav className="navbar navbar-light navbar-expand-lg">
                      <Link className="navbar-brand" to="/">18 DOT</Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                      <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item"> <a className="nav-link active" href="#home">HOME <span className="sr-only">(current)</span></a> </li>
                          <li className="nav-item"> <a className="nav-link" href="#HIW">HOW IT WORKS</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="#contact">CONTACT US</a> </li>
                          <li><p>{signUpError}</p></li>

                        </ul>
                        <a href="#" data-target="#login_page" data-toggle="modal"> <button className="btn btn-primary btn-login" >LOGIN</button></a>
                        <button data-toggle="modal" data-target="#signup_page" className="btn btn-dark ">SIGN UP</button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>


            <div className="modal" id="signup_page">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Welcome Prospective Client!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <div className="login_section">
                      <p>{signUpError}</p>
                      {/* <a className="navbar-brand" href="index.html">13 DOT</a> */}
                      <input type="text" className="form-control" placeholder="Email/Username" value={signUpEmail} onChange={this.onSignUpEmailChange} required />
                      <input type="password" className="form-control" placeholder="Password" value={signUpPassword} onChange={this.onSignUpPasswordChange} required />
                      <input type="password" className="form-control" placeholder="Confirm Password" value={signUpConfirmPassword} onChange={this.onSignUpConfirmPasswordChange} required />
                      <input type="text" className="form-control" placeholder="Address" value={signUpAddress} onChange={this.onSignUpAddressChange} required />

                      <button className="btn btn-block btn-primary" onClick={this.onSignUpClick}>SUBMIT</button>
                    </div>

                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer text-center">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>

            <div className="modal" id="login_page">
              <div className="modal-dialog">
                <div className="modal-content">

                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4>Welcome Client</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <div className="login_section">
                      <p>{signInError}</p>
                      {/* <a className="navbar-brand" href="index.html">13 DOT</a> */}
                      <input type="text" className="form-control" placeholder="Email/Username" value={signInEmail} onChange={this.onSignInEmailChange} required />
                      <input type="password" className="form-control" placeholder="Password" value={signInPassword} onChange={this.onSignInPasswordChange} required />
                      <button type='submit' value='submit' id="b_submit" className="btn btn-block btn-primary" onClick={this.onSignInClick} >LOGIN</button>
                    </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer center">
                    <div>
                      <p className="fade">Not a member yet? <a href="#">join now</a></p>
                    </div>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <LandingPage />
          <InfoPage />
          <Footer />
        </div>
        
      )
    }

    else if(token) {
      return(
        <Device userDetails={token} />
      )
    }
  }
}

export default Home;
