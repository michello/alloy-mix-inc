import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import BaseLayout from './BaseLayout';


import Home from './pages/Home';
import Projects from './pages/Projects';
import InvalidPage from './pages/InvalidPage';

const App = () => {
  return(
    <BaseLayout/>
  )
}

export default App;