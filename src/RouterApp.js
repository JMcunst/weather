import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation/index';
import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities';

const RouterApp = () => {
  const cityName = "Seoul";

  return (
    <div className="App">
      <Navigation />
      <Header cityName={cityName} />
    
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> 
      <Route path="/cities" component={Cities} />
      
    </div>
  );
};
export default RouterApp;