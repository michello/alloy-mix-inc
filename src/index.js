import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './theme.css';
import './index.css';

import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import Projects from './pages/Projects';
import InvalidPage from './pages/InvalidPage';

import BathroomProject from './pages/projects/Bathroom';
import GateProject from './pages/projects/Gate';
import FlooringProject from './pages/projects/Flooring';
import KitchenProject from './pages/projects/Kitchen';
import LandscapingProject from './pages/projects/Landscaping';
import ShelvesClosets from './pages/projects/ShelvesClosets';

import { Route } from 'react-router-dom'
import BaseLayout from './BaseLayout';

const Routes = () => {
  return(
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />

      {/* project page routing */}
      <Route exact path="/projects/bathroom" component={BathroomProject} />
      <Route exact path="/projects/gate" component={GateProject} />
      <Route exact path="/projects/flooring" component={FlooringProject} />
      <Route exact path="/projects/kitchen" component={KitchenProject} />
      <Route exact path="/projects/landscaping" component={LandscapingProject} />
      <Route exact path="/projects/shelves-and-closets" component={ShelvesClosets} />
      

      {/* <Route path="*" component={InvalidPage} /> */}
    </>
  )
}

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL} href="/">
    <Routes/>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
