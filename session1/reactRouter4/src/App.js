import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ComponentsHome from './components/ComponentsHome';
import ComponentsNav from './components/ComponentsNav';
import NotFound from './components/NotFound';
import Introduction from './slides/Introduction';
import MentalModel from './slides/MentalModel';
import InitConfiguration from './slides/InitConfiguration';
import RouteComponent from './slides/RouteComponent';
import LinkComponent from './slides/LinkComponent';
import RedirectComponent from './slides/RedirectComponent';
import DecentralizedPattern from './slides/DecentralizedPattern';
import Authentication from './slides/Authentication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li><NavLink to="/Introduction" activeClass="active">Introduction</NavLink></li>
            <li><NavLink to="/MentalModel" activeClass="active">Mental model change</NavLink></li>
            <li><NavLink to="/InitConfiguration" activeClass="active">Init configuration (#step1-init-config)</NavLink></li>
            <li><NavLink to="/components/RouteComponent" activeClass="active">Route component (#step2-route-component)</NavLink></li>
            <li><NavLink to="/components/LinkComponent" activeClass="active">Link component (#step3-link-component)</NavLink></li>
            <li><NavLink to="/DecentralizedPattern" activeClass="active">Decentralized pattern (#step4-decentralized-pattern)</NavLink></li>
            <li><NavLink to="/components/RedirectComponent" activeClass="active">Redirect component (#step5-redirect-component)</NavLink></li>
            <li><NavLink to="/Authentication" activeClass="active">Authentication (#step6-authentication)</NavLink></li>
          </ul>
          <hr />
        </header>
        <p className="App-intro">
          <Route path="/Introduction" component={Introduction}  />
          <Route path="/MentalModel" component={MentalModel}  />
          <Route path="/InitConfiguration" component={InitConfiguration}  />
          <Route exact path="/components" component={ComponentsHome} />
          <Route path="/components/RouteComponent" component={RouteComponent}  />
          <Route path="/components/LinkComponent" component={LinkComponent}  />
          <Route path="/DecentralizedPattern" component={DecentralizedPattern}  />
          <Route path="/components/RedirectComponent" component={RedirectComponent}  />
          <Route path="/Authentication" component={Authentication}  />
        </p>
      </div>
    );
  }
}

export default App;