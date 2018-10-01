import React, { Component } from 'react'

class  DeviceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'user',

            appleLaptopProblem: 'none',

            hpLaptopProblem: 'none',

            dellLaptopProblem: 'none',

            samsungDeviceProblem: 'none',

            appleHandheldDeviceName: '',
            appleHandheldDeviceProblem: 'none',

            otherDeviceName: '',
            otherDeviceProblem: 'none',

            otherLaptopName: '',
            otherLaptopProblem: 'none',
            cartItems: [],
        }


        this.onAppleLaptopProblem = this.onAppleLaptopProblem.bind(this);
        this.onAppleLaptopSubmitClick = this.onAppleLaptopSubmitClick.bind(this);

        this.onDellLaptopProblemChange = this.onDellLaptopProblemChange.bind(this);
        this.onDellLaptopSubmitClick = this.onDellLaptopSubmitClick.bind(this);

        this.onHpLaptopSubmitClick = this.onHpLaptopSubmitClick.bind(this);
        this.onHpLaptopProblemChange = this.onHpLaptopProblemChange.bind(this);

        this.onOtherLaptopNameChange = this.onOtherLaptopNameChange.bind(this);
        this.onOtherLaptopSubmitClick = this.onOtherLaptopSubmitClick.bind(this);
        this.onOtherLaptopProblemChange = this.onOtherLaptopProblemChange.bind(this);

        this.onOtherDeviceNameChange = this.onOtherDeviceNameChange.bind(this);
        this.onOtherDeviceSubmitClick = this.onOtherDeviceSubmitClick.bind(this);
        this.onOtherDeviceProblemChange = this.onOtherDeviceProblemChange.bind(this);

        this.onSamsungDeviceSubmitClick = this.onSamsungDeviceSubmitClick.bind(this);
        this.onSamsungDeviceProblemChange = this.onSamsungDeviceProblemChange.bind(this);

        this.onAppleHandheldNameChange = this.onAppleHandheldNameChange.bind(this);
        this.onAppleHandheldSubmitClick = this.onAppleHandheldSubmitClick.bind(this);
        this.onAppleHandheldProblemChange = this.onAppleHandheldProblemChange.bind(this);



    }

    componentDidMount() {
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

    onAppleLaptopProblem(event) {
        this.setState({
            appleLaptopProblem: event.target.value
        })
    }

    onAppleHandheldNameChange(event) {
        this.setState({
            appleHandheldDeviceName: event.target.value
        })
    }

    onAppleHandheldProblemChange(event) {
        this.setState({
            appleHandheldDeviceProblem: event.target.value
        })
    }

    onDellLaptopProblemChange(event) {
        this.setState({
            dellLaptopProblem: event.target.value
        })
    }

    onHpLaptopProblemChange(event) {
        this.setState({
            hpLaptopProblem: event.target.value
        })
    }

    onOtherLaptopProblemChange(event) {
        this.setState({
            otherLaptopProblem: event.target.value
        })
    }

    onOtherLaptopNameChange(event) {
        this.setState({
            otherLaptopName: event.target.value
        })
    }

    onOtherDeviceNameChange(event) {
        this.setState({
            otherDeviceName: event.target.value
        })
    }

    onOtherDeviceProblemChange(event) {
        this.setState({
            otherDeviceProblem: event.target.value
        })
    }

    onSamsungDeviceProblemChange(event) {
        this.setState({
            samsungDeviceProblem: event.target.value
        })
    }

    onAppleLaptopSubmitClick() {
        const { appleLaptopProblem, email } = this.state

        if (appleLaptopProblem != "none") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: "Apple Macbook",
                    problem: appleLaptopProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            appleLaptopProblem: ''
                        })
                    }
                })
        }
    }

    onDellLaptopSubmitClick() {
        const { dellLaptopProblem, email } = this.state

        if (dellLaptopProblem != 'none') {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: "Dell",
                    problem: dellLaptopProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            dellLaptopProblem: ''
                        })
                    }
                })
        }
    }

    onHpLaptopSubmitClick() {
        const { hpLaptopProblem, email } = this.state

        if (hpLaptopProblem != "none") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: "Hp",
                    problem: hpLaptopProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            hpLaptopProblem: ''
                        })
                    }
                })
        }
    }

    onOtherLaptopSubmitClick() {
        const { otherLaptopName, otherLaptopProblem, email } = this.state

        if (otherLaptopProblem != "none" || otherLaptopName != "") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: otherLaptopName,
                    problem: otherLaptopProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            otherLaptopName: '',
                            otherLaptopProblem: ''
                        })
                    }
                })
        }
    }

    onOtherDeviceSubmitClick() {
        const { otherDeviceName, otherDeviceProblem, email } = this.state

        if (otherDeviceProblem != "none" || otherDeviceName != "") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: otherDeviceName,
                    problem: otherDeviceProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            otherDeviceName: '',
                            otherDeviceProblem: ''
                        })
                    }
                })
        }
    }

    onSamsungDeviceSubmitClick() {
        const { samsungDeviceProblem, email } = this.state

        if (samsungDeviceProblem != "none") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: "Samsung Tablet",
                    problem: samsungDeviceProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            samsungDeviceProblem: ''
                        })
                    }
                })
        }
    }

    onAppleHandheldSubmitClick() {
        const { appleHandheldDeviceName, appleHandheldDeviceProblem, email } = this.state

        if (appleHandheldDeviceProblem != "none" || appleHandheldDeviceName != "") {
            fetch('/api/account/cartpush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: appleHandheldDeviceName,
                    problem: appleHandheldDeviceProblem
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            appleHandheldDeviceName: '',
                            appleHandheldDeviceProblem: ''
                        })
                    }
                })
        }
    }



    render() {
        const { otherLaptopName, appleHandheldDeviceName, otherDeviceName, cartItems } = this.state;
        
        return (
            <div className="section light-bg" id="select_device">
                <div className="container">
                    <div className="section-title">
                        <h3>Select Device</h3>
                    </div>

                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#communication">Laptops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#schedule">Tablets</a>
                        </li>

                    </ul>
                    <div className="tab-content">
                        {/* <!-- phone section --> */}
                        <div className="tab-pane fade show active" id="communication">
                            <div className="d-flex flex-column flex-lg-row">
                                <div className="col-12 col-lg-3">
                                    <button className="card features" data-toggle="modal" data-target="#apple-macbook">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/apple_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Apple Macbook</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="apple-macbook">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Apple Macbook</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onAppleLaptopProblem}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging Port</option>
                                                            <option value="Hard-drive">Hard Drive</option>
                                                            <option value="RAM">RAM</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Keyboard">Keyboard</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onAppleLaptopSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <button className="card features" data-toggle="modal" data-target="#dell">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/dell_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Dell</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="dell">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Dell Laptop</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onDellLaptopProblemChange}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging Port</option>
                                                            <option value="Hard-drive">Hard Drive</option>
                                                            <option value="RAM">RAM</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Keyboard">Keyboard</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onDellLaptopSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <button className="card features" data-toggle="modal" data-target="#hp">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/hp_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">HP</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="hp">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">HP Laptop</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onHpLaptopProblemChange}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging Port</option>
                                                            <option value="Hard-drive">Hard Drive</option>
                                                            <option value="RAM">RAM</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Keyboard">Keyboard</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onHpLaptopSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <button className="card features" data-toggle="modal" data-target="#others">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/all_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Others</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="others">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Other Laptops</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Please specify below</p>
                                                        <input type="text" className="modal-input" value={otherLaptopName} onChange={this.onOtherLaptopNameChange} />

                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onOtherLaptopProblemChange   }>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging Port</option>
                                                            <option value="Hard-drive">Hard Drive</option>
                                                            <option value="RAM">RAM</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Keyboard">Keyboard</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onOtherLaptopSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- tablet section --> */}
                        <div className="tab-pane fade" id="schedule">
                            <div className="d-flex flex-column flex-lg-row">
                                <div className="col-12 col-lg-4">
                                    <button className="card features" data-toggle="modal" data-target="#apple-handhelds">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/apple_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Apple</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="apple-handhelds">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Apple Handheld Device</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Device Model:</p>
                                                        <select onChange={this.onAppleHandheldNameChange}>
                                                            <option value="none">None</option>
                                                            <option value="ipod">Ipod</option>
                                                            <option value="ipad">Ipad</option>
                                                        </select>

                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onAppleHandheldProblemChange}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging-port</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Camera">Camera</option>
                                                            <option value="Speakers">Speakers</option>
                                                            <option value="Earphone-Jack">Earphone-Jack</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onAppleHandheldSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <button className="card features" data-toggle="modal" data-target="#samsung-tabs">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/samsung_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Samsung Tabs</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="samsung-tabs">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Samsung Tablet</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onSamsungDeviceProblemChange}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging-port</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Camera">Camera</option>
                                                            <option value="Speakers">Speakers</option>
                                                            <option value="Earphone-Jack">Earphone-Jack</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onSamsungDeviceSubmitClick}>Submit</button>
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <button className="card features" data-toggle="modal" data-target="#otherDevice">
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <img className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" src={require('../../images/all_phone_logo.png')} alt="graphics" />
                                                    <h4 className="card-title">Others</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="modal" id="otherDevice">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Other Devices</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="modal-text">
                                                        <p>Please specify below</p>
                                                        <input type="text" className="modal-input" value={otherDeviceName} onChange={this.onOtherDeviceNameChange} />

                                                        <p>Device Problem:</p>
                                                        <select onChange={this.onOtherDeviceProblemChange}>
                                                            <option value="none">None</option>
                                                            <option value="Charging-port">Charging-port</option>
                                                            <option value="Screen">Screen</option>
                                                            <option value="Camera">Camera</option>
                                                            <option value="Speakers">Speakers</option>
                                                            <option value="Earphone-Jack">Earphone-Jack</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer text-center">
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onOtherDeviceSubmitClick}>Submit</button>
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
            </div>
        )
    }
}

export default DeviceList;