import React, {Component} from 'react';

class InfoPage extends Component {
    render(){
        return(
            <div>
            <div className="section light-bg" id="HIW">
                <div className="section-title">
                    <h3>HOW IT WORKS</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-flex align-items-center">
                            <ul className="list-unstyled ui-steps">
                                <li className="media">
                                    <div className="circle-icon mr-4">1</div>
                                    <div className="media-body">
                                        <h5>LOG IN/SIGN UP</h5>
                                        <p>LOGIN FROM THE ABOVE BAR OR SIGN UP TO CREATE ACCOUNT</p>
                                    </div>
                                </li>
                                <li className="media my-4">
                                    <div className="circle-icon mr-4">2</div>
                                    <div className="media-body">
                                        <h5>SELECT DEVICE</h5>
                                        <p>SELECT YOUR DEVICE </p>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="circle-icon mr-4">3</div>
                                    <div className="media-body">
                                        <h5>SELECT PROBLEM</h5>
                                        <p>SELECT PROBLEM(S) FROM LIST GIVEN. IF PROBLEM IS NOT ONLIST CLICK OTHERS</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="circle-icon mr-4">4</div>
                                    <div className="media-body">
                                        <h5>WE FIX IT</h5>
                                        <p>WE COME TO YOUR DOOR STEP, COLLECT IT AND FIX IT </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="light-bg py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="
                        text-center text-lg-left">
                            <p className="mb-2"> <span className="mr-2"></span> Lagos,Nigeria</p>
                            <div className=" d-block d-sm-inline-block">
                                <p className="mb-2">
                                    <span className="mr-2"></span> <a className="mr-4">team13@mail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default InfoPage