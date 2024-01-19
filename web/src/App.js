import React from 'react';
import './App.css';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from "./components/header/Header";
import About from './components/mainPage/About';
import Services from './components/mainPage/Services';
import Slider from './components/mainPage/Slider';
import ContactUs from './components/mainPage/ContactUs';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Slider />
            <Home />
          </Route>
          <Route path="/hakkimizda" exact component={About} />
          <Route path="/hizmetlerimiz" exact component={Services} />
          <Route path="/iletisim" exact component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

