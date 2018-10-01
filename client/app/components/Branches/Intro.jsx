import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return(

            <div>
                <header className="bg-gradient" id="home">
                    <div className="container mt-5">
                        <p className="big-label">YOU NEED IT FIXED? WE FIX IT</p>
                    </div>
                    <div className="section" id="gallery">
                        <div className="container">
                            <div className="img-gallery owl-carousel owl-theme">
                                <img src={require('../../images/screen2.jpg')} alt="image"/>
                                <img src={require('../../images/screen3.jpg')} alt="image"/>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default LandingPage;