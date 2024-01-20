import React from 'react';
import './App.css';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from "./components/header/Header";
import About from './components/mainPage/About';
import Slider from './components/mainPage/Slider';
import ContactUs from './components/ContactUs';
import MServices from './components/services/MServices';
import MTemplate from './components/services/MTemplate';
import Header2 from './components/mainPage/Header2';

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
          <Route path="/hizmetlerimiz" exact component={MServices} />
          <Route path="/iletisim" exact component={ContactUs} />
          <Route path="/Blog" exact render={() => <Header2 customHeader="Bizden Görüntüler"/>}/>
          <Route path="/hizmetlerimiz/gida-silme" exact render={() => <MTemplate template="Gıda Silme"/>} />
          <Route path="/hizmetlerimiz/istah-kapama" exact render={() => <MTemplate template="İştah Kapama"/>} />
          <Route path="/hizmetlerimiz/sigara-birakma" exact render={() => <MTemplate template="Sigara bırakma"/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

