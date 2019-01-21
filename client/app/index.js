// This file is where all the route paths are defined

import React from 'react';
import { render } from 'react-dom';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Dashboard/Home';
import Devices from './components/Dashboard/Device'
import UpdateStage from './components/Dashboard/UpdateStage'

import './styles/bootstrap.min.css';
import './styles/owl.carousel.min.css';
import './styles/style.css';

render((
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/device" component={Devices} />
          <Route exact path="/update/:value" component={UpdateStage} />
          <Route component={NotFound}/>
        </Switch>
      </App>
    </Router>
), document.getElementById('app'));
