import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Files from './pages/Files';
import Subject from './pages/Subject';
import Footer from './components/Footer';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:sbj' component={Subject} />
        <Route exact path='/:sbj/:fl' component={Files} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
