import React from 'react';
import './App.css';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Content from './components/mainPage/Content';
import Services from './components/mainPage/Services';
import Slider from './components/mainPage/Slider';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <Router>
        <Header />
        <Slider/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hakkimizda" exact component={Content}/>
          <Route path="/hizmetlerimiz"exact component={Services}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
